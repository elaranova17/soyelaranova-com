'use client'

/**
 * ImmersiveScene — base de TODAS las paginas internas del universo Elara Nova.
 * La idea: la imagen de Midjourney es el ESCENARIO completo, full-bleed,
 * con parallax sutil al mouse + scroll. El contenido flota encima dentro
 * de un glass-card como si la usuaria estuviera DENTRO de la escena.
 */

import Image from 'next/image'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  useReducedMotion,
} from 'framer-motion'
import { useEffect, type ReactNode } from 'react'
import { SiteHeader } from './site-header'
import { ElaraButton } from './elara-button'

type Props = {
  bg: string
  bgAlt?: string
  eyebrow: string
  title: ReactNode
  description: ReactNode
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  activeNav?: string
  /** Imagen secundaria opcional (capa extra para profundidad) */
  layerBg?: string
  /** Slot para sub-paneles que aparecen scroll abajo */
  belowFold?: ReactNode
}

export function ImmersiveScene({
  bg,
  bgAlt = '',
  eyebrow,
  title,
  description,
  ctaPrimary,
  ctaSecondary,
  activeNav,
  layerBg,
  belowFold,
}: Props) {
  const reducedMotion = useReducedMotion()

  // Mouse motion → parallax horizontal/vertical del bg
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 50, damping: 18, mass: 0.8 })
  const sy = useSpring(my, { stiffness: 50, damping: 18, mass: 0.8 })

  // bg base se mueve mas (capa de fondo lejana)
  const bgX = useTransform(sx, [-0.5, 0.5], [-22, 22])
  const bgY = useTransform(sy, [-0.5, 0.5], [-14, 14])
  // capa de overlay decoration se mueve menos (mas cerca)
  const layerX = useTransform(sx, [-0.5, 0.5], [10, -10])
  const layerY = useTransform(sy, [-0.5, 0.5], [6, -6])

  // Scroll-based — bg se aleja un poquito al scroll
  const { scrollY } = useScroll()
  const scrollScale = useTransform(scrollY, [0, 600], [1.08, 1.18])
  const scrollOpacity = useTransform(scrollY, [0, 600], [1, 0.6])

  useEffect(() => {
    if (reducedMotion) return
    function onMove(e: MouseEvent) {
      const px = e.clientX / window.innerWidth - 0.5
      const py = e.clientY / window.innerHeight - 0.5
      mx.set(px)
      my.set(py)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [mx, my, reducedMotion])

  return (
    <main
      className="relative isolate flex min-h-screen w-full flex-col items-center overflow-hidden"
      style={{ background: 'var(--color-void)' }}
    >
      {/* === ESCENARIO === */}
      {/* Capa 0: imagen base de Midjourney, full-bleed con parallax */}
      <motion.div
        aria-hidden
        style={{
          x: bgX,
          y: bgY,
          scale: scrollScale,
          opacity: scrollOpacity,
        }}
        className="absolute inset-[-8%] z-0"
      >
        <Image
          src={bg}
          alt={bgAlt}
          fill
          priority
          quality={95}
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </motion.div>

      {/* Capa 1: imagen secundaria opcional, mezclada para profundidad */}
      {layerBg && (
        <motion.div
          aria-hidden
          style={{
            x: layerX,
            y: layerY,
            opacity: 0.18,
            mixBlendMode: 'screen',
          }}
          className="pointer-events-none absolute inset-[-4%] z-[1]"
        >
          <Image
            src={layerBg}
            alt=""
            fill
            quality={85}
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </motion.div>
      )}

      {/* Capa 2: vignette + tinte purple para legibilidad sin matar la escena */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            'radial-gradient(120% 80% at 50% 35%, transparent 0%, rgba(10,0,16,0.32) 60%, rgba(10,0,16,0.78) 100%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,0,16,0.45) 0%, transparent 25%, transparent 70%, rgba(10,0,16,0.85) 100%)',
        }}
      />

      {/* Capa 3: polvo dorado sutil top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-[40vh]"
        style={{
          background:
            'radial-gradient(80% 70% at 50% 0%, rgba(242,213,120,0.10), transparent 65%)',
        }}
      />

      {/* === HEADER (z-50 ya lo maneja) === */}
      <SiteHeader active={activeNav} />

      {/* === CONTENIDO INMERSIVO === */}
      <section className="relative z-10 flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex w-full max-w-3xl flex-col items-center gap-6 rounded-[32px] border border-[var(--color-gold)]/30 px-8 py-12 text-center md:px-14"
          style={{
            background: 'rgba(10,0,16,0.42)',
            backdropFilter: 'blur(16px) saturate(160%)',
            WebkitBackdropFilter: 'blur(16px) saturate(160%)',
            boxShadow:
              '0 24px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(242,213,120,0.08), inset 0 1px 0 rgba(255,255,255,0.06)',
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-gold-soft)',
              fontSize: 11,
              letterSpacing: '0.45em',
              textTransform: 'uppercase',
              opacity: 0.95,
              textShadow: '0 0 18px rgba(242,213,120,0.4)',
            }}
          >
            {eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-4xl md:text-6xl"
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              color: 'var(--color-cream)',
              lineHeight: 1.04,
              textShadow:
                '0 0 36px rgba(242,213,120,0.5), 0 4px 24px rgba(0,0,0,0.7)',
            }}
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-xl"
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              color: 'var(--color-pale-lav)',
              fontSize: 18,
              lineHeight: 1.6,
              opacity: 0.95,
              textShadow: '0 2px 12px rgba(0,0,0,0.65)',
            }}
          >
            {description}
          </motion.p>

          {(ctaPrimary || ctaSecondary) && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-4 flex flex-wrap items-center justify-center gap-4"
            >
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
            </motion.div>
          )}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
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
                boxShadow: '0 0 10px rgba(242,213,120,0.8)',
              }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* === SECCIONES BAJO EL FOLD === */}
      {belowFold && (
        <section className="relative z-10 w-full">
          {belowFold}
        </section>
      )}
    </main>
  )
}
