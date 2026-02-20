import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const designs = [
  { path: '/1', name: 'Organic', desc: 'Warm flowing gradients & curves' },
  { path: '/2', name: 'Lagoon', desc: 'Cool oceanic blues & serene depth' },
  { path: '/3', name: 'Dusk', desc: 'Twilight purples & rose accents' },
  { path: '/4', name: 'Moss', desc: 'Earthy sage greens & natural calm' },
  { path: '/5', name: 'Ember', desc: 'Dark warmth with amber glow' },
  { path: '/6', name: 'Cloud', desc: 'Ethereal silver-blue & softness' },
]

export default function Home() {
  return (
    <div
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-8"
    >
      <h1
        style={{ fontFamily: "'Instrument Serif', serif" }}
        className="text-5xl md:text-7xl mb-4 text-center"
      >
        B&M Web Studio
      </h1>
      <p className="text-neutral-400 text-lg mb-16 text-center max-w-md">
        6 Landing Page Designs — Buchwald & May
      </p>
      <div className="grid gap-4 w-full max-w-xl">
        {designs.map((d, i) => (
          <Link
            key={d.path}
            to={d.path}
            className="group flex items-center justify-between border border-neutral-800 rounded-xl px-6 py-5 hover:border-neutral-600 hover:bg-neutral-900/50 transition-all duration-300"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center gap-4">
              <span className="text-neutral-600 text-sm font-mono">0{i + 1}</span>
              <div>
                <span className="text-lg font-medium">{d.name}</span>
                <p className="text-neutral-500 text-sm">{d.desc}</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </Link>
        ))}
      </div>
    </div>
  )
}
