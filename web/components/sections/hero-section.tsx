import Link from 'next/link'

type HeroPillar = {
  id: string
  label: string
}

const HERO_PILLARS: readonly HeroPillar[] = [
  { id: 'conectate', label: 'Conéctate contigo' },
  { id: 'decisiones', label: 'Toma decisiones' },
  { id: 'alineate', label: 'Alinéate' },
  { id: 'manifiesta', label: 'Manifiesta' },
  { id: 'magia', label: 'Crea tu magia' },
] as const

function PillarIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-[#C9A84C]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="8" />
      <polygon points="12 7 13.2 11.5 12 16 10.8 11.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

function HeroImagePlaceholder() {
  return (
    <div className="relative h-[480px] overflow-hidden rounded-3xl md:h-[580px]">
      <div className="relative h-full w-full bg-[#110d24]">
        {/* TODO: <Image src="/hero/hero-elara-escritorio.jpg" alt="Elara Nova" fill className="object-cover" /> */}
        <p className="absolute inset-0 flex items-center justify-center text-sm text-[#C9A84C]/25">
          [ hero-elara-escritorio.jpg ]
        </p>
      </div>
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
                <PillarIcon />
                <span className="text-center text-xs text-[#9080b0]">
                  {pillar.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <HeroImagePlaceholder />
      </div>
    </section>
  )
}
