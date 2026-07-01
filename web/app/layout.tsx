import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
    default: 'Elara Nova — E-books, cursos y trabaja conmigo',
    template: '%s | Elara Nova',
  },
  description:
    'Casa digital de Elara Nova: e-books, cursos, oraculo, recursos y servicios profesionales de Evelyn Patino para marcas que quieren crecer con belleza y sistema.',
  keywords: [
    'sitios web profesionales',
    'landing pages',
    'automatizacion',
    'Google Ads',
    'marketing digital',
    'productos digitales',
    'ebooks',
    'cursos',
    'oraculo',
    'emprendedores',
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
    title: 'Elara Nova — E-books, cursos y trabaja conmigo',
    description:
      'E-books, cursos, oraculo y servicios profesionales dentro de una casa digital editorial creada por Evelyn Patino.',
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
    title: 'Elara Nova — E-books, cursos y trabaja conmigo',
    description:
      'E-books, cursos, oraculo y servicios profesionales dentro de una casa digital editorial creada por Evelyn Patino.',
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
        <Analytics />
      </body>
    </html>
  )
}
