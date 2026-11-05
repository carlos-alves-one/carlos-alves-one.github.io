'use client'

import { useEffect, useState } from 'react'
import { FaCoffee, FaClipboardCheck, FaLock, FaShieldAlt, FaUndoAlt, FaEnvelope, FaChevronDown } from 'react-icons/fa'

const steps = [
  {
    n: '01',
    icon: FaCoffee,
    tag: 'Free · no obligation',
    title: '30-minute Spreadsheet Audit',
    who: 'For owners, operations leads and finance leads',
    points: [
      'Share one weekly report on screen — a redacted copy is fine',
      'I’ll point out the 2–3 changes I would make first',
      'Written summary emailed within 2 working days',
      'No files sent, no recording, no hard sell',
    ],
    cta: { href: 'https://calendar.app.google/C1hnZvX1jpWYd2bv6', label: 'Book the free audit' },
  },
  {
    n: '02',
    icon: FaClipboardCheck,
    tag: 'Fixed fee · agreed in writing first',
    title: 'Reporting Review',
    who: 'The diagnostic that pays for itself',
    points: [
      'Hours timed with the person who actually runs the process',
      'A map of where errors can creep in each week',
      'A prioritised plan of 5–10 concrete actions',
      'Full refund if any of the three is missing by the agreed date',
      'The review fee is deducted from any follow-on build signed within 12 months',
    ],
    cta: null,
  },
  {
    n: '03',
    icon: FaLock,
    tag: 'You own everything',
    title: 'Build, test & handover',
    who: 'Fixed-price work in writing',
    points: [
      'Automated spreadsheets built inside your existing tools — no platform to buy',
      'Thorough testing on your real exports before handover',
      'Written handover notes so your team can run and adapt it themselves',
      'I work under a written data processing agreement and remove access when the work ends',
    ],
    cta: null,
  },
]

export default function Process() {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#process') setExpanded(true)
    }
    checkHash()
    window.addEventListener('hashchange', checkHash)
    return () => window.removeEventListener('hashchange', checkHash)
  }, [])

  return (
    <section id="process" className="py-16 px-6 sm:px-10 lg:px-16 bg-gray-50 border-t border-gray-100 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="section-eyebrow">How we work together</p>
          <h2 className="section-heading">Small, fixed-fee stages. Zero lock-in.</h2>
          <p className="section-intro mx-auto text-sm">
            Every engagement starts free. No subscription, no platform to buy, and full ownership of anything I build.
          </p>
        </div>

        {/* Compact 3-step chips (always visible) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex items-start gap-4">
            <span className="font-mono text-2xl font-extrabold text-accent-500 flex-shrink-0">01</span>
            <div>
              <p className="font-bold text-navy-900 text-sm">Free Spreadsheet Audit</p>
              <p className="text-gray-600 text-xs mt-1">30 minutes · share one report · get 2–3 quick wins, free.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex items-start gap-4">
            <span className="font-mono text-2xl font-extrabold text-accent-500 flex-shrink-0">02</span>
            <div>
              <p className="font-bold text-navy-900 text-sm">Reporting Review</p>
              <p className="text-gray-600 text-xs mt-1">Fixed-fee diagnostic with a refund guarantee.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex items-start gap-4">
            <span className="font-mono text-2xl font-extrabold text-accent-500 flex-shrink-0">03</span>
            <div>
              <p className="font-bold text-navy-900 text-sm">Build &amp; handover</p>
              <p className="text-gray-600 text-xs mt-1">Fixed price, your tools, you keep everything.</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-4">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 hover:text-accent-700 hover:underline px-3 py-1"
            aria-expanded={expanded}
          >
            <span>{expanded ? 'Hide process details' : 'See deliverables, refund guarantee & confidentiality'}</span>
            <FaChevronDown className={`text-xs transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Expandable full process */}
        {expanded && (
          <div className="mt-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((s) => (
                <div
                  key={s.n}
                  className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-2xl font-extrabold text-accent-500">{s.n}</span>
                      <div className="w-10 h-10 rounded-lg bg-accent-50 flex items-center justify-center">
                        <s.icon className="text-accent-500" />
                      </div>
                    </div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-navy-50 text-navy-800 mb-2">
                      {s.tag}
                    </span>
                    <h3 className="text-lg font-bold text-navy-900 mb-1">{s.title}</h3>
                    <p className="text-xs text-gray-500 mb-3">{s.who}</p>
                    <ul className="space-y-2 text-gray-700 text-xs leading-relaxed mb-5">
                      {s.points.map((p, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-1.5 flex-shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {s.cta && (
                    <a
                      href={s.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-center text-xs w-full py-2.5"
                    >
                      {s.cta.label} →
                    </a>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-xs">
              <div className="flex items-start gap-2.5">
                <FaShieldAlt className="text-accent-500 text-base flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-navy-900">Strict confidentiality</p>
                  <p className="text-gray-600 mt-0.5">Non-disclosure by default; client data is never shown publicly.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <FaUndoAlt className="text-accent-500 text-base flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-navy-900">Refund guarantee</p>
                  <p className="text-gray-600 mt-0.5">If any agreed deliverable is missing by the agreed date, the fee is refunded.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <FaLock className="text-accent-500 text-base flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-navy-900">You keep the code</p>
                  <p className="text-gray-600 mt-0.5">Written handover notes; access removed when work ends.</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <FaEnvelope className="text-accent-500 text-base flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-navy-900">Fast response</p>
                  <p className="text-gray-600 mt-0.5">Reply within one working day; appointments Mondays &amp; Fridays 3–6pm.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
