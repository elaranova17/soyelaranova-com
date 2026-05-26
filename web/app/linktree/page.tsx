'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ElaraButton } from '@/components/elara-button'
import { ElaraIcons } from '@/components/elara-icons'
import { MagicParticles } from '@/components/magic-particles'

type IconKey = keyof typeof ElaraIcons

type HubLink = {
  href: string
  label: string
  hint: string
  icon: IconKey
  external?: boolean
  featured?: boolean
  variant?: 'default' | 'whatsapp'
}

const LINKS: readonly HubLink[] = [
  {
    href: '/portfolio',
    label: 'Portfolio completo',
    hint: 'Sitios · apps · IA · análisis técnico',
    icon: 'Vision',
    featured: true,
  },
  {
    href: '/cv',
    label: 'Currículum',
    hint: 'Experiencia · stack · idiomas',
    icon: 'PDF',
  },
  {
    href: 'https://www.linkedin.com/in/evelyn-patino-laverde/',
    label: 'LinkedIn',
    hint: 'Conectar profesionalmente',
    icon: 'Comunidad',
    external: true,
  },
  {
    href: 'https://wa.me/41783480550?text=Hola%20Evelyn%2C%20te%20escribo%20por%20tu%20portfolio.',
    label: 'WhatsApp',
    hint: '+41 78 348 0550 · respuesta directa',
    icon: 'Correo',
    external: true,
    variant: 'whatsapp',
  },
  {
    href: 'mailto:evelynpatildr@gmail.com?subject=Proyecto%20freelance',
    label: 'Email',
    hint: 'evelynpatildr@gmail.com',
    icon: 'Correo',
    external: true,
  },
  {
    href: '/descubrimiento',
    label: '¿Tienes un proyecto?',
    hint: 'Cuéntame — formulario de descubrimiento',
    icon: 'Buscar',
  },
  {
    href: '/propuesta',
    label: 'Propuesta / Cotización',
    hint: 'Plantilla para nuevos proyectos',
    icon: 'PDF',
  },
  {
    href: '/',
    label: 'Elara Nova',
    hint: 'Oráculo · calendario lunar · círculo',
    icon: 'Oraculo',
  },
] as const

const TECH_STACK =
  'Angular ◆ TypeScript ◆ Java ◆ .NET ◆ SQL ◆ WordPress ◆ IA aplicada ◆ Tailwind ◆ APIs ◆'

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.06 * i, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
}

function AvatarSpark({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="var(--color-gold-bright)"
      aria-hidden
    >
      <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
    </svg>
  )
}

function HubLinkCard({
  href,
  label,
  hint,
  icon,
  external,
  featured,
  variant,
  index,
}: HubLink & { index: number }) {
  const isExternal = external ?? /^https?:|^mailto:/.test(href)
  const className = [
    'linktree-hub-link',
    featured ? 'linktree-hub-link--featured' : '',
    variant === 'whatsapp' ? 'linktree-hub-link--whatsapp' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const inner = (
    <>
      {featured ? <span className="linktree-hub-link__badge">★ Principal</span> : null}
      <span className="linktree-hub-link__icon" aria-hidden>
        {ElaraIcons[icon].render(22)}
      </span>
      <span className="linktree-hub-link__body">
        <span className="linktree-hub-link__label">{label}</span>
        <span className="linktree-hub-link__hint">{hint}</span>
      </span>
      <span className="linktree-hub-link__arrow" aria-hidden>
        →
      </span>
    </>
  )

  return (
    <motion.div custom={index} initial="hidden" animate="show" variants={fadeUp}>
      {isExternal ? (
        <a
          href={href}
          className={className}
          target={href.startsWith('mailto:') ? undefined : '_blank'}
          rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
        >
          {inner}
        </a>
      ) : (
        <Link href={href} prefetch className={className}>
          {inner}
        </Link>
      )}
    </motion.div>
  )
}

export default function LinktreePage() {
  return (
    <main className="linktree-page relative isolate min-h-screen overflow-x-hidden pt-28 pb-16">
      <MagicParticles density="low" zone="full" />
      <div className="linktree-stars" aria-hidden />

      <svg
        className="linktree-moon"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
          fill="url(#linktreeMoonGrad)"
          stroke="var(--color-gold)"
          strokeWidth="1"
        />
        <defs>
          <linearGradient id="linktreeMoonGrad" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="var(--color-gold-bright)" />
            <stop offset="100%" stopColor="var(--color-gold)" />
          </linearGradient>
        </defs>
      </svg>

      <p className="linktree-signature" aria-hidden>
        — EVELYN · 2026 —
      </p>

      <span className="linktree-ornament linktree-ornament--tl" aria-hidden>
        E
      </span>
      <span className="linktree-ornament linktree-ornament--br" aria-hidden>
        P
      </span>

      <div className="relative z-10 mx-auto flex w-full max-w-[30rem] flex-col items-center px-5 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex w-full flex-col items-center"
        >
          <div className="linktree-avatar-ring relative mb-7 h-[150px] w-[150px]">
            <AvatarSpark className="linktree-avatar-spark linktree-avatar-spark--1" />
            <AvatarSpark className="linktree-avatar-spark linktree-avatar-spark--2" />
            <AvatarSpark className="linktree-avatar-spark linktree-avatar-spark--3" />
            <div className="relative h-full w-full overflow-hidden rounded-full border-[3px] border-[var(--color-gold)] bg-gradient-to-br from-[var(--color-pale-lav)] to-[var(--color-white-rose)] shadow-[inset_0_0_20px_rgba(45,27,105,0.3),0_0_0_6px_rgba(212,175,55,0.1),0_16px_48px_-12px_rgba(0,0,0,0.55)]">
              <Image
                src="/_assets/photos/evelyn_pro_perfil.jpg"
                alt="Evelyn Patiño Laverde"
                fill
                sizes="150px"
                className="object-cover object-center contrast-[1.06] saturate-[0.95]"
                priority
              />
            </div>
          </div>

          <p className="linktree-eyebrow">Servicios Freelance · 2026</p>
          <h1 className="linktree-name">Evelyn</h1>
          <p className="linktree-last">Patiño Laverde</p>

          <div className="linktree-diamond" aria-hidden>
            <span />
          </div>

          <p className="font-display text-[1.05rem] font-medium text-white">
            Ingeniera de Software ·{' '}
            <em className="font-semibold text-[var(--color-gold-soft)] not-italic">
              Especialista Angular
            </em>
          </p>
          <p className="mt-1 mb-4 font-serif text-[0.95rem] italic text-[var(--color-pale-lav)]">
            6 años en software financiero · Sophos · Bancolombia
          </p>

          <blockquote className="linktree-tagline">
            <span className="linktree-tagline-corner linktree-tagline-corner--tl" />
            Pienso como <strong>diseñadora</strong>, construyo como <strong>ingeniera</strong>.
            <span className="linktree-tagline-corner linktree-tagline-corner--br" />
          </blockquote>

          <p className="linktree-locations">
            <span>Suiza</span>
            <span className="text-[var(--color-gold)] text-[0.55rem] opacity-80">◆</span>
            <span>España</span>
            <span className="text-[var(--color-gold)] text-[0.55rem] opacity-80">◆</span>
            <span>LATAM</span>
          </p>

          <span className="linktree-status">
            <span className="linktree-status__dot" />
            Disponible para nuevos proyectos
          </span>
        </motion.div>

        <div className="linktree-section-divider w-full" aria-hidden>
          <svg
            className="h-7 w-7 text-[var(--color-gold)] drop-shadow-[0_0_6px_rgba(212,175,55,0.5)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" />
          </svg>
        </div>

        <nav className="flex w-full flex-col gap-[0.85rem]" aria-label="Enlaces principales de Evelyn">
          {LINKS.map((link, index) => (
            <HubLinkCard key={link.href + link.label} {...link} index={index} />
          ))}
        </nav>

        <div className="relative mt-8 w-full overflow-hidden rounded-full border border-[var(--color-gold)]/15 bg-[var(--color-purple-night)]/40 py-2 backdrop-blur-sm">
          <div className="linktree-tech-track flex whitespace-nowrap font-sans text-[9px] tracking-[0.18em] text-[var(--color-gold-soft)]/70 uppercase">
            <span className="px-4">{TECH_STACK}</span>
            <span className="px-4" aria-hidden>
              {TECH_STACK}
            </span>
          </div>
        </div>

        <p className="mt-6 max-w-xs font-serif text-sm italic text-[var(--color-gold-soft)]/65">
          Donde el alto rendimiento se fusiona con la estética Elara Nova.
        </p>

        <div className="mt-6">
          <ElaraButton href="/" variant="secondary">
            Volver al portal Elara
          </ElaraButton>
        </div>
      </div>
    </main>
  )
}
