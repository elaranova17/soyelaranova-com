import type { Metadata } from 'next'
import { Fraunces, Cormorant_Garamond, Manrope } from 'next/font/google'
import { LenisProvider } from '@/components/lenis-provider'
import { SiteNav } from '@/components/site-nav'
import { MagicCursor } from '@/components/magic-cursor'
import './globals.css'

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz', 'SOFT', 'WONK'],
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://soyelaranova.com'),
  title: {
    default: 'Elara Nova — Automatizacion y desarrollo web que vende',
    template: '%s | Elara Nova',
  },
  description:
    'Estudio de Evelyn Patino, ingeniera de software: automatizo tus procesos, construyo landing pages y sitios que venden, y mido tus campañas de Google Ads. Menos trabajo manual, mas clientes.',
  keywords: [
    'automatizacion de procesos',
    'automatizaciones para negocios',
    'landing pages que venden',
    'sitios web profesionales',
    'desarrollo web',
    'Google Ads',
    'medicion y analitica',
    'ingeniera de software',
    'estudio digital',
    'Evelyn Patino',
    'Elara Nova',
  ],
  authors: [{ name: 'Evelyn Patino', url: 'https://soyelaranova.com' }],
  creator: 'Evelyn Patino',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://soyelaranova.com',
    siteName: 'Elara Nova',
    title: 'Elara Nova — Automatizacion y desarrollo web que vende',
    description:
      'Automatizo tus procesos, construyo landing pages y sitios que venden, y mido tus campañas. Estudio de Evelyn Patino, ingeniera de software.',
    images: [
      {
        url: '/_assets/photos/og-portfolio.jpg',
        width: 1200,
        height: 630,
        alt: 'Elara Nova por Evelyn Patino',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elara Nova — Automatizacion y desarrollo web que vende',
    description:
      'Automatizo tus procesos, construyo landing pages y sitios que venden, y mido tus campañas. Estudio de Evelyn Patino, ingeniera de software.',
    images: ['/_assets/photos/og-portfolio.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <LenisProvider>
          <MagicCursor />
          <SiteNav />
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
