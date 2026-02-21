import { ArrowRight, BarChart3, Github, Layers, Linkedin, Mail, MapPin, Palette, Sparkles, Target, Users, Zap } from 'lucide-react'
import Link from 'next/link'
import { BRAND, TEAM } from '../lib/config'
import ContactForm from './ContactForm'
import FAQSection from './FAQSection'
import Header from './Header'
import ScrollIndicator from './ScrollIndicator'

const processSteps = [
  {
    icon: Sparkles,
    title: 'Analyse',
    desc: 'Wir klären gemeinsam: Was bieten Sie an, für wen – und was soll die Seite konkret auslösen? Das Gespräch kostet nichts, das Ergebnis ist klarer Fokus.',
  },
  {
    icon: Palette,
    title: 'Konzept',
    desc: 'Wir strukturieren Inhalte, Botschaften und Calls-to-Action so, dass Besucher in den ersten Sekunden verstehen, ob das Angebot für sie ist.',
  },
  {
    icon: Zap,
    title: 'Umsetzung',
    desc: 'Entwicklung mit Next.js und Tailwind. Mobile-First, schnell geladen und so aufgebaut, dass spätere Änderungen kein Rätsel sind.',
  },
  {
    icon: BarChart3,
    title: 'Launch',
    desc: 'Nach dem Launch begleiten wir die ersten Wochen: kleinere Anpassungen, technische Fragen, erste Signale auswerten – wir sind noch da.',
  },
]

const differentiators = [
  {
    icon: Users,
    headline: 'Sie sprechen direkt mit Vincent und Marvin.',
    desc: 'Kein Account-Manager, kein Briefing-Telefon. Was Sie uns schreiben, bauen wir – ohne Stille-Post durch interne Prozesse.',
  },
  {
    icon: Target,
    headline: 'Landingpages. Nichts sonst.',
    desc: 'Keine Unternehmenswebsites, keine App-Entwicklung, keine SEO-Kampagnen. Weil Fokus bedeutet, eine Sache wirklich gut zu machen.',
  },
  {
    icon: Layers,
    headline: 'Eingebaut, nicht nachgeklebt.',
    desc: 'Performance, Semantik und Mobile-First kommen von Anfang an rein – nicht als letzter Fix, wenn alles andere schon steht.',
  },
  {
    icon: MapPin,
    headline: `${BRAND.locations.join(' und ')}.`,
    desc: 'Zwei echte Standorte, kein anonymes Ticketsystem. Anfragen beantworten wir persönlich – in der Regel innerhalb eines Werktags.',
  },
]

const approachCards = [
  {
    title: 'Messbare Performance',
    desc: 'Next.js rendert serverseitig, Assets werden optimiert, Bilder lazy-geladen. Core Web Vitals als Ausgangspunkt, nicht als Nachgedanke – weil schlechte Ladezeiten auch schlechtes Ranking bedeuten.',
  },
  {
    title: 'SEO-technisches Fundament',
    desc: 'Korrekte HTML-Semantik, Metadaten, strukturierte Daten (JSON-LD) und Canonical-Tags – von Anfang an eingebaut, nicht per Plugin nachgerüstet.',
  },
  {
    title: 'Mobile-First Entwicklung',
    desc: 'Über 60 % der Suchanfragen kommen vom Smartphone. Wir denken responsive von der ersten Zeile Code – nicht als Anpassung im Nachhinein.',
  },
  {
    title: 'Sauberer, wartbarer Code',
    desc: 'Tailwind, klare Komponenten-Struktur und kein unnötiger Overhead. Nichts, was in sechs Monaten zum Rätsel wird – auch für jemand anderen.',
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen text-ink overflow-x-hidden">
      {/* Background — decorative blob colors are intentionally subtle variations, kept inline */}
      <div className="fixed inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-cream-mid to-cream-deep" />
        <div className="absolute rounded-full opacity-[0.18] blur-3xl w-[650px] h-[650px] bg-[#E8B88A] top-[-12%] right-[-6%]" />
        <div className="absolute rounded-full opacity-[0.15] blur-3xl w-[520px] h-[520px] bg-[#D4A574] bottom-[8%] left-[-12%]" />
        <div className="absolute rounded-full opacity-[0.12] blur-3xl w-[420px] h-[420px] bg-[#C4956A] top-[42%] right-[18%]" />
      </div>

      <Header />

      {/* ─── Hero ──────────────────────────────────────────────────────────── */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-10 pt-24 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div
            style={{ animationDelay: '0.05s' }}
            className="animate-fade-up inline-flex items-center gap-2.5 px-4 py-2 bg-ink/6 rounded-full text-xs tracking-wider uppercase mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
            Webentwicklung · {BRAND.locations.join(' & ')}
          </div>

          <h1
            style={{ animationDelay: '0.18s' }}
            className="animate-fade-up font-display text-[clamp(2.8rem,7vw,6.5rem)] leading-[1.05] mb-8"
          >
            Landingpages,
            <br />
            <em className="not-italic bg-gradient-to-r from-primary via-primary-light to-primary-lighter bg-clip-text text-transparent">
              die überzeugen.
            </em>
          </h1>

          <p
            style={{ animationDelay: '0.32s' }}
            className="animate-fade-up text-lg md:text-xl text-ink/65 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Landingpages für Dienstleister und B2B in Essen und Heilbronn, entwickelt mit Next.js und Tailwind.
            Schnell geladen und für lokale wie überregionale Google-Sichtbarkeit optimiert.
          </p>

          <div
            style={{ animationDelay: '0.48s' }}
            className="animate-fade-up flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#kontakt"
              className="group inline-flex items-center justify-center gap-3 bg-ink text-cream px-8 py-4 rounded-2xl text-sm font-medium hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-0.5 transition-[translate,box-shadow] duration-300"
            >
              Projekt anfragen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <a
              href="#prozess"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-medium border border-ink/15 text-ink/70 hover:border-ink/35 hover:text-ink transition-colors"
            >
              Unser Prozess
            </a>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* ─── Differentiators ───────────────────────────────────────────────── */}
      <section id="unterschied" className="py-16 md:py-28 px-6 md:px-10 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Warum wir?</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Was uns
              <br />
              ausmacht.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {differentiators.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.headline}
                  className="group bg-white/50 backdrop-blur-sm border border-ink/8 rounded-2xl p-7 md:p-8 hover:bg-white/75 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 transition-[background-color,box-shadow,translate] duration-500"
                >
                  <Icon
                    className="w-6 h-6 text-primary mb-5 group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-semibold mb-2.5 leading-snug">{item.headline}</h3>
                  <p className="text-sm text-ink/65 leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Process ───────────────────────────────────────────────────────── */}
      <section id="prozess" className="py-16 md:py-28 px-6 md:px-10 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Unser Prozess</p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight">
              Vom Briefing
              <br />
              zum Launch.
            </h2>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute left-[19px] md:left-[23px] top-3 bottom-16 w-[1px] bg-gradient-to-b from-primary/35 via-primary-light/20 to-transparent"
            />
            <div className="flex flex-col gap-2">
              {processSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={step.title} className="group flex items-start gap-6 md:gap-10 relative">
                    <div className="relative z-10 shrink-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-cream border-2 border-primary/25 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors duration-500">
                        <Icon className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
                      </div>
                    </div>

                    <div className="flex-1 pb-8 md:pb-14">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span
                          aria-hidden="true"
                          className="font-display text-4xl md:text-5xl text-primary/14 group-hover:text-primary/30 transition-colors duration-500 leading-none select-none"
                        >
                          0{index + 1}
                        </span>
                        <h3 className="text-xl md:text-2xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-ink/65 leading-relaxed max-w-lg">{step.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Technical Approach ────────────────────────────────────────────── */}
      <section id="ansatz" className="py-16 md:py-24 px-6 md:px-10 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Technischer Ansatz</p>
            <h2 className="font-display text-4xl md:text-5xl mb-5">
              Sauber entwickelt.
              <br />
              Von Anfang an.
            </h2>
            <p className="text-ink/65 max-w-2xl mx-auto">
              Jede technische Entscheidung hat einen konkreten Grund: Performance, Wartbarkeit, SEO.
              Kein Overhead, kein Selbstzweck.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {approachCards.map((card, index) => (
              <article
                key={card.title}
                className="group relative bg-white/40 backdrop-blur-sm border border-ink/8 rounded-2xl p-7 md:p-8 hover:bg-white/65 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-0.5 transition-[background-color,box-shadow,translate] duration-500 overflow-hidden"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-5 right-6 font-display text-6xl text-ink/5 leading-none select-none group-hover:text-primary/8 transition-colors duration-500"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-semibold mb-2.5 group-hover:text-primary transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-sm text-ink/65 leading-relaxed">{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Team ──────────────────────────────────────────────────────────── */}
      <section id="team" className="py-16 md:py-28 px-6 md:px-10 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Das Team</p>
            <h2 className="font-display text-4xl md:text-5xl">Zwei Entwickler. Kein Overhead.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {TEAM.map((person) => {
              const initials = person.name
                .split(' ')
                .map((n) => n[0])
                .join('')
              return (
                <div
                  key={person.name}
                  className="group bg-white/40 backdrop-blur-sm border border-ink/8 rounded-3xl p-8 hover:bg-white/60 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-[background-color,box-shadow,translate] duration-500"
                >
                  <div className="flex items-start justify-between mb-7">
                    <div
                      aria-hidden="true"
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-light to-primary flex items-center justify-center text-white font-bold text-xl select-none shrink-0"
                    >
                      {initials}
                    </div>
                    <div className="flex items-center gap-2">
                      {person.linkedin && (
                        <a
                          href={person.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${person.name} auf LinkedIn`}
                          className="w-9 h-9 rounded-xl border border-ink/12 flex items-center justify-center text-ink/45 hover:text-primary hover:border-primary/30 transition-colors duration-300"
                        >
                          <Linkedin className="w-4 h-4" aria-hidden="true" />
                        </a>
                      )}
                      {person.github && (
                        <a
                          href={person.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${person.name} auf GitHub`}
                          className="w-9 h-9 rounded-xl border border-ink/12 flex items-center justify-center text-ink/45 hover:text-primary hover:border-primary/30 transition-colors duration-300"
                        >
                          <Github className="w-4 h-4" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl mb-1">{person.name}</h3>
                  <p className="text-primary text-sm font-medium mb-1">{person.role}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-ink/45 mb-5">{person.location}</p>
                  <p className="text-ink/65 leading-relaxed text-sm">{person.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────────────────────── */}
      <FAQSection />

      {/* ─── Contact + Footer ──────────────────────────────────────────────── */}
      <section id="kontakt" className="md:min-h-screen flex flex-col px-4 md:px-10 scroll-mt-24">
        <div className="flex-1 flex items-center py-10 md:pt-[8.5rem] md:pb-16">
          <div className="max-w-6xl mx-auto w-full">
            <div className="bg-gradient-to-br from-ink via-ink-mid to-ink-deep rounded-[2rem] p-6 sm:p-10 md:p-16 lg:p-20 text-cream relative overflow-hidden">
              <div aria-hidden="true" className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full opacity-[0.09] blur-[100px] -translate-y-1/3 translate-x-1/4" />
              <div aria-hidden="true" className="absolute bottom-0 left-0 w-72 h-72 bg-primary-light rounded-full opacity-[0.05] blur-[80px] translate-y-1/3 -translate-x-1/4" />

              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-primary mb-6">Kontakt</p>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                    Erzählen Sie uns
                    <br />
                    von Ihrem
                    <br />
                    Projekt.
                  </h2>
                  <p className="text-cream/65 leading-relaxed mb-8 max-w-sm">
                    Was bieten Sie an, für wen ist es – und was soll die Seite konkret auslösen?
                    Das reicht für den Start.
                  </p>
                  <address className="not-italic flex items-center gap-3 text-cream/50 text-sm">
                    <Mail className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <a href={`mailto:${BRAND.email}`} className="hover:text-primary transition-colors">
                      {BRAND.email}
                    </a>
                  </address>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>

        <footer className="py-8 border-t border-ink/8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-ink/45">
            <span>
              &copy; {BRAND.foundingYear}–{new Date().getFullYear()} {BRAND.name} – Webentwicklung aus{' '}
              {BRAND.locations.join(' & ')}
            </span>
            <div className="flex items-center gap-5">
              {BRAND.social?.linkedin && (
                <a
                  href={BRAND.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${BRAND.name} auf LinkedIn`}
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
                </a>
              )}
              {BRAND.social?.github && (
                <a
                  href={BRAND.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${BRAND.name} auf GitHub`}
                  className="hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                </a>
              )}
              <Link href="/impressum" className="hover:text-primary transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-primary transition-colors">
                Datenschutz
              </Link>
              <span>Mit Sorgfalt gebaut in Deutschland</span>
            </div>
          </div>
        </footer>
      </section>
    </div>
  )
}
