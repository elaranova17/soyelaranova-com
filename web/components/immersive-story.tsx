'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { TrackedLink } from '@/components/tracked-link'
import { evelynPhotos } from '@/lib/evelyn-photos'

function ScreenBase({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 400 290"
      role="img"
      aria-hidden="true"
      className="immersive-screen"
      preserveAspectRatio="none"
    >
      <rect width="400" height="290" fill="#120C16" />
      {children}
    </svg>
  )
}

/** 01 VER — foco en el dolor del negocio */
function VerScreen() {
  return (
    <ScreenBase>
      <text x="28" y="36" fill="#B9A1C8" style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: 2 }}>
        DIAGNÓSTICO
      </text>
      <text x="28" y="62" fill="#F8F3EA" style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: 2 }}>
        ¿DÓNDE SE PIERDE?
      </text>
      <circle cx="210" cy="165" r="78" fill="none" stroke="rgba(184,154,88,0.2)" strokeWidth="1.5" className="scene-node scene-node--d3" />
      <circle cx="210" cy="165" r="48" fill="none" stroke="rgba(184,154,88,0.45)" strokeWidth="2" className="scene-node scene-node--d2" />
      <circle cx="210" cy="165" r="18" fill="none" stroke="#F2D578" strokeWidth="3" className="scene-node" />
      <circle cx="210" cy="165" r="7" fill="#D4AF37" className="scene-node" />
      <g fill="rgba(248,243,234,0.35)">
        <circle cx="70" cy="110" r="4" />
        <circle cx="320" cy="100" r="4" />
        <circle cx="90" cy="220" r="4" />
        <circle cx="340" cy="210" r="4" />
      </g>
      <g fill="#F2D578">
        <circle cx="292" cy="140" r="5" className="scene-pop" />
        <circle cx="150" cy="120" r="5" className="scene-pop scene-pop--d2" />
      </g>
      <rect x="28" y="248" width="140" height="22" rx="11" fill="rgba(184,154,88,0.28)" />
      <text x="48" y="263" fill="#F8F3EA" style={{ fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 700 }}>
        Lead sin seguimiento
      </text>
    </ScreenBase>
  )
}

/** 02 ANALIZAR — mapa del sistema */
function AnalizarScreen() {
  return (
    <ScreenBase>
      <text x="28" y="36" fill="#B9A1C8" style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: 2 }}>
        MAPA
      </text>
      <text x="28" y="62" fill="#F8F3EA" style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: 2 }}>
        ORDEN DE ATAQUE
      </text>
      {[
        { x: 40, y: 100, t: 'WEB' },
        { x: 160, y: 100, t: 'CRM' },
        { x: 280, y: 100, t: 'ADS' },
        { x: 100, y: 190, t: 'WA' },
        { x: 220, y: 190, t: 'EMAIL' },
      ].map((n, i) => (
        <g key={n.t} className={i ? `scene-pop scene-pop--d${Math.min(i, 3)}` : 'scene-pop'}>
          <rect x={n.x} y={n.y} width="72" height="36" rx="8" fill="rgba(248,243,234,0.08)" stroke="rgba(184,154,88,0.55)" />
          <text
            x={n.x + 36}
            y={n.y + 23}
            textAnchor="middle"
            fill="#F8F3EA"
            style={{ fontFamily: 'var(--font-display)', fontSize: 13, letterSpacing: 1 }}
          >
            {n.t}
          </text>
        </g>
      ))}
      <path
        className="scene-flow"
        d="M112 118 H160 M232 118 H280 M136 136 L136 190 M256 136 L256 190"
        fill="none"
        stroke="rgba(242,213,120,0.75)"
        strokeWidth="2"
      />
    </ScreenBase>
  )
}

/** 03 CREAR — mockup landing CapCut realista */
function CrearScreen() {
  return (
    <ScreenBase>
      <rect x="18" y="16" width="364" height="258" rx="10" fill="#2B1735" />
      <rect x="18" y="16" width="364" height="38" rx="10" fill="#18131A" />
      <rect x="18" y="44" width="364" height="10" fill="#18131A" />
      <text x="36" y="40" fill="#F8F3EA" style={{ fontFamily: 'var(--font-script)', fontSize: 16 }}>
        Elara Nova
      </text>
      <rect x="290" y="26" width="72" height="18" rx="9" fill="#B89A58" className="scene-pop" />
      <text x="36" y="100" fill="#F8F3EA" style={{ fontFamily: 'var(--font-display)', fontSize: 28, letterSpacing: 2 }}>
        TU NEGOCIO
      </text>
      <text x="36" y="128" fill="#B89A58" style={{ fontFamily: 'var(--font-script)', fontSize: 22 }}>
        todavía a mano?
      </text>
      <rect x="36" y="148" width="180" height="8" rx="4" fill="rgba(248,243,234,0.35)" className="scene-block" />
      <rect x="36" y="164" width="140" height="8" rx="4" fill="rgba(248,243,234,0.2)" className="scene-block scene-block--d2" />
      <rect x="36" y="196" width="110" height="28" rx="14" fill="#B89A58" className="scene-block scene-block--d3" />
      <text x="58" y="214" fill="#18131A" style={{ fontFamily: 'var(--font-sans)', fontSize: 10, fontWeight: 700 }}>
        PRE-ANÁLISIS
      </text>
      <rect x="250" y="90" width="110" height="150" rx="10" fill="rgba(248,243,234,0.06)" stroke="rgba(184,154,88,0.35)" className="scene-block scene-block--d2" />
      <circle cx="305" cy="130" r="22" fill="rgba(184,154,88,0.35)" className="scene-node" />
      <rect x="268" y="168" width="74" height="7" rx="3" fill="rgba(248,243,234,0.3)" />
      <rect x="268" y="184" width="54" height="7" rx="3" fill="rgba(248,243,234,0.18)" />
      <rect x="-120" y="16" width="90" height="258" fill="url(#eln-crear-sweep)" className="scene-sweep" />
      <defs>
        <linearGradient id="eln-crear-sweep" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="rgba(248,243,234,0)" />
          <stop offset="0.5" stopColor="rgba(248,243,234,0.18)" />
          <stop offset="1" stopColor="rgba(248,243,234,0)" />
        </linearGradient>
      </defs>
    </ScreenBase>
  )
}

/** 04 LANZAR — dashboard con conversión */
function LanzarScreen() {
  return (
    <ScreenBase>
      <text x="28" y="36" fill="#B9A1C8" style={{ fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: 2 }}>
        SISTEMA EN VIVO
      </text>
      <text x="28" y="62" fill="#F8F3EA" style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: 2 }}>
        RESULTADO
      </text>
      <g>
        <rect x="28" y="84" width="108" height="64" rx="10" fill="rgba(248,243,234,0.06)" stroke="rgba(184,154,88,0.4)" />
        <text x="40" y="108" fill="#B9A1C8" style={{ fontFamily: 'var(--font-sans)', fontSize: 10 }}>LEADS</text>
        <text x="40" y="132" fill="#F2D578" style={{ fontFamily: 'var(--font-display)', fontSize: 26 }} className="scene-pop">
          +38%
        </text>
      </g>
      <g>
        <rect x="148" y="84" width="108" height="64" rx="10" fill="rgba(248,243,234,0.06)" stroke="rgba(184,154,88,0.4)" />
        <text x="160" y="108" fill="#B9A1C8" style={{ fontFamily: 'var(--font-sans)', fontSize: 10 }}>HORAS</text>
        <text x="160" y="132" fill="#F2D578" style={{ fontFamily: 'var(--font-display)', fontSize: 26 }} className="scene-pop scene-pop--d2">
          −12h
        </text>
      </g>
      <g>
        <rect x="268" y="84" width="108" height="64" rx="10" fill="rgba(248,243,234,0.06)" stroke="rgba(184,154,88,0.4)" />
        <text x="280" y="108" fill="#B9A1C8" style={{ fontFamily: 'var(--font-sans)', fontSize: 10 }}>CPL</text>
        <text x="280" y="132" fill="#F2D578" style={{ fontFamily: 'var(--font-display)', fontSize: 26 }} className="scene-pop scene-pop--d3">
          ↓
        </text>
      </g>
      <path
        className="scene-chart"
        pathLength={340}
        d="M40 240 L 120 220 L 200 180 L 280 150 L 360 110"
        fill="none"
        stroke="#F2D578"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <g fill="#D4AF37">
        <circle cx="120" cy="220" r="5" className="scene-pop" />
        <circle cx="200" cy="180" r="5" className="scene-pop scene-pop--d2" />
        <circle cx="280" cy="150" r="5" className="scene-pop scene-pop--d3" />
      </g>
    </ScreenBase>
  )
}

type Step = {
  number: string
  word: string
  /** Resultado de negocio (marketing) */
  outcome: string
  titleImpact: string
  titleScript: string
  text: string
  Screen: () => React.ReactElement
}

const steps: readonly Step[] = [
  {
    number: '01',
    word: 'Ver',
    outcome: 'Claridad',
    titleImpact: 'Miro tu',
    titleScript: 'negocio real',
    text: 'Qué te frena, qué se pierde y dónde estás gastando de más. Sin adornos.',
    Screen: VerScreen,
  },
  {
    number: '02',
    word: 'Analizar',
    outcome: 'Prioridad',
    titleImpact: 'Ordeno',
    titleScript: 'el ataque',
    text: 'Qué automatizar, qué construir y en qué orden. Una ruta, no una lista de deseos.',
    Screen: AnalizarScreen,
  },
  {
    number: '03',
    word: 'Crear',
    outcome: 'Activo',
    titleImpact: 'Construyo',
    titleScript: 'lo que vende',
    text: 'Web, automatización o sistema — pensado para convertir, no para decorar.',
    Screen: CrearScreen,
  },
  {
    number: '04',
    word: 'Lanzar',
    outcome: 'Sistema',
    titleImpact: 'Lo dejo',
    titleScript: 'corriendo',
    text: 'Medición y flujos conectados. Tu negocio sigue aunque vos no estés.',
    Screen: LanzarScreen,
  },
] as const

export function ImmersiveStory() {
  const [active, setActive] = useState(0)
  const [panelKey, setPanelKey] = useState(0)
  const markerRefs = useRef<(HTMLDivElement | null)[]>([])
  const stageRef = useRef<HTMLDivElement | null>(null)
  const reduceMotion = useRef(false)

  useEffect(() => {
    reduceMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  useEffect(() => {
    const nodes = markerRefs.current.filter((n): n is HTMLDivElement => n !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!visible) return
        const index = Number((visible.target as HTMLElement).dataset.chapter)
        setActive((prev) => {
          if (prev === index) return prev
          setPanelKey((k) => k + 1)
          return index
        })
      },
      { rootMargin: '-35% 0px -35% 0px', threshold: [0.4, 0.7] },
    )
    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [])

  const goToStep = useCallback((index: number) => {
    const node = markerRefs.current[index]
    if (node) {
      node.scrollIntoView({
        behavior: reduceMotion.current ? 'auto' : 'smooth',
        block: 'center',
      })
    }
    setActive(index)
    setPanelKey((k) => k + 1)
  }, [])

  const onStagePointer = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const stage = stageRef.current
    if (!stage || reduceMotion.current) return
    const rect = stage.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    stage.style.setProperty('--imm-x', `${x}%`)
    stage.style.setProperty('--imm-y', `${y}%`)
  }, [])

  const step = steps[active]
  const word = step.word.toUpperCase()
  const isLast = active === steps.length - 1

  return (
    <section className="immersive-story" aria-labelledby="immersive-title">
      <div className="immersive-story__sticky">
        <div ref={stageRef} className="immersive-story__stage" onPointerMove={onStagePointer}>
          <div className="immersive-story__scene" aria-hidden="true">
            <div className="immersive-story__photo">
              <img
                className="immersive-story__bg"
                src={evelynPhotos.slideProceso}
                alt=""
                loading="lazy"
              />
              <div className="immersive-story__screen">
                {steps.map((s, index) => (
                  <div
                    key={s.number}
                    className={`immersive-story__screen-state ${index === active ? 'is-active' : ''}`}
                  >
                    <s.Screen />
                  </div>
                ))}
              </div>
            </div>
            <div className="immersive-story__veil" />
            <div className="immersive-story__cursor-glow" />
          </div>

          <p key={word} className="immersive-story__word" aria-hidden="true">
            {word.split('').map((letter, i) => (
              <span key={`${letter}-${i}`} style={{ animationDelay: `${i * 50}ms` }}>
                {letter}
              </span>
            ))}
          </p>

          <nav className="immersive-story__rail" aria-label="Pasos del método">
            {steps.map((s, index) => (
              <button
                key={s.number}
                type="button"
                className={index === active ? 'is-active' : ''}
                aria-current={index === active ? 'step' : undefined}
                onClick={() => goToStep(index)}
              >
                <span className="immersive-story__rail-n">{s.number}</span>
                <span className="immersive-story__rail-w">{s.word}</span>
              </button>
            ))}
          </nav>

          <div className="immersive-story__progress" aria-hidden="true">
            <span style={{ transform: `scaleX(${(active + 1) / steps.length})` }} />
          </div>
        </div>

        <aside className="immersive-story__panel" aria-live="polite">
          <header className="immersive-story__intro">
            <p className="home-eyebrow home-eyebrow--light">
              <span aria-hidden="true" />
              Mi método · 4 movimientos
            </p>
            <h2 id="immersive-title" className="type-lockup type-lockup--glow">
              <span className="type-lockup__impact">Cuatro</span>
              <em className="type-lockup__script">pasos · un sistema</em>
            </h2>
          </header>

          <div key={panelKey} className="immersive-story__card">
            <div className="immersive-story__card-meta">
              <span className="immersive-story__chapter-n">{step.number}</span>
              <span className="immersive-story__outcome">{step.outcome}</span>
            </div>
            <h3 className="type-lockup type-lockup--glow">
              <span className="type-lockup__impact">{step.titleImpact}</span>
              <em className="type-lockup__script">{step.titleScript}</em>
            </h3>
            <p className="immersive-story__chapter-body">{step.text}</p>

            <div className="immersive-story__card-actions">
              {active > 0 ? (
                <button type="button" className="immersive-story__nav-btn" onClick={() => goToStep(active - 1)}>
                  ← Anterior
                </button>
              ) : (
                <span />
              )}
              {!isLast ? (
                <button type="button" className="immersive-story__nav-btn immersive-story__nav-btn--next" onClick={() => goToStep(active + 1)}>
                  Siguiente →
                </button>
              ) : (
                <TrackedLink
                  href="/descubrimiento"
                  tracking={{ event: 'cta_click', category: 'lead', label: 'home_method_lanzar' }}
                  className="home-button home-button--gold"
                >
                  Hacer mi pre-análisis
                </TrackedLink>
              )}
            </div>
          </div>

          <ol className="immersive-story__dots" aria-label="Progreso">
            {steps.map((s, index) => (
              <li key={s.number}>
                <button
                  type="button"
                  className={index === active ? 'is-active' : ''}
                  aria-label={`Ir a ${s.word}`}
                  onClick={() => goToStep(index)}
                />
              </li>
            ))}
          </ol>
        </aside>
      </div>

      {/* Markers de scroll: solo gatillan el paso activo — sin copy duplicado */}
      <div className="immersive-story__markers" aria-hidden="true">
        {steps.map((s, index) => (
          <div
            key={s.number}
            ref={(node) => {
              markerRefs.current[index] = node
            }}
            data-chapter={index}
            className="immersive-story__marker"
          />
        ))}
      </div>
    </section>
  )
}
