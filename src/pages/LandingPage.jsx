import { useState, useEffect } from 'react'
import { ArrowRight, Sparkles, Zap, BarChart3, Palette, Mail, Send } from 'lucide-react'

const process_steps = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: 'Beratung',
    desc: 'Wir lernen Ihr Geschäft kennen und definieren gemeinsam Ziele, Zielgruppe und Tonalität.',
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Design',
    desc: 'Individuelles Design, das Ihre Marke widerspiegelt — keine Templates, keine Kompromisse.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Entwicklung',
    desc: 'Sauberer Code mit Next.js. Blitzschnell, SEO-optimiert, mobilfreundlich.',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Launch & Wachstum',
    desc: 'Deployment, Analytics-Setup und fortlaufende Optimierung für nachhaltigen Erfolg.',
  },
]

const techStack = [
  { name: 'Next.js', desc: 'React Framework für Production' },
  { name: 'React', desc: 'Komponentenbasierte UI' },
  { name: 'TailwindCSS', desc: 'Utility-first Styling' },
  { name: 'TypeScript', desc: 'Typsichere Entwicklung' },
  { name: 'shadcn/ui', desc: 'Hochwertige Komponenten' },
  { name: 'Bun', desc: 'Schnelle JS-Runtime' },
  { name: 'Vercel', desc: 'Edge Deployment' },
  { name: 'Lucide', desc: 'Modernes Icon-System' },
]

function FloatingShape({ className, delay = 0 }) {
  return (
    <div
      className={`absolute rounded-full opacity-20 blur-3xl animate-pulse ${className}`}
      style={{ animationDelay: `${delay}s`, animationDuration: '6s' }}
    />
  )
}

export default function LandingPage() {
  const [visible, setVisible] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setVisible(true)
    const handleMouse = (e) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('mousemove', handleMouse)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('mousemove', handleMouse)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const fd = new FormData(e.target)
    const name = fd.get('name')
    const email = fd.get('email')
    const message = fd.get('message')
    const subject = encodeURIComponent(`Projektanfrage von ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nE-Mail: ${email}\n\n${message}`)
    window.location.href = `mailto:hello@bm-web.de?subject=${subject}&body=${body}`
  }

  return (
    <div
      style={{ fontFamily: "'Manrope', sans-serif" }}
      className="min-h-screen text-[#2D2A26] overflow-x-hidden"
    >
      {/* Background — Design 1 Organic */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8F0] via-[#FEF0E4] to-[#F5E6D3]" />
        <FloatingShape className="w-[600px] h-[600px] bg-[#E8B88A] top-[-10%] right-[-5%]" delay={0} />
        <FloatingShape className="w-[500px] h-[500px] bg-[#D4A574] bottom-[10%] left-[-10%]" delay={2} />
        <FloatingShape className="w-[400px] h-[400px] bg-[#C4956A] top-[40%] right-[20%]" delay={4} />
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-10 blur-[100px] bg-[#E8A06A] transition-transform duration-[3000ms] ease-out"
          style={{
            transform: `translate(${mousePos.x * 100 - 50}px, ${mousePos.y * 100 - 50}px)`,
            top: '20%',
            left: '30%',
          }}
        />
      </div>

      {/* Nav — fixed with scroll-aware backdrop */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'backdrop-blur-md bg-[#FFF8F0]/80 shadow-[0_1px_0_0_rgba(45,42,38,0.06)]' : ''
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4956A] to-[#C17E4F] flex items-center justify-center text-white text-xs font-bold">
              BM
            </div>
            <span
              className={`text-sm font-medium transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`}
            >
              Buchwald & May
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'Prozess', id: 'prozess' },
              { label: 'Technologie', id: 'technologie' },
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

      {/* Hero — Design 1 */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-10 pt-24 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-[#2D2A26]/5 rounded-full text-xs tracking-wider uppercase mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="w-2 h-2 rounded-full bg-[#C17E4F] animate-pulse" />
            Buchwald & May — Web Studio
          </div>

          <h1
            style={{ fontFamily: "'Instrument Serif', serif" }}
            className={`text-[clamp(2.8rem,7vw,6.5rem)] leading-[1.05] mb-8 transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Websites mit
            <br />
            <span className="bg-gradient-to-r from-[#C17E4F] via-[#D4956A] to-[#E8A87C] bg-clip-text text-transparent">
              Wärme & Wirkung
            </span>
          </h1>

          <p
            className={`text-lg md:text-xl text-[#2D2A26]/50 max-w-xl mx-auto leading-relaxed mb-12 transition-all duration-1000 delay-[400ms] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Wir gestalten Landing Pages, die nicht nur schön aussehen, sondern
            bei Google gefunden werden und Besucher zu Kunden machen.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-[600ms] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
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

      {/* Vertrauen in Zahlen — Design 4 split layout */}
      <section className="py-28 px-6 md:px-10 scroll-mt-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#C17E4F] mb-4">Vertrauen in Zahlen</p>
            <h2
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-4xl md:text-5xl leading-tight mb-6"
            >
              Ergebnisse,
              <br />
              die sprechen
            </h2>
            <p className="text-[#2D2A26]/45 max-w-md leading-relaxed">
              Wir liefern nicht nur schöne Designs, sondern messbare Performance.
              Jedes Projekt wird auf Geschwindigkeit, Sichtbarkeit und Wirkung optimiert.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { val: '50+', label: 'Projekte erfolgreich umgesetzt' },
              { val: '100%', label: 'Lighthouse Performance Score' },
              { val: '<1s', label: 'Durchschnittliche Ladezeit' },
              { val: '24h', label: 'Maximale Antwortzeit' },
            ].map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-6 bg-white/40 backdrop-blur-sm border border-[#2D2A26]/5 rounded-2xl px-8 py-5 hover:bg-white/60 hover:shadow-lg hover:shadow-[#C17E4F]/5 transition-all duration-500"
              >
                <span
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                  className="text-4xl md:text-5xl text-[#C17E4F] min-w-[100px]"
                >
                  {s.val}
                </span>
                <span className="text-[#2D2A26]/50 text-sm tracking-wide">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prozess — Design 2 vertical timeline */}
      <section id="prozess" className="py-28 px-6 md:px-10 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C17E4F] mb-4">Unser Prozess</p>
            <h2
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-4xl md:text-6xl"
            >
              Vom Gespräch
              <br />
              zur fertigen Seite
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#C17E4F]/30 via-[#D4956A]/20 to-transparent" />

            <div className="flex flex-col gap-2">
              {process_steps.map((step, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-6 md:gap-10 relative"
                >
                  <div className="relative z-10 shrink-0 flex flex-col items-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#FFF8F0] border-2 border-[#C17E4F]/20 flex items-center justify-center text-[#C17E4F] group-hover:bg-[#C17E4F] group-hover:text-white group-hover:border-[#C17E4F] transition-all duration-500">
                      {step.icon}
                    </div>
                  </div>

                  <div className="flex-1 pb-14">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        style={{ fontFamily: "'Instrument Serif', serif" }}
                        className="text-4xl md:text-5xl text-[#C17E4F]/15 group-hover:text-[#C17E4F]/30 transition-colors duration-500"
                      >
                        0{i + 1}
                      </span>
                      <h3 className="text-xl md:text-2xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-[#2D2A26]/45 leading-relaxed max-w-lg">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologie — improved cards with descriptions */}
      <section id="technologie" className="py-24 px-6 md:px-10 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C17E4F] mb-4">Technologie</p>
            <h2
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-4xl md:text-5xl mb-5"
            >
              Moderner Stack,
              <br />
              bewährte Ergebnisse
            </h2>
            <p className="text-[#2D2A26]/40 max-w-lg mx-auto mb-16">
              Wir setzen auf bewährte, moderne Technologien — für maximale
              Performance, Wartbarkeit und Zukunftssicherheit.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group bg-white/35 backdrop-blur-sm border border-[#2D2A26]/5 rounded-2xl p-5 md:p-6 hover:bg-white/65 hover:shadow-lg hover:shadow-[#C17E4F]/5 hover:-translate-y-0.5 transition-all duration-500"
              >
                <div className="text-sm font-semibold mb-1 group-hover:text-[#C17E4F] transition-colors duration-300">
                  {tech.name}
                </div>
                <div className="text-xs text-[#2D2A26]/35 leading-snug">
                  {tech.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team — large image areas */}
      <section id="team" className="py-28 px-6 md:px-10 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#C17E4F] mb-4">Das Team</p>
            <h2
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-4xl md:text-5xl"
            >
              Persönlich. Direkt. Engagiert.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                name: 'Marvin Buchwald',
                role: 'Entwickler & Design',
                desc: 'Bringt ein Auge für Ästhetik und ein Gespür für Nutzerführung mit.',
                img: '/img/marvin.jpg',
              },
              {
                name: 'Vincent May',
                role: 'Entwickler & Technik',
                desc: 'Sorgt für die technische Exzellenz unter der Haube jeder Website.',
                img: '/img/vincent.jpg',
              },
            ].map((person, i) => (
              <div
                key={i}
                className="group bg-white/40 backdrop-blur-sm border border-[#2D2A26]/5 rounded-3xl overflow-hidden hover:bg-white/60 hover:shadow-xl transition-all duration-500"
              >
                {/* Large photo area */}
                <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-[#E8B88A]/20 via-[#D4956A]/15 to-[#C17E4F]/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      style={{ fontFamily: "'Instrument Serif', serif" }}
                      className="text-[8rem] md:text-[10rem] text-[#C17E4F]/[0.08] select-none leading-none"
                    >
                      {person.name.split(' ').map((n) => n[0]).join('')}
                    </span>
                  </div>
                  <img
                    src={person.img}
                    alt={person.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent" />
                </div>

                <div className="p-8">
                  <h3
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                    className="text-2xl md:text-3xl mb-1"
                  >
                    {person.name}
                  </h3>
                  <p className="text-[#C17E4F] text-sm mb-3">{person.role}</p>
                  <p className="text-[#2D2A26]/40 leading-relaxed">{person.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt — Design 4 split CTA with real form */}
      <section id="kontakt" className="py-32 px-6 md:px-10 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#2D2A26] to-[#3D3A36] rounded-[2rem] p-10 md:p-16 lg:p-20 text-[#FFF8F0] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C17E4F] rounded-full opacity-10 blur-[100px] -translate-y-1/3 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#D4956A] rounded-full opacity-[0.06] blur-[80px] translate-y-1/3 -translate-x-1/4" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-[#C17E4F] mb-6">Kontakt</p>
                <h2
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                  className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
                >
                  Lassen Sie uns
                  <br />
                  etwas Großes
                  <br />
                  bauen.
                </h2>
                <p className="text-[#FFF8F0]/40 leading-relaxed mb-8">
                  Kostenlose Erstberatung. Unverbindlich. Wir freuen uns auf Ihr Projekt
                  und darauf, gemeinsam etwas Besonderes zu schaffen.
                </p>
                <div className="flex items-center gap-3 text-[#FFF8F0]/25 text-sm">
                  <Mail className="w-4 h-4" />
                  <span>hello@bm-web.de</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="text-xs tracking-wider uppercase text-[#FFF8F0]/30 mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Ihr Name"
                    className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-5 py-4 text-[#FFF8F0] placeholder-[#FFF8F0]/20 focus:outline-none focus:border-[#C17E4F]/50 focus:bg-white/[0.07] transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-wider uppercase text-[#FFF8F0]/30 mb-2 block">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="ihre@email.de"
                    className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-5 py-4 text-[#FFF8F0] placeholder-[#FFF8F0]/20 focus:outline-none focus:border-[#C17E4F]/50 focus:bg-white/[0.07] transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-wider uppercase text-[#FFF8F0]/30 mb-2 block">
                    Nachricht
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Erzählen Sie uns von Ihrem Projekt..."
                    className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-5 py-4 text-[#FFF8F0] placeholder-[#FFF8F0]/20 focus:outline-none focus:border-[#C17E4F]/50 focus:bg-white/[0.07] transition-all duration-300 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#C17E4F] to-[#D4956A] text-white px-8 py-4 rounded-xl text-sm font-medium hover:shadow-2xl hover:shadow-[#C17E4F]/30 hover:-translate-y-0.5 transition-all duration-300 mt-2"
                >
                  Nachricht senden
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 md:px-10 border-t border-[#2D2A26]/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#2D2A26]/25">
          <span>&copy; 2026 Buchwald & May</span>
          <span>Mit Sorgfalt gebaut in Deutschland</span>
        </div>
      </footer>
    </div>
  )
}
