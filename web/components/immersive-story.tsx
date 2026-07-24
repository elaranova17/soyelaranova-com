'use client'

import { useEffect, useRef, useState } from 'react'

type Step = {
  number: string
  eyebrow: string
  title: string
  text: string
  Visual: () => React.ReactElement
}

const PANEL = {
  x: 50,
  y: 46,
  w: 320,
  h: 200,
  rx: 18,
} as const

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 420 300" role="img" aria-hidden="true" className="immersive-viz">
      <rect
        x={PANEL.x}
        y={PANEL.y}
        width={PANEL.w}
        height={PANEL.h}
        rx={PANEL.rx}
        fill="rgba(248,243,234,0.04)"
        stroke="rgba(212,175,55,0.22)"
        strokeWidth={1}
      />
      <circle cx={74} cy={66} r={3} fill="rgba(248,243,234,0.18)" />
      <circle cx={86} cy={66} r={3} fill="rgba(248,243,234,0.18)" />
      <circle cx={98} cy={66} r={3} fill="rgba(248,243,234,0.18)" />
      {children}
    </svg>
  )
}

function VerVisual() {
  return (
    <Panel>
      <g fill="rgba(248,243,234,0.26)">
        <circle cx={112} cy={122} r={4} />
        <circle cx={162} cy={188} r={3} />
        <circle cx={252} cy={104} r={4} />
        <circle cx={296} cy={196} r={3} />
        <circle cx={318} cy={132} r={4} />
        <circle cx={140} cy={210} r={3} />
        <circle cx={330} cy={92} r={3} />
        <circle cx={188} cy={150} r={3} />
        <circle cx={268} cy={150} r={3} />
      </g>
      <circle cx={210} cy={150} r={9} fill="none" stroke="#D4AF37" strokeWidth={1.5} className="eln-pulse" />
      <circle cx={210} cy={150} r={4} fill="#D4AF37" className="eln-pulse" />
    </Panel>
  )
}

function AnalizarVisual() {
  return (
    <Panel>
      <g stroke="#D4AF37" strokeWidth={1.25} fill="none" opacity={0.9}>
        <path d="M126 150 H196" />
        <path d="M196 150 L262 106" />
        <path d="M196 150 H262" />
        <path d="M196 150 L262 194" />
        <path d="M262 106 H320" />
        <path d="M262 194 H320" />
      </g>
      <g fill="rgba(248,243,234,0.85)">
        <circle cx={126} cy={150} r={5} />
        <circle cx={196} cy={150} r={5} />
      </g>
      <g fill="#D4AF37">
        <circle cx={262} cy={106} r={4.5} className="eln-pulse" />
        <circle cx={262} cy={194} r={4.5} className="eln-pulse" />
        <circle cx={320} cy={106} r={4} />
        <circle cx={320} cy={194} r={4} />
      </g>
    </Panel>
  )
}

function CrearVisual() {
  return (
    <Panel>
      <rect x={70} y={72} width={280} height={16} rx={6} fill="rgba(248,243,234,0.12)" />
      <rect x={70} y={100} width={182} height={72} rx={10} fill="url(#eln-hero)" />
      <rect x={264} y={100} width={86} height={128} rx={10} fill="rgba(248,243,234,0.06)" />
      <rect x={70} y={184} width={158} height={8} rx={4} fill="rgba(248,243,234,0.16)" />
      <rect x={70} y={198} width={116} height={8} rx={4} fill="rgba(248,243,234,0.1)" />
      <rect x={70} y={214} width={82} height={20} rx={10} fill="#D4AF37" className="eln-pulse" />
      <defs>
        <linearGradient id="eln-hero" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="rgba(123,63,160,0.55)" />
          <stop offset="1" stopColor="rgba(212,175,55,0.35)" />
        </linearGradient>
      </defs>
    </Panel>
  )
}

function LanzarVisual() {
  return (
    <Panel>
      <rect x={70} y={74} width={128} height={34} rx={8} fill="rgba(248,243,234,0.06)" />
      <rect x={208} y={74} width={142} height={34} rx={8} fill="rgba(248,243,234,0.06)" />
      <rect x={82} y={84} width={44} height={6} rx={3} fill="rgba(248,243,234,0.2)" />
      <rect x={82} y={94} width={64} height={7} rx={3.5} fill="#D4AF37" />
      <path
        d="M74 214 L120 198 L166 204 L212 174 L262 156 L330 116"
        fill="none"
        stroke="#D4AF37"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M74 214 L120 198 L166 204 L212 174 L262 156 L330 116 V232 H74 Z"
        fill="url(#eln-area)"
        opacity={0.5}
      />
      <circle cx={330} cy={116} r={5} fill="#D4AF37" className="eln-pulse" />
      <path d="M316 132 L330 116 L344 132" fill="none" stroke="#D4AF37" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="eln-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="rgba(212,175,55,0.35)" />
          <stop offset="1" stopColor="rgba(212,175,55,0)" />
        </linearGradient>
      </defs>
    </Panel>
  )
}

const steps: readonly Step[] = [
  {
    number: '01',
    eyebrow: 'Ver',
    title: 'Miramos tu negocio de verdad.',
    text: 'Entendemos el problema real: qué te frena, qué se pierde y dónde estás gastando de más.',
    Visual: VerVisual,
  },
  {
    number: '02',
    eyebrow: 'Analizar',
    title: 'Encontramos el patrón que importa.',
    text: 'Ordenamos el caos en una estructura clara: qué automatizar, qué construir y en qué orden.',
    Visual: AnalizarVisual,
  },
  {
    number: '03',
    eyebrow: 'Crear',
    title: 'Le damos forma que vende.',
    text: 'Diseñamos y construimos la web, la automatización o el sistema — pensado para convertir.',
    Visual: CrearVisual,
  },
  {
    number: '04',
    eyebrow: 'Lanzar',
    title: 'El sistema se mueve solo.',
    text: 'Automatización, medición y campañas conectadas. Tu negocio trabaja aunque vos no estés.',
    Visual: LanzarVisual,
  },
]

export function ImmersiveStory() {
  const [active, setActive] = useState(0)
  const chapterRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const nodes = chapterRefs.current.filter((node): node is HTMLElement => node !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) {
          const index = Number((visible.target as HTMLElement).dataset.chapter)
          setActive(index)
        }
      },
      { rootMargin: '-30% 0px -30% 0px', threshold: [0.2, 0.5, 0.8] },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="immersive-story" aria-labelledby="immersive-title">
      <div className="immersive-story__stage" aria-hidden="true">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`immersive-story__media ${index === active ? 'is-active' : ''}`}
          >
            <div className="immersive-story__viz">
              <step.Visual />
            </div>
          </div>
        ))}
        <div className="immersive-story__progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${(active + 1) / steps.length})` }} />
        </div>
      </div>

      <div className="immersive-story__chapters">
        <header>
          <EyebrowForClient>Nuestro proceso</EyebrowForClient>
          <h2 id="immersive-title">Ver. Analizar. Crear. Lanzar.</h2>
        </header>
        {steps.map((step, index) => (
          <article
            key={step.number}
            ref={(node) => {
              chapterRefs.current[index] = node
            }}
            data-chapter={index}
            className={index === active ? 'is-active' : ''}
          >
            <span>{step.number}</span>
            <p>{step.eyebrow}</p>
            <h3>{step.title}</h3>
            <small>{step.text}</small>
          </article>
        ))}
      </div>
    </section>
  )
}

function EyebrowForClient({ children }: { children: React.ReactNode }) {
  return (
    <p className="home-eyebrow home-eyebrow--light">
      <span aria-hidden="true" />
      {children}
    </p>
  )
}
