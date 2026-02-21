import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { BRAND } from '../lib/config'
import { SITE_URL } from '../lib/site'

const isPreview = process.env.VERCEL_ENV === 'preview'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND.name} | Landingpages & Webentwicklung`,
    template: `%s | ${BRAND.name}`,
  },
  description:
    `${BRAND.name} entwickelt klare Landingpages für Dienstleister, lokale Unternehmen und B2B-Angebote – klar in der Botschaft, sauber im Code, sinnvoll auf SEO vorbereitet. Aktiv in ${BRAND.locations.join(' und ')}.`,
  keywords: [
    'Landingpage erstellen Essen',
    'Landingpage erstellen Heilbronn',
    'Webentwicklung Essen',
    'Webentwicklung Heilbronn',
    'Next.js Agentur',
    'Website für Dienstleister',
    'B2B Landingpage',
    'Landingpage Agentur Deutschland',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${BRAND.name} | Landingpages & Webentwicklung`,
    description:
      `Klare, performante Landingpages mit direktem Kontakt zum Umsetzungsteam. Aktiv in ${BRAND.locations.join(' und ')}.`,
    url: SITE_URL,
    siteName: BRAND.name,
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: `${BRAND.name} – Landingpages und Webentwicklung aus ${BRAND.locations.join(' und ')}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND.name} | Landingpages & Webentwicklung`,
    description: 'Klare Landingpages für Dienstleister und B2B. Sauber im Code, sinnvoll auf SEO vorbereitet.',
    images: ['/api/og'],
  },
  robots: {
    index: !isPreview,
    follow: !isPreview,
    googleBot: {
      index: !isPreview,
      follow: !isPreview,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="de">
      <body className="antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-cream focus:px-4 focus:py-2 focus:rounded-md focus:text-ink">
          Zum Inhalt springen
        </a>
        {children}
      </body>
    </html>
  )
}
