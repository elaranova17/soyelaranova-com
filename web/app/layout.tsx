import type { Metadata } from 'next'
import { Bodoni_Moda, Pinyon_Script, Manrope } from 'next/font/google'
import { Analytics } from '@/components/analytics'
import { LenisProvider } from '@/components/lenis-provider'
import { SiteNav } from '@/components/site-nav'
import './globals.css'

/** Display imponente — contraste alto, editorial de venta */
const bodoni = Bodoni_Moda({
  variable: '--font-bodoni',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  display: 'swap',
})

/** Caligrafía de marca — acentos, logo, em que venden */
const pinyon = Pinyon_Script({
  variable: '--font-pinyon',
  subsets: ['latin'],
  weight: '400',
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
  alternates: { canonical: './' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
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
      className={`${bodoni.variable} ${pinyon.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Elara Nova',
              url: 'https://soyelaranova.com',
              image: 'https://soyelaranova.com/_assets/photos/og-portfolio.jpg',
              description:
                'Estudio de automatización y desarrollo web: automatizaciones de procesos, landing pages y sitios que venden, campañas de Google Ads medibles.',
              founder: {
                '@type': 'Person',
                name: 'Evelyn Patiño Laverde',
                jobTitle: 'Ingeniera de software',
              },
              areaServed: ['ES', 'CH', 'CO'],
              priceRange: 'Desde 450 €',
              email: 'elaranova.17@gmail.com',
              knowsAbout: [
                'Automatización de procesos',
                'Landing pages',
                'Desarrollo web',
                'Google Ads',
              ],
            }),
          }}
        />
        <LenisProvider>
          <SiteNav />
          {children}
          <Analytics />
        </LenisProvider>
      </body>
    </html>
  )
}
