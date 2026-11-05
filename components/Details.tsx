export default function Details() {
  return (
    <section id="details" className="py-20 px-8 sm:px-12 lg:px-16 bg-gray-50 border-t border-gray-200 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="section-eyebrow">More about my work</p>
          <h2 className="section-heading">
            How I work
          </h2>
          <p className="section-intro mx-auto max-w-4xl">
            Many catering and hospitality teams close the week the same way.
            Exports from the till, the ordering system and supplier invoices get copied by hand into spreadsheets that don&apos;t link up.
            The report is late, and nobody is sure it&apos;s right.
            I fix that inside the spreadsheets you already use.
            No new platform to buy, no subscription.
          </p>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {/* What I work on */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-3">
              <span aria-hidden="true">🔧</span>
              What I work on
            </h3>
            <ul className="space-y-3 text-gray-700 text-base leading-relaxed list-disc list-inside">
              <li>Weekly sales, labour and cost reports that refresh when you drop in the week&apos;s exports, instead of being retyped</li>
              <li>One view of spend, orders and stock across your sites or events</li>
              <li>Supplier invoices checked against orders</li>
              <li>Waste and spend by event or menu, so you can see which work makes money</li>
              <li>Simple ordering forecasts your chef can follow and check</li>
            </ul>
          </div>

          {/* Why I know this work */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-3">
              <span aria-hidden="true">💼</span>
              Why I know this work
            </h3>
            <ul className="space-y-3 text-gray-700 text-base leading-relaxed list-disc list-inside">
              <li>2001–2008: ran a small software company in Portugal.</li>
              <li>2008–2013: Purchasing Manager, Aqua Restaurant Group, London (two restaurants and six bars on one site). I bought about £100k of beverages a month, keyed in every invoice and ran the monthly stocktake by hand.</li>
              <li>2013–2017: ran daily operations, cash reconciliation and compliance at a London money exchange and coffee shop.</li>
              <li>2019–2024: BSc Computer Science (First) and MSc Data Science and AI (Distinction), Goldsmiths, University of London.</li>
            </ul>
          </div>

          {/* Where I am now */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-3">
              <span aria-hidden="true">📍</span>
              Where I am now
            </h3>
            <div className="text-gray-700 text-base leading-relaxed space-y-3">
              <p>Independent Data & AI Consultant since September 2024, after my MSc.</p>
              <p>My consultancy work is conducted under strict confidentiality, protecting client information.</p>
              <p>The examples in my Featured section are demonstrations on sample data, labelled as such.</p>
              <p>They are not client results.</p>
            </div>
          </div>

          {/* How to start */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-3">
              <span aria-hidden="true">☕</span>
              How to start
            </h3>
            <div className="text-gray-700 text-base leading-relaxed space-y-3">
              <p>A free 30-minute Spreadsheet Audit, for owners, operations leads or finance leads.</p>
              <p>Share one weekly report on screen (a redacted copy is fine).</p>
              <p>I&apos;ll show you the 2–3 changes I&apos;d make first, then email a written summary within 2 working days.</p>
              <p>No files sent, no recording, no obligation.</p>
            </div>
          </div>

          {/* Next step, if it's worth it */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center gap-3">
              <span aria-hidden="true">📈</span>
              Next step, if it&apos;s worth it
            </h3>
            <div className="text-gray-700 text-base leading-relaxed space-y-3">
              <p>A Reporting Review.</p>
              <p>Fixed fee, agreed in writing before work starts.</p>
              <p>You get three written items:</p>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li>How many hours your current process takes, timed with the person who does it</li>
                <li>Where errors can creep in</li>
                <li>A prioritised plan of 5–10 actions</li>
              </ol>
              <p>If any of the three is missing by the agreed date, the fee is refunded.</p>
              <p>The fee comes off any follow-on build (fixed price, in writing) signed within 12 months.</p>
            </div>
          </div>

          {/* Ownership and booking */}
          <div className="bg-accent-50 p-8 rounded-xl border border-accent-200 shadow-sm">
            <div className="text-gray-700 text-base leading-relaxed space-y-4">
              <p className="flex items-start gap-3">
                <span aria-hidden="true" className="flex-shrink-0">🔒</span>
                <span>You own everything I build, with written handover notes. I work under a written data processing agreement and remove my access when the work ends.</span>
              </p>
              <p className="flex items-start gap-3">
                <span aria-hidden="true" className="flex-shrink-0">📅</span>
                <span>Click my website to book an appointment (<a href="https://carlos-alves-one.github.io/" className="text-accent-500 hover:text-accent-600 underline focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-1 rounded">https://carlos-alves-one.github.io/</a>), or email <a href="mailto:carlos.alves.one@gmail.com" className="text-accent-500 hover:text-accent-600 underline focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-1 rounded">carlos.alves.one@gmail.com</a>. I reply within one working day.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
