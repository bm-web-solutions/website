'use client'

import { Moon, Sun } from 'lucide-react'

const THEME_STORAGE_KEY = 'bm-theme'

function getCurrentTheme(): 'light' | 'dark' {
  if (typeof document === 'undefined') return 'light'
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

type ViewTransitionDoc = Document & {
  startViewTransition?: (updateCallback: () => void) => void
}

export default function ThemeToggle() {
  const toggleTheme = () => {
    const nextTheme = getCurrentTheme() === 'dark' ? 'light' : 'dark'
    const applyTheme = () => {
      document.documentElement.dataset.theme = nextTheme
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      applyTheme()
      return
    }

    const doc = document as ViewTransitionDoc
    if (typeof doc.startViewTransition === 'function') {
      doc.startViewTransition(() => applyTheme())
      return
    }

    applyTheme()
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-9 h-9 rounded-full border border-ink/15 text-ink/70 hover:text-primary hover:border-primary/40 transition-colors overflow-hidden"
      aria-label="Farbschema wechseln"
    >
      <Moon
        className="absolute w-4 h-4 opacity-100 scale-100 rotate-0 transition-all duration-300 ease-out dark:opacity-0 dark:scale-75 dark:rotate-90"
        aria-hidden="true"
      />
      <Sun
        className="absolute w-4 h-4 opacity-0 scale-75 -rotate-90 transition-all duration-300 ease-out dark:opacity-100 dark:scale-100 dark:rotate-0"
        aria-hidden="true"
      />
    </button>
  )
}
