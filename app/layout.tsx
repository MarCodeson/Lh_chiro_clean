import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'LH Chiropractic — Chiropractor in Aberdeen, Orkney & Barbados',
  description: 'Evidence-based chiropractic. GCC Registered No. 00616. 27+ years. Request help and we will call to schedule.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
