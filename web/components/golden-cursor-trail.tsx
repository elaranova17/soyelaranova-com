'use client'

import { useEffect, useRef, useState } from 'react'

type Particle = { id: number; x: number; y: number }

const MAX_PARTICLES = 14

export function GoldenCursorTrail() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [reducedMotion, setReducedMotion] = useState(false)
  const idRef = useRef(0)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = () => setReducedMotion(mq.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    if (reducedMotion) return

    function onMove(e: MouseEvent) {
      const id = idRef.current++
      setParticles((prev) => [...prev.slice(-(MAX_PARTICLES - 1)), { id, x: e.clientX, y: e.clientY }])
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [reducedMotion])

  if (reducedMotion || particles.length === 0) return null

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[25] overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute h-1 w-1 rounded-full"
          style={{
            left: p.x,
            top: p.y,
            background: 'var(--color-gold-bright)',
            boxShadow: '0 0 8px var(--color-gold)',
            animation: 'elara-dust-fade 0.85s ease-out forwards',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
      <style jsx global>{`
        @keyframes elara-dust-fade {
          0% {
            opacity: 0.9;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -60%) scale(0.2);
          }
        }
      `}</style>
    </div>
  )
}
