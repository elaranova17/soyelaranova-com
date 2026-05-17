import Link from 'next/link'

type HerramientaIcon =
  | 'star'
  | 'heart'
  | 'moon'
  | 'cycles'
  | 'spark'
  | 'sun'

type Herramienta = {
  id: string
  icon: HerramientaIcon
  title: string
  description: string
  href: string
}

type MembershipBenefitIcon = 'tools' | 'content' | 'community' | 'discount'

type MembershipBenefit = {
  id: string
  icon: MembershipBenefitIcon
  label: string
}

const HERRAMIENTAS: readonly Herramienta[] = [
  {
    id: 'carta-astral',
    icon: 'star',
    title: 'Carta Astral',
    description:
      'Conoce tu mapa natal, tus dones, retos y propósito de vida.',
    href: '/herramientas/carta-astral',
  },
  {
    id: 'compatibilidad',
    icon: 'heart',
    title: 'Compatibilidad',
    description:
      'Explora la conexión real entre dos personas: amor, amistad, familia o trabajo.',
    href: '/herramientas/compatibilidad',
  },
  {
    id: 'calendario-cosmico',
    icon: 'moon',
    title: 'Calendario Cósmico',
    description:
      'Descubre los tránsitos, lunas y eventos astrológicos que marcan tu camino.',
    href: '/herramientas/calendario-cosmico',
  },
  {
    id: 'ciclos-lunares',
    icon: 'cycles',
    title: 'Ciclos Lunares',
    description:
      'Conectate con la energía de cada fase lunar y alineá tus acciones día a día.',
    href: '/herramientas/ciclos-lunares',
  },
  {
    id: 'arquetipo-energetico',
    icon: 'spark',
    title: 'Arquetipo Energético',
    description:
      'Descubre tu esencia, tus talentos naturales y los arquetipos que te guían.',
    href: '/herramientas/arquetipo-energetico',
  },
  {
    id: 'proposito-de-vida',
    icon: 'sun',
    title: 'Propósito de Vida',
    description:
      'Encontrá tu misión de alma y vivís alineada con tu verdadero propósito.',
    href: '/herramientas/proposito-de-vida',
  },
] as const

const MEMBERSHIP_BENEFITS: readonly MembershipBenefit[] = [
  { id: 'tools', icon: 'tools', label: 'Herramientas ilimitadas' },
  { id: 'content', icon: 'content', label: 'Contenido exclusivo' },
  { id: 'community', icon: 'community', label: 'Comunidad privada' },
  { id: 'discount', icon: 'discount', label: 'Descuentos especiales' },
] as const

function HerramientaIconSvg({ kind }: { kind: HerramientaIcon }) {
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
    case 'star':
      return (
        <svg {...props}>
          <polygon points="12 2 15 9 22 9 17 14 19 22 12 18 5 22 7 14 2 9 9 9" />
        </svg>
      )
    case 'heart':
      return (
        <svg {...props}>
          <path d="M12 21s-7-4.5-9.5-8.5C.5 9 2.5 5 6 5c2 0 3.5 1.5 4 2.5C10.5 6.5 12 5 14 5c3.5 0 5.5 4 3.5 7.5C19 16.5 12 21 12 21z" />
        </svg>
      )
    case 'moon':
      return (
        <svg {...props}>
          <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 10 10 0 0 0 21 14.5z" />
        </svg>
      )
    case 'cycles':
      return (
        <svg {...props}>
          <path d="M12 3a9 9 0 1 0 9 9" />
          <path d="M12 7v5l3 2" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'spark':
      return (
        <svg {...props}>
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    case 'sun':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      )
  }
}

function BenefitIconSvg({ kind }: { kind: MembershipBenefitIcon }) {
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
    case 'tools':
      return (
        <svg {...props}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      )
    case 'content':
      return (
        <svg {...props}>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      )
    case 'community':
      return (
        <svg {...props}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    case 'discount':
      return (
        <svg {...props}>
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <circle cx="7" cy="7" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      )
  }
}

function HerramientaCard({ herramienta }: { herramienta: Herramienta }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-[#2d1f4e] bg-[#13092a] p-6">
      <div className="text-[#C9A84C]">
        <HerramientaIconSvg kind={herramienta.icon} />
      </div>
      <h3 className="mt-4 font-semibold text-[#e8e0f0]">{herramienta.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[#9080b0]">
        {herramienta.description}
      </p>
      <Link
        href={herramienta.href}
        className="mt-4 inline-flex w-fit items-center rounded-full border border-[#C9A84C]/50 px-4 py-2 text-xs tracking-wide text-[#C9A84C] uppercase"
      >
        Usar herramienta →
      </Link>
    </article>
  )
}

function MembershipCtaBanner() {
  return (
    <div className="mt-12 flex flex-col gap-8 rounded-2xl bg-[#1a0f2e] p-8 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="max-w-md text-lg font-medium leading-snug text-[#e8e0f0]">
          Accedé a todas las herramientas y contenido exclusivo.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {MEMBERSHIP_BENEFITS.map((benefit) => (
            <li key={benefit.id} className="flex items-center gap-3">
              <BenefitIconSvg kind={benefit.icon} />
              <span className="text-sm text-[#9080b0]">{benefit.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-start gap-5 lg:items-end lg:text-right">
        <p className="max-w-xs text-xl font-semibold leading-snug text-[#e8e0f0]">
          Tu evolución merece acompañamiento.
        </p>
        <Link
          href="/comunidad"
          className="inline-flex items-center rounded-full bg-[#7c3aed] px-8 py-3 text-xs font-semibold tracking-widest text-white uppercase"
        >
          Quiero ser miembro
        </Link>
      </div>
    </div>
  )
}

export function HerramientasAstralesSection() {
  return (
    <section
      id="herramientas-astrales"
      className="bg-[#0d0920] px-6 py-20 md:px-16"
      aria-labelledby="herramientas-astrales-heading"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-xs tracking-[0.25em] text-[#C9A84C] uppercase">
          02 · Herramientas Astrales
        </p>
        <h2
          id="herramientas-astrales-heading"
          className="font-serif text-4xl font-bold text-[#e8e0f0]"
        >
          Descubre tu energía. Conoce tu camino.
        </h2>
        <p className="mt-3 max-w-2xl text-[#9080b0]">
          Elige la herramienta que necesitás y recibí tu resultado en PDF en tu
          correo.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {HERRAMIENTAS.map((herramienta) => (
            <HerramientaCard key={herramienta.id} herramienta={herramienta} />
          ))}
        </div>

        <MembershipCtaBanner />
      </div>
    </section>
  )
}
