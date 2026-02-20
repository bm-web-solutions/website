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

const techItems = [
  { name: 'Next.js', top: '8%', left: '52%' },
  { name: 'React', top: '18%', left: '22%' },
  { name: 'TailwindCSS', top: '30%', left: '68%' },
  { name: 'shadcn/ui', top: '50%', left: '12%' },
  { name: 'Bun', top: '45%', left: '78%' },
  { name: 'Vercel', top: '65%', left: '38%' },
  { name: 'TypeScript', top: '72%', left: '62%' },
  { name: 'Lucide', top: '85%', left: '48%' },
]

function GlowingOrb({ color, size, top, left, delay = 0, blur = '80px', opacity = 0.08 }) {
  return (
    <div
      className="absolute rounded-full animate-pulse"
      style={{
        background: color,
        width: size,
        height: size,
        top,
        left,
        opacity,
        filter: `blur(${blur})`,
        animationDelay: `${delay}s`,
        animationDuration: '8s',
      }}
    />
  )
}

export default function Design3() {
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
      className="min-h-screen text-[#E2E6F0] overflow-x-hidden"
    >
      {/* Dark gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1117] via-[#121A24] to-[#0A0F15]" />

        {/* Glowing orbs */}
        <GlowingOrb color="#7C8FD4" size="600px" top="-8%" left="-5%" delay={0} blur="100px" opacity={0.1} />
        <GlowingOrb color="#5B6BBF" size="500px" top="50%" left="60%" delay={1.6} blur="120px" opacity={0.07} />
        <GlowingOrb color="#9BA8E0" size="450px" top="25%" left="35%" delay={3.2} blur="90px" opacity={0.06} />
        <GlowingOrb color="#6B5BA8" size="550px" top="70%" left="-10%" delay={4.8} blur="110px" opacity={0.08} />
        <GlowingOrb color="#4A5599" size="400px" top="10%" left="75%" delay={6.4} blur="80px" opacity={0.12} />

        {/* Mouse-tracked glow */}
        <div
          className="absolute w-[900px] h-[900px] rounded-full bg-[#7C8FD4] transition-transform duration-[3000ms] ease-out"
          style={{
            opacity: 0.04,
            filter: 'blur(120px)',
            transform: `translate(${mousePos.x * 120 - 60}px, ${mousePos.y * 120 - 60}px)`,
            top: '20%',
            left: '25%',
          }}
        />
      </div>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0D1117]/60 border-b border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="text-xs tracking-[0.2em] uppercase text-[#E2E6F0]/30 hover:text-[#E2E6F0] transition-colors"
          >
            &larr; Zurück
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7C8FD4] to-[#5B6BBF] flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-[#7C8FD4]/20">
              BM
            </div>
          </div>
          <a
            href="mailto:hello@bm-web.de"
            className="px-5 py-2 bg-[#7C8FD4]/15 text-[#9BA8E0] border border-[#7C8FD4]/20 rounded-full text-xs tracking-wider hover:bg-[#7C8FD4]/25 hover:border-[#7C8FD4]/40 hover:shadow-lg hover:shadow-[#7C8FD4]/10 transition-all duration-300"
          >
            Let's talk
          </a>
        </div>
      </nav>

      {/* Hero - centered with grid pattern overlay */}
      <section className="min-h-screen flex items-center justify-center px-6 md:px-10 pt-20 relative">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.03,
            backgroundImage:
              'repeating-linear-gradient(0deg, #E2E6F0 0px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #E2E6F0 0px, transparent 1px, transparent 60px)',
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div
            className={`inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/[0.04] backdrop-blur-sm border border-white/[0.06] rounded-full text-xs tracking-wider uppercase mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="w-2 h-2 rounded-full bg-[#7C8FD4] animate-pulse shadow-lg shadow-[#7C8FD4]/50" />
            <span className="text-[#9BA8E0]/70">Buchwald & May — Web Studio</span>
          </div>

          <h1
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            className={`text-[clamp(2.8rem,7vw,6.5rem)] leading-[1.05] mb-8 transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Websites mit
            <br />
            <span className="bg-gradient-to-r from-[#7C8FD4] via-[#9BA8E0] to-[#7C8FD4] bg-clip-text text-transparent">
              Präzision & Atmosphäre
            </span>
          </h1>

          <p
            className={`text-lg md:text-xl text-[#E2E6F0]/40 max-w-xl mx-auto leading-relaxed mb-12 transition-all duration-1000 delay-[400ms] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Wir gestalten Landing Pages, die nicht nur schön aussehen, sondern
            bei Google gefunden werden und Besucher zu Kunden machen.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-[600ms] ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <a
              href="mailto:hello@bm-web.de"
              className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#7C8FD4] to-[#5B6BBF] text-white px-8 py-4 rounded-2xl text-sm font-medium hover:shadow-2xl hover:shadow-[#7C8FD4]/25 hover:-translate-y-0.5 transition-all duration-300"
            >
              Projekt anfragen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-sm font-medium border border-white/[0.08] text-[#E2E6F0]/50 hover:border-[#7C8FD4]/30 hover:text-[#9BA8E0] hover:bg-white/[0.02] transition-all duration-300"
            >
              Unser Prozess
            </a>
          </div>
        </div>
      </section>

      {/* Trust Markers - single row with glowing dot separators */}
      <section className="py-16 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-6 md:gap-x-4">
            {[
              { val: '50+', label: 'Projekte' },
              { val: '100%', label: 'Lighthouse' },
              { val: '<1s', label: 'Ladezeit' },
              { val: '24h', label: 'Antwortzeit' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3 md:gap-4">
                <div className="flex items-center gap-2.5">
                  <span
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                    className="text-3xl md:text-4xl text-[#E2E6F0]"
                  >
                    {s.val}
                  </span>
                  <span className="text-[#E2E6F0]/30 text-xs tracking-wider uppercase">{s.label}</span>
                </div>
                {i < 3 && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7C8FD4] shadow-lg shadow-[#7C8FD4]/60 animate-pulse" style={{ animationDuration: '3s', animationDelay: `${i * 0.5}s` }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - 4 column horizontal layout with glowing top borders */}
      <section id="process" className="py-28 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.3em] uppercase text-[#7C8FD4] mb-4">Unser Prozess</p>
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              className="text-4xl md:text-6xl"
            >
              Vom Gespräch
              <br />
              zur fertigen Seite
            </h2>
          </div>

          {/* Horizontal scroll on mobile, 4-column on desktop */}
          <div className="flex md:grid md:grid-cols-4 gap-5 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory md:snap-none -mx-6 px-6 md:mx-0 md:px-0">
            {process_steps.map((step, i) => (
              <div
                key={i}
                className="group relative min-w-[280px] md:min-w-0 snap-center bg-white/[0.03] backdrop-blur-sm border border-white/[0.05] rounded-2xl p-7 hover:bg-white/[0.06] hover:border-[#7C8FD4]/20 transition-all duration-500"
              >
                {/* Glowing top border */}
                <div className="absolute top-0 left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-[#7C8FD4] to-transparent opacity-40 group-hover:opacity-80 animate-pulse rounded-full" style={{ animationDuration: '3s', animationDelay: `${i * 0.7}s` }} />

                <div className="flex items-center gap-3 mb-4 mt-2">
                  <div className="w-10 h-10 rounded-xl bg-[#7C8FD4]/10 border border-[#7C8FD4]/15 flex items-center justify-center text-[#7C8FD4] group-hover:bg-[#7C8FD4]/20 group-hover:shadow-lg group-hover:shadow-[#7C8FD4]/10 transition-all duration-500">
                    {step.icon}
                  </div>
                  <span className="text-[#E2E6F0]/15 text-xs font-mono">0{i + 1}</span>
                </div>
                <h3 className="text-lg font-medium mb-2 text-[#E2E6F0]">{step.title}</h3>
                <p className="text-[#E2E6F0]/35 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech - orbit / scattered arrangement */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#7C8FD4] mb-4">Technologie</p>
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
            className="text-4xl md:text-5xl mb-8"
          >
            Moderner Stack,
            <br />
            bewährte Ergebnisse
          </h2>

          {/* Scattered orbit-like arrangement */}
          <div className="relative w-full max-w-2xl mx-auto" style={{ height: '380px' }}>
            {/* Center glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-[#7C8FD4] opacity-[0.04] blur-[60px]" />

            {/* Orbit ring hints */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full border border-white/[0.03]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-white/[0.02]" />

            {techItems.map((tech, i) => (
              <span
                key={tech.name}
                className="absolute px-4 py-2 bg-white/[0.04] backdrop-blur-sm border border-white/[0.07] rounded-full text-sm text-[#9BA8E0]/80 hover:bg-[#7C8FD4]/15 hover:border-[#7C8FD4]/30 hover:text-[#E2E6F0] hover:shadow-lg hover:shadow-[#7C8FD4]/10 transition-all duration-300 cursor-default animate-pulse"
                style={{
                  top: tech.top,
                  left: tech.left,
                  transform: 'translate(-50%, -50%)',
                  animationDuration: `${6 + i * 0.5}s`,
                  animationDelay: `${i * 0.3}s`,
                }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Team - full width stacked cards with glowing left border */}
      <section className="py-28 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#7C8FD4] mb-4">Das Team</p>
            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              className="text-4xl md:text-5xl"
            >
              Persönlich. Direkt. Engagiert.
            </h2>
          </div>

          <div className="flex flex-col gap-5">
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
                className="group relative w-full bg-white/[0.03] backdrop-blur-sm border border-white/[0.05] rounded-2xl p-8 md:p-10 hover:bg-white/[0.05] hover:border-[#7C8FD4]/15 transition-all duration-500"
              >
                {/* Glowing left border */}
                <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-gradient-to-b from-transparent via-[#7C8FD4] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

                <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8 pl-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7C8FD4]/20 to-[#5B6BBF]/20 border border-[#7C8FD4]/15 flex items-center justify-center text-[#9BA8E0] text-lg font-bold shrink-0 group-hover:shadow-lg group-hover:shadow-[#7C8FD4]/15 transition-all duration-500">
                    {person.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-1 text-[#E2E6F0]">{person.name}</h3>
                    <p className="text-[#7C8FD4] text-sm mb-2">{person.role}</p>
                    <p className="text-[#E2E6F0]/35 text-sm leading-relaxed">{person.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - glassmorphic floating card with strong glow */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center relative">
          {/* Glow behind the card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[#7C8FD4] opacity-[0.08] blur-[100px] pointer-events-none" />

          <div className="relative bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] rounded-[2rem] p-12 md:p-20 overflow-hidden">
            {/* Inner corner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7C8FD4] rounded-full opacity-[0.06] blur-[80px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#5B6BBF] rounded-full opacity-[0.05] blur-[60px] translate-y-1/2 -translate-x-1/2" />

            <h2
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
              className="text-4xl md:text-6xl mb-6 relative"
            >
              Lassen Sie uns
              <br />
              etwas Großes bauen.
            </h2>
            <p className="text-[#E2E6F0]/30 mb-10 max-w-md mx-auto relative">
              Kostenlose Erstberatung. Unverbindlich. Wir freuen uns auf Ihr Projekt.
            </p>
            <a
              href="mailto:hello@bm-web.de"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#7C8FD4] to-[#5B6BBF] text-white px-8 py-4 rounded-2xl text-sm font-medium hover:shadow-2xl hover:shadow-[#7C8FD4]/30 hover:-translate-y-0.5 transition-all duration-300 relative"
            >
              <Mail className="w-4 h-4" />
              hello@bm-web.de
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 md:px-10 border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#E2E6F0]/20">
          <span>&copy; 2026 Buchwald & May</span>
          <span>Mit Sorgfalt gebaut in Deutschland</span>
        </div>
      </footer>
    </div>
  )
}
