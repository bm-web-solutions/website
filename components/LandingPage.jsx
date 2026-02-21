import Image from 'next/image'
import {
  ArrowRight,
  BarChart3,
  Cloud,
  Mail,
  MapPin,
  Palette,
  Sparkles,
  Target,
  Users,
  Zap,
} from 'lucide-react'
import ContactForm from './ContactForm'

const processSteps = [
  {
    icon: Sparkles,
    title: 'Analyse',
    desc: 'Im Erstgespraech klaeren wir Angebot, Zielgruppe und den konkreten Zweck der Seite.',
  },
  {
    icon: Palette,
    title: 'Konzept',
    desc: 'Wir strukturieren Inhalte, CTAs und Botschaften so, dass Besucher schnell verstehen, worum es geht.',
  },
  {
    icon: Zap,
    title: 'Umsetzung',
    desc: 'Technische Umsetzung mit Next.js, mobile-first und sauberer Performance-Basis.',
  },
  {
    icon: BarChart3,
    title: 'Launch',
    desc: 'Nach Livegang begleiten wir die ersten Wochen, messen Signale und optimieren gezielt weiter.',
  },
]

const credibilityCards = [
  {
    value: '2',
    label: 'Aktive Standorte',
    desc: 'Essen und Heilbronn mit direktem Draht statt anonymer Agenturstruktur.',
    icon: MapPin,
  },
  {
    value: '2',
    label: 'Fachschwerpunkte',
    desc: 'Web-Development und Cloud Engineering in einem kleinen Umsetzungsteam.',
    icon: Cloud,
  },
  {
    value: '1',
    label: 'Klarer Fokus',
    desc: 'Landingpages fuer konkrete Angebote statt ueberladener Allround-Websites.',
    icon: Target,
  },
  {
    value: '100%',
    label: 'Direkter Kontakt',
    desc: 'Sie sprechen durchgehend mit den Leuten, die Strategie und Code umsetzen.',
    icon: Users,
  },
]

const approachCards = [
  {
    title: 'Next.js als Fundament',
    desc: 'Technische SEO-Basis mit klarer Seitenstruktur, schnellen Ladezeiten und gutem Rendering.',
  },
  {
    title: 'Tailwind fuer saubere UI',
    desc: 'Konsistentes Designsystem ohne CSS-Overhead. Schnell anpassbar und wartbar.',
  },
  {
    title: 'shadcn/ui nur wenn sinnvoll',
    desc: 'Gezielter Einsatz fuer Formulare und UI-Muster, wenn es wirklich Mehrwert bringt.',
  },
  {
    title: 'Bun Workflow',
    desc: 'Schnelle Builds, reproduzierbare Ablaeufe und ein klarer Entwicklungsprozess.',
  },
]

const teamMembers = [
  {
    name: 'Marvin Buchwald',
    role: 'Junior Cloud Engineer',
    desc: 'Fokus auf Cloud Engineering, Deployments und stabile technische Grundlagen.',
    location: 'Heilbronn',
    img: '/img/marvin.svg',
    priority: true,
  },
  {
    name: 'Vincent May',
    role: 'Junior Developer',
    desc: 'Im Job tief im JSF-Oekosystem, privat mit starkem Fokus auf modernes JavaScript und Next.js.',
    location: 'Essen',
    img: '/img/vincent.svg',
    priority: false,
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen text-[#2D2A26] overflow-x-hidden">
      <div className="fixed inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8F0] via-[#FEF0E4] to-[#F5E6D3]" />
        <div className="absolute rounded-full opacity-20 blur-3xl w-[600px] h-[600px] bg-[#E8B88A] top-[-10%] right-[-5%]" />
        <div className="absolute rounded-full opacity-20 blur-3xl w-[500px] h-[500px] bg-[#D4A574] bottom-[10%] left-[-10%]" />
        <div className="absolute rounded-full opacity-20 blur-3xl w-[400px] h-[400px] bg-[#C4956A] top-[40%] right-[20%]" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md bg-[#FFF8F0]/80 shadow-[0_1px_0_0_rgba(45,42,38,0.06)]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4956A] to-[#C17E4F] flex items-center justify-center text-white text-xs font-bold">
              BM
            </div>
            <span className="text-sm font-medium">Buchwald &amp; May</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'Prozess', id: 'prozess' },
              { label: 'Ansatz', id: 'ansatz' },
              { label: 'Team', id: 'team' },
              { label: 'Kontakt', id: 'kontakt' },
            ].map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-xs tracking-[0.15em] uppercase text-[#2D2A26]/40 hover:text-[#C17E4F] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#kontakt"
            className="px-5 py-2 bg-[#2D2A26] text-[#FFF8F0] rounded-full text-xs tracking-wider hover:scale-105 transition-transform"
          >
            Projekt starten
          </a>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center px-6 md:px-10 pt-24 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D2A26]/5 rounded-full text-xs tracking-wider uppercase mb-10">
            <span className="w-2 h-2 rounded-full bg-[#C17E4F]" />
            Essen &amp; Heilbronn
          </div>

          <h1 className="font-display text-[clamp(2.8rem,7vw,6.5rem)] leading-[1.05] mb-8">
            Landingpages,
            <br />
            <span className="bg-gradient-to-r from-[#C17E4F] via-[#D4956A] to-[#E8A87C] bg-clip-text text-transparent">
              die Vertrauen schaffen
            </span>
          </h1>

          <p className="text-lg md:text-xl text-[#2D2A26]/50 max-w-2xl mx-auto leading-relaxed mb-12">
            Wir entwickeln fokussierte Websites fuer Dienstleister, lokale Unternehmen und B2B-Angebote.
            Klar in der Botschaft, sauber in der Technik und sinnvoll auf SEO vorbereitet.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#kontakt"
              className="group inline-flex items-center justify-center gap-3 bg-[#2D2A26] text-[#FFF8F0] px-8 py-4 rounded-2xl text-sm font-medium hover:shadow-2xl hover:shadow-[#C17E4F]/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              Projekt anfragen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#prozess"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-medium border border-[#2D2A26]/10 text-[#2D2A26]/60 hover:border-[#2D2A26]/30 hover:text-[#2D2A26] transition-all"
            >
              Unser Prozess
            </a>
          </div>
        </div>
      </section>

      <section className="py-28 px-6 md:px-10 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C17E4F] mb-4">Vertrauen in Zahlen</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-5">
              Klar, direkt,
              <br />
              nachvollziehbar
            </h2>
            <p className="text-[#2D2A26]/45 max-w-2xl mx-auto leading-relaxed">
              Kein KPI-Theater: Das sind Fakten, mit denen wir arbeiten und die unsere Zusammenarbeit praegen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {credibilityCards.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="relative overflow-hidden rounded-3xl border border-[#2D2A26]/8 bg-white/55 backdrop-blur-sm p-7 md:p-8 hover:bg-white/70 transition-all duration-500"
                >
                  <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-[#D4956A]/15 blur-2xl" />
                  <div className="relative flex items-start justify-between gap-6">
                    <div>
                      <p className="font-display text-5xl md:text-6xl text-[#C17E4F] leading-none mb-4">{item.value}</p>
                      <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
                      <p className="text-sm text-[#2D2A26]/55 leading-relaxed max-w-md">{item.desc}</p>
                    </div>
                    <div className="shrink-0 w-11 h-11 rounded-xl bg-[#2D2A26]/5 border border-[#2D2A26]/10 text-[#C17E4F] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="prozess" className="py-28 px-6 md:px-10 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C17E4F] mb-4">Unser Prozess</p>
            <h2 className="font-display text-4xl md:text-6xl">
              Vom Briefing
              <br />
              zum Launch
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#C17E4F]/30 via-[#D4956A]/20 to-transparent" />

            <div className="flex flex-col gap-2">
              {processSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={step.title} className="group flex items-start gap-6 md:gap-10 relative">
                    <div className="relative z-10 shrink-0 flex flex-col items-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#FFF8F0] border-2 border-[#C17E4F]/20 flex items-center justify-center text-[#C17E4F] group-hover:bg-[#C17E4F] group-hover:text-white group-hover:border-[#C17E4F] transition-all duration-500">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="flex-1 pb-14">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-display text-4xl md:text-5xl text-[#C17E4F]/15 group-hover:text-[#C17E4F]/30 transition-colors duration-500">
                          0{index + 1}
                        </span>
                        <h3 className="text-xl md:text-2xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-[#2D2A26]/45 leading-relaxed max-w-lg">{step.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="ansatz" className="py-24 px-6 md:px-10 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C17E4F] mb-4">Technischer Ansatz</p>
            <h2 className="font-display text-4xl md:text-5xl mb-5">
              Stack mit Zweck,
              <br />
              nicht als Buzzword-Liste
            </h2>
            <p className="text-[#2D2A26]/40 max-w-2xl mx-auto mb-14">
              Wir setzen Next.js, Tailwind, Bun und Lucide so ein, dass Performance, Wartbarkeit und SEO-Basis
              spuerbar besser werden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {approachCards.map((card) => (
              <article
                key={card.title}
                className="group bg-white/40 backdrop-blur-sm border border-[#2D2A26]/6 rounded-2xl p-6 md:p-7 hover:bg-white/65 hover:shadow-lg hover:shadow-[#C17E4F]/5 transition-all duration-500"
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#C17E4F] transition-colors">{card.title}</h3>
                <p className="text-sm text-[#2D2A26]/45 leading-relaxed">{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-28 px-6 md:px-10 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C17E4F] mb-4">Das Team</p>
            <h2 className="font-display text-4xl md:text-5xl">Persoenlich. Direkt. Verlaesslich.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {teamMembers.map((person) => (
              <div
                key={person.name}
                className="group bg-white/40 backdrop-blur-sm border border-[#2D2A26]/5 rounded-3xl overflow-hidden hover:bg-white/60 hover:shadow-xl transition-all duration-500"
              >
                <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-[#E8B88A]/20 via-[#D4956A]/15 to-[#C17E4F]/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-[8rem] md:text-[10rem] text-[#C17E4F]/[0.08] select-none leading-none">
                      {person.name
                        .split(' ')
                        .map((namePart) => namePart[0])
                        .join('')}
                    </span>
                  </div>
                  <Image
                    src={person.img}
                    alt={person.name}
                    fill
                    priority={person.priority}
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent" />
                </div>

                <div className="p-8">
                  <h3 className="font-display text-2xl md:text-3xl mb-1">{person.name}</h3>
                  <p className="text-[#C17E4F] text-sm mb-2">{person.role}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#2D2A26]/30 mb-3">{person.location}</p>
                  <p className="text-[#2D2A26]/40 leading-relaxed">{person.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="py-32 px-6 md:px-10 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#2D2A26] to-[#3D3A36] rounded-[2rem] p-10 md:p-16 lg:p-20 text-[#FFF8F0] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C17E4F] rounded-full opacity-10 blur-[100px] -translate-y-1/3 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#D4956A] rounded-full opacity-[0.06] blur-[80px] translate-y-1/3 -translate-x-1/4" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-[#C17E4F] mb-6">Kontakt</p>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                  Lassen Sie uns
                  <br />
                  Ihr Angebot
                  <br />
                  sauber online bringen.
                </h2>
                <p className="text-[#FFF8F0]/40 leading-relaxed mb-8">
                  Wenn Sie in Essen, Heilbronn oder remote ein klares Webprojekt planen: Schreiben Sie uns kurz Ziel,
                  Angebot und Zeitrahmen.
                </p>
                <div className="flex items-center gap-3 text-[#FFF8F0]/25 text-sm">
                  <Mail className="w-4 h-4" />
                  <span>hello@bm-web.de</span>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 px-6 md:px-10 border-t border-[#2D2A26]/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#2D2A26]/25">
          <span>&copy; 2026 Buchwald &amp; May</span>
          <span>Mit Sorgfalt gebaut in Deutschland</span>
        </div>
      </footer>
    </div>
  )
}