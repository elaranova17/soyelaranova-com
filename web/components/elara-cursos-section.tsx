'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ElaraGenerateSlot } from '@/components/elara-generate-slot'
import { ElaraSectionBridge } from '@/components/elara-framed-image'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { homeImages } from '@/lib/home-images'
import { mediaImageSrc } from '@/lib/media-src'
import type { MediaRef } from '@/lib/media'

type CursoItem = {
  media: MediaRef
  title: string
  desc: string
  meta: readonly string[]
  price: string
  cta: string
  href: string
}

const CURSOS: readonly CursoItem[] = [
  {
    media: homeImages.cursos[0],
    title: 'Astrología Práctica',
    desc: 'Leer tu carta natal no es difícil. Acá aprendés desde cero, con herramientas que te sirven toda la vida.',
    meta: ['12 semanas', 'En vivo', 'Grupo cerrado'],
    price: '$97 USD',
    cta: 'Explorar curso',
    href: '#contacto',
  },
  {
    media: homeImages.cursos[1],
    title: 'Oráculo Intuitivo',
    desc: 'No memorizás nada. Aprendés a escuchar el símbolo y tu intuición al mismo tiempo.',
    meta: ['8 semanas', 'En vivo', 'Práctico'],
    price: '$77 USD',
    cta: 'Anotarme',
    href: '#contacto',
  },
  {
    media: homeImages.cursos[2],
    title: 'Círculo de Estudio',
    desc: 'Clases en vivo, preguntas reales, comunidad activa. El grupo te sostiene cuando estudiar sola cansa.',
    meta: ['Mensual', 'En vivo', 'Comunidad'],
    price: '$57 USD/mes',
    cta: 'Ver horarios',
    href: '#contacto',
  },
] as const

function CursoImagen({ media, alt }: { media: MediaRef; alt: string }) {
  if (media.type === 'generate') {
    return (
      <div className="curso-imagen relative min-h-[240px]">
        <ElaraGenerateSlot id={media.id} label={media.label} aspect="cover" />
      </div>
    )
  }

  const src = mediaImageSrc(media)
  if (!src) return null

  return (
    <div className="curso-imagen relative min-h-[240px]">
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw)" />
    </div>
  )
}

function CursoCard({ curso, index }: { curso: CursoItem; index: number }) {
  const { setRef, style } = useScrollReveal<HTMLAnchorElement>({ index, staggerMs: 150, translateY: 30 })

  return (
    <Link
      href={curso.href}
      ref={setRef}
      className="curso-card"
      style={style}
    >
      <CursoImagen media={curso.media} alt={curso.title} />
      <div className="curso-content">
        <h3 className="curso-titulo">{curso.title}</h3>
        <p className="curso-desc">{curso.desc}</p>
        <div className="curso-meta">
          {curso.meta.map((tag) => (
            <span key={tag} className="curso-meta-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="curso-footer">
          <span className="curso-precio">{curso.price}</span>
          <span className="curso-btn">{curso.cta} →</span>
        </div>
      </div>
    </Link>
  )
}

export function ElaraCursosSection() {
  return (
    <section className="elara-cursos elara-section scroll-mt-[5.5rem]" id="cursos">
      <ElaraSectionBridge position="top" />

      <div className="section-header elara-section__content mx-auto max-w-6xl px-6">
        <p className="section-label">✦ Experiencias en vivo</p>
        <h2 className="section-title">Cursos que transforman</h2>
      </div>

      <div className="cursos-grid elara-section__content mx-auto max-w-6xl px-6">
        {CURSOS.map((curso, index) => (
          <CursoCard key={curso.title} curso={curso} index={index} />
        ))}
      </div>
    </section>
  )
}
