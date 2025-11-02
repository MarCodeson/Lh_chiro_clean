import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Dr Les Hall | Chiropractor & Applied Kinesiologist | Barbados & United Kingdom',
  icons: {
    icon: '/favicon.ico',
  },
  description:
    'Dr Les Hall BSc (Hons), MSc, DC — Human and Equine Chiropractor with 27 years experience in structural, metabolic and emotional health. Barbados and UK Registered.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
