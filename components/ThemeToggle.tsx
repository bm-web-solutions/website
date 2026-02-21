'use client'

import { Moon, Sun } from 'lucide-react'

const THEME_STORAGE_KEY = 'bm-theme'

function getCurrentTheme(): 'light' | 'dark' {
  if (typeof document === 'undefined') return 'light'
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

export default function ThemeToggle() {
  const toggleTheme = () => {
    const nextTheme = getCurrentTheme() === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = nextTheme
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-ink/15 text-ink/70 hover:text-primary hover:border-primary/40 transition-colors"
      aria-label="Farbschema wechseln"
    >
      <Moon className="w-4 h-4 block dark:hidden" aria-hidden="true" />
      <Sun className="w-4 h-4 hidden dark:block" aria-hidden="true" />
    </button>
  )
}
