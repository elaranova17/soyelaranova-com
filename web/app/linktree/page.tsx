import type { Metadata } from 'next'
import Image from 'next/image'
import { SiteNav } from '@/components/site-nav'
import { ElaraButton } from '@/components/elara-button'

export const metadata: Metadata = {
  title: 'Evelyn Patiño Laverde · Linktree',
  description:
    'Ingeniera de Software · Angular · Software financiero · Servicios freelance desde Suiza.',
}

type LinkCardProps = {
  href: string
  label: string
  description: string
  external?: boolean
  accent: string
}

const LINKS: ReadonlyArray<LinkCardProps> = [
  {
    href: '/portfolio',
    label: 'Portafolio',
    description: 'Proyectos, casos de estudio y experiencia técnica.',
    accent: 'var(--color-gold-bright)',
  },
  {
    href: '/cv',
    label: 'CV',
    description: '6 años en software financiero · Angular senior.',
    accent: 'var(--color-lavender)',
  },
  {
    href: 'https://www.linkedin.com/in/evelyn-patino-laverde',
    label: 'LinkedIn',
    description: 'Mi red profesional. Conectemos.',
    external: true,
    accent: 'var(--color-crystal-cyan)',
  },
  {
    href: 'https://github.com/elaranova17',
    label: 'GitHub',
    description: 'Proyectos de código abierto y experimentos.',
    external: true,
    accent: 'var(--color-coral)',
  },
  {
    href: 'mailto:hola@soyelaranova.com',
    label: 'Email',
    description: 'Escríbeme directo · hola@soyelaranova.com',
    external: true,
    accent: 'var(--color-gold-soft)',
  },
  {
    href: '/atelier',
    label: 'Atelier · B2B',
    description: 'Si llegaste por una propuesta, esto es para vos.',
    accent: 'var(--color-crystal-pink)',
  },
  {
    href: '/',
    label: 'Elara Nova',
    description: 'Mi marca personal · oráculo, calendario lunar, círculo.',
    accent: 'var(--color-violet-flower)',
  },
] as const

function LinkCard({ href, label, description, external, accent }: LinkCardProps) {
  const isExternal = external ?? /^(https?:|mailto:)/.test(href)
  const cardClass =
    'group flex items-center gap-4 rounded-2xl border border-[var(--color-gold)]/30 p-4 transition-all hover:border-[var(--color-gold)]/70 hover:bg-[var(--color-purple-night)]/60 hover:-translate-y-0.5'
  const inner = (
    <>
      <div
        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full"
        style={{
          background: `radial-gradient(circle, ${accent}44 0%, rgba(26,15,61,0.7) 80%)`,
          border: `1px solid ${accent}AA`,
          boxShadow: `0 0 20px ${accent}33, inset 0 1px 0 rgba(255,255,255,0.18)`,
          color: accent,
        }}
      >
        <svg width={22} height={22} viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M8 14 L14 8 M14 8 L9 8 M14 8 L14 13" />
        </svg>
      </div>
      <div className="flex flex-1 flex-col gap-0.5">
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            color: 'var(--color-cream)',
            fontSize: 17,
            lineHeight: 1.2,
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-serif)',
            color: 'var(--color-gold-soft)',
            fontSize: 13,
            lineHeight: 1.4,
            opacity: 0.88,
          }}
        >
          {description}
        </span>
      </div>
      <span aria-hidden style={{ color: accent, opacity: 0.75 }} className="transition-transform group-hover:translate-x-1">
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 8 L13 8 M9 4 L13 8 L9 12" />
        </svg>
      </span>
    </>
  )
  return isExternal ? (
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
      className={cardClass}
      style={{
        background: 'rgba(26,15,61,0.55)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      {inner}
    </a>
  ) : (
    <a
      href={href}
      className={cardClass}
      style={{
        background: 'rgba(26,15,61,0.55)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      {inner}
    </a>
  )
}

export default function LinktreePage() {
  return (
    <main
      className="relative isolate flex min-h-screen w-full justify-center overflow-hidden pt-32 pb-20"
      style={{ background: 'var(--color-void)' }}
    >
      <Image
        src="/hero/manifiesto-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={90}
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 50%, rgba(10,0,16,0.25) 20%, rgba(10,0,16,0.78) 100%)',
        }}
      />

      <SiteNav />

      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center gap-9 px-6">
        {/* Avatar + nombre */}
        <div className="flex flex-col items-center gap-5 pt-4 text-center">
          <div
            className="relative h-28 w-28 overflow-hidden rounded-full"
            style={{
              border: '2px solid var(--color-gold-bright)',
              boxShadow:
                '0 0 32px rgba(242,213,120,0.5), inset 0 0 20px rgba(212,175,55,0.2)',
            }}
          >
            <Image
              src="/_assets/photos/evelyn_pro_perfil.jpg"
              alt="Evelyn Patiño Laverde"
              fill
              sizes="112px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-gold-soft)',
              fontSize: 11,
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              opacity: 0.95,
              textShadow: '0 0 12px rgba(0,0,0,0.85)',
            }}
          >
            — Behind the magic —
          </span>
          <h1
            className="text-4xl md:text-5xl"
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              color: 'var(--color-cream)',
              lineHeight: 1.05,
              textShadow:
                '0 0 32px rgba(242,213,120,0.5), 0 4px 18px rgba(0,0,0,0.85)',
            }}
          >
            Evelyn Patiño Laverde
          </h1>
          <p
            className="max-w-md"
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              color: 'var(--color-pale-lav)',
              fontSize: 17,
              lineHeight: 1.55,
              opacity: 0.95,
              textShadow: '0 0 12px rgba(0,0,0,0.85)',
            }}
          >
            Ingeniera de Software · Angular senior · 6 años en software financiero. Trabajando freelance desde Suiza para España y LATAM.
          </p>
        </div>

        {/* Grid de link cards */}
        <div className="flex w-full flex-col gap-3">
          {LINKS.map((link) => (
            <LinkCard key={link.href} {...link} />
          ))}
        </div>

        {/* Quote final */}
        <div
          className="max-w-md text-center"
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            color: 'var(--color-gold-soft)',
            fontSize: 14,
            lineHeight: 1.5,
            opacity: 0.7,
          }}
        >
          “Donde el alto rendimiento de Node.js se fusiona con la sabiduría de la Nueva Era.”
        </div>

        <ElaraButton href="/" variant="primary">
          Volver al Portal
        </ElaraButton>
      </div>
    </main>
  )
}
