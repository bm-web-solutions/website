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
      className={`absolute rounded-full opacity-20 blur-3xl animate-pulse ${className}`}
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
      style={{ fontFamily: "'Instrument Sans', sans-serif" }}
      className="min-h-screen text-[#1E2B20] overflow-x-hidden"
    >
      {/* Forest gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F4F7F1] via-[#ECF1E8] to-[#E0EADA]" />
        <FloatingShape className="w-[550px] h-[600px] bg-[#88AE8D] top-[-10%] right-[-8%]" delay={0} />
        <FloatingShape className="w-[480px] h-[480px] bg-[#6F9474] bottom-[5%] left-[-12%]" delay={2} />
        <FloatingShape className="w-[400px] h-[350px] bg-[#A3C4A8] top-[45%] right-[18%]" delay={4} />
        <FloatingShape className="w-[300px] h-[320px] bg-[#7DA882] top-[10%] left-[15%]" delay={1} />
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-10 blur-[100px] bg-[#7DA882] transition-transform duration-[3000ms] ease-out"
          style={{
            transform: `translate(${mousePos.x * 80 - 40}px, ${mousePos.y * 80 - 40}px)`,
            top: '20%',
            left: '30%',
          }}
        />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="text-xs tracking-[0.2em] uppercase text-[#1E2B20]/40 hover:text-[#1E2B20] transition-colors"
          >
            &larr; Zurück
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6F9474] to-[#5B7A5F] flex items-center justify-center text-white text-xs font-bold">
              BM
            </div>
          </div>
          <a
            href="mailto:hello@bm-web.de"
            className="px-5 py-2 bg-[#1E2B20] text-[#F4F7F1] rounded-full text-xs tracking-wider hover:scale-105 transition-transform"
          >
            Let's talk
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-10 pt-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-[#1E2B20]/5 rounded-full text-xs tracking-wider uppercase mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="w-2 h-2 rounded-full bg-[#5B7A5F] animate-pulse" />
            Buchwald & May — Web Studio
          </div>

          <h1
            style={{ fontFamily: "'Instrument Serif', serif" }}
            className={`text-[clamp(2.8rem,7vw,6.5rem)] leading-[1.05] mb-8 transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Websites mit
            <br />
            <span className="bg-gradient-to-r from-[#5B7A5F] via-[#6F9474] to-[#88AE8D] bg-clip-text text-transparent">
              Substanz & Ruhe
            </span>
          </h1>

          <p
            className={`text-lg md:text-xl text-[#1E2B20]/45 max-w-xl mx-auto leading-relaxed mb-12 transition-all duration-1000 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Wir gestalten Landing Pages, die nicht nur schön aussehen, sondern
            bei Google gefunden werden und Besucher zu Kunden machen.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <a
              href="mailto:hello@bm-web.de"
              className="group inline-flex items-center justify-center gap-3 bg-[#1E2B20] text-[#F4F7F1] px-8 py-4 rounded-2xl text-sm font-medium hover:shadow-2xl hover:shadow-[#5B7A5F]/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              Projekt anfragen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-medium border border-[#1E2B20]/10 text-[#1E2B20]/50 hover:border-[#5B7A5F]/30 hover:text-[#5B7A5F] transition-all"
            >
              Unser Prozess
            </a>
          </div>
        </div>
      </section>

      {/* Trust Markers */}
      <section className="py-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { val: '50+', label: 'Projekte' },
              { val: '100%', label: 'Lighthouse' },
              { val: '<1s', label: 'Ladezeit' },
              { val: '24h', label: 'Antwortzeit' },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white/40 backdrop-blur-sm border border-[#5B7A5F]/8 rounded-2xl p-6 text-center hover:bg-white/60 hover:shadow-lg hover:shadow-[#5B7A5F]/8 transition-all duration-500"
              >
                <div
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                  className="text-3xl md:text-4xl mb-1"
                >
                  {s.val}
                </div>
                <div className="text-[#1E2B20]/30 text-xs tracking-wider uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-28 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.3em] uppercase text-[#5B7A5F] mb-4">Unser Prozess</p>
            <h2
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-4xl md:text-6xl"
            >
              Vom Gespräch
              <br />
              zur fertigen Seite
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {process_steps.map((step, i) => (
              <div
                key={i}
                className="group bg-white/30 backdrop-blur-sm border border-[#5B7A5F]/8 rounded-3xl p-8 md:p-10 hover:bg-white/55 hover:shadow-xl hover:shadow-[#5B7A5F]/8 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#6F9474]/20 to-[#5B7A5F]/10 flex items-center justify-center text-[#5B7A5F] shrink-0 group-hover:scale-110 transition-transform duration-500">
                    {step.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[#1E2B20]/12 text-xs font-mono">0{i + 1}</span>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-[#1E2B20]/40 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#5B7A5F] mb-4">Technologie</p>
          <h2
            style={{ fontFamily: "'Instrument Serif', serif" }}
            className="text-4xl md:text-5xl mb-16"
          >
            Moderner Stack,
            <br />
            bewährte Ergebnisse
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {['Next.js', 'React', 'TailwindCSS', 'shadcn/ui', 'Bun', 'Vercel', 'TypeScript', 'Lucide'].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-5 py-2.5 bg-white/40 backdrop-blur-sm border border-[#5B7A5F]/8 rounded-full text-sm text-[#1E2B20]/55 hover:bg-[#1E2B20] hover:text-[#F4F7F1] transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#5B7A5F] mb-4">Das Team</p>
            <h2
              style={{ fontFamily: "'Instrument Serif', serif" }}
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
                className="bg-white/40 backdrop-blur-sm border border-[#5B7A5F]/8 rounded-3xl p-8 hover:bg-white/60 hover:shadow-xl transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6F9474] to-[#5B7A5F] flex items-center justify-center text-white text-lg font-bold mb-5">
                  {person.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold mb-1">{person.name}</h3>
                <p className="text-[#5B7A5F] text-sm mb-3">{person.role}</p>
                <p className="text-[#1E2B20]/35 text-sm leading-relaxed">{person.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#1E2B20] to-[#2A3D2E] rounded-[2rem] p-12 md:p-20 text-[#F4F7F1] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#5B7A5F] rounded-full opacity-15 blur-[80px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#88AE8D] rounded-full opacity-10 blur-[60px] translate-y-1/3 -translate-x-1/3" />
            <h2
              style={{ fontFamily: "'Instrument Serif', serif" }}
              className="text-4xl md:text-6xl mb-6 relative"
            >
              Lassen Sie uns
              <br />
              etwas Großes bauen.
            </h2>
            <p className="text-[#F4F7F1]/35 mb-10 max-w-md mx-auto relative">
              Kostenlose Erstberatung. Unverbindlich. Wir freuen uns auf Ihr Projekt.
            </p>
            <a
              href="mailto:hello@bm-web.de"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#5B7A5F] to-[#6F9474] text-white px-8 py-4 rounded-2xl text-sm font-medium hover:shadow-2xl hover:shadow-[#5B7A5F]/30 hover:-translate-y-0.5 transition-all duration-300 relative"
            >
              <Mail className="w-4 h-4" />
              hello@bm-web.de
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 md:px-10 border-t border-[#1E2B20]/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#1E2B20]/20">
          <span>&copy; 2026 Buchwald & May</span>
          <span>Mit Sorgfalt gebaut in Deutschland</span>
        </div>
      </footer>
    </div>
  )
}
