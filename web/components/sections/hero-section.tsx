import Image from 'next/image'
import Link from 'next/link'
import { siteImages } from '@/lib/site-images'

type HeroPillarIcon = 'heart' | 'scale' | 'star' | 'moon' | 'spark'

type HeroPillar = {
  id: string
  label: string
  icon: HeroPillarIcon
}

const HERO_PILLARS: readonly HeroPillar[] = [
  { id: 'conectate', label: 'Conéctate contigo', icon: 'heart' },
  { id: 'decisiones', label: 'Toma decisiones', icon: 'scale' },
  { id: 'alineate', label: 'Alinéate', icon: 'star' },
  { id: 'manifiesta', label: 'Manifiesta', icon: 'moon' },
  { id: 'magia', label: 'Crea tu magia', icon: 'spark' },
] as const

function PillarIconSvg({ kind }: { kind: HeroPillarIcon }) {
  const props = {
    className: 'h-5 w-5 shrink-0 text-[#C9A84C]',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  switch (kind) {
    case 'heart':
      return (
        <svg {...props}>
          <path d="M12 21s-7-4.5-9.5-8.5C.5 9 2.5 5 6 5c2 0 3.5 1.5 4 2.5C10.5 6.5 12 5 14 5c3.5 0 5.5 4 3.5 7.5C19 16.5 12 21 12 21z" />
        </svg>
      )
    case 'scale':
      return (
        <svg {...props}>
          <path d="M12 3v18" />
          <path d="M5 7h14" />
          <path d="M7 7 5 12h4L7 7zM17 7l-2 5h4l-2-5z" />
        </svg>
      )
    case 'star':
      return (
        <svg {...props}>
          <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9" />
        </svg>
      )
    case 'moon':
      return (
        <svg {...props}>
          <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 10 10 0 0 0 21 14.5z" />
        </svg>
      )
    case 'spark':
      return (
        <svg {...props}>
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
  }
}

function HeroImageColumn() {
  return (
    <div className="relative h-[480px] overflow-hidden rounded-3xl md:h-[580px]">
      <Image
        src={siteImages.hero.escritorio}
        alt="Elara Nova — Tu universo para crear la vida que sueñas"
        fill
        className="object-cover object-center"
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#06040d] px-6 py-24 md:px-16">
      <div
        className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-[#7c3aed]/15 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm tracking-[0.3em] text-[#C9A84C] uppercase">
            ✦ Tu universo ✦
          </p>
          <h1 className="mb-6 font-serif text-5xl leading-[1.05] font-bold text-[#f0eafa] md:text-7xl">
            para crear la vida que sueñas.
          </h1>
          <p className="mb-8 max-w-md text-lg text-[#9080b0]">
            Herramientas, guía y magia práctica para mujeres que quieren
            transformarse, crear y vivir con propósito.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#descubre-tu-camino"
              className="inline-flex items-center rounded-full bg-[#7c3aed] px-8 py-3.5 text-sm font-semibold tracking-wide text-white uppercase"
            >
              Descubre tu camino →
            </Link>
            <Link
              href="#herramientas-astrales"
              className="inline-flex items-center rounded-full border border-[#C9A84C]/60 px-8 py-3.5 text-sm tracking-wide text-[#C9A84C] uppercase"
            >
              Explora herramientas
            </Link>
          </div>

          <ul className="mt-12 flex flex-wrap gap-8">
            {HERO_PILLARS.map((pillar) => (
              <li
                key={pillar.id}
                className="flex max-w-[5.5rem] flex-col items-center gap-2"
              >
                <PillarIconSvg kind={pillar.icon} />
                <span className="text-center text-xs text-[#9080b0]">
                  {pillar.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <HeroImageColumn />
      </div>
    </section>
  )
}
