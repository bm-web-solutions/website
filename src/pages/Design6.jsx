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
      className={`absolute rounded-full opacity-15 blur-3xl animate-pulse ${className}`}
      style={{ animationDelay: `${delay}s`, animationDuration: '9s' }}
    />
  )
}

export default function Design6() {
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
      className="min-h-screen text-[#1E2240] overflow-x-hidden"
    >
      {/* Cool silver-blue ethereal background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F6FA] via-[#EEF0F8] to-[#E4E8F4]" />
        <FloatingShape className="w-[450px] h-[400px] bg-[#97A6C9] top-[-8%] right-[5%]" delay={0} />
        <FloatingShape className="w-[350px] h-[380px] bg-[#8190B5] bottom-[10%] left-[-8%]" delay={2} />
        <FloatingShape className="w-[300px] h-[300px] bg-[#A0ACD0] top-[35%] right-[20%]" delay={4} />
        <FloatingShape className="w-[250px] h-[280px] bg-[#6B7AA1] top-[55%] left-[10%]" delay={6} />
        <FloatingShape className="w-[200px] h-[220px] bg-[#B0BAD8] top-[15%] left-[30%]" delay={1} />
        <FloatingShape className="w-[280px] h-[250px] bg-[#8E9CC0] top-[70%] right-[35%]" delay={3.5} />
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[100px] bg-[#8190B5] transition-transform duration-[4000ms] ease-out"
          style={{
            transform: `translate(${mousePos.x * 60 - 30}px, ${mousePos.y * 60 - 30}px)`,
            top: '30%',
            left: '35%',
          }}
        />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="text-xs tracking-[0.2em] uppercase text-[#1E2240]/35 hover:text-[#1E2240] transition-colors"
          >
            &larr; Zurück
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8190B5] to-[#6B7AA1] flex items-center justify-center text-white text-xs font-bold">
              BM
            </div>
          </div>
          <a
            href="mailto:hello@bm-web.de"
            className="px-5 py-2 bg-[#1E2240] text-[#F5F6FA] rounded-full text-xs tracking-wider hover:scale-105 transition-transform"
          >
            Let's talk
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-10 pt-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-[#1E2240]/[0.04] rounded-full text-xs tracking-wider uppercase mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="w-2 h-2 rounded-full bg-[#6B7AA1] animate-pulse" />
            Buchwald & May — Web Studio
          </div>

          <h1
            style={{ fontFamily: "'Playfair Display', serif" }}
            className={`text-[clamp(2.8rem,7vw,6.5rem)] leading-[1.05] mb-8 transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Websites mit
            <br />
            <span className="bg-gradient-to-r from-[#6B7AA1] via-[#8190B5] to-[#A0ACD0] bg-clip-text text-transparent">
              Leichtigkeit & Stil
            </span>
          </h1>

          <p
            className={`text-lg md:text-xl text-[#1E2240]/40 max-w-xl mx-auto leading-relaxed mb-12 transition-all duration-1000 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Wir gestalten Landing Pages, die nicht nur schön aussehen, sondern
            bei Google gefunden werden und Besucher zu Kunden machen.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <a
              href="mailto:hello@bm-web.de"
              className="group inline-flex items-center justify-center gap-3 bg-[#1E2240] text-[#F5F6FA] px-8 py-4 rounded-2xl text-sm font-medium hover:shadow-2xl hover:shadow-[#6B7AA1]/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              Projekt anfragen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-medium border border-[#1E2240]/8 text-[#1E2240]/45 hover:border-[#6B7AA1]/30 hover:text-[#6B7AA1] transition-all"
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
                className="bg-white/40 backdrop-blur-sm border border-[#6B7AA1]/6 rounded-2xl p-6 text-center hover:bg-white/60 hover:shadow-lg hover:shadow-[#6B7AA1]/6 transition-all duration-500"
              >
                <div
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-3xl md:text-4xl mb-1"
                >
                  {s.val}
                </div>
                <div className="text-[#1E2240]/28 text-xs tracking-wider uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-28 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.3em] uppercase text-[#6B7AA1] mb-4">Unser Prozess</p>
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
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
                className="group bg-white/30 backdrop-blur-sm border border-[#6B7AA1]/6 rounded-3xl p-8 md:p-10 hover:bg-white/55 hover:shadow-xl hover:shadow-[#6B7AA1]/6 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#8190B5]/15 to-[#6B7AA1]/8 flex items-center justify-center text-[#6B7AA1] shrink-0 group-hover:scale-110 transition-transform duration-500">
                    {step.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[#1E2240]/10 text-xs font-mono">0{i + 1}</span>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-[#1E2240]/38 leading-relaxed">{step.desc}</p>
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
          <p className="text-xs tracking-[0.3em] uppercase text-[#6B7AA1] mb-4">Technologie</p>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
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
                  className="px-5 py-2.5 bg-white/40 backdrop-blur-sm border border-[#6B7AA1]/6 rounded-full text-sm text-[#1E2240]/50 hover:bg-[#1E2240] hover:text-[#F5F6FA] transition-all duration-300 cursor-default"
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
            <p className="text-xs tracking-[0.3em] uppercase text-[#6B7AA1] mb-4">Das Team</p>
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
                className="bg-white/35 backdrop-blur-sm border border-[#6B7AA1]/6 rounded-3xl p-8 hover:bg-white/55 hover:shadow-xl transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8190B5] to-[#6B7AA1] flex items-center justify-center text-white text-lg font-bold mb-5">
                  {person.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold mb-1">{person.name}</h3>
                <p className="text-[#6B7AA1] text-sm mb-3">{person.role}</p>
                <p className="text-[#1E2240]/30 text-sm leading-relaxed">{person.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#1E2240] to-[#2A3058] rounded-[2rem] p-12 md:p-20 text-[#F5F6FA] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-[#6B7AA1] rounded-full opacity-12 blur-[80px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-44 h-44 bg-[#97A6C9] rounded-full opacity-10 blur-[60px] translate-y-1/3 -translate-x-1/3" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#8190B5] rounded-full opacity-[0.06] blur-[100px]" />
            <h2
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-4xl md:text-6xl mb-6 relative"
            >
              Lassen Sie uns
              <br />
              etwas Großes bauen.
            </h2>
            <p className="text-[#F5F6FA]/30 mb-10 max-w-md mx-auto relative">
              Kostenlose Erstberatung. Unverbindlich. Wir freuen uns auf Ihr Projekt.
            </p>
            <a
              href="mailto:hello@bm-web.de"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#6B7AA1] to-[#8190B5] text-white px-8 py-4 rounded-2xl text-sm font-medium hover:shadow-2xl hover:shadow-[#6B7AA1]/30 hover:-translate-y-0.5 transition-all duration-300 relative"
            >
              <Mail className="w-4 h-4" />
              hello@bm-web.de
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 md:px-10 border-t border-[#1E2240]/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#1E2240]/20">
          <span>&copy; 2026 Buchwald & May</span>
          <span>Mit Sorgfalt gebaut in Deutschland</span>
        </div>
      </footer>
    </div>
  )
}
