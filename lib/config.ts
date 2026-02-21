type BrandSocial = {
  linkedin?: string
  github?: string
}

export type Brand = {
  name: string
  shortName: string
  email: string
  domain: string
  locations: string[]
  foundingYear: number
  social?: BrandSocial
}

export type TeamMember = {
  name: string
  role: string
  desc: string
  location: string
  linkedin?: string
  github?: string
}

export const BRAND: Brand = {
  name: 'May & Buchwald Web Solutions',
  shortName: 'MB',
  email: 'contact@mbws.dev',
  domain: 'mbws.dev',
  locations: ['Essen', 'Heilbronn'],
  foundingYear: 2026,
  social: {
    // Uncomment and fill in when profiles are live:
    // linkedin: 'https://linkedin.com/company/buchwald-may',
    github: 'https://github.com/bm-webdev',
  },
}

export const TEAM: TeamMember[] = [
  {
    name: 'Vincent May',
    role: 'Junior Developer',
    desc: 'Frontend-Entwickler aus Essen. Zuständig für Struktur, Styling und alles, was im Browser landet. Next.js und React sind sein tägliches Werkzeug.',
    location: 'Essen',
    linkedin: 'https://linkedin.com/in/vincent-may',
    github: 'https://github.com/vincentmay',
  },
  {
    name: 'Marvin Buchwald',
    role: 'Junior Cloud Engineer',
    desc: 'Cloud Engineer aus Heilbronn. Zuständig für Deployment, Hosting und alles, was die Seite stabil am Laufen hält.',
    location: 'Heilbronn',
    linkedin: 'https://www.linkedin.com/in/marvin-buchwald-32a411387/',
    github: 'https://github.com/kingbuchi',
  },
]
