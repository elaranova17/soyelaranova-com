'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { studioMotion, studioRise } from '@/lib/studio-motion'

/** Contador animado al entrar en viewport */
export function StudioCounter({
  value,
  suffix = '',
  label,
}: {
  value: number
  suffix?: string
  label: string
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const reduce = useReducedMotion()
  const [n, setN] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true

    if (reduce) {
      queueMicrotask(() => setN(value))
      return
    }

    const start = performance.now()
    const dur = 1100
    let raf = 0
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(value * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduce, value])

  return (
    <div ref={ref} className="studio-metric">
      <strong className="font-display">
        {n}
        {suffix}
      </strong>
      <span>{label}</span>
    </div>
  )
}

/** Embudo comercial SVG animado */
export function StudioFunnelGraphic() {
  const reduce = useReducedMotion()
  const steps = [
    { y: 18, w: 280, label: 'Pre-análisis gratis', sub: 'Wizard 2–4 min' },
    { y: 78, w: 230, label: 'Lectura por email', sub: 'Diagnóstico async' },
    { y: 138, w: 180, label: 'Sesión 25 CHF', sub: '20 min · propuesta' },
    { y: 198, w: 130, label: 'Proyecto', sub: 'Arranque / Pro / Ads' },
  ]

  return (
    <motion.svg
      className="studio-funnel"
      viewBox="0 0 320 260"
      role="img"
      aria-label="Embudo comercial Elara Nova"
      initial={reduce ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.12 } },
      }}
    >
      {steps.map((s, i) => (
        <motion.g
          key={s.label}
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: studioMotion.duration, ease: studioMotion.ease },
            },
          }}
        >
          <rect
            x={(320 - s.w) / 2}
            y={s.y}
            width={s.w}
            height={44}
            rx={8}
            fill={i === 3 ? 'rgba(184,154,88,0.28)' : 'rgba(248,243,234,0.1)'}
            stroke="rgba(184,154,88,0.65)"
            strokeWidth={1.4}
          />
          <text
            x={160}
            y={s.y + 18}
            textAnchor="middle"
            fill="#F8F3EA"
            style={{ fontFamily: 'var(--font-display)', fontSize: 13, letterSpacing: '0.08em' }}
          >
            {s.label.toUpperCase()}
          </text>
          <text
            x={160}
            y={s.y + 34}
            textAnchor="middle"
            fill="#B9A1C8"
            style={{ fontFamily: 'var(--font-sans)', fontSize: 10 }}
          >
            {s.sub}
          </text>
        </motion.g>
      ))}
    </motion.svg>
  )
}

/** Barras de skill / dominio */
export function StudioSkillBars({
  items,
}: {
  items: readonly { name: string; level: number }[]
}) {
  const ref = useRef<HTMLUListElement | null>(null)
  const inView = useInView(ref, { once: true, amount: 0.35 })
  const reduce = useReducedMotion()

  return (
    <ul ref={ref} className="studio-skills">
      {items.map((item, i) => (
        <li key={item.name}>
          <div className="studio-skills__row">
            <span className="font-display">{item.name}</span>
            <em>{item.level}%</em>
          </div>
          <div className="studio-skills__track" aria-hidden>
            <motion.span
              className="studio-skills__fill"
              initial={{ scaleX: reduce ? item.level / 100 : 0 }}
              animate={inView || reduce ? { scaleX: item.level / 100 } : { scaleX: 0 }}
              transition={{
                duration: 0.9,
                delay: i * 0.08,
                ease: studioMotion.ease,
              }}
            />
          </div>
        </li>
      ))}
    </ul>
  )
}

/** Mini dashboard gráfico (leads / horas / conversión) */
export function StudioDashGraphic() {
  const bars = [42, 68, 55, 82, 74, 90, 63]
  const reduce = useReducedMotion()

  return (
    <motion.svg
      className="studio-dash"
      viewBox="0 0 360 200"
      role="img"
      aria-label="Gráfico de resultados: leads y conversión"
      initial={reduce ? false : 'hidden'}
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <rect x={0} y={0} width={360} height={200} rx={12} fill="rgba(43,23,53,0.55)" />
      <text
        x={20}
        y={28}
        fill="#B89A58"
        style={{ fontFamily: 'var(--font-sans)', fontSize: 10, letterSpacing: '0.16em' }}
      >
        SISTEMA EN VIVO
      </text>
      <text
        x={20}
        y={52}
        fill="#F8F3EA"
        style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: '0.04em' }}
      >
        LEADS · HORAS · ADS
      </text>
      {bars.map((h, i) => (
        <motion.rect
          key={i}
          x={28 + i * 46}
          y={170 - h}
          width={28}
          height={h}
          rx={4}
          fill={i === bars.length - 1 ? '#B89A58' : 'rgba(248,243,234,0.35)'}
          variants={studioRise}
          custom={i}
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true }}
          style={{ transformOrigin: 'bottom' }}
          transition={{
            duration: 0.65,
            delay: i * 0.06,
            ease: studioMotion.ease,
          }}
        />
      ))}
      <motion.circle
        cx={320}
        cy={40}
        r={6}
        fill="#D4AF37"
        animate={reduce ? undefined : { opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.svg>
  )
}

/** Pipeline horizontal animado */
export function StudioPipeline() {
  const nodes = ['Lead', 'CRM', 'WhatsApp', 'Cita']
  const reduce = useReducedMotion()

  return (
    <motion.ol
      className="studio-pipeline"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {nodes.map((n, i) => (
        <motion.li
          key={n}
          variants={{
            hidden: { opacity: 0, y: 18 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: studioMotion.duration, ease: studioMotion.ease },
            },
          }}
        >
          <span className="studio-pipeline__n font-display">{String(i + 1).padStart(2, '0')}</span>
          <strong className="font-display">{n}</strong>
          {i < nodes.length - 1 ? <i aria-hidden className="studio-pipeline__arrow" /> : null}
        </motion.li>
      ))}
      {!reduce ? <span className="studio-pipeline__pulse" aria-hidden /> : null}
    </motion.ol>
  )
}
