import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

const siteUrl = 'https://carlosalves.uk'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Carlos Alves Consulting — Data & AI for UK operators',
  description:
    'Independent Data & AI consultancy for UK hospitality and health & wellness businesses: reporting automation, KPI dashboards, invoice reconciliation and forecasting — built in the spreadsheets you already use.',
  keywords:
    'hospitality reporting automation, health wellness reporting, UK catering dashboards, clinic reporting spreadsheets, spreadsheet automation, invoice reconciliation, forecasting, data science consulting London',
  authors: [{ name: 'Carlos Alves' }],
  creator: 'Carlos Alves',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Carlos Alves Consulting — Data & AI for UK operators',
    description:
      'Independent Data & AI consultancy for UK hospitality and health & wellness businesses: reporting automation, KPI dashboards, invoice reconciliation and forecasting — built in the spreadsheets you already use.',
    siteName: 'Carlos Alves Consulting',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary',
    title: 'Carlos Alves Consulting — Data & AI for UK operators',
    description:
      'Independent Data & AI consultancy for UK hospitality and health & wellness businesses: reporting automation, KPI dashboards, invoice reconciliation and forecasting — built in the spreadsheets you already use.',
  },
  icons: { icon: '/assets/logo-carlos-alves.jpg' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      name: 'Carlos Alves Consulting',
      url: siteUrl,
      description:
        'Independent Data & AI consultancy for UK hospitality and health & wellness businesses: reporting automation, KPI dashboards, invoice reconciliation and forecasting.',
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'London',
        addressCountry: 'GB',
      },
      email: 'carlos.alves.one@gmail.com',
      // Reddit link removed 24 Nov 2026 at Carlos's request; the account shows as banned.
      sameAs: [
        'https://www.linkedin.com/in/carlos-alves-one',
        'https://x.com/Mr_CarlosAlves',
        'https://www.tiktok.com/@mrcarlosalves',
        'https://www.instagram.com/carlosalves.uk',
      ],
      priceRange: 'Free walkthrough, then fixed fee quoted upfront',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'How pricing works',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Weekly-Report Walkthrough',
            description:
              'Free 30-minute walkthrough. £0, no cost, no obligation. Mondays & Fridays, 3–6pm UK time.',
            price: '0',
            priceCurrency: 'GBP',
          },
          {
            '@type': 'Offer',
            name: 'Reporting Review',
            description:
              'Fixed fee, quoted after the free walkthrough once the scope is clear, agreed upfront, with a refund guarantee. No amount is published — no figure has been set.',
          },
          {
            '@type': 'Offer',
            name: 'Build & handover',
            description:
              'Fixed price, quoted before we start. No hourly meter, no monthly subscription, you own everything outright.',
          },
        ],
      },
      founder: {
        '@type': 'Person',
        name: 'Carlos Alves',
        jobTitle: 'Independent Data & AI Consultant',
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'Goldsmiths, University of London',
        },
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
