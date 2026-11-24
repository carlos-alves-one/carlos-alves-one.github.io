// Pricing guide, ported verbatim from the approved homepage draft.
// No £ amount is published for stages 2 and 3 — none has been set.
// Do not invent one here.
const BOOKING_URL = 'https://calendar.app.google/C1hnZvX1jpWYd2bv6'

const stages = [
  {
    n: 'Stage 1',
    title: 'Weekly-Report Walkthrough',
    price: '£0',
    priceNote: 'Free · no obligation',
    bullets: [
      'Mondays & Fridays, 3–6pm UK time — other times by arrangement',
      'Nothing recorded',
    ],
  },
  {
    n: 'Stage 2',
    title: 'Reporting Review',
    price: 'Fixed fee',
    priceNote: 'Quoted after the free walkthrough, once the scope is clear',
    bullets: [
      'One fixed fee, agreed before the review starts',
      'Refund guarantee',
    ],
  },
  {
    n: 'Stage 3',
    title: 'Build & handover',
    price: 'Fixed price',
    priceNote: 'No hourly meter · no monthly subscription',
    bullets: [
      'One fixed price, quoted before we start',
      'You own everything outright — no lock-in',
    ],
  },
]

const quoteFactors = [
  'How many sites or locations the report has to cover, in one consistent format.',
  'How many exports need connecting — till, rota, booking system, invoices and finance files.',
  'How many views you need — by site, team or practitioner, plus the owner summary.',
]

export default function PricingGuide() {
  return (
    <section id="pricing" className="py-16 px-7 sm:px-10 lg:px-16 bg-[#eef6f2] border-t border-gray-100 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="section-eyebrow">Pricing guide</p>
          <h2 className="section-heading">Pricing guide — what each stage costs</h2>
          <p className="section-intro mx-auto text-sm">
            No hourly billing, no subscription and no software to buy. Every paid stage is a single fixed amount,
            agreed in writing before it starts — so the price below is the whole pricing model, not a starting
            point for surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stages.map((s) => (
            <div key={s.n} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col">
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-accent-600 mb-2">{s.n}</p>
              <h3 className="text-lg font-bold text-navy-900 mb-1">{s.title}</h3>
              <p className="text-2xl font-extrabold text-navy-900">{s.price}</p>
              <p className="text-xs text-gray-600 mb-4">{s.priceNote}</p>
              <ul className="space-y-2 text-xs text-gray-700 leading-relaxed">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-1.5 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-base font-bold text-navy-900 mb-2">How your fixed quote is worked out</h3>
          <ul className="space-y-2 text-xs sm:text-sm text-gray-700 leading-relaxed mb-5">
            {quoteFactors.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-1.5 flex-shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm text-center">
              Book the free walkthrough →
            </a>
            <a
              href="mailto:carlos.alves.one@gmail.com?subject=Question%20about%20pricing"
              className="btn-secondary text-sm text-center"
            >
              Ask about pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
