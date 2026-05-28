'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ElaraIcons } from '@/components/elara-icons'

type IconKey = keyof typeof ElaraIcons

export type CreationStep = {
  icon: IconKey
  title: string
  text: string
}

const stepReveal = {
  hidden: { opacity: 0, y: 14 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      delay: i * 0.07,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
}

export function CreationTimeline({ steps }: { steps: readonly CreationStep[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(containerRef, { once: true, margin: '-60px' })

  return (
    <div ref={containerRef} className="timeline-ritual relative">
      <div
        aria-hidden
        className={`timeline-ritual__line pointer-events-none absolute top-14 right-[8%] left-[8%] hidden h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/70 to-transparent md:block ${inView ? 'timeline-ritual__line--on' : ''}`}
      />

      <div className="relative grid gap-10 md:grid-cols-5 md:gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            custom={index}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            variants={stepReveal}
            className="timeline-ritual__step relative z-10 flex flex-col items-center text-center"
          >
            <motion.div
              className="timeline-ritual__orb group/orb relative flex h-28 w-28 items-center justify-center rounded-full border border-[var(--color-gold)]/80 bg-gradient-to-br from-[#3D2080] to-[#1A0F3D]"
              whileHover={{ scale: 1.06 }}
              transition={{ type: 'spring', stiffness: 320, damping: 22 }}
            >
              {ElaraIcons[step.icon].render(48)}
              <span className="timeline-ritual__num absolute -bottom-2.5 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--color-gold)]/70 bg-[#0E0726] text-[10px] font-bold text-[var(--color-gold)]">
                {index + 1}
              </span>
            </motion.div>
            <h3 className="font-display mt-8 text-xl text-[#F5EEF8]">{step.title}</h3>
            <p className="font-serif-italic mt-2 max-w-[10rem] text-sm leading-relaxed text-[#C49AD4]/70 italic">
              {step.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
