'use client'

import { FaClipboardList, FaComments, FaEnvelopeOpenText, FaShieldAlt } from 'react-icons/fa'

const BOOKING_URL = 'https://calendar.app.google/C1hnZvX1jpWYd2bv6'

const covers = [
  {
    icon: FaClipboardList,
    title: 'Your weekly report',
    body: 'You share one weekly report on screen — a redacted copy is fine. We look at how the numbers are gathered today from booking, rota and finance exports.',
  },
  {
    icon: FaComments,
    title: 'Practical next steps',
    body: 'I walk through a few changes I would try first inside the spreadsheets you already own — no new platform, and nothing recorded.',
  },
  {
    icon: FaEnvelopeOpenText,
    title: 'Written summary',
    body: 'You receive a short written summary by email within two working days so your team can decide whether a deeper review is worth doing.',
  },
  {
    icon: FaShieldAlt,
    title: 'Boundaries',
    body: 'The conversation stays on reporting and data workflows. It is not clinical advice, treatment guidance or a compliance audit.',
  },
]

export default function HealthWalkthrough() {
  return (
    <section id="demos" className="py-14 px-6 sm:px-10 lg:px-16 bg-white border-t border-gray-100 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="section-eyebrow">Sample work</p>
          <h2 className="section-heading">What a walkthrough covers</h2>
          <p className="section-intro mx-auto text-sm">
            A clear, no-obligation session focused on how your weekly numbers are assembled — not a demo of someone else&apos;s results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {covers.map((c) => (
            <div
              key={c.title}
              className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-50 flex items-center justify-center mb-4">
                <c.icon className="text-accent-500 text-xl" />
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">{c.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-900 via-navy-950 to-slate-950 rounded-2xl p-6 sm:p-8 shadow-xl text-white border border-slate-800">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent-300 mb-2">Typical sources we discuss</p>
          <p className="text-lg sm:text-xl font-bold mb-4">Booking diaries, rota files, till or billing exports, and invoice folders</p>
          <p className="text-sm text-slate-300 leading-relaxed max-w-3xl mb-6">
            The aim is a single spreadsheet you own that refreshes from those exports — so costs, appointments, staffing and revenue sit in one place without retyping each week.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-300 hover:text-white font-semibold underline text-sm"
          >
            Book the free walkthrough to talk through your report →
          </a>
        </div>
      </div>
    </section>
  )
}
