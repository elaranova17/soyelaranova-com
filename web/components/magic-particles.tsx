'use client'

import { motion, useReducedMotion, type Transition } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

type Particle = {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  duration: number
  delay: number
  type: 'orb' | 'star4' | 'sparkle' | 'dot'
  color: string
}

type MagicParticlesProps = {
  density?: 'low' | 'normal' | 'high'
  zone?: 'full' | 'top' | 'hero'
  /** viewport = fixed (solo hero). section = absolute dentro del padre relative */
  scope?: 'viewport' | 'section'
}

const DENSITY_COUNTS: Record<NonNullable<MagicParticlesProps['density']>, number> = {
  low: 20,
  normal: 45,
  high: 70,
}

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min)
}

function pickColor() {
  const roll = Math.random()

  if (roll < 0.7) return '#D4AF37'
  if (roll < 0.9) return '#E5DBF0'
  return '#F5EEF8'
}

function pickType(index: number, total: number): Particle['type'] {
  const ratio = index / total

  if (ratio < 0.45) return 'orb'
  if (ratio < 0.75) return 'dot'
  if (ratio < 0.9) return 'star4'
  return 'sparkle'
}

function particleRanges(type: Particle['type']) {
  switch (type) {
    case 'orb':
      return { size: [4, 14], opacity: [0.06, 0.18], duration: [6, 14], delay: [0, 10] } as const
    case 'dot':
      return { size: [1.5, 3.5], opacity: [0.15, 0.35], duration: [4, 9], delay: [0, 8] } as const
    case 'star4':
      return { size: [6, 12], opacity: [0.12, 0.28], duration: [5, 11], delay: [0, 9] } as const
    case 'sparkle':
      return { size: [8, 16], opacity: [0.1, 0.22], duration: [7, 13], delay: [0, 11] } as const
  }
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, id) => {
    const type = pickType(id, count)
    const ranges = particleRanges(type)

    return {
      id,
      x: randomBetween(0, 100),
      y: randomBetween(0, 100),
      size: randomBetween(ranges.size[0], ranges.size[1]),
      opacity: randomBetween(ranges.opacity[0], ranges.opacity[1]),
      duration: randomBetween(ranges.duration[0], ranges.duration[1]),
      delay: randomBetween(ranges.delay[0], ranges.delay[1]),
      type,
      color: pickColor(),
    }
  })
}

function StarShape({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" />
    </svg>
  )
}

function SparkleShape({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M12 0 L13.2 10.8 L24 12 L13.2 13.2 L12 24 L10.8 13.2 L0 12 L10.8 10.8 Z" />
    </svg>
  )
}

function ParticleShape({ particle, reducedMotion }: { particle: Particle; reducedMotion: boolean }) {
  const opacity = reducedMotion ? 0.5 : particle.opacity

  switch (particle.type) {
    case 'orb':
      return (
        <div
          style={{
            width: particle.size,
            height: particle.size,
            borderRadius: '50%',
            background: particle.color,
            filter: `blur(${particle.size * 0.5}px)`,
            opacity,
          }}
        />
      )
    case 'dot':
      return (
        <div
          style={{
            width: particle.size,
            height: particle.size,
            borderRadius: '50%',
            background: particle.color,
            opacity,
          }}
        />
      )
    case 'star4':
      return (
        <div style={{ opacity }}>
          <StarShape size={particle.size} color={particle.color} />
        </div>
      )
    case 'sparkle':
      return (
        <div style={{ opacity }}>
          <SparkleShape size={particle.size} color={particle.color} />
        </div>
      )
  }
}

function particleTransition(particle: Particle, multiplier = 1): Transition {
  return {
    duration: particle.duration * multiplier,
    delay: particle.delay,
    repeat: Infinity,
    ease: 'easeInOut',
  }
}

export function MagicParticles({
  density = 'normal',
  zone = 'full',
  scope = 'viewport',
}: MagicParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([])
  const reducedMotion = useReducedMotion()
  const count = DENSITY_COUNTS[density]

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setParticles(generateParticles(count))
    })

    return () => window.cancelAnimationFrame(frame)
  }, [count])

  const zoneStyle = useMemo(() => {
    if (zone === 'full') return undefined

    return {
      maxHeight: '100vh',
      clipPath: 'inset(0 0 calc(100% - 100vh) 0)',
    }
  }, [zone])

  const renderedParticles = useMemo(
    () =>
      particles.map((particle) => {
        const shouldSway = particle.type === 'orb' || particle.type === 'sparkle'
        const shouldPulse = particle.type === 'orb'
        const swayX = particle.id % 2 === 0 ? 8 : -8

        const animate = reducedMotion
          ? undefined
          : {
              y: [0, -(20 + particle.size * 2), 0],
              opacity: [
                particle.opacity * 0.2,
                particle.opacity,
                particle.opacity * 0.15,
                particle.opacity,
              ],
              x: shouldSway ? [0, swayX, 0] : undefined,
              scale: shouldPulse ? [1, 1.4, 1] : undefined,
            }

        return (
          <motion.div
            key={particle.id}
            className="pointer-events-none absolute"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={animate}
            transition={
              reducedMotion
                ? undefined
                : {
                    y: particleTransition(particle),
                    opacity: particleTransition(particle, 0.7),
                    x: shouldSway ? particleTransition(particle, 1.3) : undefined,
                    scale: shouldPulse ? particleTransition(particle, 0.9) : undefined,
                  }
            }
          >
            <ParticleShape particle={particle} reducedMotion={Boolean(reducedMotion)} />
          </motion.div>
        )
      }),
    [particles, reducedMotion],
  )

  if (particles.length === 0) return null

  const positionClass =
    scope === 'section'
      ? 'pointer-events-none absolute inset-0 overflow-hidden'
      : 'pointer-events-none fixed inset-0 overflow-hidden'

  const zIndex = scope === 'section' ? 0 : 1

  return (
    <div aria-hidden className={positionClass} style={{ zIndex, ...zoneStyle }}>
      {renderedParticles}
    </div>
  )
}
