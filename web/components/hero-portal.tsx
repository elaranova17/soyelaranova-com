'use client'

/**
 * HeroPortal — primera escena de soyelaranova.com.
 *
 * Composición:
 *   - Fondo pictórico Midjourney (next/image, sirve WebP/AVIF)
 *   - Mouse-tilt parallax 3D ±0.8° con springs framer-motion
 *   - iPhone real con ZodiacWheel rotando dentro del arch dorado pintado
 *   - 3 mariposas animadas (GSAP figure-8) cruzando la composición
 *   - Vignette para legibilidad textual
 *   - Título Playfair italic gold engraved arriba del arch
 *   - Cartouche CTA "Descifrar mi fase lunar hoy" clickeable
 */
import { useRef } from 'react'
import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { IPhoneMockup } from './iphone-mockup'
import { ZodiacWheel } from './zodiac-wheel'
import { OrnateCartouche } from './ornate-cartouche'
import { AnimatedButterfly } from './animated-butterfly'

export function HeroPortal() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const tiltX = useSpring(useTransform(mouseY, [-1, 1], [0.8, -0.8]), {
    stiffness: 80,
    damping: 22,
  })
  const tiltY = useSpring(useTransform(mouseX, [-1, 1], [-0.8, 0.8]), {
    stiffness: 80,
    damping: 22,
  })
  const parallaxX = useSpring(useTransform(mouseX, [-1, 1], [-10, 10]), {
    stiffness: 60,
    damping: 20,
  })
  const parallaxY = useSpring(useTransform(mouseY, [-1, 1], [-10, 10]), {
    stiffness: 60,
    damping: 20,
  })
  const iphoneX = useTransform(parallaxX, (v) => v * 0.5)
  const iphoneY = useTransform(parallaxY, (v) => v * 0.5)

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
      aria-label="Portal lunar de Elara Nova"
      className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden"
      style={{
        background: 'var(--color-void)',
        perspective: 1400,
      }}
    >
      {/* Fondo pictórico con mouse-tilt 3D */}
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

      {/* iPhone con ZodiacWheel dentro del arch pintado */}
      <div
        className="pointer-events-none absolute inset-0 flex items-start justify-center pt-[12vh] md:pt-[10vh]"
        style={{ zIndex: 30 }}
      >
        <motion.div
          className="relative"
          style={{
            width: 'min(28vmin, 220px)',
            x: iphoneX,
            y: iphoneY,
            filter:
              'drop-shadow(0 0 60px rgba(242,213,120,0.45)) drop-shadow(0 14px 36px rgba(0,0,0,0.7))',
          }}
        >
          <IPhoneMockup className="block h-auto w-full" appTitle="Fases Lunares">
            <ZodiacWheel size={220} />
          </IPhoneMockup>
        </motion.div>
      </div>

      {/* Mariposas animadas extra sobre las pintadas */}
      <div className="pointer-events-none absolute inset-0" style={{ zIndex: 35 }}>
        <div className="relative h-full w-full">
          <AnimatedButterfly
            duration={9}
            delay={0}
            size={32}
            hueClass="text-[var(--color-gold-bright)]"
            box={{ w: 1400, h: 800 }}
          />
          <AnimatedButterfly
            duration={12}
            delay={2.5}
            size={26}
            hueClass="text-[var(--color-gold-soft)]"
            box={{ w: 1200, h: 700 }}
          />
          <AnimatedButterfly
            duration={10}
            delay={4.5}
            size={28}
            hueClass="text-[var(--color-pale-lav)]"
            box={{ w: 1300, h: 750 }}
          />
        </div>
      </div>

      {/* Vignette para anclar el contenido textual abajo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% 40%, transparent 50%, rgba(10,0,16,0.6) 100%)',
          zIndex: 40,
        }}
      />

      {/* Título superior gold engraved */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-[4vh] flex flex-col items-center px-6 text-center"
        style={{ zIndex: 50 }}
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
          — Elara Nova · Oráculo Íntimo —
        </span>
        <h1
          className="mt-2 max-w-3xl text-3xl md:text-5xl"
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            color: 'var(--color-cream)',
            lineHeight: 1.05,
            textShadow:
              '0 0 36px rgba(242,213,120,0.5), 0 4px 18px rgba(0,0,0,0.85)',
          }}
        >
          Tecnología al servicio de tu{' '}
          <em style={{ color: 'var(--color-gold-bright)' }}>intuición</em>.
        </h1>
      </div>

      {/* CTA cartouche real clickeable encima del cartouche pintado */}
      <div
        className="absolute left-1/2 bottom-[7vh] -translate-x-1/2 flex flex-col items-center gap-3"
        style={{ zIndex: 55 }}
      >
        <p
          className="max-w-md text-center"
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            color: 'var(--color-gold-soft)',
            fontSize: 16,
            lineHeight: 1.5,
            opacity: 0.92,
            textShadow: '0 0 12px rgba(0,0,0,0.85)',
          }}
        >
          Tu oráculo, tu calendario lunar, tu retorno a vos.
        </p>
        <OrnateCartouche variant="cta" href="#manifiesto">
          Descifrar mi fase lunar hoy
        </OrnateCartouche>
      </div>
    </section>
  )
}
