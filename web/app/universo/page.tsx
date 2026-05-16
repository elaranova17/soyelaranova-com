import type { Metadata } from 'next'
import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SectionCard3D, type Section3D } from '@/components/section-card-3d'

export const metadata: Metadata = {
  title: 'Universo · Elara Nova',
  description:
    'Un universo, múltiples experiencias. Astrología · Oráculo · Herramientas · Comunidad · Diseño · Transformación.',
}

const SECTIONS: ReadonlyArray<Section3D> = [
  {
    num: '01',
    slug: 'portal-lunar',
    bg: '/hero/portal-lunar-bg.jpg',
    title: 'Portal Lunar',
    description: 'Bienvenida al universo de Elara Nova.',
    href: '/portal',
  },
  {
    num: '02',
    slug: 'archivo-astral',
    bg: '/hero/archivo-astral-bg.jpg',
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
    bg: '/hero/circulo-bg.jpg',
    title: 'El Círculo',
    description: 'Comunidad y espacio de conexión.',
    href: '/circulo',
  },
  {
    num: '05',
    slug: 'atelier-creativo',
    bg: '/hero/atelier-bg.jpg',
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

export default function UniversoPage() {
  return (
    <main
      className="relative isolate flex min-h-screen w-full flex-col items-center overflow-hidden pt-32 pb-16"
      style={{ background: 'var(--color-void)' }}
    >
      <Image
        src="/hero/portal-lago.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={92}
        style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.32 }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,0,16,0.88) 0%, rgba(26,15,61,0.94) 60%, rgba(10,0,16,0.98) 100%)',
        }}
      />

      <SiteHeader active="/universo" />

      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center gap-14 px-6">
        {/* Hero del universo */}
        <div className="flex flex-col items-center gap-5 pt-4 text-center">
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-gold-soft)',
              fontSize: 11,
              letterSpacing: '0.42em',
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

        {/* Grid 6 secciones con efecto 3D mouse-tilt */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((s, i) => (
            <SectionCard3D key={s.slug} section={s} index={i} />
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
