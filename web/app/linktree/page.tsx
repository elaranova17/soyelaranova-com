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
  accent: string
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
    accent: 'var(--color-gold-bright)',
    icon: 'Vision',
    featured: true,
  },
  {
    href: '/cv',
    label: 'Currículum',
    hint: 'Experiencia · stack · idiomas',
    accent: 'var(--color-lavender)',
    icon: 'PDF',
  },
  {
    href: 'https://www.linkedin.com/in/evelyn-patino-laverde/',
    label: 'LinkedIn',
    hint: 'Conectar profesionalmente',
    accent: 'var(--color-crystal-cyan)',
    icon: 'Comunidad',
    external: true,
  },
  {
    href: 'https://wa.me/41783480550?text=Hola%20Evelyn%2C%20te%20escribo%20por%20tu%20portfolio.',
    label: 'WhatsApp',
    hint: '+41 78 348 0550 · respuesta directa',
    accent: '#25D366',
    icon: 'Correo',
    external: true,
    variant: 'whatsapp',
  },
  {
    href: 'mailto:evelynpatildr@gmail.com?subject=Proyecto%20freelance',
    label: 'Email',
    hint: 'evelynpatildr@gmail.com',
    accent: 'var(--color-gold-soft)',
    icon: 'Correo',
    external: true,
  },
  {
    href: '/descubrimiento',
    label: '¿Tienes un proyecto?',
    hint: 'Cuéntame — formulario de descubrimiento',
    accent: 'var(--color-crystal-pink)',
    icon: 'Buscar',
  },
  {
    href: '/propuesta',
    label: 'Propuesta / Cotización',
    hint: 'Plantilla para nuevos proyectos',
    accent: 'var(--color-violet-flower)',
    icon: 'PDF',
  },
  {
    href: '/',
    label: 'Elara Nova',
    hint: 'Oráculo · calendario lunar · círculo',
    accent: 'var(--color-lavender)',
    icon: 'Oraculo',
  },
] as const

const TECH_STACK =
  'Angular ◆ TypeScript ◆ Java ◆ .NET ◆ SQL ◆ WordPress ◆ IA aplicada ◆ Tailwind ◆ APIs ◆'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.08 * i, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
}

function HubLinkCard({
  href,
  label,
  hint,
  accent,
  icon,
  external,
  featured,
  variant,
  index,
}: HubLink & { index: number }) {
  const isExternal = external ?? /^https?:|^mailto:/.test(href)
  const cardClass =
    'group relative flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 hover:-translate-y-0.5'

  const cardStyle = {
    background: 'rgba(26, 15, 61, 0.58)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderColor:
      variant === 'whatsapp'
        ? 'rgba(37, 211, 102, 0.45)'
        : featured
          ? 'rgba(242, 213, 120, 0.55)'
          : 'rgba(212, 175, 55, 0.28)',
    boxShadow: featured ? '0 0 28px rgba(212, 175, 55, 0.15)' : undefined,
  } as const

  const inner = (
    <>
      {featured ? (
        <span
          className="absolute -top-2.5 right-4 rounded-full px-2.5 py-0.5 font-sans text-[8px] font-bold tracking-[0.2em] uppercase"
          style={{
            background: 'linear-gradient(135deg, var(--color-gold-bright), var(--color-gold))',
            color: 'var(--color-purple-night)',
          }}
        >
          ★ Principal
        </span>
      ) : null}
      <div
        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full"
        style={{
          background: `radial-gradient(circle, color-mix(in srgb, ${accent} 28%, transparent) 0%, rgba(26,15,61,0.85) 75%)`,
          border: `1px solid color-mix(in srgb, ${accent} 65%, transparent)`,
          boxShadow: `0 0 22px color-mix(in srgb, ${accent} 25%, transparent)`,
          color: accent,
        }}
      >
        {ElaraIcons[icon].render(26)}
      </div>
      <div className="min-w-0 flex-1">
        <span
          className="block font-display text-lg italic text-[var(--color-cream)]"
          style={{ lineHeight: 1.2 }}
        >
          {label}
        </span>
        <span className="mt-0.5 block font-serif text-sm italic text-[var(--color-gold-soft)]/85">
          {hint}
        </span>
      </div>
      <span
        aria-hidden
        className="text-[var(--color-gold-bright)] opacity-70 transition-transform group-hover:translate-x-1"
      >
        →
      </span>
    </>
  )

  return (
    <motion.div custom={index} initial="hidden" animate="show" variants={fadeUp}>
      {isExternal ? (
        <a
          href={href}
          target={href.startsWith('mailto:') ? undefined : '_blank'}
          rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          className={cardClass}
          style={cardStyle}
        >
          {inner}
        </a>
      ) : (
        <Link href={href} prefetch className={cardClass} style={cardStyle}>
          {inner}
        </Link>
      )}
    </motion.div>
  )
}

export default function LinktreePage() {
  return (
    <main className="relative isolate min-h-screen overflow-x-hidden pt-28 pb-16">
      <MagicParticles density="low" zone="full" />

      {/* Fondo Midjourney */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <Image
          src="/hero/manifiesto-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 18% 8%, rgba(212,175,55,0.14), transparent 45%), radial-gradient(ellipse at 82% 92%, rgba(155,107,196,0.2), transparent 50%), linear-gradient(165deg, rgba(45,27,105,0.92) 0%, rgba(26,15,61,0.95) 100%)',
          }}
        />
      </div>

      {/* Ornamentos tipográficos */}
      <span
        aria-hidden
        className="pointer-events-none fixed -left-8 -top-12 z-0 select-none font-display text-[14rem] font-extrabold italic leading-none text-[var(--color-gold)]/[0.07]"
      >
        E
      </span>
      <span
        aria-hidden
        className="pointer-events-none fixed -bottom-16 -right-6 z-0 rotate-6 select-none font-display text-[16rem] font-extrabold italic leading-none text-[var(--color-gold)]/[0.06]"
      >
        N
      </span>

      <p
        className="pointer-events-none fixed right-6 top-7 z-10 hidden font-display text-[10px] tracking-[0.32em] text-[var(--color-gold-soft)]/60 uppercase sm:block"
        aria-hidden
      >
        — EVELYN · 2026 —
      </p>

      <div className="relative z-10 mx-auto flex w-full max-w-md flex-col items-center gap-8 px-5">
        {/* Avatar con anillo dorado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <div className="linktree-avatar-ring relative h-[150px] w-[150px]">
            <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-[var(--color-gold-bright)] shadow-[0_0_32px_rgba(242,213,120,0.45)]">
              <Image
                src="/_assets/photos/evelyn_pro_perfil.jpg"
                alt="Evelyn Patiño Laverde"
                fill
                sizes="150px"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          <span className="font-sans text-[10px] tracking-[0.4em] text-[var(--color-gold-soft)] uppercase">
            — Behind the magic —
          </span>
          <h1 className="font-display text-4xl italic text-[var(--color-cream)] drop-shadow-[0_0_24px_rgba(242,213,120,0.35)] md:text-[2.75rem]">
            Evelyn Patiño Laverde
          </h1>
          <p className="max-w-sm font-serif text-lg italic leading-relaxed text-[var(--color-pale-lav)]/95">
            Ingeniera de Software · Angular senior · 6 años en banca. Freelance desde Suiza para
            España y LATAM.
          </p>
          <p className="font-serif text-sm italic text-[var(--color-gold-soft)]/80">
            Pienso como diseñadora, construyo como ingeniera.
          </p>

          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-purple-night)]/50 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="font-sans text-[9px] tracking-[0.22em] text-[var(--color-cream)]/80 uppercase">
              Disponible para nuevos proyectos
            </span>
          </div>
        </motion.div>

        <div className="flex items-center gap-3 text-[var(--color-gold)]/50" aria-hidden>
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--color-gold)]/40" />
          {ElaraIcons.Estrellas.render(14)}
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--color-gold)]/40" />
        </div>

        <nav className="flex w-full flex-col gap-3" aria-label="Enlaces principales de Evelyn">
          {LINKS.map((link, index) => (
            <HubLinkCard key={link.href + link.label} {...link} index={index} />
          ))}
        </nav>

        {/* Tech ribbon */}
        <div className="relative w-full overflow-hidden rounded-full border border-[var(--color-gold)]/15 bg-[var(--color-purple-night)]/40 py-2 backdrop-blur-sm">
          <div className="linktree-tech-track flex whitespace-nowrap font-sans text-[9px] tracking-[0.18em] text-[var(--color-gold-soft)]/70 uppercase">
            <span className="px-4">{TECH_STACK}</span>
            <span className="px-4" aria-hidden>
              {TECH_STACK}
            </span>
          </div>
        </div>

        <p className="max-w-xs text-center font-serif text-sm italic text-[var(--color-gold-soft)]/65">
          Donde el alto rendimiento de Node.js se fusiona con la sabiduría de la Nueva Era.
        </p>

        <ElaraButton href="/" variant="secondary">
          Volver al portal Elara
        </ElaraButton>
      </div>
    </main>
  )
}
