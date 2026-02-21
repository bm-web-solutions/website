import './globals.css'
import { Instrument_Serif, Manrope } from 'next/font/google'
import { SITE_URL } from '../lib/site'

const manrope = Manrope({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-sans',
})

const instrumentSerif = Instrument_Serif({
  display: 'swap',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-display',
  weight: '400',
})

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Buchwald & May | Landingpages und Webentwicklung',
    template: '%s | Buchwald & May',
  },
  description:
    'Buchwald & May entwickelt klare Landingpages und Websites fuer Dienstleister, lokale Unternehmen und B2B-Angebote. Aktiv in Essen und Heilbronn.',
  keywords: [
    'Landingpage erstellen Essen',
    'Webentwicklung Heilbronn',
    'Next.js Agentur Essen',
    'Website fuer Dienstleister',
    'B2B Landingpage',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Buchwald & May | Landingpages und Webentwicklung',
    description:
      'Klare, performante Landingpages mit direktem Kontakt zum Umsetzungsteam. Standorte: Essen und Heilbronn.',
    url: SITE_URL,
    siteName: 'Buchwald & May',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buchwald & May | Landingpages und Webentwicklung',
    description: 'Landingpages mit klarem Fokus auf Angebot, Conversion und technische SEO-Basis.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={`${manrope.variable} ${instrumentSerif.variable} antialiased`}>{children}</body>
    </html>
  )
}
