'use client'

import { useEffect, useRef } from 'react'
import { ElaraSectionBridge } from '@/components/elara-framed-image'

const STEPS = [
  { step: 1, glyph: '✦', title: 'La señal', text: 'Algo llega — una idea, un ciclo, una necesidad. Lo abrimos.' },
  { step: 2, glyph: '◐', title: 'El diseño', text: 'Le damos forma. Visual, energética, y con propósito claro.' },
  { step: 3, glyph: '⚒', title: 'La creación', text: 'Cada pieza se hace con detalle. Sin atajos.' },
  { step: 4, glyph: '✧', title: 'El cuidado', text: 'El empaque, la guía, el momento de recibirlo. Todo importa.' },
  { step: 5, glyph: '◉', title: 'Llegó', text: 'Una experiencia lista para acompañar tu proceso. En tus manos.' },
] as const

export function ElaraProcessSection() {
  const progressRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = timelineRef.current
    const progress = progressRef.current
    if (!root || !progress) return

    const steps = root.querySelectorAll<HTMLElement>('[data-timeline-step]')
    if (!steps.length) return

    const syncProgress = () => {
      const count = root.querySelectorAll('[data-timeline-step].is-active').length
      progress.style.height = `${(count / steps.length) * 100}%`
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      steps.forEach((s) => s.classList.add('is-active'))
      progress.style.height = '100%'
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-active')
          }
        })
        syncProgress()
      },
      { threshold: 0.5, rootMargin: '-50px' },
    )

    steps.forEach((step) => io.observe(step))
    return () => io.disconnect()
  }, [])

  return (
    <section className="elara-process elara-section scroll-mt-[5.5rem]" id="proceso">
      <ElaraSectionBridge position="top" />

      <div className="process-header elara-section__content mx-auto max-w-6xl px-6">
        <p className="process-label">✦ Así crea Evelyn</p>
        <h2 className="process-title">De la intención a tus manos</h2>
        <p className="process-subtitle">Cada pieza que creamos nace de una intención real.</p>
      </div>

      <div ref={timelineRef} className="process-timeline elara-section__content mx-auto max-w-[1000px] px-6">
        <div className="timeline-track" aria-hidden>
          <div ref={progressRef} className="timeline-track-progress" />
        </div>

        {STEPS.map((item, index) => (
          <div
            key={item.step}
            className="timeline-step"
            data-timeline-step
            data-step={item.step}
          >
            {index % 2 === 0 ? (
              <>
                <div className="step-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <div className="step-icon-wrap">
                  <div className="step-icon">{item.glyph}</div>
                  <span className="step-number">{String(item.step).padStart(2, '0')}</span>
                </div>
                <div className="step-spacer" aria-hidden />
              </>
            ) : (
              <>
                <div className="step-spacer" aria-hidden />
                <div className="step-icon-wrap">
                  <div className="step-icon">{item.glyph}</div>
                  <span className="step-number">{String(item.step).padStart(2, '0')}</span>
                </div>
                <div className="step-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <ElaraSectionBridge position="bottom" />
    </section>
  )
}
