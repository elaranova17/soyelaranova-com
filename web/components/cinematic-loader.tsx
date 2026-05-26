'use client'

/**
 * CinematicLoader — la entrada al universo Elara Nova.
 *
 * Beats (total ~2.6s):
 *   0.0s  → void negro absoluto
 *   0.2s  → bloom dorado emerge del centro
 *   0.4s  → 5 estrellas de la constelacion aparecen una a una (stagger 120ms)
 *   1.0s  → la linea conectora se dibuja entre las 5 estrellas (stroke-dasharray)
 *   1.4s  → "Elara Nova" wordmark se revela (mask reveal de izquierda a derecha)
 *   1.9s  → subtitulo fade-in
 *   2.3s  → todo el loader hace fade-out + scale-up (zoom forward, sale por adelante)
 *   2.7s  → callback onComplete dispara el reveal del hero
 *
 * Solo se muestra en first-visit (usa sessionStorage). Reduce motion respetado.
 */

import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const STARS = [
  { x: 12,  y: 48, r: 2.2, delay: 0.0 },
  { x: 32,  y: 18, r: 2.2, delay: 0.12 },
  { x: 50,  y: 58, r: 2.5, delay: 0.24 },
  { x: 68,  y: 22, r: 2.2, delay: 0.36 },
  { x: 88,  y: 62, r: 2.2, delay: 0.48 },
] as const

const POLYLINE = STARS.map((s) => `${s.x},${s.y}`).join(' ')

export function CinematicLoader({ onComplete }: { onComplete?: () => void }) {
  const reducedMotion = useReducedMotion()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Solo mostrar 1 vez por sesión
    if (typeof window === 'undefined') return
    const seen = sessionStorage.getItem('elara_loader_seen')
    if (seen) {
      setVisible(false)
      onComplete?.()
      return
    }

    const total = reducedMotion ? 600 : 2600
    const t = setTimeout(() => {
      sessionStorage.setItem('elara_loader_seen', '1')
      setVisible(false)
      onComplete?.()
    }, total)
    return () => clearTimeout(t)
  }, [reducedMotion, onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.15,
            transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: 'var(--color-void)' }}
        >
          {/* Bloom dorado central */}
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: [0, 0.55, 0.45], scale: [0.4, 1.2, 1] }}
            transition={{ duration: 1.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(40% 40% at 50% 50%, rgba(242,213,120,0.32), rgba(212,175,55,0.08) 45%, transparent 75%)',
            }}
          />

          {/* Polvo dorado sutil */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(1.5px 1.5px at 15% 30%, rgba(242,213,120,0.7) 50%, transparent 100%),
                radial-gradient(1.5px 1.5px at 80% 70%, rgba(242,213,120,0.6) 50%, transparent 100%),
                radial-gradient(1px 1px at 45% 85%, rgba(242,213,120,0.7) 50%, transparent 100%),
                radial-gradient(1.5px 1.5px at 92% 22%, rgba(242,213,120,0.65) 50%, transparent 100%),
                radial-gradient(1px 1px at 25% 65%, rgba(242,213,120,0.7) 50%, transparent 100%),
                radial-gradient(1.5px 1.5px at 60% 12%, rgba(242,213,120,0.55) 50%, transparent 100%)
              `,
            }}
          />

          {/* Constelación + wordmark */}
          <div className="relative flex flex-col items-center gap-7">
            {/* Constelación SVG */}
            <svg
              width={220}
              height={90}
              viewBox="0 0 100 80"
              style={{ overflow: 'visible', color: 'var(--color-gold-bright)' }}
              aria-hidden
            >
              {/* Línea conectora — stroke-dasharray para dibujado */}
              <motion.polyline
                points={POLYLINE}
                fill="none"
                stroke="currentColor"
                strokeWidth={0.7}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.85 }}
                transition={{
                  delay: 1.0,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  filter:
                    'drop-shadow(0 0 6px rgba(242,213,120,0.7)) drop-shadow(0 0 14px rgba(242,213,120,0.35))',
                }}
              />

              {/* Estrellas */}
              {STARS.map((s, i) => (
                <motion.g key={i}>
                  <motion.circle
                    cx={s.x}
                    cy={s.y}
                    r={s.r}
                    fill="currentColor"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: 0.4 + s.delay,
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      transformOrigin: `${s.x}px ${s.y}px`,
                      filter:
                        'drop-shadow(0 0 4px rgba(242,213,120,0.9)) drop-shadow(0 0 10px rgba(242,213,120,0.55))',
                    }}
                  />
                  {/* Halo */}
                  <motion.circle
                    cx={s.x}
                    cy={s.y}
                    r={s.r * 2.5}
                    fill="currentColor"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1.4, 1], opacity: [0, 0.35, 0.15] }}
                    transition={{
                      delay: 0.4 + s.delay,
                      duration: 1.1,
                      ease: 'easeOut',
                    }}
                    style={{
                      transformOrigin: `${s.x}px ${s.y}px`,
                      mixBlendMode: 'screen',
                    }}
                  />
                </motion.g>
              ))}
            </svg>

            {/* Wordmark "Elara Nova" — mask reveal de izquierda a derecha */}
            <div className="relative overflow-hidden">
              <motion.h1
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 1.4,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  color: 'var(--color-cream)',
                  fontSize: 'clamp(36px, 5.5vw, 64px)',
                  letterSpacing: '0.08em',
                  textShadow:
                    '0 0 28px rgba(242,213,120,0.55), 0 0 60px rgba(242,213,120,0.25)',
                  background:
                    'linear-gradient(180deg, var(--color-cream) 0%, #FFEAA0 45%, var(--color-gold-bright) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Elara Nova
              </motion.h1>
              {/* Sweep highlight horizontal */}
              <motion.div
                aria-hidden
                initial={{ x: '-120%' }}
                animate={{ x: '220%' }}
                transition={{ delay: 1.55, duration: 1.1, ease: 'easeInOut' }}
                className="absolute inset-y-0 w-1/3"
                style={{
                  background:
                    'linear-gradient(90deg, transparent, rgba(255,234,160,0.55), transparent)',
                  mixBlendMode: 'screen',
                  filter: 'blur(8px)',
                }}
              />
            </div>

            {/* Subtítulo */}
            <motion.p
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 0.85 }}
              transition={{ delay: 1.9, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: 'var(--font-sans)',
                color: 'var(--color-gold-soft)',
                fontSize: 11,
                letterSpacing: '0.45em',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              Mira todo lo que <span style={{ color: 'var(--color-cream)' }}>siempre fuiste</span> capaz de ser
            </motion.p>
          </div>

          {/* Vignette para profundidad */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(80% 80% at 50% 50%, transparent 45%, rgba(0,0,0,0.6) 100%)',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
