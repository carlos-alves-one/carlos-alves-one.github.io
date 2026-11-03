import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Carlos Alves Consulting | Data Science & AI for Hospitality',
  description: 'MSc Data Science & AI specialist helping hospitality and catering operations optimize analytics, forecasting, and automation. Former purchasing manager with deep industry expertise.',
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
