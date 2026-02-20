import { useState, useEffect } from 'react'
import { ArrowRight, Sparkles, Zap, BarChart3, Palette, Mail, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const process_steps = [
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: 'Beratung',
    desc: 'Wir lernen Ihr Geschäft kennen und definieren gemeinsam Ziele, Zielgruppe und Tonalität.',
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: 'Design',
    desc: 'Individuelles Design, das Ihre Marke widerspiegelt — keine Templates, keine Kompromisse.',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Entwicklung',
    desc: 'Sauberer Code mit Next.js. Blitzschnell, SEO-optimiert, mobilfreundlich.',
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: 'Launch & Wachstum',
    desc: 'Deployment, Analytics-Setup und fortlaufende Optimierung für nachhaltigen Erfolg.',
  },
]

function FloatingBlob({ className, delay = 0 }) {
  return (
    <div
      className={`absolute rounded-full blur-3xl animate-pulse ${className}`}
      style={{ animationDelay: `${delay}s`, animationDuration: '7s' }}
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
    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="min-h-screen text-[#2A2520] overflow-x-hidden">

      {/* Background: warm parchment + copper blobs */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FAF8F4] via-[#F5EFE6] to-[#EDE4D8]" />
        <FloatingBlob className="w-[700px] h-[600px] bg-[#D4A87C] opacity-[0.18] top-[-15%] right-[-10%]" delay={0} />
        <FloatingBlob className="w-[500px] h-[600px] bg-[#C4906A] opacity-[0.15] bottom-[-5%] left-[-15%]" delay={2.5} />
        <FloatingBlob className="w-[400px] h-[380px] bg-[#E0B88A] opacity-[0.12] top-[45%] right-[25%]" delay={4} />
        <div
          className="absolute w-[900px] h-[900px] rounded-full blur-[120px] bg-[#C49060] opacity-[0.07] transition-transform duration-[3000ms] ease-out"
          style={{
            transform: `translate(${mousePos.x * 80 - 40}px, ${mousePos.y * 80 - 40}px)`,
            top: '10%',
            left: '15%',
          }}
        />
      </div>

      {/* Nav: full-bleed, no max-width container */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="px-8 md:px-16 py-5 flex items-center justify-between">
          <Link to="/" className="text-xs tracking-[0.2em] uppercase text-[#2A2520]/40 hover:text-[#2A2520] transition-colors">
            ← Zurück
          </Link>
          <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-lg tracking-wider text-[#2A2520]/35 font-normal">
            Buchwald & May
          </span>
          <a
            href="mailto:hello@bm-web.de"
            className="px-5 py-2 border border-[#2A2520]/15 rounded-full text-xs tracking-wider text-[#2A2520]/55 hover:bg-[#2A2520] hover:text-[#FAF8F4] hover:border-transparent transition-all duration-300"
          >
            Let's talk
          </a>
        </div>
      </nav>

      {/* Hero: LEFT-ALIGNED, editorial */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 pt-28 pb-16">
        <div className="max-w-5xl">
          <div
            className={`inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#2A2520]/[0.04] rounded-full text-xs tracking-[0.25em] uppercase mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B87C50] animate-pulse" />
            Web Studio — Buchwald & May
          </div>

          <h1
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3.8rem, 10vw, 10rem)', lineHeight: '0.92' }}
            className={`font-normal mb-12 transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Websites
            <br />
            die{' '}
            <em className="italic text-[#B87C50]">wirken.</em>
          </h1>

          <div
            className={`flex flex-col md:flex-row gap-10 items-start transition-all duration-1000 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-[#2A2520]/50 text-lg leading-relaxed max-w-xs">
              Landing Pages, die bei Google gefunden werden und Besucher zu Kunden machen.
            </p>
            <div className="flex flex-col gap-3 shrink-0">
              <a
                href="mailto:hello@bm-web.de"
                className="group inline-flex items-center gap-3 bg-[#2A2520] text-[#FAF8F4] px-8 py-4 rounded-2xl text-sm hover:shadow-xl hover:shadow-[#B87C50]/15 hover:-translate-y-0.5 transition-all duration-300"
              >
                Projekt anfragen
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#process" className="text-sm text-[#2A2520]/35 hover:text-[#B87C50] transition-colors flex items-center gap-2 pl-1">
                Unser Prozess anschauen <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Markers: HORIZONTAL RULE with dividers — no card backgrounds */}
      <section className="border-t border-b border-[#2A2520]/[0.07]">
        <div className="px-8 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#2A2520]/[0.07]">
            {[
              { val: '50+', label: 'Projekte' },
              { val: '100%', label: 'Lighthouse Score' },
              { val: '<1s', label: 'Ladezeit' },
              { val: '24h', label: 'Antwortzeit' },
            ].map((s, i) => (
              <div key={i} className="py-10 px-8 text-center">
                <div
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="text-4xl md:text-5xl font-light mb-1.5"
                >
                  {s.val}
                </div>
                <div className="text-[#2A2520]/25 text-xs tracking-[0.25em] uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process: VERTICAL LIST with ghost step numbers in background */}
      <section id="process" className="py-28 px-8 md:px-16">
        <div className="max-w-4xl">
          <div className="mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#B87C50] mb-5">Unser Prozess</p>
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-4xl md:text-6xl font-normal"
            >
              Vom Gespräch
              <br />
              zur fertigen Seite
            </h2>
          </div>

          <div>
            {process_steps.map((step, i) => (
              <div
                key={i}
                className="group relative border-t border-[#2A2520]/[0.07] py-10 grid grid-cols-[72px_1fr] gap-6 items-start overflow-hidden"
              >
                {/* Giant ghost step number */}
                <span
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  className="absolute right-0 top-1 text-[7rem] leading-none font-light text-[#2A2520] opacity-[0.035] pointer-events-none select-none"
                >
                  0{i + 1}
                </span>
                {/* Icon */}
                <div className="flex flex-col items-start gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#B87C50]/10 flex items-center justify-center text-[#B87C50] group-hover:bg-[#B87C50]/20 group-hover:scale-110 transition-all duration-300">
                    {step.icon}
                  </div>
                  <span className="text-[0.6rem] font-mono text-[#2A2520]/20 tracking-widest">0{i + 1}</span>
                </div>
                {/* Content */}
                <div>
                  <h3
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    className="text-2xl md:text-3xl font-normal mb-3 group-hover:text-[#B87C50] transition-colors duration-300"
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#2A2520]/45 leading-relaxed text-[0.9rem]">{step.desc}</p>
                </div>
              </div>
            ))}
            <div className="border-t border-[#2A2520]/[0.07]" />
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="py-20 px-8 md:px-16 bg-[#2A2520]/[0.02]">
        <div className="max-w-4xl">
          <p className="text-xs tracking-[0.3em] uppercase text-[#B87C50] mb-8">Technologie</p>
          <div className="flex flex-wrap gap-2">
            {['Next.js', 'React', 'TailwindCSS', 'shadcn/ui', 'Bun', 'Vercel', 'TypeScript', 'Lucide'].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 border border-[#2A2520]/10 rounded-full text-sm text-[#2A2520]/50 hover:bg-[#2A2520] hover:text-[#FAF8F4] hover:border-transparent transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Team: HORIZONTAL ROWS, not grid cards */}
      <section className="py-28 px-8 md:px-16">
        <div className="max-w-4xl">
          <div className="mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-[#B87C50] mb-5">Das Team</p>
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-4xl md:text-5xl font-normal"
            >
              Persönlich. Direkt. Engagiert.
            </h2>
          </div>
          {[
            {
              name: 'Marvin Buchwald',
              role: 'Entwickler & Design',
              desc: 'Bringt ein Auge für Ästhetik und ein Gespür für Nutzerführung mit.',
              init: 'MB',
            },
            {
              name: 'Vincent May',
              role: 'Entwickler & Technik',
              desc: 'Sorgt für die technische Exzellenz unter der Haube jeder Website.',
              init: 'VM',
            },
          ].map((person, i) => (
            <div
              key={i}
              className="group border-t border-[#2A2520]/[0.07] py-8 flex flex-col md:grid md:grid-cols-[100px_220px_1fr] gap-6 md:gap-10 items-start md:items-center hover:bg-[#2A2520]/[0.02] transition-colors duration-300 -mx-4 px-4 rounded-xl"
            >
              <div
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-4xl font-light text-[#B87C50]/40 group-hover:text-[#B87C50]/70 transition-colors duration-400"
              >
                {person.init}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{person.name}</h3>
                <p className="text-[#B87C50] text-sm">{person.role}</p>
              </div>
              <p className="text-[#2A2520]/40 text-sm leading-relaxed">{person.desc}</p>
            </div>
          ))}
          <div className="border-t border-[#2A2520]/[0.07]" />
        </div>
      </section>

      {/* CTA: FULL-WIDTH dark section, no card container */}
      <section className="py-32 px-8 md:px-16 bg-[#2A2520] text-[#FAF8F4] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B87C50] rounded-full opacity-[0.12] blur-[100px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E0B890] rounded-full opacity-[0.08] blur-[80px] -translate-x-1/3 translate-y-1/3" />
        <div className="max-w-4xl relative">
          <p className="text-xs tracking-[0.3em] uppercase text-[#B87C50] mb-8">Loslegen</p>
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.8rem, 6vw, 6.5rem)', lineHeight: '1.05' }}
            className="font-normal mb-8"
          >
            Lassen Sie uns
            <br />
            <em className="italic text-[#D4A87C]">etwas Großes</em> bauen.
          </h2>
          <p className="text-[#FAF8F4]/30 text-lg mb-12 max-w-md">
            Kostenlose Erstberatung. Unverbindlich. Wir freuen uns auf Ihr Projekt.
          </p>
          <a
            href="mailto:hello@bm-web.de"
            className="group inline-flex items-center gap-3 border border-[#FAF8F4]/15 px-8 py-4 rounded-2xl text-sm hover:bg-[#B87C50] hover:border-[#B87C50] transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            hello@bm-web.de
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 md:px-16 bg-[#2A2520] border-t border-[#FAF8F4]/[0.05]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#FAF8F4]/15">
          <span>© 2026 Buchwald & May</span>
          <span>Mit Sorgfalt gebaut in Deutschland</span>
        </div>
      </footer>
    </div>
  )
}
