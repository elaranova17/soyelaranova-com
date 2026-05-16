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
import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { AnimatedButterfly } from './animated-butterfly'
import { MiniIcon, type IconKind } from './mini-icon'
import { ElaraButton } from './elara-button'

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


type NavLink = { href: string; label: string; active?: boolean }
const NAV_LINKS: readonly NavLink[] = [
  { href: '/',          label: 'Inicio', active: true },
  { href: '/portal',    label: 'Portal' },
  { href: '/codice',    label: 'Códice' },
  { href: '/comunidad', label: 'Comunidad' },
  { href: '/atelier',   label: 'Atelier' },
]

type SidebarCard = { href: string; title: string; accent: string; icon: IconKind }
const SIDEBAR_CARDS: readonly SidebarCard[] = [
  { href: '/codice',         title: 'Códice\nSagrado',   accent: 'var(--color-gold)',         icon: 'grimoire' },
  { href: '/archivo-astral', title: 'Archivo\nAstral',   accent: 'var(--color-lavender)',     icon: 'mandala-astral' },
  { href: '/circulo',        title: 'El\nCírculo',       accent: 'var(--color-coral)',        icon: 'bonfire' },
  { href: '/atelier',        title: 'Atelier\nCreativo', accent: 'var(--color-crystal-cyan)', icon: 'rainbow-crystal' },
]

type BottomItem = { href: string; label: string; icon: IconKind; accent: string }
const BOTTOM_NAV: readonly BottomItem[] = [
  { href: '/oraculo',      label: 'Oráculo',               icon: 'tarot-cards',     accent: 'var(--color-violet-flower)' },
  { href: '/lecturas',     label: 'Lecturas',              icon: 'open-book',       accent: 'var(--color-gold-bright)' },
  { href: '/herramientas', label: 'Herramientas Astrales', icon: 'astrolabe',       accent: 'var(--color-lavender)' },
  { href: '/comunidad',    label: 'Comunidad',             icon: 'crystal-cluster', accent: 'var(--color-crystal-pink)' },
  { href: '/atelier',      label: 'Atelier',               icon: 'prism',           accent: 'var(--color-crystal-cyan)' },
]

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
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
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
            <Link
              key={link.href}
              href={link.href}
              prefetch
              style={{
                fontFamily: 'var(--font-sans)',
                color: link.active ? 'var(--color-gold-bright)' : 'var(--color-cream)',
                fontSize: 12,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                opacity: link.active ? 1 : 0.85,
                transition: 'opacity 0.2s',
                textShadow: link.active ? '0 0 12px rgba(242,213,120,0.6)' : 'none',
              }}
              className="hover:opacity-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Login */}
        <Link
          href="/login"
          prefetch
          className="flex items-center gap-2 rounded-full border border-[var(--color-gold)]/60 px-5 py-2 transition-all hover:bg-[var(--color-gold)]/15"
          style={{
            fontFamily: 'var(--font-sans)',
            color: 'var(--color-cream)',
            fontSize: 11,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
          }}
        >
          <svg width={12} height={12} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.4} aria-hidden>
            <circle cx={6} cy={4} r={2} />
            <path d="M2 11 Q2 7 6 7 Q10 7 10 11" />
          </svg>
          Entrar
        </Link>
      </motion.header>

      {/* Hero text block — izquierda */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
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

        {/* 2 CTAs premium */}
        <div className="flex flex-wrap items-center gap-4">
          <ElaraButton href="/portal" variant="primary">
            Iniciar viaje
          </ElaraButton>
          <ElaraButton href="/codice" variant="secondary">
            Explorar el Códice
          </ElaraButton>
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
      </motion.div>

      {/* Sidebar derecha — 4 cards */}
      <motion.aside
        initial="hidden"
        animate="visible"
        variants={{
          hidden:  {},
          visible: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } },
        }}
        className="absolute right-[3%] top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3"
        style={{ zIndex: 30 }}
      >
        {SIDEBAR_CARDS.map((card) => (
          <motion.div
            key={card.href}
            variants={{
              hidden:  { opacity: 0, x: 32 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
            whileHover={{ scale: 1.035, x: -4 }}
          >
            <Link
              href={card.href}
              prefetch
              className="group flex w-[180px] items-center gap-3 rounded-lg border border-[var(--color-gold)]/30 px-4 py-3 transition-colors hover:border-[var(--color-gold)]/70 hover:bg-[var(--color-purple-night)]/50"
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
            </Link>
          </motion.div>
        ))}
      </motion.aside>

      {/* Bottom row — 5 iconos circulares */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={{
          hidden:  {},
          visible: { transition: { staggerChildren: 0.08, delayChildren: 0.7 } },
        }}
        aria-label="Acceso rápido"
        className="absolute left-1/2 bottom-10 -translate-x-1/2 flex items-end gap-5 md:gap-10"
        style={{ zIndex: 30 }}
      >
        {BOTTOM_NAV.map((item) => (
          <motion.div
            key={item.href}
            variants={{
              hidden:  { opacity: 0, y: 24, scale: 0.85 },
              visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href={item.href}
              prefetch
              className="group flex flex-col items-center gap-2"
            >
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full border md:h-16 md:w-16"
              style={{
                background: `radial-gradient(circle, ${item.accent}40 0%, rgba(26,15,61,0.7) 80%)`,
                borderColor: `${item.accent}AA`,
                color: item.accent,
                boxShadow: `0 0 24px ${item.accent}55, inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.3)`,
                animation: 'elara-icon-breath 4s ease-in-out infinite',
              }}
            >
              <MiniIcon kind={item.icon} />
            </div>
            <span
              className="hidden md:block max-w-[110px] text-center"
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
            </Link>
          </motion.div>
        ))}

        {/* Idle breathing animation para los iconos */}
        <style jsx global>{`
          @keyframes elara-icon-breath {
            0%, 100% { transform: scale(1); }
            50%      { transform: scale(1.04); }
          }
        `}</style>
      </motion.nav>
    </section>
  )
}
