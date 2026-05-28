'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ElaraGenerateSlot } from '@/components/elara-generate-slot'
import { ElaraSectionBridge } from '@/components/elara-framed-image'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { homeImages } from '@/lib/home-images'
import { mediaImageSrc } from '@/lib/media-src'
import type { MediaRef } from '@/lib/media'

type ProductoItem = {
  media: MediaRef
  title: string
  desc: string
  specs: readonly string[]
  price: string
  cta: string
  href: string
  target?: string
  rel?: string
}

const PRODUCTOS: readonly ProductoItem[] = [
  {
    media: homeImages.productos[4],
    title: 'Planificador Lunar',
    desc: 'Organizá tu mes con las fases lunares. PDF descargable, imprimible, tuyo.',
    specs: ['PDF descargable', '45 páginas', 'Ritual incluido'],
    price: '$27 USD',
    cta: 'Agregar al ritual',
    href: '#contacto',
  },
  {
    media: homeImages.productos[1],
    title: 'Ciclo Nova del Regreso',
    desc: 'Ebook de retorno personal. Rituales suaves para volver a vos después de lo que sea.',
    specs: ['PDF interactivo', '28 páginas', 'Para imprimir'],
    price: '$17 USD',
    cta: 'Agregar al ritual',
    href: '/universo',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    media: homeImages.productos[0],
    title: 'Astrología Práctica',
    desc: 'Tu carta natal desglosada paso a paso. Sin tecnicismos, con ejercicios reales.',
    specs: ['PDF', '120 páginas', 'Ejercicios'],
    price: '$37 USD',
    cta: 'Agregar al ritual',
    href: '#contacto',
  },
  {
    media: homeImages.productos[3],
    title: 'Kit de Rituales',
    desc: 'Piezas y prácticas para crear espacios de intención en casa. Con guía incluida.',
    specs: ['PDF', '60 páginas', 'Audio incluido'],
    price: '$22 USD',
    cta: 'Agregar al ritual',
    href: '#contacto',
  },
  {
    media: homeImages.productos[2],
    title: 'Oráculo Intuitivo',
    desc: 'Un método propio para leer el oráculo. Sin memorizar. Con intuición activa.',
    specs: ['Pack digital', 'Guía + prácticas', 'A tu ritmo'],
    price: '$12 USD',
    cta: 'Agregar al ritual',
    href: '#contacto',
  },
] as const

function ProductoImagen({ media, alt }: { media: MediaRef; alt: string }) {
  if (media.type === 'generate') {
    return (
      <div className="producto-imagen relative min-h-[160px]">
        <ElaraGenerateSlot id={media.id} label={media.label} aspect="cover" />
      </div>
    )
  }

  const src = mediaImageSrc(media)
  if (!src) return null

  return (
    <div className="producto-imagen relative min-h-[160px]">
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 200px" />
    </div>
  )
}

function ProductoCard({ producto, index }: { producto: ProductoItem; index: number }) {
  const { setRef, style } = useScrollReveal<HTMLAnchorElement>({ index, staggerMs: 100, translateX: -20 })

  return (
    <Link
      href={producto.href}
      target={producto.target}
      rel={producto.rel}
      ref={setRef}
      className="producto-card"
      style={style}
    >
      <ProductoImagen media={producto.media} alt={producto.title} />
      <div className="producto-content">
        <h3 className="producto-titulo">{producto.title}</h3>
        <div className="producto-specs">
          {producto.specs.map((spec) => (
            <span key={spec} className="producto-spec">
              {spec}
            </span>
          ))}
        </div>
        <p className="producto-desc">{producto.desc}</p>
        <div className="producto-footer">
          <span className="producto-precio">{producto.price}</span>
          <span className="producto-btn">{producto.cta} →</span>
        </div>
      </div>
    </Link>
  )
}

export function ElaraProductosSection() {
  return (
    <section className="elara-productos elara-section scroll-mt-[5.5rem]" id="productos">
      <ElaraSectionBridge position="top" />

      <div className="section-header elara-section__content mx-auto max-w-6xl px-6">
        <p className="section-label">✦ Artefactos digitales</p>
        <h2 className="section-title">Lo que Elara creó para vos</h2>
      </div>

      <div className="productos-grid elara-section__content mx-auto max-w-[900px] px-6">
        {PRODUCTOS.map((producto, index) => (
          <ProductoCard key={producto.title} producto={producto} index={index} />
        ))}
      </div>

      <ElaraSectionBridge position="bottom" />
    </section>
  )
}
