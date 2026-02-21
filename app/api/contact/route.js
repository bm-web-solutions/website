import { NextResponse } from 'next/server'
import { BRAND } from '../../../lib/config'

const CONTACT_ENDPOINT = process.env.CONTACT_ENDPOINT ?? `https://formsubmit.co/ajax/${BRAND.email}`
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5
const localRequestsByIp = new Map()
const RATE_LIMIT_REST_URL = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL
const RATE_LIMIT_REST_TOKEN = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN
const HAS_DISTRIBUTED_RATE_LIMIT = Boolean(RATE_LIMIT_REST_URL && RATE_LIMIT_REST_TOKEN)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
let hasLoggedRateLimitFallback = false

function normalizeText(value, maxLength) {
  if (typeof value !== 'string') {
    return ''
  }

  return value.trim().replace(/\s+/g, ' ').slice(0, maxLength)
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
  const results = data?.result
  if (!Array.isArray(results)) {
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

export async function POST(request) {
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

  const payload = {
    name,
    email,
    company,
    message,
    _subject: `Neue Projektanfrage von ${name}`,
    _template: 'table',
  }

  try {
    const response = await fetch(CONTACT_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
    })

    if (!response.ok) {
      return NextResponse.json({ message: 'Senden fehlgeschlagen. Bitte erneut versuchen.' }, { status: 502 })
    }

    return NextResponse.json(
      { ok: true, message: 'Danke! Ihre Anfrage wurde versendet. Wir melden uns zeitnah zurueck.' },
      { status: 200 },
    )
  } catch {
    return NextResponse.json(
      { message: `Senden fehlgeschlagen. Bitte erneut versuchen oder direkt an ${BRAND.email} schreiben.` },
      { status: 502 },
    )
  }
}
