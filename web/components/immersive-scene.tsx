'use client'

/**
 * ImmersiveScene — fondos ESTATICOS con efecto 3D de profundidad.
 *
 * NO hay parallax al mouse (la imagen no se mueve cuando movés el cursor).
 * La sensacion 3D viene de:
 *   1. CSS perspective 1400px + translateZ en capas (bg empuja atras, contenido se eleva)
 *   2. Atmospheric layers: bloom dorado · polvo flotante · vignette radial · grano
 *   3. Scroll-only parallax sutil (la imagen escala 1.0→1.08 al hacer scroll)
 *   4. Glass card content con depth shadow profundo (eleva el contenido del fondo)
 *   5. Frame dorado + 4 esquineros decorativos
 *
 * Mantiene el patron del home: hero text izquierda + sidebar 4 cards + bottom 5 iconos.
 */

import type { ReactNode } from 'react'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import { MiniIcon, type IconKind } from './mini-icon'
import { ElaraButton } from './elara-button'
import { SiteHeader } from './site-header'

function FrameCorner({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const transforms = { tl: 'rotate(0deg)', tr: 'rotate(90deg)', br: 'rotate(180deg)', bl: 'rotate(270deg)' } as const
  const positions = {
    tl: { top: 12, left: 12 },
    tr: { top: 12, right: 12 },
    bl: { bottom: 12, left: 12 },
    br: { bottom: 12, right: 12 },
  } as const
  return (
    <svg
      aria-hidden
      width={36}
      height={36}
      viewBox="0 0 32 32"
      className="pointer-events-none absolute"
      style={{ ...positions[pos], transform: transforms[pos], color: 'var(--color-gold)', zIndex: 15 }}
    >
      <path d="M2 14 L2 2 L14 2 M8 2 L2 2 L2 8" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" />
      <circle cx={2} cy={2} r={2} fill="currentColor" />
    </svg>
  )
}

export type SidebarCard = { href: string; title: string; accent: string; icon: IconKind }
const DEFAULT_SIDEBAR: readonly SidebarCard[] = [
  { href: '/codice',         title: 'Códice\nSagrado',   accent: 'var(--color-gold)',         icon: 'grimoire' },
  { href: '/archivo-astral', title: 'Archivo\nAstral',   accent: 'var(--color-lavender)',     icon: 'mandala-astral' },
  { href: '/circulo',        title: 'El\nCírculo',       accent: 'var(--color-coral)',        icon: 'bonfire' },
  { href: '/atelier',        title: 'Atelier\nCreativo', accent: 'var(--color-crystal-cyan)', icon: 'rainbow-crystal' },
]

export type BottomItem = { href: string; label: string; icon: IconKind; accent: string }
const DEFAULT_BOTTOM: readonly BottomItem[] = [
  { href: '/oraculo',      label: 'Oráculo',               icon: 'tarot-cards',     accent: 'var(--color-violet-flower)' },
  { href: '/lecturas',     label: 'Lecturas',              icon: 'open-book',       accent: 'var(--color-gold-bright)' },
  { href: '/herramientas', label: 'Herramientas Astrales', icon: 'astrolabe',       accent: 'var(--color-lavender)' },
  { href: '/circulo',      label: 'Comunidad',             icon: 'crystal-cluster', accent: 'var(--color-crystal-pink)' },
  { href: '/atelier',      label: 'Atelier',               icon: 'prism',           accent: 'var(--color-crystal-cyan)' },
]

type Props = {
  bg: string
  bgAlt?: string
  eyebrow: string
  titleKicker?: string
  title: ReactNode
  description: ReactNode
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  tagline?: string
  activeNav?: string
  sidebarCards?: readonly SidebarCard[]
  bottomNav?: readonly BottomItem[]
}

/** Floating dust particle — pura decoracion CSS, sin interaccion */
function DustMote({ x, y, size, duration, delay }: { x: string; y: string; size: number; duration: number; delay: number }) {
  return (
    <motion.div
      className="pointer-events-none absolute rounded-full"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        background: 'rgba(242,213,120,0.8)',
        boxShadow: '0 0 8px rgba(242,213,120,0.6), 0 0 16px rgba(242,213,120,0.25)',
        willChange: 'transform, opacity',
      }}
      animate={{
        y: [0, -180, -360],
        x: [0, 14, -14, 0],
        opacity: [0, 0.7, 0],
      }}
      transition={{ duration, delay, repeat: Infinity, ease: 'linear' }}
    />
  )
}

export function ImmersiveScene({
  bg,
  bgAlt = '',
  eyebrow,
  titleKicker,
  title,
  description,
  ctaPrimary,
  ctaSecondary,
  tagline,
  activeNav,
  sidebarCards = DEFAULT_SIDEBAR,
  bottomNav = DEFAULT_BOTTOM,
}: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()

  // Scroll-only parallax — la imagen escala suave al hacer scroll (sin moverse con el mouse)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const bgScale = useTransform(scrollYProgress, [0, 1], reducedMotion ? [1, 1] : [1, 1.08])
  const bgY = useTransform(scrollYProgress, [0, 1], reducedMotion ? ['0%', '0%'] : ['0%', '-8%'])
  const contentY = useTransform(scrollYProgress, [0, 1], reducedMotion ? ['0%', '0%'] : ['0%', '-30%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0])

  return (
    <section
      ref={sectionRef}
      aria-label={typeof title === 'string' ? title : eyebrow}
      className="relative isolate min-h-screen w-full overflow-hidden"
      style={{
        background: 'var(--color-void)',
        perspective: 1400,
        perspectiveOrigin: 'center 40%',
      }}
    >
      {/* ============ ESCENARIO ESTATICO CON DEPTH ============ */}

      {/* Capa BG: estatica, solo scroll-driven scale + Y para sensacion de profundidad */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{
          scale: bgScale,
          y: bgY,
          transformOrigin: 'center 45%',
          willChange: 'transform',
        }}
      >
        <Image
          src={bg}
          alt={bgAlt}
          fill
          priority
          sizes="100vw"
          quality={95}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </motion.div>

      {/* Bloom dorado estatico desde un foco luminoso de la escena */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(45% 35% at 50% 38%, rgba(242,213,120,0.32) 0%, rgba(212,175,55,0.10) 35%, transparent 70%)',
          mixBlendMode: 'screen',
          zIndex: 4,
          animation: 'elara-bloom-breath 8s ease-in-out infinite',
        }}
      />

      {/* Polvo dorado flotante (decorativo, no interactivo) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 6 }}>
        <DustMote x="8%"  y="80%" size={2}   duration={22} delay={0} />
        <DustMote x="18%" y="85%" size={1.5} duration={26} delay={3} />
        <DustMote x="28%" y="78%" size={2.5} duration={24} delay={5} />
        <DustMote x="48%" y="88%" size={2}   duration={20} delay={1} />
        <DustMote x="62%" y="82%" size={1.5} duration={28} delay={4} />
        <DustMote x="78%" y="86%" size={2.5} duration={22} delay={2} />
        <DustMote x="90%" y="80%" size={2}   duration={25} delay={6} />
      </div>

      {/* Vignette + grano para profundidad fotografica */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(110% 90% at 50% 50%, transparent 35%, rgba(10,0,16,0.40) 75%, rgba(10,0,16,0.78) 100%)',
          zIndex: 8,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,0,16,0.50) 0%, transparent 18%, transparent 70%, rgba(10,0,16,0.88) 100%)',
          zIndex: 9,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          mixBlendMode: 'overlay',
          zIndex: 10,
        }}
      />

      {/* Frame dorado + esquineros */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-4 rounded-md border border-[var(--color-gold)]/30"
        style={{ zIndex: 14 }}
      />
      <FrameCorner pos="tl" />
      <FrameCorner pos="tr" />
      <FrameCorner pos="bl" />
      <FrameCorner pos="br" />

      {/* ============ CONTENIDO con CSS depth (translateZ) ============ */}

      <SiteHeader active={activeNav} />

      {/* HERO TEXT IZQUIERDA — translateZ(40px) lo eleva visualmente sobre el fondo */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          y: contentY,
          opacity: contentOpacity,
          transform: 'translateZ(40px)',
          transformStyle: 'preserve-3d',
          willChange: 'transform, opacity',
          zIndex: 30,
        }}
        className="absolute left-[5%] top-1/2 flex max-w-[480px] -translate-y-1/2 flex-col gap-6"
      >
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            color: 'var(--color-gold-soft)',
            fontSize: 11,
            letterSpacing: '0.45em',
            textTransform: 'uppercase',
            opacity: 0.95,
            textShadow: '0 0 18px rgba(0,0,0,0.85)',
          }}
        >
          {eyebrow}
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--color-cream)',
            fontSize: 'clamp(38px, 5.2vw, 68px)',
            lineHeight: 1.04,
            fontWeight: 400,
            textShadow:
              '0 0 36px rgba(0,0,0,0.85), 0 4px 24px rgba(0,0,0,0.6), 0 0 60px rgba(242,213,120,0.18)',
          }}
        >
          {titleKicker && (
            <span
              style={{
                display: 'block',
                textTransform: 'uppercase',
                letterSpacing: '0.025em',
                background:
                  'linear-gradient(180deg, #FFEAA0 0%, var(--color-gold-bright) 55%, var(--color-gold) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {titleKicker}
            </span>
          )}
          <em
            style={{
              fontStyle: 'italic',
              fontWeight: 400,
              color: 'var(--color-cream)',
              display: 'block',
            }}
          >
            {title}
          </em>
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            color: 'var(--color-pale-lav)',
            fontSize: 18,
            lineHeight: 1.55,
            opacity: 0.95,
            textShadow: '0 0 14px rgba(0,0,0,0.85)',
          }}
        >
          {description}
        </p>

        {(ctaPrimary || ctaSecondary) && (
          <div className="flex flex-wrap items-center gap-4">
            {ctaPrimary && (
              <ElaraButton variant="primary" href={ctaPrimary.href}>
                {ctaPrimary.label}
              </ElaraButton>
            )}
            {ctaSecondary && (
              <ElaraButton variant="secondary" href={ctaSecondary.href}>
                {ctaSecondary.label}
              </ElaraButton>
            )}
          </div>
        )}

        {tagline && (
          <p
            className="max-w-xs pt-2"
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              color: 'var(--color-gold-soft)',
              fontSize: 14,
              lineHeight: 1.55,
              opacity: 0.85,
            }}
          >
            {tagline}
          </p>
        )}
      </motion.div>

      {/* SIDEBAR DERECHA — translateZ(30px) intermedio */}
      <motion.aside
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.10, delayChildren: 0.6 } },
        }}
        className="absolute right-[3%] top-1/2 hidden -translate-y-1/2 flex-col gap-3 xl:flex"
        style={{
          transform: 'translateZ(30px)',
          transformStyle: 'preserve-3d',
          zIndex: 30,
        }}
      >
        {sidebarCards.map((card) => {
          const isActive = activeNav === card.href
          return (
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
                className="group flex w-[180px] items-center gap-3 rounded-lg border px-4 py-3 transition-colors hover:bg-[var(--color-purple-night)]/50"
                style={{
                  background: 'rgba(26,15,61,0.55)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  borderColor: isActive ? `${card.accent}` : 'rgba(212,175,55,0.30)',
                  boxShadow: isActive
                    ? `0 0 18px ${card.accent}55, 0 8px 32px rgba(0,0,0,0.5)`
                    : '0 8px 32px rgba(0,0,0,0.45)',
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
          )
        })}
      </motion.aside>

      {/* BOTTOM ROW — 5 iconos circulares */}
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08, delayChildren: 0.8 } },
        }}
        aria-label="Acceso rápido"
        className="absolute left-1/2 bottom-10 flex -translate-x-1/2 items-end gap-5 md:gap-10"
        style={{
          transform: 'translateZ(20px)',
          transformStyle: 'preserve-3d',
          zIndex: 30,
        }}
      >
        {bottomNav.map((item) => {
          const isActive = activeNav === item.href
          return (
            <motion.div
              key={`${item.href}-${item.label}`}
              variants={{
                hidden:  { opacity: 0, y: 24, scale: 0.85 },
                visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link href={item.href} prefetch className="group flex flex-col items-center gap-2">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full border md:h-16 md:w-16"
                  style={{
                    background: `radial-gradient(circle, ${item.accent}${isActive ? '66' : '40'} 0%, rgba(26,15,61,0.7) 80%)`,
                    borderColor: isActive ? item.accent : `${item.accent}AA`,
                    color: item.accent,
                    boxShadow: isActive
                      ? `0 0 32px ${item.accent}99, inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -1px 0 rgba(0,0,0,0.3)`
                      : `0 0 24px ${item.accent}55, inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.3)`,
                    animation: 'elara-icon-breath 4s ease-in-out infinite',
                  }}
                >
                  <MiniIcon kind={item.icon} />
                </div>
                <span
                  className="hidden max-w-[110px] text-center md:block"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: isActive ? 'var(--color-gold-bright)' : 'var(--color-cream)',
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
          )
        })}
      </motion.nav>

      {/* Keyframes globales */}
      <style jsx global>{`
        @keyframes elara-icon-breath {
          0%, 100% { transform: scale(1); }
          50%      { transform: scale(1.04); }
        }
        @keyframes elara-bloom-breath {
          0%, 100% { opacity: 0.85; }
          50%      { opacity: 1; }
        }
      `}</style>
    </section>
  )
}
