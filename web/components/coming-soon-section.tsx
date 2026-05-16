'use client'

/**
 * ComingSoonSection — placeholder reusable para las páginas internas
 * mientras Evelyn manda el diseño de cada una. Cada página le pasa su
 * fondo Midjourney, eyebrow, título y descripción.
 *
 * Estructura: bg con mouse-tilt suave + vignette + bloque centrado
 * con eyebrow + título Playfair + descripción Cormorant + CTA "Volver
 * al portal" + tag "Próximamente".
 */
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ElaraButton } from './elara-button'

type Props = {
  bg: string
  eyebrow: string
  title: string
  description: string
}

export function ComingSoonSection({ bg, eyebrow, title, description }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const tiltX = useSpring(useTransform(mouseY, [-1, 1], [0.5, -0.5]), { stiffness: 80, damping: 22 })
  const tiltY = useSpring(useTransform(mouseX, [-1, 1], [-0.5, 0.5]), { stiffness: 80, damping: 22 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = wrapRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    mouseX.set(((e.clientX - rect.left) / rect.width) * 2 - 1)
    mouseY.set(((e.clientY - rect.top) / rect.height) * 2 - 1)
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
      className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden"
      style={{ background: 'var(--color-void)', perspective: 1400 }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: 'preserve-3d' }}
      >
        <Image
          src={bg}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={90}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </motion.div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 50%, transparent 30%, rgba(10,0,16,0.7) 100%)',
          zIndex: 5,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex max-w-2xl flex-col items-center gap-7 px-6 text-center"
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
          — {eyebrow} —
        </span>

        <h1
          className="text-4xl md:text-6xl"
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            color: 'var(--color-cream)',
            lineHeight: 1.05,
            textShadow:
              '0 0 36px rgba(242,213,120,0.45), 0 4px 18px rgba(0,0,0,0.85)',
          }}
        >
          {title}
        </h1>

        <p
          className="max-w-md"
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            color: 'var(--color-gold-soft)',
            fontSize: 17,
            lineHeight: 1.55,
            opacity: 0.92,
            textShadow: '0 0 12px rgba(0,0,0,0.85)',
          }}
        >
          {description}
        </p>

        <div className="mt-4">
          <ElaraButton href="/" variant="secondary">
            Volver al Portal
          </ElaraButton>
        </div>

        <span
          style={{
            fontFamily: 'var(--font-sans)',
            color: 'var(--color-gold-soft)',
            fontSize: 10,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            opacity: 0.6,
          }}
        >
          Próximamente
        </span>
      </motion.div>
    </section>
  )
}
