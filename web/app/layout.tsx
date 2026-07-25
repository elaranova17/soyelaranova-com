import type { Metadata } from 'next'
import { Bebas_Neue, Great_Vibes, Cormorant_Garamond, Outfit } from 'next/font/google'
import { Analytics } from '@/components/analytics'
import { LenisProvider } from '@/components/lenis-provider'
import { SiteNav } from '@/components/site-nav'
import './globals.css'

/** Impact CapCut Opción A — sans condensada imponente (estilo AUTOMATIZO) */
const bebas = Bebas_Neue({
  variable: '--font-bebas',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

/** Caligrafía que solapa el impact + glow chic */
const greatVibes = Great_Vibes({
  variable: '--font-great-vibes',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

/** Serif suave — notas / tesis editoriales */
const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

/** Sans cuerpo / UI / labels de marca */
const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://soyelaranova.com'),
  title: {
    default: 'Elara Nova — Automatización y desarrollo web que vende',
    template: '%s | Elara Nova',
  },
  description:
    'Estudio de Evelyn Patiño, ingeniera de software: automatizo tus procesos, construyo landing pages y sitios que venden, y mido tus campañas de Google Ads. Menos trabajo manual, más clientes.',
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
      className={`${bebas.variable} ${greatVibes.variable} ${cormorant.variable} ${outfit.variable} h-full antialiased`}
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
