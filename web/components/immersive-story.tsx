'use client'

import { useEffect, useRef, useState } from 'react'

type Chapter = {
  number: string
  eyebrow: string
  title: string
  text: string
  asset: string
}

const chapters: readonly Chapter[] = [
  {
    number: '01',
    eyebrow: 'La idea',
    title: 'Primero aparece una posibilidad.',
    text: 'Evelyn observa el problema. Elara encuentra el hilo que vale la pena seguir.',
    asset: 'scroll-01-descubrir.webp',
  },
  {
    number: '02',
    eyebrow: 'La forma',
    title: 'Luego le damos un lugar.',
    text: 'La idea se convierte en pagina, producto, mensaje y una experiencia que se entiende.',
    asset: 'scroll-02-construir.webp',
  },
  {
    number: '03',
    eyebrow: 'El sistema',
    title: 'Finalmente aprende a moverse sola.',
    text: 'Automatizaciones, medicion y campañas conectan lo que antes dependia de hacerlo todo a mano.',
    asset: 'scroll-03-activar.webp',
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
        {chapters.map((chapter, index) => (
          <div
            key={chapter.asset}
            className={`immersive-story__media ${index === active ? 'is-active' : ''}`}
          >
            <div className="asset-slot__grid" />
            <div className="immersive-story__asset">
              <span>{chapter.asset}</span>
              <small>2400 × 1350 px · 16:9</small>
            </div>
          </div>
        ))}
        <div className="immersive-story__progress">
          <span style={{ transform: `scaleX(${(active + 1) / chapters.length})` }} />
        </div>
      </div>

      <div className="immersive-story__chapters">
        <header>
          <EyebrowForClient>Una historia que avanza contigo</EyebrowForClient>
          <h2 id="immersive-title">De la intuicion al movimiento.</h2>
        </header>
        {chapters.map((chapter, index) => (
          <article
            key={chapter.number}
            ref={(node) => {
              chapterRefs.current[index] = node
            }}
            data-chapter={index}
            className={index === active ? 'is-active' : ''}
          >
            <span>{chapter.number}</span>
            <p>{chapter.eyebrow}</p>
            <h3>{chapter.title}</h3>
            <small>{chapter.text}</small>
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
