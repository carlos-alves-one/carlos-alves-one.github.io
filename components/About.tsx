'use client'

import { useEffect, useState } from 'react'
import { FaGraduationCap, FaUtensils, FaLaptopCode, FaStore, FaShieldAlt, FaChevronDown } from 'react-icons/fa'

const timeline = [
  {
    period: '2001–2008',
    title: 'Small software company, Portugal',
    role: 'Founder',
    desc: 'Learned to build systems end-to-end and explain them to non-technical customers.',
    icon: FaLaptopCode,
  },
  {
    period: '2008–2013',
    title: 'Aqua Restaurant Group, London',
    role: 'Purchasing Manager',
    desc: 'Two restaurants and six bars on one site — £100k of beverages a month. I keyed in every invoice by hand and ran the monthly stocktake myself. This is where the frustration behind this business comes from.',
    icon: FaUtensils,
  },
  {
    period: '2013–2017',
    title: 'Money exchange & coffee shop, London',
    role: 'Operations & compliance',
    desc: 'Daily operations, cash reconciliation and regulatory compliance. Every penny reconciled, every day.',
    icon: FaStore,
  },
  {
    period: '2019–2024',
    title: 'Goldsmiths, University of London',
    role: 'BSc Computer Science (First) · MSc Data Science & AI (Distinction)',
    desc: 'Five years of rigorous training in algorithms, data pipelines and practical machine learning, completed top of class.',
    icon: FaGraduationCap,
  },
  {
    period: '2024–present',
    title: 'Carlos Alves Consulting',
    role: 'Independent Data & AI Consultant, London',
    desc: 'Helping UK catering and hospitality businesses replace hand-compiled weekly reports with automated, self-refreshing spreadsheets. Based in London; client-driven, small fixed-fee stages, and you own everything I build.',
    icon: FaUtensils,
  },
]

export default function About() {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#about') setExpanded(true)
    }
    checkHash()
    window.addEventListener('hashchange', checkHash)
    return () => window.removeEventListener('hashchange', checkHash)
  }, [])

  return (
    <section id="about" className="py-16 px-6 sm:px-10 lg:px-16 bg-white border-t border-gray-100 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <p className="section-eyebrow">About me</p>
          <h2 className="section-heading">Hospitality experience, backed by AI training</h2>
        </div>

        {/* Compact founder card */}
        <div className="bg-gray-50 rounded-2xl p-7 sm:p-9 border border-gray-200">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-navy-900 to-accent-600 text-white font-mono font-bold text-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
              CA
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-navy-900">Carlos Alves</h3>
              <p className="text-sm font-semibold text-accent-600 mb-3">Independent Data &amp; AI Consultant, London</p>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-5">
                Hospitality purchasing manager turned data scientist. I buy £100k of stock a month, reconcile tills, chase invoices and run stocktakes — or at least I used to. Today I replace hand-typed weekly reports with automated spreadsheets UK catering and hospitality teams can trust.
              </p>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 text-xs">
                <span className="px-3 py-1.5 rounded-full bg-white border border-gray-200 font-semibold text-gray-700">5 years · £100k/mo purchasing at Aqua Restaurant Group</span>
                <span className="px-3 py-1.5 rounded-full bg-white border border-gray-200 font-semibold text-gray-700">MSc Data Science &amp; AI (Distinction) · Goldsmiths</span>
                <span className="px-3 py-1.5 rounded-full bg-white border border-gray-200 font-semibold text-gray-700">BSc Computer Science (First)</span>
                <span className="px-3 py-1.5 rounded-full bg-white border border-gray-200 font-semibold text-gray-700">London · independent since 2024</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-gray-200/80 text-center">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 hover:text-accent-700 hover:underline px-3 py-1"
              aria-expanded={expanded}
            >
              <span>{expanded ? 'Hide full background' : 'Read full background & timeline'}</span>
              <FaChevronDown className={`text-xs transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Expandable full background */}
        {expanded && (
          <div className="mt-8 space-y-6">
            <div className="bg-gradient-to-br from-navy-950 via-slate-900 to-navy-900 text-white rounded-2xl p-7 sm:p-9 shadow-lg border border-slate-800">
              <p className="text-xs font-mono uppercase tracking-widest text-accent-300 mb-2">Why this exists</p>
              <p className="text-lg sm:text-xl font-bold leading-snug mb-3">
                Most hospitality weekly reports are late, and nobody is sure they&apos;re right. I know — I used to be the person typing them.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                I keyed in every invoice by hand across two restaurants and six bars, and ran the monthly stocktake myself. This is where the frustration behind this business comes from. Today I build the spreadsheets that do that work automatically, inside the tools you already own — no new platform, no subscription, and you keep everything I build.
              </p>
            </div>

            <div className="space-y-4">
              {timeline.map((t) => (
                <div
                  key={t.period}
                  className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-1.5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent-50 flex items-center justify-center flex-shrink-0">
                        <t.icon className="text-accent-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-navy-900 text-base">{t.title}</h4>
                        <p className="text-xs font-semibold text-accent-600">{t.role}</p>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full self-start">
                      {t.period}
                    </span>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mt-2 sm:pl-13">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-accent-50 rounded-xl p-4 border border-accent-200 text-xs text-gray-700 flex items-start gap-3">
              <FaShieldAlt className="text-accent-500 text-base flex-shrink-0 mt-0.5" />
              <p>
                <strong>Confidentiality first:</strong> my consultancy work is conducted under strict confidentiality. The demonstrations in the sample section above are built on anonymised dummy data — clearly labelled, and never taken from client projects.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
