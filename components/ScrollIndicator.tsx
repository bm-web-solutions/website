'use client'

import { useEffect, useRef, useState } from 'react'

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(false)
  const timerRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const schedule = () => {
      if (timerRef.current !== undefined) {
        clearTimeout(timerRef.current)
      }
      setVisible(false)
      timerRef.current = window.setTimeout(() => setVisible(true), 3000)
    }

    const onScroll = () => {
      if (window.scrollY > 80) {
        setVisible(false)
        if (timerRef.current !== undefined) {
          clearTimeout(timerRef.current)
        }
      } else if (window.scrollY < 20) {
        schedule()
      }
    }

    schedule()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      if (timerRef.current !== undefined) {
        clearTimeout(timerRef.current)
      }
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className={`absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none transition-[opacity,transform] duration-1000 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      }`}
    >
      <div className="w-6 h-10 rounded-full border-2 border-ink/20 flex justify-center pt-2">
        <div className="w-1 h-2 bg-primary rounded-full animate-scroll-dot" />
      </div>
    </div>
  )
}
