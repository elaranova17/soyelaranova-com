'use client'

import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'
import type { OracleMessage } from '@/lib/oracle-messages'

type OracleCardProps = {
  flipped: boolean
  message: OracleMessage | null
  onFlipComplete?: () => void
}

const faceBase: CSSProperties = {
  backfaceVisibility: 'hidden',
  position: 'absolute',
  inset: 0,
}

export function OracleCard({ flipped, message, onFlipComplete }: OracleCardProps) {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[280px]"
      style={{ perspective: 1200 }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="relative aspect-[2/3] w-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        onAnimationComplete={() => {
          if (flipped) onFlipComplete?.()
        }}
      >
        <div
          className="flex flex-col items-center justify-center rounded-lg border-2 p-6 text-center"
          style={{
            ...faceBase,
            background:
              'linear-gradient(145deg, var(--color-purple-deep) 0%, var(--color-purple-night) 45%, var(--color-void) 100%)',
            borderColor: 'rgba(212,175,55,0.55)',
            boxShadow: 'var(--shadow-glow-gold)',
          }}
          aria-hidden={flipped}
        >
          <div
            className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-gold)]/50"
            style={{ color: 'var(--color-gold-bright)' }}
          >
            <svg width={36} height={36} viewBox="0 0 36 36" aria-hidden fill="none">
              <path
                d="M18 4 C12 12 8 16 8 22 C8 26 12 30 18 30 C24 30 28 26 28 22 C28 16 24 12 18 4Z"
                stroke="currentColor"
                strokeWidth={1.2}
              />
              <circle cx={18} cy={22} r={3} fill="currentColor" opacity={0.6} />
            </svg>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 10,
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'var(--color-gold-soft)',
            }}
          >
            Oráculo íntimo
          </p>
          <p
            className="mt-3"
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 22,
              color: 'var(--color-cream)',
              lineHeight: 1.2,
            }}
          >
            Tu carta
            <br />
            del día
          </p>
        </div>

        <motion.div
          className="flex flex-col justify-between rounded-lg border-2 p-5"
          style={{
            ...faceBase,
            transform: 'rotateY(180deg)',
            background:
              'linear-gradient(160deg, var(--color-purple-night) 0%, var(--color-purple-deep) 100%)',
            borderColor: 'rgba(212,175,55,0.7)',
            boxShadow: 'var(--shadow-glow-purple)',
          }}
          aria-live="polite"
        >
          {message ? (
            <>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 10,
                    letterSpacing: '0.32em',
                    textTransform: 'uppercase',
                    color: 'var(--color-gold-bright)',
                  }}
                >
                  {message.title}
                </p>
                <p
                  className="mt-4"
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 16,
                    lineHeight: 1.55,
                    color: 'var(--color-white-rose)',
                  }}
                >
                  {message.body}
                </p>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: 13,
                  lineHeight: 1.45,
                  color: 'var(--color-gold-soft)',
                  opacity: 0.9,
                }}
              >
                {message.closing}
              </p>
            </>
          ) : null}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
