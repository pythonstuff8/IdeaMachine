import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Idea Machine - AI-Powered Idea Generation',
  description: 'Transform your prompts into innovative ideas with AI-powered generation, filtering, and comprehensive planning.',
  keywords: 'AI, idea generation, innovation, brainstorming, product development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

