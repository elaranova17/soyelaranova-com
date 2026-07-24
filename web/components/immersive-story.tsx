'use client'

import { useEffect, useRef, useState } from 'react'

type Step = {
  number: string
  eyebrow: string
  title: string
  text: string
  Screen: () => React.ReactElement
}

function ScreenBase({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 400 290" role="img" aria-hidden="true" className="immersive-screen">
      <rect x="0" y="0" width="400" height="290" rx="6" fill="rgb(14 9 22 / 0.94)" />
      {children}
    </svg>
  )
}

function VerScreen() {
  return (
    <ScreenBase>
      <g fill="rgba(248,243,234,0.28)">
        <circle cx={70} cy={90} r={4} />
        <circle cx={130} cy={200} r={3} />
        <circle cx={250} cy={70} r={4} />
        <circle cx={320} cy={210} r={3} />
        <circle cx={340} cy={120} r={4} />
        <circle cx={110} cy={140} r={3} />
        <circle cx={300} cy={150} r={3} />
        <circle cx={175} cy={110} r={3} />
        <circle cx={240} cy={215} r={3} />
      </g>
      <circle cx={200} cy={150} r={11} fill="none" stroke="#D4AF37" strokeWidth={1.6} className="eln-pulse" />
      <circle cx={200} cy={150} r={5} fill="#D4AF37" className="eln-pulse" />
    </ScreenBase>
  )
}

function AnalizarScreen() {
  return (
    <ScreenBase>
      <g stroke="#D4AF37" strokeWidth={1.4} fill="none" opacity={0.92}>
        <path d="M78 145 H168" />
        <path d="M168 145 L262 92" />
        <path d="M168 145 H262" />
        <path d="M168 145 L262 198" />
        <path d="M262 92 H338" />
        <path d="M262 198 H338" />
      </g>
      <g fill="rgba(248,243,234,0.9)">
        <circle cx={78} cy={145} r={6} />
        <circle cx={168} cy={145} r={6} />
      </g>
      <g fill="#D4AF37">
        <circle cx={262} cy={92} r={5} className="eln-pulse" />
        <circle cx={262} cy={198} r={5} className="eln-pulse" />
        <circle cx={338} cy={92} r={4.5} />
        <circle cx={338} cy={145} r={4.5} />
        <circle cx={338} cy={198} r={4.5} />
      </g>
    </ScreenBase>
  )
}

function CrearScreen() {
  return (
    <ScreenBase>
      <rect x={40} y={40} width={320} height={20} rx={6} fill="rgba(248,243,234,0.12)" />
      <rect x={40} y={74} width={196} height={96} rx={10} fill="url(#eln-hero)" />
      <rect x={248} y={74} width={112} height={148} rx={10} fill="rgba(248,243,234,0.06)" />
      <rect x={40} y={184} width={168} height={9} rx={4.5} fill="rgba(248,243,234,0.16)" />
      <rect x={40} y={200} width={120} height={9} rx={4.5} fill="rgba(248,243,234,0.1)" />
      <rect x={40} y={220} width={92} height={24} rx={12} fill="#D4AF37" className="eln-pulse" />
      <defs>
        <linearGradient id="eln-hero" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="rgba(123,63,160,0.6)" />
          <stop offset="1" stopColor="rgba(212,175,55,0.4)" />
        </linearGradient>
      </defs>
    </ScreenBase>
  )
}

function LanzarScreen() {
  return (
    <ScreenBase>
      <rect x={40} y={40} width={150} height={44} rx={9} fill="rgba(248,243,234,0.06)" />
      <rect x={210} y={40} width={150} height={44} rx={9} fill="rgba(248,243,234,0.06)" />
      <rect x={54} y={52} width={52} height={7} rx={3.5} fill="rgba(248,243,234,0.2)" />
      <rect x={54} y={64} width={74} height={8} rx={4} fill="#D4AF37" />
      <path
        d="M46 246 L118 214 L190 224 L250 184 L312 156 L372 104"
        fill="none"
        stroke="#D4AF37"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46 246 L118 214 L190 224 L250 184 L312 156 L372 104 V262 H46 Z"
        fill="url(#eln-area)"
        opacity={0.5}
      />
      <circle cx={372} cy={104} r={5.5} fill="#D4AF37" className="eln-pulse" />
      <path d="M357 122 L372 104 L387 122" fill="none" stroke="#D4AF37" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="eln-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="rgba(212,175,55,0.35)" />
          <stop offset="1" stopColor="rgba(212,175,55,0)" />
        </linearGradient>
      </defs>
    </ScreenBase>
  )
}

const steps: readonly Step[] = [
  {
    number: '01',
    eyebrow: 'Ver',
    title: 'Miramos tu negocio de verdad.',
    text: 'Entendemos el problema real: qué te frena, qué se pierde y dónde estás gastando de más.',
    Screen: VerScreen,
  },
  {
    number: '02',
    eyebrow: 'Analizar',
    title: 'Encontramos el patrón que importa.',
    text: 'Ordenamos el caos en una estructura clara: qué automatizar, qué construir y en qué orden.',
    Screen: AnalizarScreen,
  },
  {
    number: '03',
    eyebrow: 'Crear',
    title: 'Le damos forma que vende.',
    text: 'Diseñamos y construimos la web, la automatización o el sistema — pensado para convertir.',
    Screen: CrearScreen,
  },
  {
    number: '04',
    eyebrow: 'Lanzar',
    title: 'El sistema se mueve solo.',
    text: 'Automatización, medición y campañas conectadas. Tu negocio trabaja aunque vos no estés.',
    Screen: LanzarScreen,
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
        <div className="immersive-story__scene">
          <div className="immersive-story__frame">
            <img
              className="immersive-story__bg"
              src="/_assets/photos/slide-proceso-fondo.webp"
              alt=""
              loading="lazy"
            />
            <div className="immersive-story__screen">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`immersive-story__screen-state ${index === active ? 'is-active' : ''}`}
                >
                  <step.Screen />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="immersive-story__progress">
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
