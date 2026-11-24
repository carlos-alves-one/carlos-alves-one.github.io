import type { Metadata } from 'next'
import SiteHeader from '@/components/SiteHeader'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  title: 'Booking confirmed | Carlos Alves Consulting',
  description:
    'Your free 30-minute Weekly-Report Walkthrough is confirmed. A calendar invite with the Google Meet link is on its way — here is what happens next.',
  alternates: { canonical: '/confirmation/' },
  openGraph: {
    type: 'website',
    url: 'https://carlosalves.uk/confirmation/',
    title: 'Booking confirmed | Carlos Alves Consulting',
    description:
      'Your free 30-minute Weekly-Report Walkthrough is confirmed. A calendar invite with the Google Meet link is on its way — here is what happens next.',
    siteName: 'Carlos Alves Consulting',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary',
    title: 'Booking confirmed | Carlos Alves Consulting',
    description:
      'Your free 30-minute Weekly-Report Walkthrough is confirmed. A calendar invite with the Google Meet link is on its way — here is what happens next.',
  },
}

const steps = [
  {
    n: '1',
    title: 'Check your inbox',
    text: 'A calendar invite is on its way to the email address you booked with. It has the date, the time and the Google Meet link for the call.',
  },
  {
    n: '2',
    title: 'We meet on Google Meet',
    text: 'The call is 30 minutes, video-first, and free. There is nothing to install — the link in your invite takes you straight in.',
  },
  {
    n: '3',
    title: 'We look at your weekly report together',
    text: 'How your numbers are put together today, where the retyping happens, and what a simpler week could look like. It is a conversation, not a test.',
  },
]

export default function ConfirmationPage() {
  return (
    <main className="min-h-screen bg-[#0e3733] text-[#f2f7f2] sector-page">
      <SiteHeader />

      <section className="pt-32 pb-10 px-7 sm:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-eyebrow">Booking confirmed</p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#f2f7f2] leading-tight">
            You&rsquo;re booked &mdash; thank you
          </h1>
          <p className="mt-5 text-lg md:text-xl text-[#d7e8df] leading-relaxed">
            Your free 30-minute Weekly-Report Walkthrough is confirmed. Thank you
            for booking &mdash; I look forward to speaking with you.
          </p>
        </div>
      </section>

      <section className="pb-8 px-7 sm:px-10 lg:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-center">What happens next</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            {steps.map((s) => (
              <article
                key={s.n}
                className="rounded-2xl bg-[#15413c] border border-[#2e6258] p-6"
              >
                <span className="inline-flex w-10 h-10 rounded-full bg-[#f0b269] text-[#241503] font-bold text-lg items-center justify-center">
                  {s.n}
                </span>
                <h3 className="mt-4 text-xl font-bold text-[#f2f7f2]">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#d7e8df]">
                  {s.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-7 sm:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-[#15413c] border border-[#2e6258] p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-[#f2f7f2]">What to have handy</h2>
            <p className="mt-3 text-[15px] md:text-base leading-relaxed text-[#d7e8df]">
              If you like, have a recent weekly report &mdash; or the spreadsheet you
              use today &mdash; open for the call. There is nothing to prepare in
              advance.
            </p>
            <h2 className="mt-6 text-2xl font-bold text-[#f2f7f2]">
              Need to change anything?
            </h2>
            <p className="mt-3 text-[15px] md:text-base leading-relaxed text-[#d7e8df]">
              If the time no longer suits, or anything needs changing, email{' '}
              <a
                href="mailto:carlos.alves.one@gmail.com"
                className="underline decoration-[#f0b269] underline-offset-2 text-[#f2f7f2] hover:text-white"
              >
                carlos.alves.one@gmail.com
              </a>{' '}
              and I will move or cancel the booking.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/" className="btn-primary">
              Back to the homepage &rarr;
            </a>
            <a href="mailto:carlos.alves.one@gmail.com" className="btn-secondary">
              Email Carlos
            </a>
          </div>

          <p className="mt-8 text-center text-sm text-[#d7e8df]">
            Not booked yet? You can book the free 30-minute walkthrough from the{' '}
            <a
              href="/"
              className="underline decoration-[#f0b269] underline-offset-2 text-[#f2f7f2] hover:text-white"
            >
              homepage
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  )
}
