import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RAPTURE',
  description: 'A heaven that kills. A Telugu mass-action thriller.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#0a0c0e" />
      </head>
      <body>{children}</body>
    </html>
  )
}
