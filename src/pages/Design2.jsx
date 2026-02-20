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

function FloatingShape({ className, delay = 0 }) {
  return (
    <div
      className={`absolute rounded-full opacity-15 blur-3xl ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '7s',
        animationName: 'coastalFloat',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        animationDirection: 'alternate',
      }}
    />
  )
}

export default function Design2() {
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
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="min-h-screen text-[#1C2E2B] overflow-x-hidden"
    >
      {/* Keyframes */}
      <style>{`
        @keyframes coastalFloat {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -20px) scale(1.05); }
          100% { transform: translate(-15px, 15px) scale(0.97); }
        }
      `}</style>

      {/* Coastal gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F0F7F7] via-[#E8F1F0] to-[#DAE8E5]" />
        <FloatingShape className="w-[600px] h-[600px] bg-[#8CBAB3] top-[-8%] left-[-5%]" delay={0} />
        <FloatingShape className="w-[500px] h-[500px] bg-[#6BA89E] bottom-[5%] right-[-8%]" delay={1.5} />
        <FloatingShape className="w-[450px] h-[450px] bg-[#4DA89B] top-[45%] left-[15%]" delay={3.5} />
        <FloatingShape className="w-[350px] h-[350px] bg-[#2A7B6F] top-[20%] right-[25%]" delay={5} />
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-8 blur-[120px] bg-[#4DA89B] transition-transform duration-[3000ms] ease-out"
          style={{
            transform: `translate(${mousePos.x * 120 - 60}px, ${mousePos.y * 120 - 60}px)`,
            top: '25%',
            left: '25%',
          }}
        />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-[#F0F7F7]/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="text-xs tracking-[0.2em] uppercase text-[#1C2E2B]/40 hover:text-[#1C2E2B] transition-colors"
          >
            &larr; Zurück
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2A7B6F] to-[#4DA89B] flex items-center justify-center text-white text-xs font-bold">
              BM
            </div>
          </div>
          <a
            href="mailto:hello@bm-web.de"
            className="px-5 py-2 bg-[#1C2E2B] text-[#F0F7F7] rounded-lg text-xs tracking-wider hover:bg-[#2A7B6F] transition-colors duration-300"
          >
            Let's talk
          </a>
        </div>
      </nav>

      {/* Hero - LEFT ALIGNED with decorative vertical accent */}
      <section className="min-h-screen flex items-center px-6 md:px-12 pt-24 relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-stretch gap-8 md:gap-12">
            {/* Decorative vertical line */}
            <div
              className={`hidden md:flex flex-col items-center transition-all duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="w-[2px] flex-1 bg-gradient-to-b from-transparent via-[#2A7B6F] to-transparent" />
            </div>

            {/* Hero content - LEFT ALIGNED */}
            <div className="max-w-3xl">
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 bg-[#2A7B6F]/8 border border-[#2A7B6F]/10 rounded-lg text-xs tracking-wider uppercase mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <span className="w-2 h-2 rounded-full bg-[#2A7B6F] animate-pulse" />
                Buchwald & May — Web Studio
              </div>

              <h1
                style={{ fontFamily: "'Playfair Display', serif" }}
                className={`text-[clamp(2.8rem,7vw,6.5rem)] leading-[1.05] mb-8 transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                Websites mit
                <br />
                <span className="bg-gradient-to-r from-[#2A7B6F] via-[#4DA89B] to-[#8CBAB3] bg-clip-text text-transparent">
                  Tiefe & Klarheit
                </span>
              </h1>

              <p
                className={`text-lg md:text-xl text-[#1C2E2B]/50 max-w-xl leading-relaxed mb-12 transition-all duration-1000 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                Wir gestalten Landing Pages, die nicht nur schön aussehen, sondern
                bei Google gefunden werden und Besucher zu Kunden machen.
              </p>

              <div
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <a
                  href="mailto:hello@bm-web.de"
                  className="group inline-flex items-center gap-3 bg-[#1C2E2B] text-[#F0F7F7] px-8 py-4 rounded-xl text-sm font-medium hover:bg-[#2A7B6F] hover:shadow-2xl hover:shadow-[#2A7B6F]/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Projekt anfragen
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#process"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-medium border border-[#1C2E2B]/10 text-[#1C2E2B]/60 hover:border-[#2A7B6F]/40 hover:text-[#2A7B6F] transition-all"
                >
                  Unser Prozess
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Markers - HORIZONTAL STRIP with dividers */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between bg-white/30 backdrop-blur-sm border border-[#1C2E2B]/5 rounded-2xl px-2 py-6 md:py-8">
            {[
              { val: '50+', label: 'Projekte' },
              { val: '100%', label: 'Lighthouse' },
              { val: '<1s', label: 'Ladezeit' },
              { val: '24h', label: 'Antwortzeit' },
            ].map((s, i) => (
              <div key={i} className="flex items-center w-full md:w-auto">
                <div className="flex-1 md:flex-none text-center px-8 py-3 md:py-0">
                  <div
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-3xl md:text-4xl text-[#2A7B6F] mb-1"
                  >
                    {s.val}
                  </div>
                  <div className="text-[#1C2E2B]/35 text-xs tracking-wider uppercase">{s.label}</div>
                </div>
                {i < 3 && (
                  <div className="hidden md:block w-[1px] h-12 bg-[#1C2E2B]/10" />
                )}
                {i < 3 && (
                  <div className="block md:hidden w-3/4 mx-auto h-[1px] bg-[#1C2E2B]/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - VERTICAL TIMELINE (single column with step numbers on left) */}
      <section id="process" className="py-28 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <p className="text-xs tracking-[0.3em] uppercase text-[#2A7B6F] mb-4">Unser Prozess</p>
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
            {/* Vertical connecting line */}
            <div className="absolute left-[39px] md:left-[47px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#2A7B6F]/30 via-[#4DA89B]/20 to-transparent" />

            <div className="flex flex-col gap-2">
              {process_steps.map((step, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-6 md:gap-10 relative pl-0"
                >
                  {/* Step number */}
                  <div className="relative z-10 w-20 md:w-24 shrink-0 flex flex-col items-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#F0F7F7] border-2 border-[#2A7B6F]/20 flex items-center justify-center text-[#2A7B6F] group-hover:bg-[#2A7B6F] group-hover:text-white group-hover:border-[#2A7B6F] transition-all duration-500">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-12 border-l-2 border-transparent group-hover:border-[#2A7B6F]/30 pl-6 transition-all duration-500">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        style={{ fontFamily: "'Playfair Display', serif" }}
                        className="text-4xl md:text-5xl font-light text-[#2A7B6F]/15 group-hover:text-[#2A7B6F]/30 transition-colors duration-500"
                      >
                        0{i + 1}
                      </span>
                      <h3 className="text-xl md:text-2xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-[#1C2E2B]/45 leading-relaxed max-w-lg">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech - 2-COLUMN GRID */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#2A7B6F] mb-4">Technologie</p>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-5xl"
            >
              Moderner Stack,
              <br />
              bewährte Ergebnisse
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-2xl mx-auto">
            {['Next.js', 'React', 'TailwindCSS', 'shadcn/ui', 'Bun', 'Vercel', 'TypeScript', 'Lucide'].map(
              (tech) => (
                <div
                  key={tech}
                  className="group flex items-center gap-3 px-5 py-4 bg-white/30 backdrop-blur-sm border border-[#1C2E2B]/5 rounded-xl text-sm text-[#1C2E2B]/60 hover:border-l-[3px] hover:border-l-[#2A7B6F] hover:bg-white/60 hover:text-[#1C2E2B] transition-all duration-300 cursor-default"
                >
                  <div className="w-2 h-2 rounded-full bg-[#8CBAB3] group-hover:bg-[#2A7B6F] transition-colors duration-300" />
                  {tech}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Team - Side by side with TEAL TOP BORDER accent */}
      <section className="py-28 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#2A7B6F] mb-4">Das Team</p>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-5xl"
            >
              Persönlich. Direkt. Engagiert.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
                className="relative bg-white/35 backdrop-blur-sm border border-[#1C2E2B]/5 rounded-2xl p-8 hover:bg-white/60 hover:shadow-xl hover:shadow-[#2A7B6F]/5 transition-all duration-500 overflow-hidden group"
              >
                {/* Teal top border accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#2A7B6F] to-[#4DA89B] opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-center gap-4 mb-5 mt-2">
                  <div className="text-3xl font-bold text-[#2A7B6F]/20 group-hover:text-[#2A7B6F]/40 transition-colors duration-500"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{person.name}</h3>
                    <p className="text-[#2A7B6F] text-sm">{person.role}</p>
                  </div>
                </div>
                <p className="text-[#1C2E2B]/40 text-sm leading-relaxed">{person.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - FULL WIDTH DARK SECTION */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-br from-[#1C2E2B] to-[#1A3530] py-24 md:py-32 px-6 md:px-12">
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2A7B6F] rounded-full opacity-10 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#4DA89B] rounded-full opacity-8 blur-[100px]" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-6xl text-[#F0F7F7] mb-6"
            >
              Lassen Sie uns
              <br />
              etwas Großes bauen.
            </h2>
            <p className="text-[#F0F7F7]/35 mb-10 max-w-md mx-auto">
              Kostenlose Erstberatung. Unverbindlich. Wir freuen uns auf Ihr Projekt.
            </p>
            <a
              href="mailto:hello@bm-web.de"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#2A7B6F] to-[#4DA89B] text-white px-8 py-4 rounded-xl text-sm font-medium hover:shadow-2xl hover:shadow-[#2A7B6F]/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              hello@bm-web.de
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 md:px-12 border-t border-[#1C2E2B]/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#1C2E2B]/25">
          <span>&copy; 2026 Buchwald & May</span>
          <span>Mit Sorgfalt gebaut in Deutschland</span>
        </div>
      </footer>
    </div>
  )
}
