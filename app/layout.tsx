import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Carlos Alves Consulting | Weekly reporting for UK catering and hospitality',
  description: 'I help UK catering and hospitality owners, operations leads and finance leads replace retyped weekly reports with spreadsheets that refresh from their own till, ordering and invoice exports. No new platform, no subscription.',
  keywords: 'data science, AI, hospitality consulting, catering analytics, spreadsheet automation, forecasting, restaurant operations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
