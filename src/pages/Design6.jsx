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

function FloatingShape({ className, delay = 0, opacity = 'opacity-15' }) {
  return (
    <div
      className={`absolute rounded-full ${opacity} blur-3xl ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '7s',
        animationName: 'rosewoodFloat',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        animationDirection: 'alternate',
      }}
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
      style={{ fontFamily: "'Manrope', sans-serif" }}
      className="min-h-screen text-[#2D1F24] overflow-x-hidden"
    >
      {/* Keyframes */}
      <style>{`
        @keyframes rosewoodFloat {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(25px, -18px) scale(1.04); }
          100% { transform: translate(-12px, 12px) scale(0.96); }
        }
      `}</style>

      {/* Warm blush gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAF5F5] via-[#F5ECEC] to-[#EDE2E2]" />
        <FloatingShape className="w-[550px] h-[550px] bg-[#D4A9B5] top-[-8%] right-[-3%]" delay={0} opacity="opacity-[0.16]" />
        <FloatingShape className="w-[450px] h-[450px] bg-[#C48F9E] bottom-[8%] left-[-8%]" delay={1.4} opacity="opacity-[0.14]" />
        <FloatingShape className="w-[600px] h-[600px] bg-[#B87A8A] top-[35%] left-[10%]" delay={3} opacity="opacity-[0.12]" />
        <FloatingShape className="w-[300px] h-[300px] bg-[#9E5A6D] top-[15%] right-[20%]" delay={4.5} opacity="opacity-[0.15]" />
        <FloatingShape className="w-[400px] h-[400px] bg-[#E0C4CC] bottom-[20%] right-[5%]" delay={5.5} opacity="opacity-20" />
        {/* Mouse-tracked rose glow */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-[0.08] blur-[120px] bg-[#B87A8A] transition-transform duration-[3000ms] ease-out"
          style={{
            transform: `translate(${mousePos.x * 120 - 60}px, ${mousePos.y * 120 - 60}px)`,
            top: '20%',
            left: '25%',
          }}
        />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-[#FAF5F5]/60">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="text-xs tracking-[0.2em] uppercase text-[#2D1F24]/40 hover:text-[#2D1F24] transition-colors"
          >
            &larr; Zurück
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#9E5A6D] to-[#B87A8A] flex items-center justify-center text-white text-xs font-bold tracking-wide">
              BM
            </div>
          </div>
          <a
            href="mailto:hello@bm-web.de"
            className="px-5 py-2 bg-[#2D1F24] text-[#FAF5F5] rounded-full text-xs tracking-wider hover:bg-[#9E5A6D] transition-colors duration-300"
          >
            Let's talk
          </a>
        </div>
      </nav>

      {/* Hero - CENTERED with decorative circle ring and elegant thin lines */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-10 pt-20 relative">
        {/* Decorative circle ring behind heading */}
        <div
          className={`absolute w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full border border-[#D4A9B5]/40 transition-all duration-[2000ms] ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
          style={{ top: '50%', left: '50%', transform: `translate(-50%, -55%) ${visible ? 'scale(1)' : 'scale(0.75)'}` }}
        />
        <div
          className={`absolute w-[350px] h-[350px] md:w-[520px] md:h-[520px] rounded-full border border-[#D4A9B5]/20 transition-all duration-[2500ms] delay-300 ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
          style={{ top: '50%', left: '50%', transform: `translate(-50%, -55%) ${visible ? 'scale(1)' : 'scale(0.75)'}` }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 bg-[#9E5A6D]/8 border border-[#9E5A6D]/10 rounded-full text-xs tracking-[0.2em] uppercase mb-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#9E5A6D] animate-pulse" />
            Buchwald & May — Web Studio
          </div>

          {/* Thin horizontal line above tagline */}
          <div
            className={`w-16 h-[1px] bg-[#9E5A6D]/30 mx-auto mb-6 transition-all duration-1000 delay-100 ${visible ? 'opacity-100 w-16' : 'opacity-0 w-0'}`}
          />

          <p
            className={`text-xs tracking-[0.35em] uppercase text-[#9E5A6D] mb-6 transition-all duration-1000 delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            Websites mit Eleganz & Anspruch
          </p>

          {/* Thin horizontal line below tagline */}
          <div
            className={`w-16 h-[1px] bg-[#9E5A6D]/30 mx-auto mb-10 transition-all duration-1000 delay-200 ${visible ? 'opacity-100 w-16' : 'opacity-0 w-0'}`}
          />

          <h1
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            className={`text-[clamp(3rem,8vw,7.5rem)] leading-[1.05] mb-8 transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Wir gestalten
            <br />
            <span className="bg-gradient-to-r from-[#9E5A6D] via-[#B87A8A] to-[#D4A9B5] bg-clip-text text-transparent">
              digitale Eleganz
            </span>
          </h1>

          <p
            className={`text-lg md:text-xl text-[#2D1F24]/45 max-w-lg mx-auto leading-relaxed mb-14 transition-all duration-1000 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Wir gestalten Landing Pages, die nicht nur schön aussehen, sondern
            bei Google gefunden werden und Besucher zu Kunden machen.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <a
              href="mailto:hello@bm-web.de"
              className="group inline-flex items-center justify-center gap-3 bg-[#2D1F24] text-[#FAF5F5] px-8 py-4 rounded-full text-sm font-medium hover:bg-[#9E5A6D] hover:shadow-2xl hover:shadow-[#9E5A6D]/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              Projekt anfragen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-medium border border-[#2D1F24]/10 text-[#2D1F24]/50 hover:border-[#9E5A6D]/40 hover:text-[#9E5A6D] transition-all duration-300"
            >
              Unser Prozess
            </a>
          </div>
        </div>
      </section>

      {/* Trust Markers - 2x2 grid with rose left borders and large serif numbers */}
      <section className="py-20 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { val: '50+', label: 'Projekte' },
              { val: '100%', label: 'Lighthouse' },
              { val: '<1s', label: 'Ladezeit' },
              { val: '24h', label: 'Antwortzeit' },
            ].map((s, i) => (
              <div
                key={i}
                className="group bg-white/40 backdrop-blur-sm border border-[#2D1F24]/5 rounded-2xl p-7 flex items-center gap-5 hover:bg-white/65 hover:shadow-lg hover:shadow-[#9E5A6D]/5 transition-all duration-500"
              >
                {/* Rose left border accent */}
                <div className="w-[3px] h-14 rounded-full bg-gradient-to-b from-[#9E5A6D] to-[#D4A9B5] opacity-60 group-hover:opacity-100 transition-opacity duration-500 shrink-0" />
                <div>
                  <div
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                    className="text-4xl md:text-5xl text-[#2D1F24] mb-0.5 leading-none"
                  >
                    {s.val}
                  </div>
                  <div className="text-[#2D1F24]/35 text-xs tracking-[0.2em] uppercase">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - HORIZONTAL CARD CAROUSEL */}
      <section id="process" className="py-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.35em] uppercase text-[#9E5A6D] mb-4">Unser Prozess</p>
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              className="text-4xl md:text-6xl"
            >
              Vom Gespräch
              <br />
              zur fertigen Seite
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process_steps.map((step, i) => (
              <div
                key={i}
                className="group bg-white/40 backdrop-blur-sm border border-[#2D1F24]/5 rounded-2xl overflow-hidden hover:bg-white/70 hover:shadow-xl hover:shadow-[#9E5A6D]/5 hover:-translate-y-1 transition-all duration-500"
              >
                {/* Rose-tinted gradient top section with icon */}
                <div className="bg-gradient-to-br from-[#F5ECEC] via-[#EDE2E2] to-[#E0C4CC]/40 p-7 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/60 border border-[#9E5A6D]/10 flex items-center justify-center text-[#9E5A6D] mb-4 group-hover:bg-[#9E5A6D] group-hover:text-white group-hover:border-[#9E5A6D] transition-all duration-500">
                    {step.icon}
                  </div>
                  <span
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                    className="text-5xl text-[#9E5A6D]/15 leading-none"
                  >
                    0{i + 1}
                  </span>
                </div>
                {/* White bottom section with text */}
                <div className="p-7 bg-white/30">
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-[#2D1F24]/40 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech - Elegant pill/capsule shapes with thin borders */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.35em] uppercase text-[#9E5A6D] mb-4">Technologie</p>
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
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
                  className="px-6 py-3 bg-transparent border border-[#9E5A6D]/20 rounded-full text-sm text-[#2D1F24]/55 hover:bg-[#9E5A6D] hover:text-white hover:border-[#9E5A6D] transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Team - EDITORIAL/MAGAZINE style with full-width sections */}
      <section className="py-28 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.35em] uppercase text-[#9E5A6D] mb-4">Das Team</p>
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              className="text-4xl md:text-5xl"
            >
              Persönlich. Direkt. Engagiert.
            </h2>
          </div>

          <div className="flex flex-col">
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
              <div key={i}>
                {/* Elegant thin separator line */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4A9B5]/50 to-transparent" />

                <div className="py-12 md:py-16 group">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 md:gap-12">
                    {/* Name in large serif */}
                    <div className="md:flex-1">
                      <h3
                        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                        className="text-4xl md:text-6xl text-[#2D1F24] group-hover:text-[#9E5A6D] transition-colors duration-500"
                      >
                        {person.name}
                      </h3>
                    </div>
                    {/* Role and description */}
                    <div className="md:flex-1 md:max-w-sm">
                      <p className="text-[#9E5A6D] text-sm tracking-wider uppercase mb-3">{person.role}</p>
                      <p className="text-[#2D1F24]/40 leading-relaxed">{person.desc}</p>
                    </div>
                  </div>
                </div>

                {/* Bottom line for last item */}
                {i === 1 && (
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4A9B5]/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Elegant contained card with subtle rose gradient */}
      <section className="py-28 px-6 md:px-10">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#F5ECEC] via-[#EDE2E2] to-[#E0C4CC]/50 border border-[#D4A9B5]/30 rounded-3xl p-12 md:p-20 text-center overflow-hidden">
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#9E5A6D] rounded-full opacity-[0.06] blur-[80px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#B87A8A] rounded-full opacity-[0.06] blur-[60px] translate-y-1/3 -translate-x-1/4" />

            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              className="text-4xl md:text-6xl mb-6 relative"
            >
              Lassen Sie uns
              <br />
              etwas Großes bauen.
            </h2>
            <p className="text-[#2D1F24]/35 mb-10 max-w-md mx-auto relative">
              Kostenlose Erstberatung. Unverbindlich. Wir freuen uns auf Ihr Projekt.
            </p>
            <a
              href="mailto:hello@bm-web.de"
              className="group inline-flex items-center gap-3 bg-[#2D1F24] text-[#FAF5F5] px-8 py-4 rounded-full text-sm font-medium hover:bg-[#9E5A6D] hover:shadow-2xl hover:shadow-[#9E5A6D]/20 hover:-translate-y-0.5 transition-all duration-300 relative"
            >
              <Mail className="w-4 h-4" />
              hello@bm-web.de
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 md:px-10 border-t border-[#2D1F24]/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#2D1F24]/25">
          <span>&copy; 2026 Buchwald & May</span>
          <span>Mit Sorgfalt gebaut in Deutschland</span>
        </div>
      </footer>
    </div>
  )
}
