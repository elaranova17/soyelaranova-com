'use client'

import { useState } from 'react'
import Image from 'next/image'
import { siteImages } from '@/lib/site-images'

type DigitalProduct = {
  id: string
  title: string
  price: number
  imageSrc: string | null
  tab: string
}

const TABS = ['Destacados', 'Ebooks', 'Journals', 'Plantillas', 'Wallpapers', 'Kits'] as const
type Tab = typeof TABS[number]

const DIGITAL_PRODUCTS: readonly DigitalProduct[] = [
  { id: 'guia',          title: 'Guía para Manifestar',    price: 12, imageSrc: null,                          tab: 'Ebooks' },
  { id: 'diario',        title: 'Diario de la Abundancia', price: 18, imageSrc: null,                          tab: 'Journals' },
  { id: 'planificador',  title: 'Planificador Lunar',       price: 9,  imageSrc: siteImages.tienda.planificadorLunar, tab: 'Plantillas' },
  { id: 'kit',           title: 'Kit de Rituales',          price: 20, imageSrc: siteImages.tienda.kitRituales, tab: 'Kits' },
  { id: 'luna',          title: 'Colección Luna',           price: 6,  imageSrc: null,                          tab: 'Wallpapers' },
] as const

function ProductCard({ product }: { product: DigitalProduct }) {
  return (
    <article className="overflow-hidden rounded-xl border border-[#2d1f4e] bg-[#1a0f2e]">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#110d24]">
        {product.imageSrc ? (
          <Image
            src={product.imageSrc}
            alt={product.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 20vw, 240px"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[#2d1f4e]/40">
            <span className="text-xs text-[#C9A84C]/40">Próximamente</span>
          </div>
        )}
        <div className="absolute inset-0 bg-[#0d0920]/15" />
      </div>
      <div className="p-4">
        <p className="mb-1 text-sm font-medium text-[#e8e0f0]">{product.title}</p>
        <p className="font-bold text-[#C9A84C]">${product.price} USD</p>
      </div>
    </article>
  )
}

export function RecursosDigitalesSection() {
  const [activeTab, setActiveTab] = useState<Tab>('Destacados')

  const filtered = activeTab === 'Destacados'
    ? DIGITAL_PRODUCTS
    : DIGITAL_PRODUCTS.filter((p) => p.tab === activeTab)

  return (
    <section
      id="recursos-digitales"
      className="bg-[#0d0920] px-6 py-20 md:px-16"
      aria-labelledby="recursos-digitales-heading"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-3 text-xs tracking-widest text-[#C9A84C] uppercase">
          05 · Recursos Digitales
        </p>
        <h2
          id="recursos-digitales-heading"
          className="mb-8 font-serif text-4xl font-bold text-[#e8e0f0]"
        >
          Recursos que inspiran, guían y transforman.
        </h2>

        <div className="mb-8 flex flex-wrap gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                activeTab === tab
                  ? 'bg-[#7c3aed] text-white'
                  : 'border border-[#2d1f4e] text-[#9080b0] hover:border-[#7c3aed]/50 hover:text-[#C9A84C]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {filtered.length > 0 ? (
            filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="col-span-full py-12 text-center text-sm text-[#9080b0]">
              Próximamente en esta categoría.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
