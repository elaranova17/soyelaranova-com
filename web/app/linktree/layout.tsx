import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Evelyn Patiño · Enlaces',
  description:
    'Portfolio, CV, WhatsApp y pre-análisis de Evelyn Patiño Laverde — ingeniera de software freelance desde Europa.',
  openGraph: {
    title: 'Evelyn Patiño Laverde — Ingeniera de Software',
    description: 'Pienso en el detalle, construyo como ingeniera. Portfolio, CV y pre-análisis.',
    url: 'https://soyelaranova.com/linktree',
    images: [{ url: '/_assets/photos/og-portfolio.jpg', width: 1200, height: 630 }],
  },
}

export default function LinktreeLayout({ children }: { children: React.ReactNode }) {
  return children
}
