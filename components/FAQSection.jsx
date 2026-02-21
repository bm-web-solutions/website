'use client'

import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { BRAND } from '../lib/config'

const faqs = [
  {
    q: `Was kostet eine Landingpage bei ${BRAND.name}?`,
    a: 'Unser Preis hängt vom Umfang ab: Anzahl der Bereiche, benötigte Funktionalität und Zeitrahmen spielen eine Rolle. Im Erstgespräch klären wir, was Ihr Projekt braucht, und nennen Ihnen ein konkretes Angebot – transparent und ohne Überraschungen.',
  },
  {
    q: 'Wie lange dauert die Entwicklung einer Landingpage?',
    a: 'Eine fokussierte Landingpage entwickeln wir typischerweise in 2–4 Wochen – von Briefing bis Launch. Der größte Zeitfaktor ist die Abstimmung von Inhalten und Feedback. Wenn Texte und Ziele von Anfang an klar sind, geht es deutlich schneller.',
  },
  {
    q: 'Für wen ist eine Landingpage sinnvoll?',
    a: 'Für Dienstleister, Freelancer, lokale Unternehmen und B2B-Anbieter, die ein konkretes Angebot sauber online positionieren wollen. Wer eine Allround-Website für zehn verschiedene Themen sucht, ist bei uns nicht richtig – wer ein klares Angebot hat, sehr wohl.',
  },
  {
    q: 'Was unterscheidet eine Landingpage von einer normalen Website?',
    a: 'Eine Landingpage hat ein einziges Ziel: Besucher dazu zu bringen, eine konkrete Aktion durchzuführen – Kontakt aufnehmen, anfragen, buchen. Sie ist schlanker, klarer und auf Conversion ausgerichtet. Eine normale Website bildet ein gesamtes Unternehmen ab; eine Landingpage fokussiert auf genau ein Angebot.',
  },
  {
    q: 'Kümmert ihr euch auch um Hosting und Wartung nach dem Launch?',
    a: 'Ja – wir begleiten Sie in den ersten Wochen nach dem Launch und helfen bei der Einrichtung des Hostings. Für laufende Wartung, Inhaltspflege und Anpassungen sprechen wir gerne eine individuelle Vereinbarung durch.',
  },
  {
    q: `Arbeitet ihr auch mit Kunden außerhalb von ${BRAND.locations.join(' und ')}?`,
    a: `Ja, deutschlandweit und remote. Unsere Schwerpunkte liegen in ${BRAND.locations.join(' und ')}, aber ein Webprojekt lässt sich problemlos über Videokonferenz und gemeinsame Tools abstimmen – ohne Qualitätsverlust.`,
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-28 px-6 md:px-10 scroll-mt-24">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">FAQ</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            Häufige
            <br />
            Fragen.
          </h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, index) => {
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`

            return (
              <div key={faq.q} className="border-t border-ink/10 last:border-b">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                  aria-expanded={openIndex === index}
                  aria-controls={panelId}
                  id={buttonId}
                >
                  <span className="text-base font-semibold leading-snug group-hover:text-primary transition-colors duration-200">
                    {faq.q}
                  </span>
                  <span className="shrink-0 w-7 h-7 rounded-full border border-ink/15 flex items-center justify-center text-ink/50 mt-0.5 group-hover:border-primary/50 group-hover:text-primary transition-all duration-200">
                    {openIndex === index ? (
                      <Minus className="w-3.5 h-3.5" aria-hidden="true" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                    )}
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  style={{
                    display: 'grid',
                    gridTemplateRows: openIndex === index ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.3s ease',
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <p className="pb-6 text-ink/65 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
