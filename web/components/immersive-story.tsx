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

/** VER — radar que encuentra el punto que importa */
function VerScreen() {
  return (
    <ScreenBase>
      <g fill="rgba(248,243,234,0.35)">
        <circle cx={60} cy={80} r={5} />
        <circle cx={120} cy={210} r={4} />
        <circle cx={255} cy={60} r={5} />
        <circle cx={330} cy={220} r={4} />
        <circle cx={350} cy={110} r={5} />
        <circle cx={100} cy={140} r={4} />
      </g>
      <circle cx={200} cy={150} r={70} fill="none" stroke="rgba(212,175,55,0.18)" strokeWidth={1.5} className="scene-node scene-node--d3" />
      <circle cx={200} cy={150} r={42} fill="none" stroke="rgba(212,175,55,0.45)" strokeWidth={2} className="scene-node scene-node--d2" />
      <circle cx={200} cy={150} r={18} fill="none" stroke="#F2D578" strokeWidth={3} className="scene-node" />
      <circle cx={200} cy={150} r={7} fill="#D4AF37" className="scene-node" />
      <g fill="#F2D578">
        <circle cx={305} cy={145} r={6} className="scene-pop" />
        <circle cx={160} cy={95} r={6} className="scene-pop scene-pop--d2" />
        <circle cx={245} cy={220} r={6} className="scene-pop scene-pop--d3" />
      </g>
    </ScreenBase>
  )
}

/** ANALIZAR — señales que se conectan en estructura */
function AnalizarScreen() {
  return (
    <ScreenBase>
      <path
        className="scene-chart"
        pathLength={340}
        d="M70 150 H 165 M165 150 L 265 85 M165 150 H 265 M165 150 L 265 210"
        fill="none"
        stroke="#D4AF37"
        strokeWidth={3.4}
        strokeLinecap="round"
      />
      <g fill="rgba(248,243,234,0.95)">
        <circle cx={70} cy={150} r={8} />
        <circle cx={165} cy={150} r={8} />
      </g>
      <g fill="#D4AF37">
        <circle cx={265} cy={85} r={7} className="scene-pop" />
        <circle cx={265} cy={210} r={7} className="scene-pop scene-pop--d2" />
      </g>
      <g fill="#F2D578">
        <circle cx={340} cy={85} r={6} className="scene-pop scene-pop--d2" />
        <circle cx={340} cy={150} r={6} className="scene-pop scene-pop--d3" />
        <circle cx={340} cy={210} r={6} className="scene-pop scene-pop--d3" />
      </g>
      <path
        className="scene-flow"
        d="M265 85 H 340 M265 210 H 340"
        fill="none"
        stroke="rgba(242,213,120,0.85)"
        strokeWidth={2.4}
      />
    </ScreenBase>
  )
}

/** CREAR — la página se construye por capas + brillo */
function CrearScreen() {
  return (
    <ScreenBase>
      <g className="scene-block">
        <rect x={24} y={22} width={352} height={26} rx={9} fill="rgba(248,243,234,0.14)" />
        <circle cx={42} cy={35} r={4.5} fill="rgba(248,243,234,0.5)" />
        <circle cx={56} cy={35} r={4.5} fill="rgba(248,243,234,0.3)" />
        <circle cx={70} cy={35} r={4.5} fill="rgba(248,243,234,0.2)" />
        <rect x={92} y={28} width={160} height={14} rx={7} fill="rgba(248,243,234,0.1)" />
      </g>
      <g className="scene-block scene-block--d2">
        <rect x={24} y={58} width={210} height={110} rx={12} fill="url(#eln-hero-slide)" />
        <rect x={42} y={78} width={110} height={13} rx={6.5} fill="rgba(248,243,234,0.85)" />
        <rect x={42} y={98} width={150} height={9} rx={4.5} fill="rgba(248,243,234,0.4)" />
        <rect x={42} y={130} width={78} height={24} rx={12} fill="#D4AF37" />
      </g>
      <g className="scene-block scene-block--d2">
        <rect x={248} y={58} width={128} height={150} rx={12} fill="rgba(248,243,234,0.09)" />
        <circle cx={312} cy={100} r={22} fill="rgba(212,175,55,0.42)" className="scene-node" />
        <rect x={270} y={136} width={84} height={8} rx={4} fill="rgba(248,243,234,0.35)" />
        <rect x={270} y={152} width={60} height={8} rx={4} fill="rgba(248,243,234,0.2)" />
      </g>
      <g className="scene-block scene-block--d3">
        <rect x={24} y={182} width={168} height={9} rx={4.5} fill="rgba(248,243,234,0.32)" />
        <rect x={24} y={200} width={124} height={9} rx={4.5} fill="rgba(248,243,234,0.18)" />
      </g>
      <g className="scene-block scene-block--d4">
        <rect x={24} y={228} width={118} height={30} rx={15} fill="#D4AF37" />
        <rect x={42} y={239} width={82} height={8} rx={4} fill="rgba(24,19,26,0.65)" />
      </g>
      <rect x={-140} y={0} width={110} height={290} fill="url(#eln-sweep-slide)" className="scene-sweep" />
      <defs>
        <linearGradient id="eln-hero-slide" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="rgba(123,63,160,0.72)" />
          <stop offset="1" stopColor="rgba(212,175,55,0.5)" />
        </linearGradient>
        <linearGradient id="eln-sweep-slide" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="rgba(248,243,234,0)" />
          <stop offset="0.5" stopColor="rgba(248,243,234,0.22)" />
          <stop offset="1" stopColor="rgba(248,243,234,0)" />
        </linearGradient>
      </defs>
    </ScreenBase>
  )
}

/** LANZAR — dashboard vivo: barras + línea al pico */
function LanzarScreen() {
  return (
    <ScreenBase>
      <g stroke="rgba(248,243,234,0.12)" strokeWidth={1.2}>
        <path d="M36 245 H 364" />
        <path d="M36 190 H 364" />
        <path d="M36 135 H 364" />
        <path d="M36 80 H 364" />
      </g>
      <g fill="rgba(212,175,55,0.5)">
        <rect x={64} y={195} width={46} height={50} rx={6} className="scene-bar" />
        <rect x={150} y={160} width={46} height={85} rx={6} className="scene-bar scene-bar--d2" />
        <rect x={236} y={110} width={46} height={135} rx={6} className="scene-bar scene-bar--d3" />
      </g>
      <path
        className="scene-chart"
        pathLength={340}
        d="M48 230 L 125 195 L 215 145 L 320 78"
        fill="none"
        stroke="#F2D578"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g fill="#F2D578">
        <circle cx={125} cy={195} r={6.5} className="scene-pop" />
        <circle cx={215} cy={145} r={6.5} className="scene-pop scene-pop--d2" />
      </g>
      <circle cx={320} cy={78} r={10} fill="#D4AF37" className="scene-node" />
      <circle cx={320} cy={78} r={20} fill="none" stroke="rgba(242,213,120,0.65)" strokeWidth={2} className="scene-node scene-node--d2" />
    </ScreenBase>
  )
}

const steps: readonly Step[] = [
  {
    number: '01',
    eyebrow: 'Ver',
    title: 'Miro tu negocio de verdad.',
    text: 'Entiendo el problema real: qué te frena, qué se pierde y dónde estás gastando de más.',
    Screen: VerScreen,
  },
  {
    number: '02',
    eyebrow: 'Analizar',
    title: 'Encuentro el patrón que importa.',
    text: 'Ordeno el caos en una estructura clara: qué automatizar, qué construir y en qué orden.',
    Screen: AnalizarScreen,
  },
  {
    number: '03',
    eyebrow: 'Crear',
    title: 'Le doy forma que vende.',
    text: 'Diseño y construyo la web, la automatización o el sistema — pensado para convertir.',
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
          {/* photo-box 16:9 cubre el stage; % de pantalla = % de la imagen */}
          <div className="immersive-story__photo">
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
          <div className="immersive-story__veil" />
        </div>

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
          <EyebrowForClient>Mi proceso</EyebrowForClient>
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
