'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { TrackedLink } from '@/components/tracked-link'
import { evelynPhotos } from '@/lib/evelyn-photos'

/**
 * Scroll storytelling — foto sticky + capítulos al scrollear.
 * Tipografía CapCut: 1 lockup por paso. Sin rail/flechas/dots ni palabra repetida.
 */

function ScreenBase({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 400 290"
      role="img"
      aria-hidden="true"
      className="immersive-screen"
      preserveAspectRatio="none"
    >
      <rect width="400" height="290" fill="#140E18" />
      {children}
    </svg>
  )
}

/** 01 — radar sobrio */
function VerScreen() {
  return (
    <ScreenBase>
      <circle cx="200" cy="150" r="82" fill="none" stroke="rgba(184,154,88,0.15)" strokeWidth="1" className="scene-node scene-node--d3" />
      <circle cx="200" cy="150" r="52" fill="none" stroke="rgba(184,154,88,0.35)" strokeWidth="1.5" className="scene-node scene-node--d2" />
      <circle cx="200" cy="150" r="22" fill="none" stroke="rgba(242,213,120,0.75)" strokeWidth="2" className="scene-node" />
      <circle cx="200" cy="150" r="6" fill="#B89A58" />
      <g fill="rgba(248,243,234,0.28)">
        <circle cx="78" cy="88" r="3.5" />
        <circle cx="318" cy="96" r="3.5" />
        <circle cx="96" cy="220" r="3.5" />
        <circle cx="310" cy="208" r="3.5" />
      </g>
      <circle cx="278" cy="128" r="4" fill="#B89A58" className="scene-pop" />
      <circle cx="148" cy="118" r="4" fill="#B89A58" className="scene-pop scene-pop--d2" />
    </ScreenBase>
  )
}

/** 02 — conexiones (sin tipografía gritando) */
function AnalizarScreen() {
  return (
    <ScreenBase>
      <path
        className="scene-flow"
        d="M70 150 H155 M155 150 L250 95 M155 150 L250 205 M250 95 H330 M250 205 H330"
        fill="none"
        stroke="rgba(184,154,88,0.7)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <g fill="rgba(248,243,234,0.9)">
        <circle cx="70" cy="150" r="7" />
        <circle cx="155" cy="150" r="7" />
      </g>
      <g fill="#B89A58">
        <circle cx="250" cy="95" r="6" className="scene-pop" />
        <circle cx="250" cy="205" r="6" className="scene-pop scene-pop--d2" />
        <circle cx="330" cy="95" r="5" className="scene-pop scene-pop--d2" />
        <circle cx="330" cy="150" r="5" className="scene-pop scene-pop--d3" />
        <circle cx="330" cy="205" r="5" className="scene-pop scene-pop--d3" />
      </g>
    </ScreenBase>
  )
}

/** 03 — wireframe de página, sin copy Bebas dentro */
function CrearScreen() {
  return (
    <ScreenBase>
      <rect x="28" y="28" width="344" height="234" rx="8" fill="#1C1224" stroke="rgba(184,154,88,0.25)" />
      <rect x="28" y="28" width="344" height="32" fill="#18131A" />
      <rect x="44" y="38" width="56" height="10" rx="3" fill="rgba(248,243,234,0.35)" />
      <rect x="300" y="36" width="52" height="16" rx="8" fill="#B89A58" className="scene-pop" />
      <g className="scene-block">
        <rect x="48" y="84" width="160" height="14" rx="4" fill="rgba(248,243,234,0.55)" />
        <rect x="48" y="110" width="120" height="8" rx="3" fill="rgba(184,154,88,0.55)" />
        <rect x="48" y="132" width="180" height="7" rx="3" fill="rgba(248,243,234,0.22)" />
        <rect x="48" y="148" width="150" height="7" rx="3" fill="rgba(248,243,234,0.14)" />
        <rect x="48" y="178" width="88" height="26" rx="13" fill="#B89A58" />
      </g>
      <g className="scene-block scene-block--d2">
        <rect x="250" y="84" width="100" height="130" rx="8" fill="rgba(248,243,234,0.05)" stroke="rgba(184,154,88,0.3)" />
        <circle cx="300" cy="124" r="18" fill="rgba(184,154,88,0.28)" className="scene-node" />
        <rect x="268" y="158" width="64" height="6" rx="3" fill="rgba(248,243,234,0.25)" />
        <rect x="268" y="174" width="48" height="6" rx="3" fill="rgba(248,243,234,0.14)" />
      </g>
    </ScreenBase>
  )
}

/** 04 — curva de resultado */
function LanzarScreen() {
  return (
    <ScreenBase>
      <g stroke="rgba(248,243,234,0.08)" strokeWidth="1">
        <path d="M40 220 H360" />
        <path d="M40 170 H360" />
        <path d="M40 120 H360" />
      </g>
      <path
        className="scene-chart"
        pathLength={340}
        d="M48 210 L130 185 L210 150 L290 115 L355 78"
        fill="none"
        stroke="#B89A58"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g fill="#B89A58">
        <circle cx="130" cy="185" r="5" className="scene-pop" />
        <circle cx="210" cy="150" r="5" className="scene-pop scene-pop--d2" />
        <circle cx="290" cy="115" r="5" className="scene-pop scene-pop--d3" />
      </g>
      <circle cx="355" cy="78" r="8" fill="#B89A58" className="scene-node" />
    </ScreenBase>
  )
}

type Step = {
  number: string
  titleImpact: string
  titleScript: string
  text: string
  Screen: () => React.ReactElement
}

const steps: readonly Step[] = [
  {
    number: '01',
    titleImpact: 'Miro tu',
    titleScript: 'negocio real',
    text: 'Qué te frena, qué se pierde y dónde estás gastando de más.',
    Screen: VerScreen,
  },
  {
    number: '02',
    titleImpact: 'Ordeno',
    titleScript: 'el sistema',
    text: 'Qué automatizar, qué construir y en qué orden. Una ruta clara.',
    Screen: AnalizarScreen,
  },
  {
    number: '03',
    titleImpact: 'Construyo',
    titleScript: 'lo que vende',
    text: 'Web, automatización o embudo — pensado para convertir.',
    Screen: CrearScreen,
  },
  {
    number: '04',
    titleImpact: 'Lo dejo',
    titleScript: 'corriendo',
    text: 'Medición y flujos conectados. El negocio sigue sin vos encima.',
    Screen: LanzarScreen,
  },
] as const

export function ImmersiveStory() {
  const [active, setActive] = useState(0)
  const chapterRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const nodes = chapterRefs.current.filter((n): n is HTMLElement => n !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!visible) return
        setActive(Number((visible.target as HTMLElement).dataset.chapter))
      },
      { rootMargin: '-32% 0px -32% 0px', threshold: [0.35, 0.6, 0.85] },
    )
    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="immersive-story" aria-labelledby="immersive-title">
      <div className="immersive-story__stage" aria-hidden="true">
        <div className="immersive-story__scene">
          <div className="immersive-story__photo">
            <Image
              className="immersive-story__bg"
              src={evelynPhotos.slideProceso}
              alt=""
              fill
              sizes="100vw"
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

        <div className="immersive-story__progress">
          <span style={{ transform: `scaleX(${(active + 1) / steps.length})` }} />
        </div>
      </div>

      <div className="immersive-story__chapters">
        <header className="immersive-story__intro">
          <p className="home-eyebrow home-eyebrow--light">
            <span aria-hidden="true" />
            Mi método
          </p>
          <h2 id="immersive-title" className="type-lockup type-lockup--glow">
            <span className="type-lockup__impact">Así</span>
            <em className="type-lockup__script">trabajo contigo</em>
          </h2>
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
            <span className="immersive-story__num">{step.number}</span>
            <h3 className="type-lockup type-lockup--glow">
              <span className="type-lockup__impact">{step.titleImpact}</span>
              <em className="type-lockup__script">{step.titleScript}</em>
            </h3>
            <p>{step.text}</p>
            {index === steps.length - 1 ? (
              <TrackedLink
                href="/descubrimiento"
                tracking={{ event: 'cta_click', category: 'lead', label: 'home_method_scroll' }}
                className="home-button home-button--gold immersive-story__cta"
              >
                Hacer mi pre-análisis
              </TrackedLink>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}
