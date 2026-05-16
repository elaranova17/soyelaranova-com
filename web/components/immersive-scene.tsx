'use client'

/**
 * ImmersiveScene — fondos ESTATICOS con efecto 3D de profundidad.
 *
 * NAVEGACION: una sola, SiteNav (fullscreen overlay).
 *
 * Capas:
 *   1. CSS perspective 1400px + translateZ en contenido (eleva el hero text)
 *   2. Atmospheric: bloom dorado breath · 7 motas polvo · vignette · grano
 *   3. Scroll-only parallax sutil (scale 1.0→1.08)
 *   4. Frame dorado + 4 esquineros decorativos
 *
 * Sin mouse-parallax. Sin sidebar. Sin bottom icons.
 * Solo hero text izquierda + CTAs + tagline.
 */

import type { ReactNode } from 'react'
import { useRef } from 'react'
import Image from 'next/image'
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import { ElaraButton } from './elara-button'
import { SiteNav } from './site-nav'

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
  /** Ya no se usa para nav highlighting (SiteNav usa pathname). Se conserva opcional. */
  activeNav?: string
}

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
}: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()

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
      {/* ESCENARIO ESTATICO con scroll-driven scale/Y */}
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

      {/* Bloom dorado breath */}
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

      {/* Polvo dorado flotante */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 6 }}>
        <DustMote x="8%"  y="80%" size={2}   duration={22} delay={0} />
        <DustMote x="18%" y="85%" size={1.5} duration={26} delay={3} />
        <DustMote x="28%" y="78%" size={2.5} duration={24} delay={5} />
        <DustMote x="48%" y="88%" size={2}   duration={20} delay={1} />
        <DustMote x="62%" y="82%" size={1.5} duration={28} delay={4} />
        <DustMote x="78%" y="86%" size={2.5} duration={22} delay={2} />
        <DustMote x="90%" y="80%" size={2}   duration={25} delay={6} />
      </div>

      {/* Vignette + grano */}
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

      {/* UNICA NAVEGACION */}
      <SiteNav />

      {/* HERO TEXT IZQUIERDA con CSS depth */}
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
        className="absolute left-[5%] top-1/2 flex max-w-[520px] -translate-y-1/2 flex-col gap-6 md:left-[7%]"
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
            fontSize: 'clamp(38px, 5.4vw, 72px)',
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
            maxWidth: 480,
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

      <style jsx global>{`
        @keyframes elara-bloom-breath {
          0%, 100% { opacity: 0.85; }
          50%      { opacity: 1; }
        }
      `}</style>
    </section>
  )
}
