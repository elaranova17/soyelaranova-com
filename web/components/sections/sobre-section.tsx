import Image from 'next/image'
import Link from 'next/link'
import { siteImages } from '@/lib/site-images'

type TrustBadge = {
  id: string
  label: string
  description: string
}

const TRUST_BADGES: readonly TrustBadge[] = [
  {
    id: 'seguro',
    label: 'Seguro y confidencial',
    description: 'Tu historia se cuida. No se usa para ruido.',
  },
  {
    id: 'intencion',
    label: 'Hecho con intención',
    description: 'Para que volvás a vos misma, sin fórmulas vacías.',
  },
  {
    id: 'acompanamiento',
    label: 'Acompañamiento real',
    description: 'Estar con vos mientras encontrás tu camino.',
  },
  {
    id: 'resultados',
    label: 'Claridad que aterriza',
    description: 'Hecha para vos, para tu vida real y tu momento.',
  },
] as const

function SobreImageColumn() {
  return (
    <div className="relative h-80 overflow-hidden rounded-2xl md:h-[440px]">
      <Image
        src={siteImages.sobre.elara}
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
        <li key={badge.id} className="group flex items-start gap-4">
          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-gold)]/30 transition-all duration-300 group-hover:border-[var(--color-gold)]/70 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <span className="text-sm text-[var(--color-gold-bright)]">✦</span>
          </div>
          <div>
            <p className="mb-0.5 font-serif text-sm font-medium text-[var(--color-cream)]">
              {badge.label}
            </p>
            <p className="font-sans text-xs leading-relaxed text-[var(--color-cream)]/60">
              {badge.description}
            </p>
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
