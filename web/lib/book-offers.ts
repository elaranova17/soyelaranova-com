import type { Metadata } from 'next'

export type BookVisual = {
  heroImage: string
  heroAlt: string
  heroPosition: string
}

export type BookOffer = {
  slug: string
  eyebrow: string
  title: string
  description: string
  subtitle: string
  priceLabel: string
  bullets: readonly string[]
  ctaLabel: string
  ctaHref: string
  secondaryHref: string
  secondaryLabel: string
  statusNote: string
  visual: BookVisual
}

export const bookOffers: readonly BookOffer[] = [
  {
    slug: '7-dias-de-elara',
    eyebrow: 'Lead magnet · gratis',
    title: '7 Días de Elara',
    description:
      'Ebook gratuito: 7 días suaves para volver a vos. Opt-in y primer paso del universo Elara.',
    subtitle:
      'Una semana de gestos pequeños — sin mindset tóxico ni listas infinitas. Ideal si querés probar la voz Elara antes del Ciclo Nova.',
    priceLabel: 'Gratis',
    bullets: [
      'PDF listo para leer',
      'Entrada a la lista de novedades',
      'Puente natural al ebook Ciclo Nova',
    ],
    ctaLabel: 'Quiero el ebook gratis',
    ctaHref:
      '/descubrimiento?servicio=Productos%20digitales%20%2F%20ebook&paquete=7%20Días%20de%20Elara%20(gratis)',
    secondaryHref: '/universo',
    secondaryLabel: 'Ver universo',
    statusNote: 'Entrega por email tras el pre-análisis / lista. PDF en lead-magnet.',
    visual: {
      heroImage: '/media/recursos/recurso-ebook.webp',
      heroAlt: 'Ebook 7 Días de Elara — material digital del universo Elara Nova',
      heroPosition: 'center 40%',
    },
  },
  {
    slug: 'ciclo-nova-del-regreso',
    eyebrow: 'Ebook · en producción',
    title: 'Ciclo Nova del Regreso',
    description:
      'Ebook pago (27–37 €): framework de 4 estaciones para un retorno semanal a vos. Waitlist abierta.',
    subtitle:
      'Para quien ya probó self-help y quiere un ciclo real, con gestos de menos de 5 minutos. Waitlist mientras cerramos Hotmart.',
    priceLabel: '27 € lanzamiento · 37 € evergreen',
    bullets: [
      'PDF + EPUB (lanzamiento)',
      'Order bump workbook opcional',
      'Upsell audios “Domingos del Regreso”',
    ],
    ctaLabel: 'Entrar a la waitlist',
    ctaHref:
      '/descubrimiento?servicio=Productos%20digitales%20%2F%20ebook&paquete=Ciclo%20Nova%20del%20Regreso%20(waitlist)',
    secondaryHref: '/cursos',
    secondaryLabel: 'Ver escuela',
    statusNote: 'Pago Hotmart pendiente; meanwhile capturamos interés serio vía pre-análisis.',
    visual: {
      heroImage: '/media/cursos/curso-rituales.webp',
      heroAlt: 'Ciclo Nova del Regreso — estaciones de retorno semanal',
      heroPosition: 'center 35%',
    },
  },
]

export function getBookOffer(slug: string) {
  return bookOffers.find((b) => b.slug === slug)
}

export function listBookSlugs() {
  return bookOffers.map((b) => ({ slug: b.slug }))
}

export function bookOfferMetadata(book: BookOffer): Metadata {
  return {
    title: book.title,
    description: book.description,
    robots: { index: false, follow: false },
    openGraph: {
      title: book.title,
      description: book.description,
      images: [
        {
          url: book.visual.heroImage,
          width: 1200,
          height: 630,
          alt: book.visual.heroAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: book.title,
      description: book.description,
      images: [book.visual.heroImage],
    },
  }
}
