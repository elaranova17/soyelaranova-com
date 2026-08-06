import type { Metadata } from 'next'
import { Great_Vibes, Instrument_Serif, IBM_Plex_Mono, Inter } from 'next/font/google'
import { Analytics } from '@/components/analytics'
import { LenisProvider } from '@/components/lenis-provider'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

/** Accents italic · brand board "El Pensamiento" */
const instrument = Instrument_Serif({
  variable: '--font-instrument',
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

/** Code / UI windows · brand board "El Sistema" */
const plex = IBM_Plex_Mono({
  variable: '--font-plex',
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
})

/** Body / UI · brand board "El Contenido" */
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

/** Handwritten sticky / collage notes */
const greatVibes = Great_Vibes({
  variable: '--font-great-vibes',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://soyelaranova.com'),
  title: {
    default: 'Elara Nova by Evelyn Patiño — IA y automatización, menos a mano',
    template: '%s | Elara Nova',
  },
  description:
    'Soy Evelyn, ingeniera de software. Te enseño a usar la IA y la automatización para quitarte de encima las tareas que te comen el día: plantillas listas, tutoriales claros y sistemas hechos a medida. Menos a mano, más para ti.',
  keywords: [
    'automatización de procesos',
    'automatizaciones para negocios',
    'landing pages que venden',
    'sitios web profesionales',
    'desarrollo web',
    'Google Ads',
    'medición y analítica',
    'ingeniera de software',
    'estudio digital',
    'Evelyn Patiño',
    'Elara Nova',
  ],
  authors: [{ name: 'Evelyn Patiño', url: 'https://soyelaranova.com' }],
  creator: 'Evelyn Patiño',
  alternates: { canonical: './' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://soyelaranova.com',
    siteName: 'Elara Nova',
    title: 'Elara Nova — Automatización y desarrollo web que vende',
    description:
      'Automatizo tus procesos, construyo landing pages y sitios que venden, y mido tus campañas. Estudio de Evelyn Patiño, ingeniera de software.',
    images: [
      {
        url: '/_assets/photos/og-portfolio.jpg',
        width: 1200,
        height: 630,
        alt: 'Elara Nova por Evelyn Patiño',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elara Nova — Automatización y desarrollo web que vende',
    description:
      'Automatizo tus procesos, construyo landing pages y sitios que venden, y mido tus campañas. Estudio de Evelyn Patiño, ingeniera de software.',
    images: ['/_assets/photos/og-portfolio.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${instrument.variable} ${plex.variable} ${inter.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <head>
        {/* Satoshi · brand board "La Voz" (Fontshare) */}
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,800&display=swap"
        />
      </head>
      <body className="min-h-full" style={{ fontFamily: 'var(--font-sans)' }}>
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
          <SiteFooter />
          <Analytics />
        </LenisProvider>
      </body>
    </html>
  )
}
