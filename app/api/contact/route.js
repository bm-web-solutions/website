import { NextResponse } from 'next/server'
import { BRAND } from '../../../lib/config'
import { SITE_URL } from '../../../lib/site'

export const runtime = 'nodejs'

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5
const localRequestsByIp = new Map()
const RATE_LIMIT_REST_URL = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL
const RATE_LIMIT_REST_TOKEN = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN
const HAS_DISTRIBUTED_RATE_LIMIT = Boolean(RATE_LIMIT_REST_URL && RATE_LIMIT_REST_TOKEN)
const RESEND_API_URL = 'https://api.resend.com/emails'
const RESEND_API_KEY = (process.env.RESEND_API_KEY ?? '').trim()
const CONTACT_TO_EMAIL = (process.env.CONTACT_TO_EMAIL ?? BRAND.email).trim()
const CONTACT_FROM_EMAIL = (process.env.CONTACT_FROM_EMAIL ?? '').trim()
const HAS_CONTACT_MAIL_CONFIG = Boolean(RESEND_API_KEY && CONTACT_TO_EMAIL && CONTACT_FROM_EMAIL)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const FORM_URL = `${SITE_URL}/#kontakt`
let hasLoggedRateLimitFallback = false

function normalizeText(value, maxLength) {
  if (typeof value !== 'string') {
    return ''
  }

  return value.trim().replace(/\s+/g, ' ').slice(0, maxLength)
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function getClientIp(request) {
  const forwardedFor = request.headers.get('x-forwarded-for')
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim()
  }

  return request.headers.get('x-real-ip') ?? 'unknown'
}

function isRateLimitedLocal(ip) {
  const now = Date.now()

  for (const [key, value] of localRequestsByIp.entries()) {
    if (now - value.windowStart > RATE_LIMIT_WINDOW_MS) {
      localRequestsByIp.delete(key)
    }
  }

  const entry = localRequestsByIp.get(ip)
  if (!entry) {
    localRequestsByIp.set(ip, { count: 1, windowStart: now })
    return false
  }

  if (now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    localRequestsByIp.set(ip, { count: 1, windowStart: now })
    return false
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true
  }

  entry.count += 1
  return false
}

async function runRateLimitPipeline(commands) {
  const response = await fetch(`${RATE_LIMIT_REST_URL}/pipeline`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RATE_LIMIT_REST_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(commands),
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error(`Rate limit store request failed with status ${response.status}`)
  }

  const data = await response.json()
  const results = Array.isArray(data?.result) ? data.result : Array.isArray(data) ? data : null
  if (!results) {
    throw new Error('Rate limit store returned an unexpected response shape.')
  }

  return results.map((item) => item?.result)
}

async function isRateLimitedDistributed(ip) {
  const key = `rate_limit:contact:${ip}`
  const windowSeconds = Math.ceil(RATE_LIMIT_WINDOW_MS / 1000)

  const [count] = await runRateLimitPipeline([
    ['INCR', key],
    ['EXPIRE', key, windowSeconds, 'NX'],
  ])

  return Number(count) > RATE_LIMIT_MAX_REQUESTS
}

async function isRateLimited(ip) {
  if (!HAS_DISTRIBUTED_RATE_LIMIT) {
    if (process.env.VERCEL_ENV === 'production' && !hasLoggedRateLimitFallback) {
      console.warn(
        'Distributed rate limiting is not configured. Falling back to local in-memory mode for /api/contact.',
      )
      hasLoggedRateLimitFallback = true
    }
    return isRateLimitedLocal(ip)
  }

  try {
    return await isRateLimitedDistributed(ip)
  } catch (error) {
    console.error('Distributed rate limiting failed. Falling back to local mode.', error)
    return isRateLimitedLocal(ip)
  }
}

function buildMailPayload({ name, email, company, message }) {
  const normalizedCompany = company || 'Nicht angegeben'
  const escapedName = escapeHtml(name)
  const escapedEmail = escapeHtml(email)
  const escapedCompany = escapeHtml(normalizedCompany)
  const escapedMessage = escapeHtml(message).replaceAll('\n', '<br />')

  return {
    subject: `Neue Projektanfrage von ${name}`,
    replyTo: email,
    text: [
      'Neue Kontaktanfrage ueber die Website',
      '',
      `Name: ${name}`,
      `E-Mail: ${email}`,
      `Firma: ${normalizedCompany}`,
      '',
      'Nachricht:',
      message,
      '',
      `Quelle: ${FORM_URL}`,
    ].join('\n'),
    html: [
      '<h2>Neue Kontaktanfrage ueber die Website</h2>',
      '<p>',
      `<strong>Name:</strong> ${escapedName}<br />`,
      `<strong>E-Mail:</strong> ${escapedEmail}<br />`,
      `<strong>Firma:</strong> ${escapedCompany}`,
      '</p>',
      '<p><strong>Nachricht:</strong><br />',
      `${escapedMessage}</p>`,
      `<p><strong>Quelle:</strong> ${FORM_URL}</p>`,
    ].join(''),
  }
}

async function sendContactMail(mailPayload) {
  const response = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: CONTACT_FROM_EMAIL,
      to: [CONTACT_TO_EMAIL],
      reply_to: mailPayload.replyTo,
      subject: mailPayload.subject,
      text: mailPayload.text,
      html: mailPayload.html,
    }),
    cache: 'no-store',
  })

  if (!response.ok) {
    const errorBody = await response.text()
    console.error('Resend request failed:', {
      status: response.status,
      body: errorBody,
    })
    return false
  }

  const data = await response.json().catch(() => null)
  if (!data?.id) {
    console.error('Resend request succeeded but response did not contain an id:', { body: data })
    return false
  }

  return true
}

export async function POST(request) {
  if (!HAS_CONTACT_MAIL_CONFIG) {
    console.error('Missing contact mail configuration:', {
      hasResendApiKey: Boolean(RESEND_API_KEY),
      hasContactToEmail: Boolean(CONTACT_TO_EMAIL),
      hasContactFromEmail: Boolean(CONTACT_FROM_EMAIL),
    })
    return NextResponse.json({ message: 'Kontaktformular ist serverseitig nicht vollstaendig konfiguriert.' }, { status: 500 })
  }

  let body

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ message: 'Ungueltige Anfrage.' }, { status: 400 })
  }

  const honeypot = normalizeText(body._honey, 120)
  if (honeypot) {
    return NextResponse.json({ ok: true, message: 'Danke! Ihre Anfrage wurde versendet.' }, { status: 200 })
  }

  const clientIp = getClientIp(request)
  if (await isRateLimited(clientIp)) {
    return NextResponse.json({ message: 'Zu viele Anfragen. Bitte spaeter erneut versuchen.' }, { status: 429 })
  }

  const name = normalizeText(body.name, 120)
  const email = normalizeText(body.email, 160).toLowerCase()
  const company = normalizeText(body.company, 120)
  const message = normalizeText(body.message, 3000)

  if (!name || !email || !message) {
    return NextResponse.json({ message: 'Bitte Name, E-Mail und Nachricht ausfuellen.' }, { status: 400 })
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ message: 'Bitte eine gueltige E-Mail-Adresse angeben.' }, { status: 400 })
  }

  try {
    const mailPayload = buildMailPayload({
      name,
      email,
      company,
      message,
    })
    const sent = await sendContactMail(mailPayload)

    if (!sent) {
      return NextResponse.json({ message: 'Senden fehlgeschlagen. Bitte erneut versuchen.' }, { status: 502 })
    }

    return NextResponse.json(
      { ok: true, message: 'Danke! Ihre Anfrage wurde versendet. Wir melden uns zeitnah zurueck.' },
      { status: 200 },
    )
  } catch (error) {
    console.error('Contact mail send failed:', { error })
    return NextResponse.json(
      { message: `Senden fehlgeschlagen. Bitte erneut versuchen oder direkt an ${BRAND.email} schreiben.` },
      { status: 502 },
    )
  }
}
