import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

const siteUrl = 'https://carlos-alves-one.github.io'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Carlos Alves Consulting | Hospitality Data & AI Specialist',
  description:
    'Automating weekly reports, dashboards and forecasts for UK catering and hospitality businesses — built in your spreadsheets, no subscriptions.',
  keywords:
    'hospitality reporting automation, UK catering dashboards, spreadsheet automation, restaurant KPI dashboard, invoice reconciliation, data science consulting London',
  authors: [{ name: 'Carlos Alves' }],
  creator: 'Carlos Alves',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Carlos Alves Consulting | Hospitality Data & AI Specialist',
    description:
      'Automating weekly reports, dashboards and forecasts for UK catering and hospitality businesses — built in your spreadsheets, no subscriptions.',
    siteName: 'Carlos Alves Consulting',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary',
    title: 'Carlos Alves Consulting | Hospitality Data & AI Specialist',
    description:
      'Automating weekly reports, dashboards and forecasts for UK catering and hospitality businesses — built in your spreadsheets, no subscriptions.',
  },
  icons: { icon: '/favicon.svg' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      name: 'Carlos Alves Consulting',
      url: siteUrl,
      description:
        'Independent Data & AI consultancy for UK catering and hospitality businesses: reporting automation, KPI dashboards, invoice reconciliation and forecasting.',
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'London',
        addressCountry: 'GB',
      },
      email: 'carlos.alves.one@gmail.com',
      sameAs: [
        'https://www.linkedin.com/in/carlos-alves-one',
        'https://calendar.app.google/C1hnZvX1jpWYd2bv6',
      ],
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
