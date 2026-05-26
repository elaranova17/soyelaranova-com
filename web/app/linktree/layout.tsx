import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Evelyn Patiño · Enlaces',
  description:
    'Portfolio, CV, WhatsApp y propuestas de Evelyn Patiño Laverde — ingeniera de software freelance desde Suiza.',
  openGraph: {
    title: 'Evelyn Patiño Laverde — Ingeniera de Software',
    description: 'Pienso como diseñadora, construyo como ingeniera. Servicios freelance desde Suiza.',
    url: 'https://soyelaranova.com/linktree',
    images: [{ url: '/_assets/photos/og-portfolio.jpg', width: 1200, height: 630 }],
  },
}

export default function LinktreeLayout({ children }: { children: React.ReactNode }) {
  return children
}
