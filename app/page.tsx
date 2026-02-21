import type { Metadata } from 'next'
import { BRAND } from '../lib/config'
import LandingPage from '../components/LandingPage'
import { SITE_URL } from '../lib/site'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: BRAND.name,
  url: SITE_URL,
  email: BRAND.email,
  description:
    'Wir entwickeln fokussierte Landingpages für Dienstleister, lokale Unternehmen und B2B-Angebote – klar in der Botschaft, sauber im Code, sinnvoll auf SEO vorbereitet.',
  inLanguage: 'de',
  areaServed: [
    {
      '@type': 'City',
      name: 'Essen',
      containedInPlace: { '@type': 'State', name: 'Nordrhein-Westfalen' },
    },
    {
      '@type': 'City',
      name: 'Heilbronn',
      containedInPlace: { '@type': 'State', name: 'Baden-Württemberg' },
    },
  ],
  serviceType: [
    'Landingpage Entwicklung',
    'Webentwicklung',
    'Next.js Entwicklung',
    'Technische SEO-Basis',
    'Mobile-First Webdesign',
  ],
  knowsAbout: ['Next.js', 'Tailwind CSS', 'Bun', 'Cloud Engineering', 'Web Development', 'SEO', 'React'],
  priceRange: '€€',
  foundingLocation: {
    '@type': 'Country',
    name: 'Deutschland',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: `Was kostet eine Landingpage bei ${BRAND.name}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unser Preis hängt vom Umfang ab: Anzahl der Bereiche, Funktionalität und Zeitrahmen spielen eine Rolle. Im Erstgespräch klären wir, was Ihr Projekt braucht, und nennen Ihnen ein konkretes Angebot – transparent und ohne Überraschungen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie lange dauert die Entwicklung einer Landingpage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eine fokussierte Landingpage entwickeln wir typischerweise in 2–4 Wochen – von Briefing bis Launch. Der größte Zeitfaktor ist die Abstimmung von Inhalten und Feedback. Wenn Texte und Ziele klar sind, geht es deutlich schneller.',
      },
    },
    {
      '@type': 'Question',
      name: 'Für wen ist eine Landingpage sinnvoll?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Für Dienstleister, Freelancer, lokale Unternehmen und B2B-Anbieter, die ein konkretes Angebot sauber online positionieren wollen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was unterscheidet eine Landingpage von einer normalen Website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eine Landingpage hat ein einziges Ziel: Besucher dazu zu bringen, eine konkrete Aktion durchzuführen. Sie ist schlanker, klarer und auf Conversion ausgerichtet.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kümmert ihr euch auch um Hosting und Wartung nach dem Launch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja – wir begleiten Sie in den ersten Wochen nach dem Launch und helfen bei der Einrichtung des Hostings. Für laufende Wartung und Anpassungen sprechen wir gerne eine individuelle Vereinbarung durch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Arbeitet ihr auch mit Kunden außerhalb von Essen und Heilbronn?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, deutschlandweit und remote. Unsere Schwerpunkte liegen in Essen und Heilbronn, aber ein Webprojekt lässt sich problemlos über Videokonferenz und gemeinsame Tools abstimmen.',
      },
    },
  ],
}

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

function serializeJsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd) }} />
      <main id="main-content">
        <LandingPage />
      </main>
    </>
  )
}
