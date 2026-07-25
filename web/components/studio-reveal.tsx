'use client'

import { useRef } from 'react'
import {
  motion,
  useInView,
  useReducedMotion,
  type HTMLMotionProps,
} from 'framer-motion'
import { TrackedLink } from '@/components/tracked-link'
import { studioMotion, studioRise, studioStagger } from '@/lib/studio-motion'

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'article' | 'li' | 'header' | 'footer'
}

const viewport = { once: true, amount: 0.22, margin: '0px 0px -8% 0px' } as const

/** Un bloque que sube igual en todas las secciones + acento gold. */
export function StudioReveal({
  children,
  className,
  delay = 0,
  as = 'div',
}: RevealProps) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, viewport)
  const Comp = motion[as] as typeof motion.div

  if (reduce) {
    return <div className={['studio-reveal is-in', className].filter(Boolean).join(' ')}>{children}</div>
  }

  return (
    <Comp
      ref={ref}
      className={['studio-reveal', inView ? 'is-in' : '', className].filter(Boolean).join(' ')}
      variants={studioRise}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={{
        duration: studioMotion.duration,
        ease: studioMotion.ease,
        delay,
      }}
    >
      {children}
    </Comp>
  )
}

/** Contenedor que stagger-ea hijos con el MISMO ritmo CapCut. */
export function StudioStagger({
  children,
  className,
  as = 'div',
}: Omit<RevealProps, 'delay'>) {
  const reduce = useReducedMotion()
  const Comp = motion[as] as typeof motion.div

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <Comp
      className={['studio-stagger', className].filter(Boolean).join(' ')}
      variants={studioStagger}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {children}
    </Comp>
  )
}

export function StudioRevealItem({
  children,
  className,
  as = 'div',
}: Omit<RevealProps, 'delay'>) {
  const reduce = useReducedMotion()
  const Comp = motion[as] as typeof motion.div

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <Comp className={className} variants={studioRise}>
      {children}
    </Comp>
  )
}

/** Barra sticky inferior — mismo CTA en CV y portfolio. */
export function StudioStickyCta({ label = 'cv_sticky' }: { label?: string }) {
  return (
    <motion.div
      className="studio-sticky-cta"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: studioMotion.duration,
        ease: studioMotion.ease,
        delay: 0.45,
      }}
    >
      <p className="studio-sticky-cta__copy">
        <span className="studio-sticky-cta__impact">Pre-análisis</span>
        <em className="studio-sticky-cta__script">gratis</em>
      </p>
      <div className="studio-sticky-cta__actions">
        <TrackedLink
          href="/descubrimiento"
          tracking={{ event: 'cta_click', category: 'lead', label }}
          className="home-button home-button--gold"
        >
          Empezar
        </TrackedLink>
        <a
          href="https://wa.me/34613308585"
          className="home-button home-button--light"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </motion.div>
  )
}

/** Botón copiar email con feedback. */
export function CopyEmailButton({
  email = 'evelynpatildr@gmail.com',
}: {
  email?: string
}) {
  return (
    <button
      type="button"
      className="studio-copy-btn"
      onClick={async (e) => {
        const btn = e.currentTarget
        try {
          await navigator.clipboard.writeText(email)
          btn.dataset.state = 'ok'
          window.setTimeout(() => {
            btn.dataset.state = ''
          }, 1600)
        } catch {
          window.location.href = `mailto:${email}`
        }
      }}
    >
      <span data-idle>Copiar email</span>
      <span data-done>Copiado ✓</span>
    </button>
  )
}

export type { HTMLMotionProps }
