import Link from 'next/link'
import { BRAND } from '../../lib/config'

export const metadata = {
  title: 'Datenschutz',
  description: `Datenschutzerklärung von ${BRAND.name}`,
}

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen px-6 md:px-10 py-24 text-ink">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Rechtliches</p>
        <h1 className="font-display text-4xl md:text-5xl mb-8">Datenschutzerklärung</h1>

        <div className="space-y-8 leading-relaxed text-ink/80">
          <section>
            <h2 className="text-xl font-semibold text-ink mb-2">1. Verantwortliche Stelle</h2>
            <p>{BRAND.name}</p>
            <p>E-Mail: <a className="text-primary hover:underline" href={`mailto:${BRAND.email}`}>{BRAND.email}</a></p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-2">2. Zugriffsdaten und Hosting</h2>
            <p>
              Beim Besuch der Website werden technisch notwendige Informationen verarbeitet (z. B. IP-Adresse,
              Datum/Uhrzeit, Browsertyp), um die Website sicher und stabil auszuliefern.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-2">3. Kontaktformular</h2>
            <p>
              Wenn Sie uns über das Formular kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung Ihrer Anfrage.
              Pflichtangaben sind als solche gekennzeichnet.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-2">4. Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
              Datenübertragbarkeit sowie Widerspruch im Rahmen der gesetzlichen Vorgaben.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-ink mb-2">Hinweis</h2>
            <p>
              Diese Datenschutzerklärung ist ein technischer Platzhalter und ersetzt keine Rechtsberatung. Vor dem
              Go-Live sollten die Inhalte rechtlich geprüft und finalisiert werden.
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
