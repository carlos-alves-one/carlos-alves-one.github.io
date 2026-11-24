export const homeFaqs = [
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

export function homeFaqMarkup() {
  const esc = (s: string) => s.replace(/&/g, '&amp;')
  return homeFaqs
    .map((f) => `        <div class="qa"><h3>${esc(f.q)}</h3><p>${esc(f.a)}</p></div>`)
    .join('\n')
}
