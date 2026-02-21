# Buchwald & May Website

Produktions-Setup mit Next.js (App Router), Tailwind CSS, Bun und Lucide.

## Stack

- Next.js (App Router)
- React 19
- Tailwind CSS
- Bun als Package Manager
- Lucide Icons

## Start

```bash
bun install
bun run dev
```

## Build

```bash
bun run lint
bun run build
bun run start
```

## Quality Gates

- `bun run lint` mit Next Core Web Vitals Regeln
- CI Workflow in `.github/workflows/ci.yml` (Lint + Build)
- automatisierte Dependency-Updates via `.github/dependabot.yml`

## Audit-Notiz

- Aktuell sind 2 transitive Dev-Tooling Findings aus `bun audit` offen (`minimatch`, `ajv`) ueber die ESLint/Next-Lint-Chain.
- `eslint@10` ist in diesem Setup derzeit nicht lauffaehig (`scopeManager.addGlobals` Fehler), daher ist `eslint@9.39.3` bewusst gepinnt.

## SEO-Grundgeruest

- zentrale Metadata in `app/layout.jsx`
- strukturierte Daten (JSON-LD) in `app/page.jsx`
- `app/robots.js`
- `app/sitemap.js`

## Environment

Optional:

- `SITE_URL` (z.B. `https://mbws.vercel.app`, später `https://mbws.dev`)
- `CONTACT_ENDPOINT` fuer das serverseitige Kontakt-Forwarding
- `KV_REST_API_URL` und `KV_REST_API_TOKEN` fuer verteiltes Rate-Limiting des Kontaktformulars

Vorlage: `.env.example`
