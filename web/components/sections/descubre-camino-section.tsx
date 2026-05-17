import Link from 'next/link'

type QuizIcon = 'compass' | 'energy' | 'path' | 'moment'

type QuizCard = {
  id: string
  icon: QuizIcon
  title: string
  description: string
  href: string
}

const QUIZ_CARDS: readonly QuizCard[] = [
  {
    id: 'quiz-alma',
    icon: 'compass',
    title: 'Quiz de Alma',
    description: 'Descubre tu esencia.',
    href: '/descubre-tu-camino/quiz-de-alma',
  },
  {
    id: 'test-energia',
    icon: 'energy',
    title: 'Test de Energía',
    description: 'Conoce tu estado actual.',
    href: '/descubre-tu-camino/test-de-energia',
  },
  {
    id: 'ruta-proposito',
    icon: 'path',
    title: 'Ruta de Propósito',
    description: 'Encuentra tu camino.',
    href: '/descubre-tu-camino/ruta-de-proposito',
  },
  {
    id: 'mi-momento',
    icon: 'moment',
    title: 'Mi Momento',
    description: '¿Qué etapa estás viviendo?',
    href: '/descubre-tu-camino/mi-momento',
  },
] as const

function QuizIconSvg({ kind }: { kind: QuizIcon }) {
  const props = {
    className: 'h-8 w-8 shrink-0',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  switch (kind) {
    case 'compass':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <polygon
            points="12 6 13.5 12 12 18 10.5 12"
            fill="currentColor"
            stroke="none"
          />
          <polygon
            points="6 12 12 10.5 18 12 12 13.5"
            fill="currentColor"
            stroke="none"
            opacity="0.35"
          />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
        </svg>
      )
    case 'energy':
      return (
        <svg {...props}>
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    case 'path':
      return (
        <svg {...props}>
          <path d="M3 6c3-2 6 2 9 0s6-2 9 0" />
          <path d="M3 12c3-2 6 2 9 0s6-2 9 0" />
          <path d="M3 18c3-2 6 2 9 0s6-2 9 0" />
          <circle cx="6" cy="6" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="18" cy="12" r="1.5" fill="currentColor" stroke="none" />
          <circle cx="12" cy="18" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'moment':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
          <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 10 10 0 0 0 21 14.5z" opacity="0.5" />
        </svg>
      )
  }
}

function QuizCardItem({ card }: { card: QuizCard }) {
  return (
    <Link
      href={card.href}
      className="group flex h-full cursor-pointer flex-col rounded-2xl border border-[#2d1f4e] bg-[#13092a] p-6 hover:border-[#C9A84C]/50 hover:shadow-[0_0_28px_rgba(201,168,76,0.12)]"
    >
      <div className="text-[#C9A84C]">
        <QuizIconSvg kind={card.icon} />
      </div>
      <h3 className="mt-4 font-semibold text-[#e8e0f0]">{card.title}</h3>
      <p className="mt-2 text-sm text-[#9080b0]">{card.description}</p>
    </Link>
  )
}

export function DescubreCaminoSection() {
  return (
    <section
      id="descubre-tu-camino"
      className="bg-[#0a0612] px-6 py-20 md:px-16"
      aria-labelledby="descubre-camino-heading"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-xs tracking-widest text-[#C9A84C] uppercase">
          01 · Descubre tu Camino
        </p>
        <h2
          id="descubre-camino-heading"
          className="max-w-2xl font-serif text-4xl font-bold text-[#e8e0f0]"
        >
          Responde algunas preguntas y recibe guía personalizada para tu momento
          actual.
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {QUIZ_CARDS.map((card) => (
            <QuizCardItem key={card.id} card={card} />
          ))}
        </div>

        <Link
          href="/descubre-tu-camino"
          className="mt-10 inline-flex items-center rounded-full bg-[#7c3aed] px-8 py-3 text-xs font-semibold tracking-widest text-white uppercase"
        >
          Comenzar mi descubrimiento →
        </Link>
      </div>
    </section>
  )
}
