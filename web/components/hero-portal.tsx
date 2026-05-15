'use client'

/**
 * HeroPortal — layout completo del mockup.
 *
 * Composición:
 *   - Fondo Midjourney hero-bg.jpg con mouse-tilt parallax 3D
 *   - Frame dorado fino enmarcando el viewport con esquineros decorativos
 *   - Header: logo ELARA NOVA + nav (Inicio/Portal/Códice/Comunidad/Atelier) + LOGIN
 *   - Hero block izquierda: eyebrow + título Playfair + subtítulo + 2 CTAs
 *   - Sidebar derecha: 4 cards verticales (Códice/Archivo/Círculo/Atelier)
 *   - Bottom row: 5 iconos circulares (Oráculo/Lecturas/Herramientas/Comunidad/Atelier)
 *   - 3 mariposas animadas cruzando la composición
 */
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { AnimatedButterfly } from './animated-butterfly'

/** Esquinero decorativo dorado para las 4 esquinas del frame. */
function FrameCorner({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const transforms = {
    tl: 'rotate(0deg)',
    tr: 'rotate(90deg)',
    br: 'rotate(180deg)',
    bl: 'rotate(270deg)',
  } as const
  const positions = {
    tl: { top: 12, left: 12 },
    tr: { top: 12, right: 12 },
    bl: { bottom: 12, left: 12 },
    br: { bottom: 12, right: 12 },
  } as const
  return (
    <svg
      aria-hidden
      width={32}
      height={32}
      viewBox="0 0 32 32"
      className="pointer-events-none absolute"
      style={{ ...positions[pos], transform: transforms[pos], color: 'var(--color-gold)' }}
    >
      <path
        d="M2 14 L2 2 L14 2 M8 2 L2 2 L2 8"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <circle cx={2} cy={2} r={2} fill="currentColor" />
    </svg>
  )
}

/** Mini ícono SVG para el bottom row. Usa currentColor. */
function MiniIcon({ kind }: { kind: 'cards' | 'book' | 'compass' | 'crystals' | 'prism' }) {
  if (kind === 'cards') {
    return (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x={10} y={6} width={16} height={26} rx={2} transform="rotate(-8 18 19)" />
        <rect x={14} y={8} width={16} height={26} rx={2} transform="rotate(6 22 21)" />
        <path d="M22 16 L24 19 L27 20 L24 21 L22 24 L20 21 L17 20 L20 19 Z" fill="currentColor" />
      </svg>
    )
  }
  if (kind === 'book') {
    return (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M4 10 Q4 8 6 8 L18 8 Q20 8 20 10 L20 32 Q20 30 18 30 L6 30 Q4 30 4 32 Z" />
        <path d="M36 10 Q36 8 34 8 L22 8 Q20 8 20 10 L20 32 Q20 30 22 30 L34 30 Q36 30 36 32 Z" />
        <path d="M20 14 L20 28" />
        <circle cx={20} cy={4} r={1.5} fill="currentColor" />
      </svg>
    )
  }
  if (kind === 'compass') {
    return (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx={20} cy={20} r={16} />
        <circle cx={20} cy={20} r={12} strokeDasharray="2 3" />
        <path d="M20 8 L22 20 L20 32 L18 20 Z" fill="currentColor" stroke="none" />
        <path d="M8 20 L20 22 L32 20 L20 18 Z" fill="currentColor" stroke="none" opacity={0.5} />
        <circle cx={20} cy={20} r={2} fill="currentColor" />
      </svg>
    )
  }
  if (kind === 'crystals') {
    return (
      <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M20 6 L26 16 L26 30 L20 36 L14 30 L14 16 Z" />
        <path d="M20 6 L20 36 M14 16 L26 16 M14 30 L26 30" />
        <path d="M8 20 L12 26 L12 34 L8 38 L4 34 L4 26 Z" transform="translate(2,0)" />
        <path d="M32 20 L36 26 L36 34 L32 38 L28 34 L28 26 Z" transform="translate(-2,0)" />
      </svg>
    )
  }
  // prism
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M20 4 L34 14 L34 30 L20 36 L6 30 L6 14 Z" />
      <path d="M20 4 L20 36 M6 14 L34 14 M6 30 L34 30 M6 14 L34 30 M34 14 L6 30" />
    </svg>
  )
}

type NavLink = { href: string; label: string; active?: boolean }
const NAV_LINKS: readonly NavLink[] = [
  { href: '#inicio', label: 'Inicio', active: true },
  { href: '#portal', label: 'Portal' },
  { href: '#codice', label: 'Códice' },
  { href: '#comunidad', label: 'Comunidad' },
  { href: '#atelier', label: 'Atelier' },
]

const SIDEBAR_CARDS = [
  {
    id: 'codice',
    title: 'Códice\nSagrado',
    accent: 'var(--color-gold)',
    icon: 'book' as const,
  },
  {
    id: 'archivo',
    title: 'Archivo\nAstral',
    accent: 'var(--color-lavender)',
    icon: 'compass' as const,
  },
  {
    id: 'circulo',
    title: 'El\nCírculo',
    accent: 'var(--color-coral)',
    icon: 'crystals' as const,
  },
  {
    id: 'atelier',
    title: 'Atelier\nCreativo',
    accent: 'var(--color-crystal-cyan)',
    icon: 'prism' as const,
  },
] as const

const BOTTOM_NAV = [
  { id: 'oraculo',     label: 'Oráculo',              icon: 'cards' as const,    accent: 'var(--color-violet-flower)' },
  { id: 'lecturas',    label: 'Lecturas',             icon: 'book' as const,     accent: 'var(--color-gold-bright)' },
  { id: 'herramientas',label: 'Herramientas Astrales',icon: 'compass' as const,  accent: 'var(--color-lavender)' },
  { id: 'comunidad',   label: 'Comunidad',            icon: 'crystals' as const, accent: 'var(--color-crystal-pink)' },
  { id: 'atelier',     label: 'Atelier',              icon: 'prism' as const,    accent: 'var(--color-crystal-cyan)' },
] as const

export function HeroPortal() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const tiltX = useSpring(useTransform(mouseY, [-1, 1], [0.6, -0.6]), { stiffness: 80, damping: 22 })
  const tiltY = useSpring(useTransform(mouseX, [-1, 1], [-0.6, 0.6]), { stiffness: 80, damping: 22 })
  const parallaxX = useSpring(useTransform(mouseX, [-1, 1], [-8, 8]), { stiffness: 60, damping: 20 })
  const parallaxY = useSpring(useTransform(mouseY, [-1, 1], [-8, 8]), { stiffness: 60, damping: 20 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = wrapRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1
    mouseX.set(nx)
    mouseY.set(ny)
  }

  function handleMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      ref={wrapRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Portal Lunar de Elara Nova"
      className="relative isolate min-h-screen w-full overflow-hidden"
      style={{ background: 'var(--color-void)', perspective: 1400 }}
    >
      {/* Fondo Midjourney con mouse-tilt 3D */}
      <motion.div
        className="absolute inset-0"
        style={{
          rotateX: tiltX,
          rotateY: tiltY,
          x: parallaxX,
          y: parallaxY,
          transformStyle: 'preserve-3d',
        }}
      >
        <Image
          src="/hero/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={90}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </motion.div>

      {/* Vignette para legibilidad UI */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,0,16,0.45) 0%, rgba(10,0,16,0.05) 18%, rgba(10,0,16,0) 50%, rgba(10,0,16,0.55) 100%)',
          zIndex: 5,
        }}
      />

      {/* Frame dorado fino con esquineros */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-4 rounded-md border border-[var(--color-gold)]/30"
        style={{ zIndex: 10 }}
      />
      <FrameCorner pos="tl" />
      <FrameCorner pos="tr" />
      <FrameCorner pos="bl" />
      <FrameCorner pos="br" />

      {/* Mariposas animadas */}
      <div className="pointer-events-none absolute inset-0" style={{ zIndex: 20 }}>
        <div className="relative h-full w-full">
          <AnimatedButterfly duration={9}  delay={0}   size={32} hueClass="text-[var(--color-gold-bright)]" box={{ w: 1400, h: 800 }} />
          <AnimatedButterfly duration={12} delay={2.5} size={26} hueClass="text-[var(--color-gold-soft)]"   box={{ w: 1200, h: 700 }} />
          <AnimatedButterfly duration={10} delay={4.5} size={28} hueClass="text-[var(--color-pale-lav)]"    box={{ w: 1300, h: 750 }} />
        </div>
      </div>

      {/* Header */}
      <header
        className="absolute left-1/2 top-7 -translate-x-1/2 flex w-[calc(100%-72px)] max-w-[1280px] items-center justify-between gap-6 rounded-full border border-[var(--color-gold)]/40 px-6 py-3"
        style={{
          background: 'rgba(26,15,61,0.55)',
          backdropFilter: 'blur(14px) saturate(180%)',
          WebkitBackdropFilter: 'blur(14px) saturate(180%)',
          zIndex: 50,
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <svg width={26} height={20} viewBox="0 0 26 20" aria-hidden style={{ color: 'var(--color-gold-bright)' }}>
            <g fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
              <circle cx={3} cy={10} r={1.5} fill="currentColor" />
              <circle cx={9} cy={4}  r={1.5} fill="currentColor" />
              <circle cx={13} cy={12} r={1.5} fill="currentColor" />
              <circle cx={19} cy={6}  r={1.5} fill="currentColor" />
              <circle cx={23} cy={14} r={1.5} fill="currentColor" />
              <path d="M3 10 L9 4 L13 12 L19 6 L23 14" />
            </g>
          </svg>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              color: 'var(--color-cream)',
              fontSize: 18,
              letterSpacing: '0.1em',
            }}
          >
            Elara Nova
          </span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-sans)',
                color: link.active ? 'var(--color-gold-bright)' : 'var(--color-cream)',
                fontSize: 12,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                opacity: link.active ? 1 : 0.85,
                transition: 'opacity 0.2s',
              }}
              className="hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Login */}
        <a
          href="/login"
          className="rounded-full border border-[var(--color-gold)]/60 px-5 py-2 transition-all hover:bg-[var(--color-gold)]/15"
          style={{
            fontFamily: 'var(--font-sans)',
            color: 'var(--color-cream)',
            fontSize: 11,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
          }}
        >
          Login
        </a>
      </header>

      {/* Hero text block — izquierda */}
      <div
        className="absolute left-[6%] top-1/2 -translate-y-1/2 flex max-w-[440px] flex-col gap-6"
        style={{ zIndex: 30 }}
      >
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
          Elara Nova
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--color-cream)',
            fontSize: 'clamp(36px, 5vw, 64px)',
            lineHeight: 1.05,
            fontWeight: 500,
            textShadow: '0 0 32px rgba(0,0,0,0.85)',
          }}
        >
          <span
            style={{
              display: 'block',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
              color: 'var(--color-gold-bright)',
            }}
          >
            Portal Lunar:
          </span>
          <em
            style={{
              fontStyle: 'italic',
              fontWeight: 400,
              color: 'var(--color-cream)',
            }}
          >
            Tu Viaje Ancestral
          </em>
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            color: 'var(--color-pale-lav)',
            fontSize: 17,
            lineHeight: 1.55,
            opacity: 0.95,
            textShadow: '0 0 12px rgba(0,0,0,0.85)',
          }}
        >
          Descubre la magia, la astrología y el autodescubrimiento en un universo diseñado para tu alma.
        </p>

        {/* 2 CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#iniciar"
            className="rounded-full px-7 py-3 font-bold uppercase transition-transform hover:scale-[1.03]"
            style={{
              background: 'linear-gradient(180deg, var(--color-gold-bright), var(--color-gold) 55%, var(--color-gold-dark))',
              color: 'var(--color-purple-night)',
              border: '1px solid rgba(255,234,160,0.65)',
              boxShadow: '0 4px 20px rgba(242,213,120,0.4), inset 0 1px 0 rgba(255,255,255,0.45)',
              fontFamily: 'var(--font-sans)',
              letterSpacing: '0.18em',
              fontSize: 11,
            }}
          >
            Iniciar viaje
          </a>
          <a
            href="#codice"
            className="rounded-full border border-[var(--color-gold)]/60 px-6 py-3 transition-all hover:bg-[var(--color-gold)]/15"
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-cream)',
              fontSize: 11,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}
          >
            Explorar el Códice
          </a>
        </div>

        <p
          className="max-w-xs pt-2"
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            color: 'var(--color-gold-soft)',
            fontSize: 14,
            lineHeight: 1.5,
            opacity: 0.85,
          }}
        >
          Una experiencia inmersiva de bienestar emocional y sabiduría mística.
        </p>
      </div>

      {/* Sidebar derecha — 4 cards */}
      <aside
        className="absolute right-[3%] top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3"
        style={{ zIndex: 30 }}
      >
        {SIDEBAR_CARDS.map((card) => (
          <a
            key={card.id}
            href={`#${card.id}`}
            className="group flex w-[180px] items-center gap-3 rounded-lg border border-[var(--color-gold)]/30 px-4 py-3 transition-all hover:border-[var(--color-gold)]/70 hover:bg-[var(--color-purple-night)]/50"
            style={{
              background: 'rgba(26,15,61,0.55)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          >
            <div
              className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md"
              style={{
                background: `linear-gradient(135deg, ${card.accent}33, ${card.accent}11)`,
                border: `1px solid ${card.accent}55`,
                color: card.accent,
              }}
            >
              <MiniIcon kind={card.icon} />
            </div>
            <div className="flex flex-col gap-0.5">
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  color: 'var(--color-cream)',
                  fontSize: 14,
                  lineHeight: 1.1,
                  whiteSpace: 'pre-line',
                }}
              >
                {card.title}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  color: 'var(--color-gold-soft)',
                  fontSize: 9,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  opacity: 0.85,
                }}
              >
                Explorar →
              </span>
            </div>
          </a>
        ))}
      </aside>

      {/* Bottom row — 5 iconos circulares */}
      <nav
        aria-label="Acceso rápido"
        className="absolute left-1/2 bottom-10 -translate-x-1/2 flex items-end gap-5 md:gap-10"
        style={{ zIndex: 30 }}
      >
        {BOTTOM_NAV.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="group flex flex-col items-center gap-2 transition-transform hover:scale-[1.06]"
          >
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full border transition-all md:h-16 md:w-16"
              style={{
                background: `radial-gradient(circle, ${item.accent}33 0%, rgba(26,15,61,0.7) 80%)`,
                borderColor: `${item.accent}88`,
                color: item.accent,
                boxShadow: `0 0 24px ${item.accent}33, inset 0 1px 0 rgba(255,255,255,0.15)`,
              }}
            >
              <MiniIcon kind={item.icon} />
            </div>
            <span
              className="hidden md:block max-w-[100px] text-center"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-cream)',
                fontSize: 10,
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                opacity: 0.9,
                textShadow: '0 0 8px rgba(0,0,0,0.85)',
              }}
            >
              {item.label}
            </span>
          </a>
        ))}
      </nav>
    </section>
  )
}
