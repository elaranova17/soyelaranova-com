'use client'

/**
 * PortalLunarHero — la entrada al universo Elara Nova.
 *
 * Construido en capas (back → front), con efectos cinematograficos:
 *
 *   Z0  Background image (Midjourney portal espiral) — scroll-driven zoom 1.0 → 1.25
 *   Z1  Bloom dorado del centro del portal (radial gradient pulsante)
 *   Z2  Polvo dorado flotante (CSS particles independientes con drift)
 *   Z3  Mariposas figure-8 (3 con velocidades/tamaños varios)
 *   Z4  Vignette + grano + chromatic aberration sutil
 *   Z5  Header pill + Hero text + 2 CTAs magnetic + scroll cue
 *
 * Scroll behavior (GSAP timeline):
 *   - bg image scale-in (camara entra al portal)
 *   - content fade-out + Y down
 *   - bloom intensifica
 *
 * Mouse:
 *   - Subtle parallax (no wobble fuerte)
 *   - CTAs con magnetic effect (cursor cerca → boton atrae)
 *   - Cursor trail dorado opcional
 *
 * Performance: will-change: transform en capas animadas. Respeta reduced-motion.
 */

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ElaraButton } from './elara-button'
import { SiteHeader } from './site-header'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/** Mariposa SVG con figure-8 flight path */
function CinematicButterfly({
  size = 24,
  duration = 14,
  delay = 0,
  pathScale = 1,
  hue = 'rgba(242,213,120,0.85)',
  startX = '15%',
  startY = '30%',
}: {
  size?: number
  duration?: number
  delay?: number
  pathScale?: number
  hue?: string
  startX?: string
  startY?: string
}) {
  return (
    <motion.div
      className="pointer-events-none absolute"
      style={{ left: startX, top: startY, willChange: 'transform' }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 1, 1, 0.9, 1, 0],
        x: [
          0,
          120 * pathScale,
          240 * pathScale,
          360 * pathScale,
          480 * pathScale,
          600 * pathScale,
        ],
        y: [
          0,
          -60 * pathScale,
          0,
          60 * pathScale,
          0,
          -40 * pathScale,
        ],
      }}
      transition={{
        duration,
        delay,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      <motion.svg
        width={size}
        height={size * 0.85}
        viewBox="0 0 32 28"
        style={{
          filter: `drop-shadow(0 0 6px ${hue}) drop-shadow(0 0 14px ${hue})`,
        }}
        animate={{ scaleX: [1, 0.45, 1, 0.5, 1] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path
          d="M16 14 C 12 6, 4 4, 2 8 C 0 12, 4 16, 12 18 L 16 14 L 20 18 C 28 16, 32 12, 30 8 C 28 4, 20 6, 16 14 Z"
          fill={hue}
          opacity={0.85}
        />
        <circle cx={16} cy={14} r={1.1} fill="rgba(255,234,160,1)" />
      </motion.svg>
    </motion.div>
  )
}

/** Floating dust particle */
function DustMote({
  startX,
  startY,
  size = 2,
  duration = 18,
  delay = 0,
}: {
  startX: string
  startY: string
  size?: number
  duration?: number
  delay?: number
}) {
  return (
    <motion.div
      className="pointer-events-none absolute rounded-full"
      style={{
        left: startX,
        top: startY,
        width: size,
        height: size,
        background: 'rgba(242,213,120,0.9)',
        boxShadow: '0 0 8px rgba(242,213,120,0.7), 0 0 16px rgba(242,213,120,0.35)',
        willChange: 'transform, opacity',
      }}
      animate={{
        y: [0, -120, -240, -360],
        x: [0, 20, -20, 0],
        opacity: [0, 0.85, 0.85, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  )
}

/** Magnetic CTA wrapper — el boton sigue sutilmente al cursor cuando esta cerca */
function MagneticCTA({
  children,
  strength = 0.25,
}: {
  children: React.ReactNode
  strength?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 280, damping: 22, mass: 0.45 })
  const sy = useSpring(y, { stiffness: 280, damping: 22, mass: 0.45 })
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (reducedMotion) return
    const el = ref.current
    if (!el) return

    function onMove(e: MouseEvent) {
      if (!el) return
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.hypot(dx, dy)
      const maxDist = 140
      if (dist < maxDist) {
        const force = (1 - dist / maxDist) * strength
        x.set(dx * force)
        y.set(dy * force)
      } else {
        x.set(0)
        y.set(0)
      }
    }

    function onLeave() {
      x.set(0)
      y.set(0)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [strength, reducedMotion, x, y])

  return (
    <motion.div ref={ref} style={{ x: sx, y: sy, willChange: 'transform' }}>
      {children}
    </motion.div>
  )
}

export function PortalLunarHero({ revealDelay = 0 }: { revealDelay?: number }) {
  const sectionRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const bloomRef = useRef<HTMLDivElement>(null)
  const [titleVisible, setTitleVisible] = useState(false)
  const reducedMotion = useReducedMotion()

  // Mouse parallax sutil (no wobble agresivo)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const smx = useSpring(mx, { stiffness: 40, damping: 18, mass: 0.8 })
  const smy = useSpring(my, { stiffness: 40, damping: 18, mass: 0.8 })
  const bgX = useTransform(smx, [-1, 1], [-12, 12])
  const bgY = useTransform(smy, [-1, 1], [-8, 8])
  const bloomX = useTransform(smx, [-1, 1], [-6, 6])
  const bloomY = useTransform(smy, [-1, 1], [-4, 4])

  // Trigger reveal de titulo despues del loader
  useEffect(() => {
    const t = setTimeout(() => setTitleVisible(true), revealDelay)
    return () => clearTimeout(t)
  }, [revealDelay])

  // Scroll timeline GSAP — zoom into the portal
  useEffect(() => {
    if (reducedMotion) return
    if (!bgRef.current || !contentRef.current || !bloomRef.current) return

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.2,
          },
        })
        .to(bgRef.current, { scale: 1.25, ease: 'none' }, 0)
        .to(contentRef.current, { opacity: 0, y: -50, ease: 'none' }, 0)
        .to(bloomRef.current, { opacity: 0.85, scale: 1.4, ease: 'none' }, 0)
    }, sectionRef)

    return () => ctx.revert()
  }, [reducedMotion])

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (reducedMotion) return
    const el = sectionRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1
    mx.set(nx)
    my.set(ny)
  }

  function handleMouseLeave() {
    mx.set(0)
    my.set(0)
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Portal Lunar de Elara Nova"
      className="relative isolate min-h-screen w-full overflow-hidden"
      style={{ background: 'var(--color-void)' }}
    >
      {/* Z0 — BACKGROUND IMAGE */}
      <motion.div
        ref={bgRef}
        className="absolute inset-0"
        style={{
          x: bgX,
          y: bgY,
          willChange: 'transform',
        }}
      >
        <Image
          src="/hero/portal-lago.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={95}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </motion.div>

      {/* Z1 — BLOOM DORADO del centro del portal */}
      <motion.div
        ref={bloomRef}
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          x: bloomX,
          y: bloomY,
          opacity: 0.55,
          willChange: 'transform, opacity',
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(40% 35% at 50% 45%, rgba(242,213,120,0.55) 0%, rgba(212,175,55,0.18) 35%, transparent 70%)',
            mixBlendMode: 'screen',
            animation: 'elara-bloom-pulse 6s ease-in-out infinite',
          }}
        />
      </motion.div>

      {/* Z2 — POLVO DORADO FLOTANTE */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 6 }}>
        <DustMote startX="8%"  startY="80%" size={2}   duration={20} delay={0}   />
        <DustMote startX="18%" startY="85%" size={1.5} duration={24} delay={2}   />
        <DustMote startX="28%" startY="78%" size={2.5} duration={22} delay={4}   />
        <DustMote startX="42%" startY="88%" size={1.5} duration={26} delay={1}   />
        <DustMote startX="55%" startY="82%" size={2}   duration={20} delay={3}   />
        <DustMote startX="68%" startY="86%" size={2.5} duration={23} delay={5}   />
        <DustMote startX="78%" startY="78%" size={1.5} duration={25} delay={1.5} />
        <DustMote startX="88%" startY="84%" size={2}   duration={21} delay={2.5} />
        <DustMote startX="92%" startY="88%" size={1.5} duration={27} delay={4.5} />
      </div>

      {/* Z3 — MARIPOSAS CINEMATIC */}
      <div className="pointer-events-none absolute inset-0" style={{ zIndex: 8 }}>
        <CinematicButterfly size={28} duration={16} delay={0.5} pathScale={1.2} hue="rgba(242,213,120,0.9)"   startX="10%" startY="38%" />
        <CinematicButterfly size={22} duration={22} delay={2.5} pathScale={0.9} hue="rgba(255,234,160,0.85)"  startX="55%" startY="22%" />
        <CinematicButterfly size={24} duration={19} delay={4.5} pathScale={1.0} hue="rgba(212,175,55,0.85)"   startX="25%" startY="60%" />
      </div>

      {/* Z4 — VIGNETTE + GRANO */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 100% at 50% 50%, transparent 30%, rgba(10,0,16,0.35) 70%, rgba(10,0,16,0.75) 100%)',
          zIndex: 10,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,0,16,0.45) 0%, transparent 18%, transparent 70%, rgba(10,0,16,0.85) 100%)',
          zIndex: 11,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          mixBlendMode: 'overlay',
          zIndex: 12,
        }}
      />

      {/* Z5 — HEADER + CONTENIDO */}
      <SiteHeader active="/" />

      <div
        ref={contentRef}
        className="relative z-30 mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-7 px-6 pb-32 pt-32 md:px-12"
        style={{ willChange: 'transform, opacity' }}
      >
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.0, ease: [0.22, 1, 0.36, 1] }}
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
          01 · Portal Lunar
        </motion.span>

        {/* Título — character stagger */}
        <h1
          className="max-w-[680px]"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--color-cream)',
            fontSize: 'clamp(40px, 6vw, 76px)',
            lineHeight: 1.04,
            fontWeight: 400,
            textShadow: '0 0 36px rgba(0,0,0,0.85), 0 0 80px rgba(242,213,120,0.18)',
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={titleVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: 'block',
              textTransform: 'uppercase',
              letterSpacing: '0.025em',
              color: 'var(--color-gold-bright)',
              background:
                'linear-gradient(180deg, #FFEAA0 0%, var(--color-gold-bright) 55%, var(--color-gold) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Portal Lunar:
          </motion.span>
          <motion.em
            initial={{ opacity: 0, y: 24 }}
            animate={titleVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontStyle: 'italic',
              fontWeight: 400,
              color: 'var(--color-cream)',
              display: 'block',
            }}
          >
            Tu viaje ancestral
          </motion.em>
        </h1>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[520px]"
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            color: 'var(--color-pale-lav)',
            fontSize: 19,
            lineHeight: 1.55,
            opacity: 0.95,
            textShadow: '0 0 14px rgba(0,0,0,0.85)',
          }}
        >
          Descubre la magia, la astrología y el autodescubrimiento en un
          universo diseñado para tu alma.
        </motion.p>

        {/* CTAs magnetic */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={titleVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center gap-5"
        >
          <MagneticCTA strength={0.18}>
            <ElaraButton href="/universo" variant="primary">
              Iniciar viaje
            </ElaraButton>
          </MagneticCTA>
          <MagneticCTA strength={0.14}>
            <ElaraButton href="/codice" variant="secondary">
              Explorar el Códice
            </ElaraButton>
          </MagneticCTA>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={titleVisible ? { opacity: 0.85 } : {}}
          transition={{ duration: 1, delay: 0.95 }}
          className="max-w-xs pt-2"
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            color: 'var(--color-gold-soft)',
            fontSize: 14,
            lineHeight: 1.55,
          }}
        >
          Una experiencia inmersiva de bienestar emocional y sabiduría mística.
        </motion.p>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={titleVisible ? { opacity: 0.6 } : {}}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: 22,
            height: 36,
            borderRadius: 12,
            border: '1.4px solid var(--color-gold)',
            position: 'relative',
          }}
        >
          <motion.span
            animate={{ y: [4, 14, 4], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: 4,
              left: '50%',
              width: 3,
              height: 6,
              marginLeft: -1.5,
              borderRadius: 2,
              background: 'var(--color-gold-bright)',
              boxShadow: '0 0 10px rgba(242,213,120,0.85)',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Bloom keyframes globales */}
      <style jsx global>{`
        @keyframes elara-bloom-pulse {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50%      { opacity: 0.75; transform: scale(1.05); }
        }
      `}</style>
    </section>
  )
}
