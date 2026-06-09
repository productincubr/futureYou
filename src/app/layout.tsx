import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FutureYou — Generate Your Future Self',
  description: 'See a realistic version of who you will become. AI-powered transformation visualization.',
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