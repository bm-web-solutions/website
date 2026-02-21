import { SITE_URL } from '../lib/site'

export default function robots() {
  const isPreview = process.env.VERCEL_ENV === 'preview'

  if (isPreview) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    }
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
