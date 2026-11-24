import type { Metadata } from 'next'
import SiteHeader from '@/components/SiteHeader'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Demos from '@/components/Demos'
import Process from '@/components/Process'
import PricingGuide from '@/components/PricingGuide'
import Guides from '@/components/Guides'
import About from '@/components/About'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import {
  HomeMovedStyle,
  MovedExamples,
  MovedHow,
  MovedSocial,
  MovedTop,
} from '@/components/from-home/MovedHome'

export const metadata: Metadata = {
  title: 'Hospitality & Catering | Carlos Alves Consulting',
  description:
    'Automating weekly reports, dashboards and forecasts for UK catering and hospitality businesses — built in your spreadsheets, no subscriptions.',
  alternates: { canonical: '/hospitality-catering/' },
  openGraph: {
    type: 'website',
    url: 'https://carlosalves.uk/hospitality-catering/',
    title: 'Hospitality & Catering | Carlos Alves Consulting',
    description:
      'Automating weekly reports, dashboards and forecasts for UK catering and hospitality businesses — built in your spreadsheets, no subscriptions.',
    siteName: 'Carlos Alves Consulting',
    locale: 'en_GB',
    images: [
      {
        url: 'https://carlosalves.uk/og/hospitality-catering-v2.png',
        width: 1200,
        height: 627,
        alt: 'Carlos Alves Consulting: Weekly reports without the retyping, for hospitality and catering businesses. Free 30-min Weekly-Report Walkthrough.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hospitality & Catering | Carlos Alves Consulting',
    description:
      'Automating weekly reports, dashboards and forecasts for UK catering and hospitality businesses — built in your spreadsheets, no subscriptions.',
    images: ['https://carlosalves.uk/og/hospitality-catering-v2.png'],
  },
}

export default function HospitalityCateringPage() {
  return (
    <main className="min-h-screen bg-[#0e3733] text-[#f2f7f2] sector-page">
      <HomeMovedStyle />
      <SiteHeader />
      <MovedTop />
      <Hero />
      <Services />
      <MovedHow sector="hosp" />
      <Process />
      <PricingGuide />
      <Demos />
      <MovedExamples sector="hosp" />
      <Guides sector="hosp" />
      <FAQ />
      <About />
      <MovedSocial />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  )
}
