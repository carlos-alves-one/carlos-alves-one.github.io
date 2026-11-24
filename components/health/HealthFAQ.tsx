'use client'

import { useEffect, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const faqs = [
  {
    q: 'Will we need to buy new software or subscriptions?',
    a: 'No. Everything is built inside the spreadsheets you already own — typically Excel or Google Sheets — plus free built-in tools like Power Query. There are no licences to pay, no monthly subscriptions, and nothing to rent.',
  },
  {
    q: 'How do you handle confidentiality and GDPR?',
    a: 'My consultancy work is conducted under strict confidentiality. I work under a written data processing agreement, never disclose client data, and remove my access as soon as the project ends. I do not provide clinical advice or regulatory certification; the work is limited to reporting and data workflows.',
  },
  {
    q: 'What actually happens in the free 30-minute Weekly-Report Walkthrough?',
    a: 'You share one weekly report on screen (a redacted copy is fine). I walk you through a few changes I would make first and email a written summary within two working days. No files are transferred, nothing is recorded, and there is no obligation to continue.',
  },
  {
    q: 'How does your pricing work?',
    a: 'Every stage is fixed-price and agreed in writing before work starts. The Reporting Review even includes a full refund guarantee: if any of the agreed deliverables is missing by the agreed date, you get your money back. That review fee is also deducted from any follow-on build signed within twelve months.',
  },
  {
    q: 'Who owns what you build?',
    a: 'You do. Every formula is unlocked, you receive written handover notes so your team can run and adapt the report yourselves, and I am available afterward only if you want me to be.',
  },
  {
    q: 'Which businesses are you a good fit for?',
    a: 'UK private clinics and dental practices, gyms and fitness studios, care homes and home care providers, and wellness coaches and therapists — where weekly reporting is still assembled by hand from booking, rota, invoice and finance exports. A free walkthrough is usually enough to tell whether automation is worth doing.',
  },
]

const homeFaqs = [
  {
    q: 'Do I need to buy new software?',
    a: 'No. Everything is built in Excel or Google Sheets — the tools you already use. There is no new platform and no monthly subscription, and you own the finished spreadsheet outright, formulas unlocked.',
  },
  {
    q: 'What happens in the free walkthrough?',
    a: 'You share one weekly report on screen for 30 minutes — a redacted copy is fine. I show you 2–3 quick wins on the call, and for health & wellness clients you also get a short written summary by email within two working days. Nothing is recorded.',
  },
  {
    q: 'How much does it cost after the free call?',
    a: "Each next stage is a small, fixed fee agreed before you commit — the Reporting Review is a fixed-fee diagnostic with a refund guarantee, and any build is quoted at a fixed price upfront. There's no hourly meter running and no lock-in.",
  },
  {
    q: 'Is my data kept confidential?',
    a: 'Yes. Demonstrations on this site use clearly labelled dummy data to protect client confidentiality, and you can share a redacted report for the walkthrough.',
  },
  {
    q: 'When can I book, and what if those times don\'t suit?',
    a: "Walkthroughs run on Mondays and Fridays, 3–6pm UK time. If you need another time, send me a message with a couple of options and I'll do my best to fit you in. I reply within one working day.",
  },
]

export default function HealthFAQ() {
  const [open, setOpen] = useState<number | null>(0)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#faq') setShowAll(true)
    }
    checkHash()
    window.addEventListener('hashchange', checkHash)
    return () => window.removeEventListener('hashchange', checkHash)
  }, [])

  return (
    <section id="faq" className="py-16 px-6 sm:px-10 lg:px-16 bg-gray-50 border-t border-gray-100 scroll-mt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [...faqs, ...homeFaqs].map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <p className="section-eyebrow">Frequently asked questions</p>
          <h2 className="section-heading">Everything you might wonder before booking</h2>
          <p className="section-intro mx-auto text-sm">
            Honest answers upfront. If your question is not here, ask it during the free walkthrough.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                hidden={!showAll && i >= 3}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-navy-900 text-sm sm:text-base hover:text-accent-600 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{f.q}</span>
                  <FaChevronDown
                    className={`text-accent-500 text-xs flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  hidden={!isOpen}
                  className="px-5 pb-5 text-xs sm:text-sm text-gray-700 leading-relaxed border-t border-gray-100 pt-3"
                >
                  {f.a}
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 hover:text-accent-700 hover:underline px-3 py-1"
            aria-expanded={showAll}
          >
            <span>{showAll ? 'Show fewer questions' : 'Show more questions (pricing, ownership, fit)'}</span>
            <FaChevronDown className={`text-xs transition-transform duration-200 ${showAll ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </section>
  )
}
