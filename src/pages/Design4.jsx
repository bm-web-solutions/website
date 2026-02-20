import { useState, useEffect } from 'react'
import { ArrowRight, Sparkles, Zap, BarChart3, Palette, Mail, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

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

const techStack = ['Next.js', 'React', 'TailwindCSS', 'shadcn/ui', 'Bun', 'Vercel', 'TypeScript', 'Lucide']

function FloatingShape({ className, delay = 0 }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl animate-pulse ${className}`}
      style={{ animationDelay: `${delay}s`, animationDuration: '7s' }}
    />
  )
}

export default function Design4() {
  const [visible, setVisible] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setVisible(true)
    const handleMouse = (e) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <div
      style={{ fontFamily: "'Manrope', sans-serif" }}
      className="min-h-screen text-[#2C1810] overflow-x-hidden"
    >
      {/* Warm parchment gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FBF5F0] via-[#F5EBE2] to-[#EDE0D4]" />
        <FloatingShape className="w-[700px] h-[700px] bg-[#C9A88E] opacity-[0.18] top-[-8%] left-[-10%]" delay={0} />
        <FloatingShape className="w-[600px] h-[600px] bg-[#D4795A] opacity-[0.15] bottom-[5%] right-[-8%]" delay={2.5} />
        <FloatingShape className="w-[500px] h-[500px] bg-[#B85C3A] opacity-[0.12] top-[45%] left-[15%]" delay={5} />
        {/* Mouse-tracked warm glow */}
        <div
          className="absolute w-[900px] h-[900px] rounded-full opacity-[0.08] blur-[120px] bg-[#D4795A] transition-transform duration-[3000ms] ease-out"
          style={{
            transform: `translate(${mousePos.x * 120 - 60}px, ${mousePos.y * 120 - 60}px)`,
            top: '15%',
            left: '25%',
          }}
        />
      </div>

      {/* Marquee animation style */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 20s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="text-xs tracking-[0.2em] uppercase text-[#2C1810]/40 hover:text-[#2C1810] transition-colors"
          >
            &larr; Zurück
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#B85C3A] to-[#D4795A] flex items-center justify-center text-white text-xs font-bold">
              BM
            </div>
          </div>
          <a
            href="mailto:hello@bm-web.de"
            className="px-5 py-2 bg-[#2C1810] text-[#FBF5F0] rounded-full text-xs tracking-wider hover:scale-105 transition-transform"
          >
            Let's talk
          </a>
        </div>
      </nav>

      {/* Hero — SPLIT LAYOUT: text left 60%, decorative right 40% */}
      <section className="min-h-screen flex items-center px-6 md:px-10 pt-20 relative">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left side — text (3/5 = 60%) */}
          <div className="lg:col-span-3 text-left">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-[#2C1810]/5 rounded-full text-xs tracking-wider uppercase mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <span className="w-2 h-2 rounded-full bg-[#B85C3A] animate-pulse" />
              Buchwald & May — Web Studio
            </div>

            <h1
              style={{ fontFamily: "'Playfair Display', serif" }}
              className={`text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.08] mb-8 transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              Websites mit
              <br />
              <span className="bg-gradient-to-r from-[#B85C3A] via-[#D4795A] to-[#C9A88E] bg-clip-text text-transparent">
                Charakter & Substanz
              </span>
            </h1>

            <p
              className={`text-lg md:text-xl text-[#2C1810]/50 max-w-lg leading-relaxed mb-12 transition-all duration-1000 delay-[400ms] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Wir gestalten Landing Pages, die nicht nur schön aussehen, sondern
              bei Google gefunden werden und Besucher zu Kunden machen.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-[600ms] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <a
                href="mailto:hello@bm-web.de"
                className="group inline-flex items-center justify-center gap-3 bg-[#2C1810] text-[#FBF5F0] px-8 py-4 rounded-2xl text-sm font-medium hover:shadow-2xl hover:shadow-[#B85C3A]/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                Projekt anfragen
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-medium border border-[#2C1810]/10 text-[#2C1810]/60 hover:border-[#2C1810]/30 hover:text-[#2C1810] transition-all"
              >
                Unser Prozess
              </a>
            </div>
          </div>

          {/* Right side — decorative blob cluster (2/5 = 40%) */}
          <div
            className={`lg:col-span-2 relative h-[400px] md:h-[500px] hidden lg:block transition-all duration-1000 delay-[800ms] ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Large primary blob */}
              <div
                className="absolute w-[320px] h-[320px] rounded-full bg-gradient-to-br from-[#B85C3A] to-[#D4795A] opacity-20 blur-xl animate-pulse"
                style={{ animationDuration: '7s', top: '10%', left: '15%' }}
              />
              {/* Medium secondary blob */}
              <div
                className="absolute w-[220px] h-[220px] rounded-full bg-gradient-to-tr from-[#C9A88E] to-[#D4795A] opacity-25 blur-lg animate-pulse"
                style={{ animationDuration: '5s', animationDelay: '2s', bottom: '15%', right: '10%' }}
              />
              {/* Small accent blob */}
              <div
                className="absolute w-[140px] h-[140px] rounded-full bg-[#B85C3A] opacity-15 blur-md animate-pulse"
                style={{ animationDuration: '6s', animationDelay: '3.5s', top: '35%', right: '25%' }}
              />
              {/* Decorative ring */}
              <div className="absolute w-[280px] h-[280px] rounded-full border-2 border-[#B85C3A]/15 top-[12%] left-[18%]" />
              <div className="absolute w-[180px] h-[180px] rounded-full border border-[#C9A88E]/20 bottom-[20%] right-[15%]" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Markers — VERTICAL STACKED LIST on the right */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: section heading */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#B85C3A] mb-4">Vertrauen in Zahlen</p>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-5xl leading-tight mb-6"
            >
              Ergebnisse,
              <br />
              die sprechen
            </h2>
            <p className="text-[#2C1810]/45 max-w-md leading-relaxed">
              Wir liefern nicht nur schöne Designs, sondern messbare Performance.
              Jedes Projekt wird auf Geschwindigkeit, Sichtbarkeit und Wirkung optimiert.
            </p>
          </div>

          {/* Right: vertical trust markers */}
          <div className="space-y-6">
            {[
              { val: '50+', label: 'Projekte erfolgreich umgesetzt' },
              { val: '100%', label: 'Lighthouse Performance Score' },
              { val: '<1s', label: 'Durchschnittliche Ladezeit' },
              { val: '24h', label: 'Maximale Antwortzeit' },
            ].map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-6 bg-white/30 backdrop-blur-sm border border-[#2C1810]/5 rounded-2xl px-8 py-5 hover:bg-white/50 hover:shadow-lg hover:shadow-[#B85C3A]/5 transition-all duration-500"
              >
                <span
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-4xl md:text-5xl text-[#B85C3A] font-light min-w-[100px]"
                >
                  {s.val}
                </span>
                <span className="text-[#2C1810]/50 text-sm tracking-wide">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process — ZIG-ZAG ALTERNATING LAYOUT with center line */}
      <section id="process" className="py-28 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.3em] uppercase text-[#B85C3A] mb-4">Unser Prozess</p>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-6xl"
            >
              Vom Gespräch
              <br />
              zur fertigen Seite
            </h2>
          </div>

          <div className="relative">
            {/* Subtle center line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C9A88E]/30 to-transparent -translate-x-1/2" />

            <div className="space-y-12 md:space-y-16">
              {process_steps.map((step, i) => {
                const isEven = i % 2 === 0
                return (
                  <div
                    key={i}
                    className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${isEven ? '' : 'direction-rtl'}`}
                  >
                    {/* Content side */}
                    <div className={`${isEven ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16 md:order-2'}`}>
                      <div
                        className={`group bg-white/35 backdrop-blur-sm border border-[#2C1810]/5 rounded-3xl p-8 hover:bg-white/55 hover:shadow-xl hover:shadow-[#B85C3A]/5 hover:-translate-y-1 transition-all duration-500 inline-block text-left`}
                      >
                        <div className="flex items-start gap-5">
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#D4795A]/20 to-[#B85C3A]/10 flex items-center justify-center text-[#B85C3A] shrink-0 group-hover:scale-110 transition-transform duration-500">
                            {step.icon}
                          </div>
                          <div>
                            <div className="flex items-center gap-3 mb-3">
                              <span className="text-[#2C1810]/15 text-xs font-mono">0{i + 1}</span>
                              <h3 className="text-xl font-semibold">{step.title}</h3>
                            </div>
                            <p className="text-[#2C1810]/45 leading-relaxed text-sm">{step.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center dot connector */}
                    <div className={`hidden md:flex items-center ${isEven ? 'justify-start' : 'md:order-1 justify-end'}`}>
                      <div className="relative">
                        <div className="w-4 h-4 rounded-full bg-[#B85C3A]/20 border-2 border-[#B85C3A]/40" />
                        <div className="absolute inset-0 w-4 h-4 rounded-full bg-[#B85C3A]/10 animate-ping" style={{ animationDuration: '3s' }} />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Tech — MARQUEE HORIZONTAL SCROLLING STRIP */}
      <section className="py-20 overflow-hidden">
        <div className="mb-12 text-center px-6">
          <p className="text-xs tracking-[0.3em] uppercase text-[#B85C3A] mb-4">Technologie</p>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl md:text-5xl"
          >
            Moderner Stack,
            <br />
            bewährte Ergebnisse
          </h2>
        </div>

        {/* Marquee strip */}
        <div className="relative py-6">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F5EBE2] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F5EBE2] to-transparent z-10" />

          <div className="flex overflow-hidden">
            <div className="marquee-track flex shrink-0">
              {/* Duplicate the list for seamless loop */}
              {[...techStack, ...techStack].map((tech, i) => (
                <span
                  key={i}
                  className="mx-3 px-8 py-4 bg-white/40 backdrop-blur-sm border border-[#2C1810]/5 rounded-full text-sm text-[#2C1810]/60 whitespace-nowrap hover:bg-[#2C1810] hover:text-[#FBF5F0] transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="marquee-track flex shrink-0" aria-hidden="true">
              {[...techStack, ...techStack].map((tech, i) => (
                <span
                  key={`dup-${i}`}
                  className="mx-3 px-8 py-4 bg-white/40 backdrop-blur-sm border border-[#2C1810]/5 rounded-full text-sm text-[#2C1810]/60 whitespace-nowrap hover:bg-[#2C1810] hover:text-[#FBF5F0] transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team — OVERLAPPING CARDS */}
      <section className="py-28 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#B85C3A] mb-4">Das Team</p>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-5xl"
            >
              Persönlich. Direkt. Engagiert.
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch max-w-3xl mx-auto relative">
            {[
              {
                name: 'Marvin Buchwald',
                role: 'Entwickler & Design',
                desc: 'Bringt ein Auge für Ästhetik und ein Gespür für Nutzerführung mit.',
              },
              {
                name: 'Vincent May',
                role: 'Entwickler & Technik',
                desc: 'Sorgt für die technische Exzellenz unter der Haube jeder Website.',
              },
            ].map((person, i) => (
              <div
                key={i}
                className={`bg-white/50 backdrop-blur-sm border border-[#2C1810]/5 rounded-3xl overflow-hidden hover:bg-white/70 hover:shadow-xl transition-all duration-500 w-full md:w-[55%] shrink-0 ${
                  i === 0 ? 'z-10' : 'md:-ml-[10%] z-20 md:mt-8'
                } ${i === 1 ? 'mt-[-20px] md:mt-8' : ''}`}
              >
                {/* Terracotta top accent bar */}
                <div className="h-1.5 bg-gradient-to-r from-[#B85C3A] to-[#D4795A]" />
                <div className="p-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#B85C3A] to-[#D4795A] flex items-center justify-center text-white text-lg font-bold mb-5">
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{person.name}</h3>
                  <p className="text-[#B85C3A] text-sm mb-3">{person.role}</p>
                  <p className="text-[#2C1810]/40 text-sm leading-relaxed">{person.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — SPLIT LAYOUT: heading left, description+button right, dark bg */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#2C1810] rounded-[2rem] p-12 md:p-16 lg:p-20 text-[#FBF5F0] relative overflow-hidden">
            {/* Decorative warm glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#B85C3A] rounded-full opacity-10 blur-[100px] -translate-y-1/3 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#D4795A] rounded-full opacity-[0.06] blur-[80px] translate-y-1/3 -translate-x-1/4" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left: heading */}
              <div>
                <h2
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-4xl md:text-5xl lg:text-6xl leading-tight"
                >
                  Lassen Sie uns
                  <br />
                  etwas Großes
                  <br />
                  bauen.
                </h2>
              </div>

              {/* Right: description + button */}
              <div>
                <p className="text-[#FBF5F0]/40 mb-8 leading-relaxed text-lg">
                  Kostenlose Erstberatung. Unverbindlich. Wir freuen uns auf Ihr Projekt und darauf,
                  gemeinsam etwas Besonderes zu schaffen.
                </p>
                <a
                  href="mailto:hello@bm-web.de"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#B85C3A] to-[#D4795A] text-white px-8 py-4 rounded-2xl text-sm font-medium hover:shadow-2xl hover:shadow-[#B85C3A]/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Mail className="w-4 h-4" />
                  hello@bm-web.de
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 md:px-10 border-t border-[#2C1810]/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#2C1810]/25">
          <span>&copy; 2026 Buchwald & May</span>
          <span>Mit Sorgfalt gebaut in Deutschland</span>
        </div>
      </footer>
    </div>
  )
}
