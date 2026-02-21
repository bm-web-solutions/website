import LandingPage from '../components/LandingPage'
import { SITE_URL } from '../lib/site'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Buchwald & May',
  url: SITE_URL,
  email: 'hello@bm-web.de',
  areaServed: ['Essen', 'Heilbronn'],
  serviceType: ['Landingpage Entwicklung', 'Webentwicklung', 'Technische SEO-Basis'],
  knowsAbout: ['Next.js', 'Tailwind CSS', 'Bun', 'Cloud Engineering', 'Web Development'],
  foundingLocation: {
    '@type': 'Country',
    name: 'Deutschland',
  },
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LandingPage />
    </>
  )
}
