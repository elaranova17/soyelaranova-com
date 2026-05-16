import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'

export const metadata: Metadata = {
  title: 'Universo · Elara Nova',
  description:
    'Un universo, múltiples experiencias. Astrología · Oráculo · Herramientas · Comunidad · Diseño · Transformación.',
}

type Section = {
  num: string
  slug: string
  bg: string
  title: string
  description: string
  href: string
}

const SECTIONS: ReadonlyArray<Section> = [
  {
    num: '01',
    slug: 'portal-lunar',
    bg: '/hero/hero-bg.jpg',
    title: 'Portal Lunar',
    description: 'Bienvenida al universo de Elara Nova.',
    href: '/portal',
  },
  {
    num: '02',
    slug: 'archivo-astral',
    bg: '/hero/manifiesto-bg.jpg',
    title: 'Archivo Astral',
    description: 'Calculadoras, mapas y reportes personalizados.',
    href: '/archivo-astral',
  },
  {
    num: '03',
    slug: 'codice-sagrado',
    bg: '/hero/codice-bg.jpg',
    title: 'Códice Sagrado',
    description: 'Oráculo, cartas y ebooks digitales.',
    href: '/codice',
  },
  {
    num: '04',
    slug: 'el-circulo',
    bg: '/hero/circle-bg.jpg',
    title: 'El Círculo',
    description: 'Comunidad y espacio de conexión.',
    href: '/circulo',
  },
  {
    num: '05',
    slug: 'atelier-creativo',
    bg: '/hero/b2b-bg.jpg',
    title: 'Atelier Creativo',
    description: 'Servicios, portafolio y procesos creativos.',
    href: '/atelier',
  },
  {
    num: '06',
    slug: 'manifiesto',
    bg: '/hero/manifiesto-bg.jpg',
    title: 'Manifiesto',
    description: 'Cierre emocional e invitación final.',
    href: '/manifiesto',
  },
] as const

const PILARES = [
  'Astrología',
  'Oráculo',
  'Herramientas',
  'Comunidad',
  'Diseño',
  'Transformación',
] as const

function SectionCard({ section }: { section: Section }) {
  return (
    <Link
      href={section.href}
      prefetch
      className="group relative block aspect-[4/3] overflow-hidden rounded-xl border border-[var(--color-gold)]/30 transition-all hover:border-[var(--color-gold)]/80 hover:-translate-y-1"
      style={{
        boxShadow:
          '0 6px 32px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.08)',
      }}
    >
      <Image
        src={section.bg}
        alt=""
        fill
        sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
        quality={85}
        className="transition-transform duration-700 group-hover:scale-105"
        style={{ objectFit: 'cover' }}
      />

      {/* Vignette bottom para legibilidad del texto */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, transparent 35%, rgba(10,0,16,0.55) 70%, rgba(10,0,16,0.92) 100%)',
        }}
      />

      {/* Glow gold hover overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(120% 80% at 50% 100%, rgba(242,213,120,0.25), transparent 60%)',
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 flex h-full flex-col justify-end p-5">
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            color: 'var(--color-gold-soft)',
            fontSize: 10,
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            opacity: 0.85,
            marginBottom: 4,
          }}
        >
          {section.num} · {section.title}
        </span>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            color: 'var(--color-cream)',
            fontSize: 24,
            lineHeight: 1.1,
            marginBottom: 8,
            textShadow:
              '0 0 24px rgba(242,213,120,0.35), 0 2px 12px rgba(0,0,0,0.85)',
          }}
        >
          {section.title}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            color: 'var(--color-pale-lav)',
            fontSize: 14,
            lineHeight: 1.4,
            opacity: 0.9,
            marginBottom: 12,
          }}
        >
          {section.description}
        </p>
        <span
          className="inline-flex items-center gap-2 self-start opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            fontFamily: 'var(--font-sans)',
            color: 'var(--color-gold-bright)',
            fontSize: 11,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
          }}
        >
          Entrar
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M2 7 L11 7 M7 3 L11 7 L7 11" />
          </svg>
        </span>
      </div>
    </Link>
  )
}

export default function UniversoPage() {
  return (
    <main
      className="relative isolate flex min-h-screen w-full flex-col items-center overflow-hidden pt-32 pb-16"
      style={{ background: 'var(--color-void)' }}
    >
      <Image
        src="/hero/hero-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={85}
        style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.35 }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,0,16,0.85) 0%, rgba(26,15,61,0.92) 60%, rgba(10,0,16,0.98) 100%)',
        }}
      />

      <SiteHeader active="/universo" />

      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center gap-12 px-6">
        {/* Hero del universo */}
        <div className="flex flex-col items-center gap-5 pt-4 text-center">
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-gold-soft)',
              fontSize: 11,
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              opacity: 0.95,
            }}
          >
            — Elara Nova —
          </span>
          <h1
            className="text-4xl md:text-6xl"
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              color: 'var(--color-cream)',
              lineHeight: 1.05,
              textShadow: '0 0 36px rgba(242,213,120,0.5)',
            }}
          >
            Un universo,{' '}
            <em style={{ color: 'var(--color-gold-bright)' }}>
              múltiples experiencias
            </em>
            .
          </h1>
          <p
            className="max-w-xl"
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              color: 'var(--color-pale-lav)',
              fontSize: 17,
              lineHeight: 1.55,
              opacity: 0.92,
            }}
          >
            Seis puertas, una misma alma. Escogé por dónde entrar.
          </p>
        </div>

        {/* Grid 6 secciones */}
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((s) => (
            <SectionCard key={s.slug} section={s} />
          ))}
        </div>

        {/* Pilares — strip horizontal */}
        <div
          className="flex w-full max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-full border border-[var(--color-gold)]/30 px-8 py-5"
          style={{
            background: 'rgba(26,15,61,0.55)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
          }}
        >
          {PILARES.map((p, i) => (
            <span key={p} className="inline-flex items-center gap-3">
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--color-gold-soft)',
                  fontSize: 11,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  opacity: 0.95,
                }}
              >
                {p}
              </span>
              {i < PILARES.length - 1 && (
                <span aria-hidden style={{ color: 'var(--color-gold)' }}>
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </main>
  )
}
