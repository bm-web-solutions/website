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
        message: data.message || 'Danke! Ihre Anfrage wurde versendet. Wir melden uns zeitnah zurueck.',
      })
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Senden fehlgeschlagen.'
      setSubmitState({
        status: 'error',
        message,
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
      <div>
        <label htmlFor="name" className="text-xs tracking-wider uppercase text-[#FFF8F0]/30 mb-2 block">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          maxLength={120}
          placeholder="Ihr Name"
          className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-5 py-4 text-[#FFF8F0] placeholder-[#FFF8F0]/20 focus:outline-none focus:border-[#C17E4F]/50 focus:bg-white/[0.07] transition-all duration-300"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-xs tracking-wider uppercase text-[#FFF8F0]/30 mb-2 block">
          E-Mail
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          maxLength={160}
          placeholder="ihre@email.de"
          className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-5 py-4 text-[#FFF8F0] placeholder-[#FFF8F0]/20 focus:outline-none focus:border-[#C17E4F]/50 focus:bg-white/[0.07] transition-all duration-300"
        />
      </div>
      <div>
        <label htmlFor="company" className="text-xs tracking-wider uppercase text-[#FFF8F0]/30 mb-2 block">
          Firma (optional)
        </label>
        <input
          id="company"
          type="text"
          name="company"
          maxLength={120}
          placeholder="Unternehmen"
          className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-5 py-4 text-[#FFF8F0] placeholder-[#FFF8F0]/20 focus:outline-none focus:border-[#C17E4F]/50 focus:bg-white/[0.07] transition-all duration-300"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-xs tracking-wider uppercase text-[#FFF8F0]/30 mb-2 block">
          Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={3000}
          rows={4}
          placeholder="Was bieten Sie an, fuer wen und was soll die Seite erreichen?"
          className="w-full bg-white/[0.05] border border-white/[0.08] rounded-xl px-5 py-4 text-[#FFF8F0] placeholder-[#FFF8F0]/20 focus:outline-none focus:border-[#C17E4F]/50 focus:bg-white/[0.07] transition-all duration-300 resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={submitState.status === 'submitting'}
        className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#C17E4F] to-[#D4956A] text-white px-8 py-4 rounded-xl text-sm font-medium hover:shadow-2xl hover:shadow-[#C17E4F]/30 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-300 mt-2"
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
