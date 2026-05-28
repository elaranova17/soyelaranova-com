'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ElaraSectionBridge } from '@/components/elara-framed-image'
import { SectionCoverImage } from '@/components/section-cover-image'
import { useToolCardRipple } from '@/hooks/use-tool-card-ripple'
import { homeImages } from '@/lib/home-images'

const CAJONES = [
  {
    id: 'vivas',
    title: 'Vivas cada mes',
    text: 'Charlas, talleres y círculos de estudio.',
    href: '#contacto',
  },
  {
    id: 'rituales',
    title: 'Rituales de luna llena',
    text: 'Ceremonias grupales con intención.',
    href: '#contacto',
  },
  {
    id: 'material',
    title: 'Material de estudio',
    text: 'Contenido exclusivo para profundizar.',
    href: '#contacto',
  },
  {
    id: 'acompanamiento',
    title: 'Acompañamiento real',
    text: 'Comunidad y apoyo genuino.',
    href: '#contacto',
  },
] as const

const RITUAL_STEPS = [
  { title: 'Entrás', text: 'Un espacio sin filtros, con mujeres en tu misma búsqueda. Sin performar.' },
  { title: 'Aprendés', text: 'Guías, clases y material para profundizar a tu ritmo. Sin presión.' },
  { title: 'Ritualizás', text: 'Rituales de luna llena y ciclos lunares. Juntas. Con presencia.' },
  { title: 'Integrás', text: 'Lo llevás a tu vida real. Paso a paso, con acompañamiento de verdad.' },
] as const

const GALLERY = [
  { src: homeImages.circuloMosaic[0], alt: 'Mujeres del Círculo juntas' },
  { src: homeImages.circuloMosaic[1], alt: 'Ritual lunar grupal' },
  { src: homeImages.circuloMosaic[2], alt: 'Ritual de apertura' },
  { src: homeImages.circuloMosaic[3], alt: 'Lectura colectiva' },
] as const

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

function BtnCirculo() {
  const ref = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const btn = ref.current
    if (!btn) return

    const onMove = (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.03)`
    }
    const onLeave = () => {
      btn.style.transform = ''
    }

    btn.addEventListener('mousemove', onMove)
    btn.addEventListener('mouseleave', onLeave)
    return () => {
      btn.removeEventListener('mousemove', onMove)
      btn.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <Link ref={ref} href="#contacto" className="btn-circulo">
      Unite al círculo
      <span className="star" aria-hidden>
        ✦
      </span>
    </Link>
  )
}

export function ElaraToolsSection() {
  const onRipple = useToolCardRipple()

  return (
    <section className="elara-tools elara-section scroll-mt-[5.5rem]" id="herramientas">
      <ElaraSectionBridge position="top" />

      <motion.div
        className="mb-8 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <p className="mb-3 text-[10px] tracking-[0.4em] text-[var(--gold)] uppercase">✦ Herramientas de alma</p>
        <p className="tools-label !mb-0">De verdad.</p>
      </motion.div>

      <div className="tools-layout elara-section__content mx-auto max-w-6xl px-6">
        <div className="elara-gallery">
          <div className="grid min-h-[280px] grid-cols-2 gap-3 md:min-h-[420px]">
            <div className="relative col-span-2 row-span-2 min-h-[200px] overflow-hidden rounded-2xl md:col-span-1 md:row-span-2">
              <SectionCoverImage src={GALLERY[0].src} alt={GALLERY[0].alt} sizes="(max-width: 768px) 100vw, 40vw" />
            </div>
            {GALLERY.slice(1).map(({ src, alt }) => (
              <div key={src} className="relative min-h-[120px] overflow-hidden rounded-2xl">
                <SectionCoverImage src={src} alt={alt} sizes="25vw" />
              </div>
            ))}
          </div>
        </div>

        <div className="tools-content">
          <div className="cajones-grid">
            {CAJONES.map((cajon) => (
              <a
                key={cajon.id}
                href={cajon.href}
                className="tool-card"
                data-tool={cajon.id}
                onClick={onRipple}
              >
                <span className="tool-icon" aria-hidden />
                <h4 className="tool-title">{cajon.title}</h4>
                <p>{cajon.text}</p>
                <span className="tool-arrow" aria-hidden>
                  →
                </span>
              </a>
            ))}
          </div>

          <div className="ritual-timeline">
            {RITUAL_STEPS.map((step) => (
              <div key={step.title} className="ritual-step">
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            ))}
          </div>

          <BtnCirculo />
        </div>
      </div>

      <ElaraSectionBridge position="bottom" />
    </section>
  )
}
