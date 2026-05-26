'use client'

/**
 * Home ritual hero — frase ancla + oráculo, sin fondos Midjourney / fantasy.
 * Tokens y gradientes del design system (misma base que linktree).
 */

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ElaraButton } from '@/components/elara-button'
import { MagicParticles } from '@/components/magic-particles'
import { OracleRitualPanel } from '@/components/oracle-ritual-panel'

export function HomeRitualHero() {
  const [drawSignal, setDrawSignal] = useState(0)

  return (
    <section
      aria-label="Inicio Elara Nova"
      className="linktree-page relative isolate min-h-screen overflow-hidden"
    >
      <MagicParticles density="low" zone="full" />
      <div className="linktree-stars" aria-hidden />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-28 md:px-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14">
        <div className="flex flex-col gap-7">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[11px] tracking-[0.45em] text-[var(--color-gold-soft)] uppercase"
          >
            Oráculo · Elara Nova
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="max-w-[680px] font-display text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[1.08] font-normal italic text-[var(--color-cream)]"
          >
            Mira todo lo que siempre fuiste capaz de ser.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="max-w-[520px] font-serif text-lg leading-relaxed text-[var(--color-pale-lav)] italic"
          >
            Sacá tu carta del día, dejá tu correo y volvé mañana. Un ritual breve para mujeres
            latinas en reinvención.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="flex flex-wrap items-center gap-4"
          >
            <ElaraButton type="button" variant="primary" onClick={() => setDrawSignal((n) => n + 1)}>
              Sacá tu carta del día
            </ElaraButton>
            <ElaraButton href="/universo" variant="secondary">
              Explorar el universo
            </ElaraButton>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-md font-serif text-sm italic text-[var(--color-gold-soft)]/85"
          >
            Sin tarot. Solo oráculo, calma y una hermana mayor que te habla claro.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <OracleRitualPanel drawSignal={drawSignal} />
        </motion.div>
      </div>
    </section>
  )
}
