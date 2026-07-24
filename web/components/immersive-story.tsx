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
    <svg viewBox="0 0 400 290" role="img" aria-hidden="true" className="immersive-screen" preserveAspectRatio="none">
      {children}
    </svg>
  )
}

/** VER — señales dispersas, el radar encuentra el punto que importa */
function VerScreen() {
  return (
    <ScreenBase>
      <g fill="rgba(248,243,234,0.3)">
        <circle cx={70} cy={90} r={4} />
        <circle cx={130} cy={200} r={3} />
        <circle cx={250} cy={70} r={4} />
        <circle cx={320} cy={210} r={3} />
        <circle cx={340} cy={120} r={4} />
        <circle cx={110} cy={140} r={3} />
      </g>
      <g fill="rgba(242,213,120,0.85)">
        <circle cx={300} cy={150} r={4.5} className="scene-pop" />
        <circle cx={175} cy={110} r={4.5} className="scene-pop scene-pop--d2" />
        <circle cx={240} cy={215} r={4.5} className="scene-pop scene-pop--d3" />
      </g>
      <circle cx={200} cy={150} r={26} fill="none" stroke="rgba(212,175,55,0.4)" strokeWidth={1.5} className="scene-node scene-node--d2" />
      <circle cx={200} cy={150} r={12} fill="none" stroke="#D4AF37" strokeWidth={2} className="scene-node" />
      <circle cx={200} cy={150} r={5} fill="#D4AF37" className="scene-node" />
    </ScreenBase>
  )
}

/** ANALIZAR — las señales se conectan en estructura, dibujándose */
function AnalizarScreen() {
  return (
    <ScreenBase>
      <path
        className="scene-chart"
        pathLength={340}
        d="M78 145 H 168 M168 145 L 262 92 M168 145 H 262 M168 145 L 262 198"
        fill="none"
        stroke="#D4AF37"
        strokeWidth={2.4}
        strokeLinecap="round"
      />
      <g fill="rgba(248,243,234,0.9)">
        <circle cx={78} cy={145} r={6} />
        <circle cx={168} cy={145} r={6} />
      </g>
      <g fill="#D4AF37">
        <circle cx={262} cy={92} r={5.5} className="scene-pop" />
        <circle cx={262} cy={198} r={5.5} className="scene-pop scene-pop--d2" />
      </g>
      <g fill="#F2D578">
        <circle cx={330} cy={92} r={4.5} className="scene-pop scene-pop--d2" />
        <circle cx={330} cy={145} r={4.5} className="scene-pop scene-pop--d3" />
        <circle cx={330} cy={198} r={4.5} className="scene-pop scene-pop--d3" />
      </g>
      <path
        className="scene-flow"
        d="M262 92 H 330 M262 198 H 330"
        fill="none"
        stroke="rgba(212,175,55,0.6)"
        strokeWidth={1.6}
      />
    </ScreenBase>
  )
}

/** CREAR — la página se construye por capas y un brillo la recorre */
function CrearScreen() {
  return (
    <ScreenBase>
      <g className="scene-block">
        <rect x={30} y={26} width={340} height={22} rx={8} fill="rgba(248,243,234,0.12)" />
        <circle cx={46} cy={37} r={3.5} fill="rgba(248,243,234,0.4)" />
        <circle cx={58} cy={37} r={3.5} fill="rgba(248,243,234,0.25)" />
        <rect x={78} y={31} width={140} height={12} rx={6} fill="rgba(248,243,234,0.08)" />
      </g>
      <g className="scene-block scene-block--d2">
        <rect x={30} y={58} width={200} height={100} rx={10} fill="url(#eln-hero2)" />
        <rect x={46} y={76} width={100} height={11} rx={5.5} fill="rgba(248,243,234,0.75)" />
        <rect x={46} y={94} width={140} height={8} rx={4} fill="rgba(248,243,234,0.35)" />
        <rect x={46} y={126} width={70} height={20} rx={10} fill="#D4AF37" />
      </g>
      <g className="scene-block scene-block--d2">
        <rect x={242} y={58} width={128} height={140} rx={10} fill="rgba(248,243,234,0.07)" />
        <circle cx={306} cy={96} r={18} fill="rgba(212,175,55,0.35)" />
        <rect x={266} y={126} width={80} height={7} rx={3.5} fill="rgba(248,243,234,0.3)" />
        <rect x={266} y={140} width={58} height={7} rx={3.5} fill="rgba(248,243,234,0.18)" />
      </g>
      <g className="scene-block scene-block--d3">
        <rect x={30} y={172} width={150} height={8} rx={4} fill="rgba(248,243,234,0.28)" />
        <rect x={30} y={188} width={112} height={8} rx={4} fill="rgba(248,243,234,0.16)" />
      </g>
      <g className="scene-block scene-block--d4">
        <rect x={30} y={214} width={104} height={26} rx={13} fill="#D4AF37" />
        <rect x={46} y={224} width={72} height={7} rx={3.5} fill="rgba(24,19,26,0.6)" />
      </g>
      <rect x={-130} y={0} width={100} height={290} fill="url(#eln-sweep2)" className="scene-sweep" />
      <defs>
        <linearGradient id="eln-hero2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="rgba(123,63,160,0.62)" />
          <stop offset="1" stopColor="rgba(212,175,55,0.42)" />
        </linearGradient>
        <linearGradient id="eln-sweep2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="rgba(248,243,234,0)" />
          <stop offset="0.5" stopColor="rgba(248,243,234,0.13)" />
          <stop offset="1" stopColor="rgba(248,243,234,0)" />
        </linearGradient>
      </defs>
    </ScreenBase>
  )
}

/** LANZAR — dashboard vivo: barras crecen, la línea sube al pico */
function LanzarScreen() {
  return (
    <ScreenBase>
      <g stroke="rgba(248,243,234,0.1)" strokeWidth={1}>
        <path d="M40 240 H 360" />
        <path d="M40 190 H 360" />
        <path d="M40 140 H 360" />
        <path d="M40 90 H 360" />
      </g>
      <g fill="rgba(212,175,55,0.4)">
        <rect x={70} y={200} width={40} height={40} rx={5} className="scene-bar" />
        <rect x={160} y={170} width={40} height={70} rx={5} className="scene-bar scene-bar--d2" />
        <rect x={250} y={128} width={40} height={112} rx={5} className="scene-bar scene-bar--d3" />
      </g>
      <path
        className="scene-chart"
        pathLength={340}
        d="M52 226 L 130 196 L 220 156 L 310 96"
        fill="none"
        stroke="#D4AF37"
        strokeWidth={3.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g fill="#F2D578">
        <circle cx={130} cy={196} r={5} className="scene-pop" />
        <circle cx={220} cy={156} r={5} className="scene-pop scene-pop--d2" />
      </g>
      <circle cx={310} cy={96} r={7.5} fill="#D4AF37" className="scene-node" />
      <circle cx={310} cy={96} r={14} fill="none" stroke="rgba(212,175,55,0.5)" strokeWidth={1.5} className="scene-node scene-node--d2" />
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

  const word = steps[active].eyebrow.toUpperCase()

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

        {/* palabra-banner: cae letra por letra en cada paso */}
        <p key={word} className="immersive-story__word">
          {word.split('').map((letter, i) => (
            <span key={`${letter}-${i}`} style={{ animationDelay: `${i * 70}ms` }}>
              {letter}
            </span>
          ))}
        </p>

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
