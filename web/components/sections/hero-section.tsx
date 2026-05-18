'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { siteImages } from '@/lib/site-images'

type HeroBadge = {
  label: string
  sub: string
}

const HERO_BADGES: readonly HeroBadge[] = [
  { label: 'Hecho con alma', sub: 'Cada pieza nace con cuidado real.' },
  { label: 'Para vos', sub: 'No es contenido genérico. Es tuyo.' },
  {
    label: 'Lo que necesitás',
    sub: 'Herramientas que realmente funcionan.',
  },
] as const

function HeroImageColumn() {
  return (
    <div className="relative grid h-[580px] grid-cols-2 grid-rows-2 gap-3">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative row-span-2 overflow-hidden rounded-2xl"
      >
        <Image
          src={siteImages.sobre.elara}
          alt="Elara Nova"
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 50vw, 25vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0010]/60 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-2xl"
      >
        <Image
          src={siteImages.sobre.escribiendo}
          alt="Elara escribiendo"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 50vw, 12vw"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-2xl"
      >
        <Image
          src={siteImages.circulo.juntas}
          alt="Círculo"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 50vw, 12vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F3D]/80 to-transparent" />
        <p className="absolute bottom-3 left-3 text-[9px] tracking-[0.2em] text-[var(--color-gold-soft)] uppercase">
          El Círculo →
        </p>
      </motion.div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="section-fade-edge relative min-h-screen bg-[#06040d] px-6 py-24 md:px-16">
      <div
        className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-[#7c3aed]/15 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm tracking-[0.3em] text-[#C9A84C] uppercase">
            ✦ Tu universo ✦
          </p>
          <h1 className="mb-6 font-serif text-5xl leading-[1.05] font-bold text-[#f0eafa] md:text-7xl">
            para crear la vida que sueñas.
          </h1>
          <p className="mb-8 max-w-md text-lg text-[#9080b0]">
            Rituales, guía y herramientas para mujeres que están volviendo a sí
            mismas. Esto se creó para vos.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#descubre-tu-camino"
              className="inline-flex items-center rounded-full bg-[#7c3aed] px-8 py-3.5 text-sm font-semibold tracking-wide text-white uppercase"
            >
              Descubre tu camino →
            </Link>
            <Link
              href="#herramientas-astrales"
              className="inline-flex items-center rounded-full border border-[#C9A84C]/60 px-8 py-3.5 text-sm tracking-wide text-[#C9A84C] uppercase"
            >
              Explora herramientas
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3">
            {HERO_BADGES.map((badge) => (
              <div
                key={badge.label}
                className="rounded-xl border border-[var(--color-gold)]/20 bg-[var(--color-purple-night)]/50 px-4 py-3 backdrop-blur-sm"
              >
                <p className="mb-1 font-sans text-[10px] tracking-[0.15em] text-[var(--color-gold-soft)] uppercase">
                  ✦ {badge.label}
                </p>
                <p className="font-serif text-[11px] leading-relaxed text-[var(--color-cream)] italic opacity-75">
                  {badge.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        <HeroImageColumn />
      </div>
    </section>
  )
}
