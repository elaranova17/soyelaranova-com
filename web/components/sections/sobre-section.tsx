import Image from 'next/image'
import Link from 'next/link'

type TrustBadgeIcon = 'shield' | 'check' | 'heart' | 'star'

type TrustBadge = {
  id: string
  icon: TrustBadgeIcon
  label: string
  description: string
}

const TRUST_BADGES: readonly TrustBadge[] = [
  {
    id: 'seguro',
    icon: 'shield',
    label: 'Seguro y confidencial',
    description: 'Tu información está protegida.',
  },
  {
    id: 'intencion',
    icon: 'check',
    label: 'Hecho con intención',
    description: 'Cada detalle importa.',
  },
  {
    id: 'acompanamiento',
    icon: 'heart',
    label: 'Acompañamiento real',
    description: 'No estás sola en este camino.',
  },
  {
    id: 'resultados',
    icon: 'star',
    label: 'Resultados que transforman',
    description: 'Más claridad, más poder personal.',
  },
] as const

function TrustBadgeIconSvg({ kind }: { kind: TrustBadgeIcon }) {
  const props = {
    className: 'mt-0.5 h-5 w-5 shrink-0 text-[#C9A84C]',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  switch (kind) {
    case 'shield':
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    case 'check':
      return (
        <svg {...props}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <path d="M22 4 12 14.01l-3-3" />
        </svg>
      )
    case 'heart':
      return (
        <svg {...props}>
          <path d="M12 21s-7-4.5-9.5-8.5C.5 9 2.5 5 6 5c2 0 3.5 1.5 4 2.5C10.5 6.5 12 5 14 5c3.5 0 5.5 4 3.5 7.5C19 16.5 12 21 12 21z" />
        </svg>
      )
    case 'star':
      return (
        <svg {...props}>
          <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9" />
        </svg>
      )
  }
}

function SobreImageColumn() {
  return (
    <div className="relative h-80 overflow-hidden rounded-2xl md:h-[440px]">
      <Image
        src="/hero/sobre-elara.jpg"
        alt="Elara Nova — Un espacio creado por y para mujeres"
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-[#0d0920]/30" />
      <button
        type="button"
        className="absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#C9A84C]/60 bg-[#C9A84C]/20 backdrop-blur-sm"
        aria-label="Reproducir video sobre Elara Nova"
      >
        <svg
          className="ml-1 h-6 w-6 text-[#C9A84C]"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </div>
  )
}

function TrustBadgesGrid() {
  return (
    <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
      {TRUST_BADGES.map((badge) => (
        <li key={badge.id} className="flex gap-3">
          <TrustBadgeIconSvg kind={badge.icon} />
          <div>
            <p className="text-sm font-medium text-[#e8e0f0]">{badge.label}</p>
            <p className="text-xs text-[#9080b0]">{badge.description}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export function SobreSection() {
  return (
    <section
      id="sobre-elara-nova"
      className="bg-[#0d0920] px-6 py-20 md:px-16"
      aria-labelledby="sobre-elara-heading"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <SobreImageColumn />

        <div>
          <p className="mb-3 text-xs tracking-widest text-[#C9A84C] uppercase">
            00 · Sobre Elara Nova
          </p>
          <h2
            id="sobre-elara-heading"
            className="font-serif text-4xl font-bold text-[#f0eafa]"
          >
            Un espacio creado por y para mujeres que quieren más de la vida.
          </h2>
          <p className="mt-4 mb-8 text-[#9080b0]">
            Elara Nova nace desde la reinvención, la intuición y el arte. Aquí
            combinamos magia, diseño y tecnología para ayudarte a alinearte con
            tu propósito y brillar sin pedir permiso.
          </p>

          <Link
            href="/sobre-elara"
            className="inline-flex items-center rounded-full bg-[#7c3aed] px-8 py-3 text-xs font-semibold tracking-widest text-white uppercase"
          >
            Conoce nuestra historia →
          </Link>

          <TrustBadgesGrid />
        </div>
      </div>
    </section>
  )
}
