import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Lato } from 'next/font/google'
import { LenisProvider } from '@/components/lenis-provider'
import './globals.css'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Elara Nova · Mira todo lo que siempre fuiste capaz de ser',
  description:
    'Oráculo íntimo y rituales para mujeres latinas en reinvención. Sacá tu carta del día.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://soyelaranova.com',
  ),
  openGraph: {
    title: 'Elara Nova',
    description:
      'Oráculo íntimo y rituales para mujeres latinas en reinvención.',
    type: 'website',
    locale: 'es',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${cormorant.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
