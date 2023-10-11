import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next13 starter template',
  description: 'Next13 starter template',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja' suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
