'use client'

import { Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactForm() {
  const [submitState, setSubmitState] = useState({ status: 'idle', message: '' })

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    setSubmitState({ status: 'submitting', message: '' })

    try {
      const payload = {
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company'),
        message: formData.get('message'),
        _honey: formData.get('_honey'),
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Senden fehlgeschlagen.')
      }

      form.reset()
      setSubmitState({
        status: 'success',
        message: data.message || 'Danke! Ihre Anfrage wurde versendet. Wir melden uns zeitnah zurück.',
      })
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Senden fehlgeschlagen.'
      setSubmitState({
        status: 'error',
        message,
      })
    }
  }

  const fieldClass =
    'w-full bg-white/5 border border-white/8 rounded-xl px-5 py-4 text-cream placeholder-cream/38 focus:outline-none focus:border-primary/50 focus:bg-white/7 transition-all duration-300'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div>
        <label htmlFor="name" className="text-xs tracking-wider uppercase text-cream/55 mb-2 block">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          maxLength={120}
          autoComplete="name"
          placeholder="z. B. Max Mustermann…"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="email" className="text-xs tracking-wider uppercase text-cream/55 mb-2 block">
          E-Mail
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          maxLength={160}
          autoComplete="email"
          spellCheck="false"
          placeholder="z. B. max@firma.de…"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="company" className="text-xs tracking-wider uppercase text-cream/55 mb-2 block">
          Firma (optional)
        </label>
        <input
          id="company"
          type="text"
          name="company"
          maxLength={120}
          autoComplete="organization"
          placeholder="z. B. Muster GmbH…"
          className={fieldClass}
        />
      </div>
      <div>
        <label htmlFor="message" className="text-xs tracking-wider uppercase text-cream/55 mb-2 block">
          Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={3000}
          rows={4}
          autoComplete="off"
          placeholder="Was bieten Sie an, für wen und was soll die Seite erreichen…"
          className={`${fieldClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={submitState.status === 'submitting'}
        className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-xl text-sm font-medium hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-300 mt-2"
      >
        {submitState.status === 'submitting' ? 'Wird gesendet...' : 'Nachricht senden'}
        <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </button>
      <p
        aria-live="polite"
        className={`min-h-6 text-sm leading-relaxed ${
          submitState.status === 'error' ? 'text-[#F8B4B4]' : 'text-[#C7F0D8]'
        }`}
      >
        {submitState.message}
      </p>
    </form>
  )
}
