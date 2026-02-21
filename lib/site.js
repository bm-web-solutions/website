const configuredSiteUrl = process.env.SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bm-webdev.de'

export const SITE_URL = configuredSiteUrl.replace(/\/$/, '')
