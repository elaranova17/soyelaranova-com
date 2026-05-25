import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Lato } from 'next/font/google'
import { LenisProvider } from '@/components/lenis-provider'
import { SiteNav } from '@/components/site-nav'
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
    default: 'Elara Nova — Autoconocimiento para mujeres',
    template: '%s | Elara Nova',
  },
  description:
    'Herramientas de autoconocimiento para mujeres: astrología, oráculo, rituales y ciclos lunares. Unite al Círculo de Elara Nova.',
  keywords: [
    'astrología',
    'oráculo',
    'rituales lunares',
    'autoconocimiento',
    'chakras',
    'carta natal',
    'ciclos lunares',
    'mujeres',
    'espiritualidad',
  ],
  authors: [{ name: 'Elara Nova', url: 'https://soyelaranova.com' }],
  creator: 'Elara Nova',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://soyelaranova.com',
    siteName: 'Elara Nova',
    title: 'Elara Nova — Autoconocimiento para mujeres',
    description:
      'Herramientas de autoconocimiento para mujeres: astrología, oráculo, rituales y ciclos lunares.',
    images: [
      {
        url: '/images/hero-elara-noche.png',
        width: 1200,
        height: 630,
        alt: 'Elara Nova',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elara Nova — Autoconocimiento para mujeres',
    description:
      'Herramientas de autoconocimiento para mujeres: astrología, oráculo, rituales y ciclos lunares.',
    images: ['/images/hero-elara-noche.png'],
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
          <SiteNav />
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
