import Link from 'next/link'
import type { Metadata } from 'next'
import { BRAND } from '../../lib/config'

export const metadata: Metadata = {
  title: 'Impressum',
  description: `Impressum von ${BRAND.name}`,
  alternates: {
    canonical: '/impressum',
  },
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen px-6 md:px-10 py-24 text-ink">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Rechtliches</p>
        <h1 className="font-display text-4xl md:text-5xl mb-8">Impressum</h1>

        <div className="space-y-8 leading-relaxed text-ink/80">
          <section>
            <h2 className="text-xl font-semibold text-ink mb-2">Angaben gemäß § 5 TMG</h2>
            <p>{BRAND.name}</p>
            <p>Inhaber: Vincent May, Marvin Buchwald</p>
            <p>Adresse: Bitte vollständige Geschäftsadresse ergänzen</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-2">Kontakt</h2>
            <p>
              E-Mail: <a className="text-primary hover:underline" href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-2">Verantwortlich für den Inhalt</h2>
            <p>Vincent May und Marvin Buchwald</p>
            <p>Anschrift wie oben</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-2">Hinweis</h2>
            <p>
              Dieses Impressum enthält Platzhalter. Vor dem Go-Live müssen vollständige, rechtssichere Angaben
              ergänzt werden.
            </p>
          </section>
        </div>

        <p className="mt-10 text-sm">
          <Link href="/" className="text-primary hover:underline">
            Zurück zur Startseite
          </Link>
        </p>
      </div>
    </main>
  )
}
