import { NextResponse } from 'next/server'

const CONTACT_ENDPOINT =
  process.env.CONTACT_ENDPOINT ??
  process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ??
  'https://formsubmit.co/ajax/hello@bm-web.de'
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5
const requestsByIp = new Map()
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

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

function isRateLimited(ip) {
  const now = Date.now()

  for (const [key, value] of requestsByIp.entries()) {
    if (now - value.windowStart > RATE_LIMIT_WINDOW_MS) {
      requestsByIp.delete(key)
    }
  }

  const entry = requestsByIp.get(ip)
  if (!entry) {
    requestsByIp.set(ip, { count: 1, windowStart: now })
    return false
  }

  if (now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    requestsByIp.set(ip, { count: 1, windowStart: now })
    return false
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true
  }

  entry.count += 1
  return false
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
  if (isRateLimited(clientIp)) {
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
      { message: 'Senden fehlgeschlagen. Bitte erneut versuchen oder direkt an hello@bm-web.de schreiben.' },
      { status: 502 },
    )
  }
}
