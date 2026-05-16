'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion'
import { useRef, useState, type MouseEvent as ReactMouseEvent } from 'react'

export type Section3D = {
  num: string
  slug: string
  bg: string
  title: string
  description: string
  href: string
}

export function SectionCard3D({ section, index }: { section: Section3D; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)
  const reducedMotion = useReducedMotion()

  // Mouse position normalized to [-0.5, 0.5] inside card
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const xSpring = useSpring(x, { stiffness: 220, damping: 28, mass: 0.6 })
  const ySpring = useSpring(y, { stiffness: 220, damping: 28, mass: 0.6 })

  // Card tilt — rotates around X (top↕bottom) and Y (left↔right) axis
  const rotateX = useTransform(ySpring, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-12, 12])

  // Inner image parallax — moves slightly opposite to give depth
  const imgX = useTransform(xSpring, [-0.5, 0.5], [-14, 14])
  const imgY = useTransform(ySpring, [-0.5, 0.5], [-10, 10])

  // Glow position as plain state (simpler than chaining motion values into a CSS string)
  const [glow, setGlow] = useState({ x: 50, y: 50 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    x.set(px)
    y.set(py)
    setGlow({ x: (px + 0.5) * 100, y: (py + 0.5) * 100 })
  }

  function handleLeave() {
    setHovering(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{
        perspective: 1200,
        transformStyle: 'preserve-3d',
      }}
      className="group relative aspect-[4/3]"
    >
      <Link
        href={section.href}
        prefetch
        className="relative block h-full w-full"
        aria-label={`Entrar a ${section.title}`}
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
            boxShadow:
              '0 18px 50px rgba(0,0,0,0.55), 0 6px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.10)',
          }}
          className="relative h-full w-full overflow-hidden rounded-2xl border border-[var(--color-gold)]/35 transition-colors duration-300 group-hover:border-[var(--color-gold)]/80"
        >
          {/* Imagen con parallax interno */}
          <motion.div
            style={{
              x: imgX,
              y: imgY,
              scale: hovering ? 1.08 : 1.02,
              transition: 'scale 600ms cubic-bezier(0.22,1,0.36,1)',
            }}
            className="absolute inset-[-6%]"
          >
            <Image
              src={section.bg}
              alt=""
              fill
              sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
              quality={95}
              priority={index < 3}
              style={{ objectFit: 'cover' }}
            />
          </motion.div>

          {/* Vignette base */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(10,0,16,0.10) 0%, rgba(10,0,16,0.25) 50%, rgba(10,0,16,0.85) 88%, rgba(10,0,16,0.95) 100%)',
            }}
          />

          {/* Glow gold dinámico que sigue al cursor */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(380px circle at ${glow.x}% ${glow.y}%, rgba(242,213,120,0.32), transparent 55%)`,
            }}
          />

          {/* Inner border luminoso */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              boxShadow:
                'inset 0 0 0 1px rgba(242,213,120,0.10), inset 0 0 40px rgba(242,213,120,0.06)',
            }}
          />

          {/* Contenido — flota encima del card con translateZ */}
          <motion.div
            style={{
              transform: 'translateZ(40px)',
              transformStyle: 'preserve-3d',
            }}
            className="relative z-10 flex h-full flex-col justify-end p-6"
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-gold-soft)',
                fontSize: 10,
                letterSpacing: '0.42em',
                textTransform: 'uppercase',
                opacity: 0.92,
                marginBottom: 6,
                textShadow: '0 2px 8px rgba(0,0,0,0.9)',
              }}
            >
              {section.num} · {section.title}
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                color: 'var(--color-cream)',
                fontSize: 26,
                lineHeight: 1.08,
                marginBottom: 10,
                textShadow:
                  '0 0 28px rgba(242,213,120,0.42), 0 2px 14px rgba(0,0,0,0.9)',
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
                lineHeight: 1.45,
                opacity: 0.94,
                marginBottom: 14,
                textShadow: '0 1px 8px rgba(0,0,0,0.85)',
              }}
            >
              {section.description}
            </p>
            <motion.span
              animate={hovering ? { x: 0, opacity: 1 } : { x: -6, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 self-start"
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-gold-bright)',
                fontSize: 11,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                textShadow: '0 0 12px rgba(242,213,120,0.55)',
              }}
            >
              Entrar
              <svg width={14} height={14} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M2 7 L11 7 M7 3 L11 7 L7 11" />
              </svg>
            </motion.span>
          </motion.div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
