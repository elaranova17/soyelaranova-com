import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Lato } from 'next/font/google'
import { LenisProvider } from '@/components/lenis-provider'
import { SiteNav } from '@/components/site-nav'
import { MagicCursor } from '@/components/magic-cursor'
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
  metadataBase: new URL('https://soyelaranova.com'),
  title: {
    default: 'La Aranoa Studio — Web, automatizacion y anuncios',
    template: '%s | La Aranoa Studio',
  },
  description:
    'Estudio digital de Evelyn Patino: sitios web profesionales, landing pages, automatizaciones, Google Ads y productos digitales para marcas que quieren vender mejor.',
  keywords: [
    'sitios web profesionales',
    'landing pages',
    'automatizacion',
    'Google Ads',
    'marketing digital',
    'productos digitales',
    'emprendedores',
    'Evelyn Patino',
    'La Aranoa Studio',
  ],
  authors: [{ name: 'Evelyn Patino', url: 'https://soyelaranova.com' }],
  creator: 'Evelyn Patino',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://soyelaranova.com',
    siteName: 'La Aranoa Studio',
    title: 'La Aranoa Studio — Web, automatizacion y anuncios',
    description:
      'Sitios web, automatizaciones, landing pages y Google Ads para marcas que quieren vender mejor en digital.',
    images: [
      {
        url: '/_assets/photos/og-portfolio.jpg',
        width: 1200,
        height: 630,
        alt: 'La Aranoa Studio por Evelyn Patino',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Aranoa Studio — Web, automatizacion y anuncios',
    description:
      'Sitios web, automatizaciones, landing pages y Google Ads para marcas que quieren vender mejor en digital.',
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
      className={`${playfair.variable} ${cormorant.variable} ${lato.variable} h-full antialiased`}
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
