'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      aria-label="Hauptnavigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        scrolled ? 'backdrop-blur-md bg-cream/92 shadow-[0_1px_0_0_rgba(45,42,38,0.1)]' : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center group" aria-label="May &amp; Buchwald Web Solutions – Startseite">
          <div className="leading-tight">
            <div className="text-[13px] font-semibold text-ink">
              May <span className="text-primary">&amp;</span> Buchwald
            </div>
            <div className="text-[9px] tracking-[0.22em] uppercase text-ink/40 mt-0.5">
              Web Solutions
            </div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Prozess', id: 'prozess' },
            { label: 'Ansatz', id: 'ansatz' },
            { label: 'Team', id: 'team' },
            { label: 'Kontakt', id: 'kontakt' },
          ].map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-xs tracking-[0.15em] uppercase text-ink/55 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#kontakt"
          className="px-5 py-2 bg-ink text-cream rounded-full text-xs tracking-wider hover:bg-primary transition-colors duration-300"
        >
          Projekt starten
        </a>
      </div>
    </nav>
  )
}
