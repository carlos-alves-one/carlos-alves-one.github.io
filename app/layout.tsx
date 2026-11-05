import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Carlos Alves | Data Science & Business Intelligence',
  description: 'I build practical reporting, dashboards and automation for UK SMEs, so owners and operations teams can understand costs, orders and performance.',
  keywords: 'data science, business intelligence, reporting automation, dashboards, UK SME consulting',
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
