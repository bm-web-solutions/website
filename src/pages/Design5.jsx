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

function GlowingShape({ className, delay = 0 }) {
  return (
    <div
      className={`absolute rounded-full blur-[80px] animate-pulse ${className}`}
      style={{ animationDelay: `${delay}s`, animationDuration: '5s' }}
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
      className="min-h-screen text-[#F2EBE4] overflow-x-hidden"
    >
      {/* Dark warm background with ember glows */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#161210] via-[#1A1614] to-[#12100E]" />
        <GlowingShape className="w-[600px] h-[500px] bg-[#D4884C] opacity-[0.07] top-[-15%] right-[-5%]" delay={0} />
        <GlowingShape className="w-[500px] h-[550px] bg-[#E8A060] opacity-[0.06] bottom-[0%] left-[-15%]" delay={2} />
        <GlowingShape className="w-[400px] h-[400px] bg-[#F0B878] opacity-[0.05] top-[50%] right-[10%]" delay={4} />
        <GlowingShape className="w-[350px] h-[300px] bg-[#C47A3C] opacity-[0.06] top-[10%] left-[25%]" delay={1.5} />
        <div
          className="absolute w-[900px] h-[900px] rounded-full opacity-[0.04] blur-[120px] bg-[#E8A060] transition-transform duration-[3000ms] ease-out"
          style={{
            transform: `translate(${mousePos.x * 100 - 50}px, ${mousePos.y * 100 - 50}px)`,
            top: '15%',
            left: '20%',
          }}
        />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="text-xs tracking-[0.2em] uppercase text-[#F2EBE4]/30 hover:text-[#F2EBE4]/70 transition-colors"
          >
            &larr; Zurück
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4884C] to-[#E8A060] flex items-center justify-center text-[#161210] text-xs font-bold">
              BM
            </div>
          </div>
          <a
            href="mailto:hello@bm-web.de"
            className="px-5 py-2 bg-[#F2EBE4]/10 text-[#F2EBE4]/70 rounded-full text-xs tracking-wider hover:bg-[#D4884C] hover:text-white transition-all"
          >
            Let's talk
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-10 pt-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 bg-[#F2EBE4]/5 rounded-full text-xs tracking-wider uppercase mb-10 border border-[#F2EBE4]/5 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="w-2 h-2 rounded-full bg-[#D4884C] animate-pulse" />
            <span className="text-[#F2EBE4]/40">Buchwald & May — Web Studio</span>
          </div>

          <h1
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className={`text-[clamp(3rem,7.5vw,7rem)] leading-[1.05] mb-8 font-light transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Websites mit
            <br />
            <span className="bg-gradient-to-r from-[#D4884C] via-[#E8A060] to-[#F0B878] bg-clip-text text-transparent">
              Glut & Charakter
            </span>
          </h1>

          <p
            className={`text-lg md:text-xl text-[#F2EBE4]/30 max-w-xl mx-auto leading-relaxed mb-12 transition-all duration-1000 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Wir gestalten Landing Pages, die nicht nur schön aussehen, sondern
            bei Google gefunden werden und Besucher zu Kunden machen.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <a
              href="mailto:hello@bm-web.de"
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#D4884C] to-[#E8A060] text-[#161210] px-8 py-4 rounded-2xl text-sm font-semibold hover:shadow-2xl hover:shadow-[#D4884C]/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              Projekt anfragen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-medium border border-[#F2EBE4]/10 text-[#F2EBE4]/40 hover:border-[#D4884C]/40 hover:text-[#D4884C] transition-all"
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
                className="bg-[#F2EBE4]/[0.03] backdrop-blur-sm border border-[#F2EBE4]/[0.06] rounded-2xl p-6 text-center hover:bg-[#F2EBE4]/[0.06] hover:border-[#D4884C]/15 hover:shadow-lg hover:shadow-[#D4884C]/5 transition-all duration-500"
              >
                <div
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-3xl md:text-4xl mb-1 font-light text-[#F2EBE4]/80"
                >
                  {s.val}
                </div>
                <div className="text-[#F2EBE4]/20 text-xs tracking-wider uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-28 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.3em] uppercase text-[#D4884C] mb-4">Unser Prozess</p>
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-4xl md:text-6xl font-light"
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
                className="group bg-[#F2EBE4]/[0.03] backdrop-blur-sm border border-[#F2EBE4]/[0.06] rounded-3xl p-8 md:p-10 hover:bg-[#F2EBE4]/[0.06] hover:border-[#D4884C]/15 hover:shadow-xl hover:shadow-[#D4884C]/5 hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#D4884C]/10 flex items-center justify-center text-[#D4884C] shrink-0 group-hover:scale-110 group-hover:bg-[#D4884C]/15 transition-all duration-500">
                    {step.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[#F2EBE4]/10 text-xs font-mono">0{i + 1}</span>
                      <h3 className="text-xl font-semibold text-[#F2EBE4]/80">{step.title}</h3>
                    </div>
                    <p className="text-[#F2EBE4]/25 leading-relaxed">{step.desc}</p>
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
          <p className="text-xs tracking-[0.3em] uppercase text-[#D4884C] mb-4">Technologie</p>
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-4xl md:text-5xl mb-16 font-light"
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
                  className="px-5 py-2.5 bg-[#F2EBE4]/[0.03] border border-[#F2EBE4]/[0.06] rounded-full text-sm text-[#F2EBE4]/35 hover:bg-[#D4884C] hover:text-[#161210] hover:border-[#D4884C] transition-all duration-300 cursor-default"
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
            <p className="text-xs tracking-[0.3em] uppercase text-[#D4884C] mb-4">Das Team</p>
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-4xl md:text-5xl font-light"
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
                className="bg-[#F2EBE4]/[0.03] border border-[#F2EBE4]/[0.06] rounded-3xl p-8 hover:bg-[#F2EBE4]/[0.06] hover:border-[#D4884C]/15 hover:shadow-xl hover:shadow-[#D4884C]/5 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4884C] to-[#E8A060] flex items-center justify-center text-[#161210] text-lg font-bold mb-5">
                  {person.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold mb-1 text-[#F2EBE4]/80">{person.name}</h3>
                <p className="text-[#D4884C] text-sm mb-3">{person.role}</p>
                <p className="text-[#F2EBE4]/25 text-sm leading-relaxed">{person.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#D4884C]/10 to-[#E8A060]/5 border border-[#D4884C]/15 rounded-[2rem] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#D4884C] rounded-full opacity-[0.08] blur-[80px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#E8A060] rounded-full opacity-[0.06] blur-[80px] translate-y-1/2 -translate-x-1/3" />
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-4xl md:text-6xl mb-6 relative font-light"
            >
              Lassen Sie uns
              <br />
              etwas Großes bauen.
            </h2>
            <p className="text-[#F2EBE4]/25 mb-10 max-w-md mx-auto relative">
              Kostenlose Erstberatung. Unverbindlich. Wir freuen uns auf Ihr Projekt.
            </p>
            <a
              href="mailto:hello@bm-web.de"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#D4884C] to-[#E8A060] text-[#161210] px-8 py-4 rounded-2xl text-sm font-semibold hover:shadow-2xl hover:shadow-[#D4884C]/30 hover:-translate-y-0.5 transition-all duration-300 relative"
            >
              <Mail className="w-4 h-4" />
              hello@bm-web.de
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 md:px-10 border-t border-[#F2EBE4]/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#F2EBE4]/15">
          <span>&copy; 2026 Buchwald & May</span>
          <span>Mit Sorgfalt gebaut in Deutschland</span>
        </div>
      </footer>
    </div>
  )
}
