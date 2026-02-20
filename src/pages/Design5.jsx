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
      className={`absolute rounded-full ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '9s',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        animationName: 'arcticFloat',
      }}
    />
  )
}

export default function Design5() {
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
      className="min-h-screen text-[#1A2332] overflow-x-hidden"
    >
      {/* Keyframes for glacial float animation */}
      <style>{`
        @keyframes arcticFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -20px) scale(1.05); }
          50% { transform: translate(-20px, 15px) scale(0.95); }
          75% { transform: translate(15px, 25px) scale(1.02); }
        }
      `}</style>

      {/* Icy gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F4F6F9] via-[#EDF0F5] to-[#E4E9F2]" />
        <FloatingShape
          className="w-[700px] h-[700px] bg-[#A8BDD0] opacity-[0.14] blur-[120px] top-[-15%] right-[-10%]"
          delay={0}
        />
        <FloatingShape
          className="w-[550px] h-[550px] bg-[#7A9DB8] opacity-[0.12] blur-[140px] bottom-[5%] left-[-12%]"
          delay={2.5}
        />
        <FloatingShape
          className="w-[480px] h-[480px] bg-[#5A8BAD] opacity-[0.15] blur-[130px] top-[45%] right-[15%]"
          delay={5}
        />
        <FloatingShape
          className="w-[400px] h-[400px] bg-[#3D6B8E] opacity-[0.18] blur-[100px] top-[20%] left-[10%]"
          delay={7}
        />
        {/* Mouse-tracked cool glow */}
        <div
          className="absolute w-[900px] h-[900px] rounded-full opacity-[0.08] blur-[140px] bg-[#5A8BAD] transition-transform duration-[3000ms] ease-out pointer-events-none"
          style={{
            transform: `translate(${mousePos.x * 120 - 60}px, ${mousePos.y * 120 - 60}px)`,
            top: '15%',
            left: '25%',
          }}
        />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-[#F4F6F9]/60">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="text-xs tracking-[0.2em] uppercase text-[#1A2332]/35 hover:text-[#1A2332] transition-colors"
          >
            &larr; Zurück
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#3D6B8E] flex items-center justify-center text-white text-xs font-bold tracking-wide">
              BM
            </div>
          </div>
          <a
            href="mailto:hello@bm-web.de"
            className="px-5 py-2 bg-[#1A2332] text-[#F4F6F9] rounded-full text-xs tracking-wider hover:scale-105 transition-transform"
          >
            Kontakt
          </a>
        </div>
      </nav>

      {/* Hero - MASSIVE centered typography */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-10 pt-20 pb-10 relative">
        <div className="text-center max-w-5xl mx-auto">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-[#1A2332]/[0.04] rounded-full text-xs tracking-[0.2em] uppercase mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3D6B8E] animate-pulse" />
            Buchwald & May — Web Studio
          </div>

          <h1
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 'clamp(3.5rem, 9vw, 8rem)',
              lineHeight: 1,
            }}
            className={`mb-8 transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
          >
            Websites mit
            <br />
            <span className="text-[#3D6B8E]">
              Klarheit & Präzision
            </span>
          </h1>

          <p
            className={`text-[#1A2332]/40 text-lg md:text-xl max-w-lg mx-auto mb-14 transition-all duration-1000 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Landing Pages, die gefunden werden und überzeugen.
          </p>

          <div
            className={`transition-all duration-1000 delay-600 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <a
              href="mailto:hello@bm-web.de"
              className="group inline-flex items-center gap-3 bg-[#1A2332] text-[#F4F6F9] px-10 py-4 rounded-full text-sm font-medium hover:shadow-2xl hover:shadow-[#3D6B8E]/15 hover:-translate-y-0.5 transition-all duration-300"
            >
              Projekt anfragen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Trust markers - single understated line */}
        <div
          className={`mt-20 md:mt-28 transition-all duration-1000 delay-[800ms] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="text-[#1A2332]/25 text-sm tracking-wide text-center">
            50+ Projekte · 100% Lighthouse · &lt;1s Ladezeit · 24h Antwortzeit
          </p>
        </div>
      </section>

      {/* Process - Swiss-design numbered rows */}
      <section id="process" className="py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#3D6B8E] mb-4">Prozess</p>
          <h2
            style={{ fontFamily: "'Instrument Serif', serif" }}
            className="text-4xl md:text-6xl mb-20"
          >
            Vier Schritte zum Ergebnis
          </h2>

          <div className="border-t border-[#1A2332]/10">
            {process_steps.map((step, i) => (
              <div
                key={i}
                className="group grid grid-cols-[auto_1fr] md:grid-cols-[80px_200px_1fr] items-start md:items-center gap-4 md:gap-8 py-8 md:py-10 border-b border-[#1A2332]/10 hover:bg-[#1A2332]/[0.02] transition-colors duration-300 px-2 md:px-4"
              >
                <span
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                  className="text-4xl md:text-5xl text-[#A8BDD0] group-hover:text-[#3D6B8E] transition-colors duration-500"
                >
                  0{i + 1}
                </span>
                <div className="md:contents">
                  <h3 className="text-lg md:text-xl font-medium flex items-center gap-3">
                    <span className="text-[#3D6B8E] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {step.icon}
                    </span>
                    {step.title}
                  </h3>
                  <p className="text-[#1A2332]/40 text-sm md:text-base leading-relaxed col-span-full md:col-span-1">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech - Plain text with slashes */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#3D6B8E] mb-10">Technologie</p>
          <p
            style={{ fontFamily: "'Instrument Serif', serif" }}
            className="text-xl md:text-2xl text-[#1A2332]/50 leading-relaxed"
          >
            {['Next.js', 'React', 'TailwindCSS', 'shadcn/ui', 'Bun', 'Vercel', 'TypeScript', 'Lucide'].join(' / ')}
          </p>
        </div>
      </section>

      {/* Team - Compact minimal cards */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#3D6B8E] mb-4">Team</p>
          <h2
            style={{ fontFamily: "'Instrument Serif', serif" }}
            className="text-4xl md:text-5xl mb-20"
          >
            Zwei Köpfe, ein Ziel
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
            {[
              {
                name: 'Marvin Buchwald',
                initials: 'MB',
                role: 'Entwickler & Design',
                desc: 'Bringt ein Auge für Ästhetik und ein Gespür für Nutzerführung mit.',
              },
              {
                name: 'Vincent May',
                initials: 'VM',
                role: 'Entwickler & Technik',
                desc: 'Sorgt für die technische Exzellenz unter der Haube jeder Website.',
              },
            ].map((person, i) => (
              <div
                key={i}
                className="group flex items-start gap-5 p-6 rounded-2xl bg-[#1A2332]/[0.02] hover:bg-[#1A2332]/[0.04] transition-colors duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-[#3D6B8E] flex items-center justify-center text-white text-sm font-semibold shrink-0 group-hover:scale-105 transition-transform duration-500">
                  {person.initials}
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-0.5">{person.name}</h3>
                  <p className="text-[#3D6B8E] text-xs tracking-wide uppercase mb-2">{person.role}</p>
                  <p className="text-[#1A2332]/35 text-sm leading-relaxed">{person.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Ultra minimal, no container */}
      <section className="py-40 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            style={{ fontFamily: "'Instrument Serif', serif" }}
            className="text-5xl md:text-7xl mb-8"
          >
            Bereit für
            <br />
            <span className="text-[#3D6B8E]">Ihr Projekt?</span>
          </h2>
          <p className="text-[#1A2332]/30 text-sm mb-12 max-w-md mx-auto">
            Kostenlose Erstberatung. Unverbindlich. Wir freuen uns auf Ihre Nachricht.
          </p>
          <a
            href="mailto:hello@bm-web.de"
            className="group inline-flex items-center gap-3 bg-[#1A2332] text-[#F4F6F9] px-10 py-4 rounded-full text-sm font-medium hover:shadow-2xl hover:shadow-[#3D6B8E]/15 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            hello@bm-web.de
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 md:px-10 border-t border-[#1A2332]/[0.06]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#1A2332]/20">
          <span>&copy; 2026 Buchwald & May</span>
          <span>Mit Sorgfalt gebaut in Deutschland</span>
        </div>
      </footer>
    </div>
  )
}
