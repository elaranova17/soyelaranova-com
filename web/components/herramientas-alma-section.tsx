'use client'

import { motion } from 'framer-motion'
import { ElaraIcon, type ElaraIconName } from '@/components/elara-icon'
import { ElaraMediaCard } from '@/components/elara-media'
import { ElaraSectionBridge } from '@/components/elara-framed-image'
import { useElaraCajonReveal } from '@/hooks/use-elara-cajon-reveal'
import { homeImages } from '@/lib/home-images'
import type { MediaRef } from '@/lib/media'

type ToolVariant = 'herramienta' | 'oraculo' | 'recurso'

type HerramientaItem = {
  media: MediaRef
  icon: ElaraIconName
  title: string
  text: string
  tag: string
  variant: ToolVariant
}

const HERRAMIENTAS: readonly HerramientaItem[] = [
  {
    media: homeImages.herramientas[0],
    icon: 'Planetas',
    title: 'Carta Natal',
    text: 'Tu mapa al nacer. Ahí están tus dones, tus sombras y el hilo que los conecta.',
    tag: 'Astrología',
    variant: 'herramienta',
  },
  {
    media: homeImages.herramientas[1],
    icon: 'Luna',
    title: 'Ciclos Lunares',
    text: 'La luna no espera. Aprendé a moverte con ella — no contra vos misma.',
    tag: 'Luna',
    variant: 'herramienta',
  },
  {
    media: homeImages.herramientas[2],
    icon: 'Oraculo',
    title: 'Oráculo & Mensajes',
    text: 'No es adivinación. Es aprender a escucharte a través del símbolo.',
    tag: 'Oráculo',
    variant: 'oraculo',
  },
  {
    media: homeImages.herramientas[3],
    icon: 'Vision',
    title: 'Energía & Chakras',
    text: 'Tu cuerpo habla antes que tu mente. Aprendé a leerlo sin complicarte.',
    tag: 'Energía',
    variant: 'herramienta',
  },
  {
    media: homeImages.herramientas[4],
    icon: 'Estrellas',
    title: 'Rituales de Intención',
    text: 'Un gesto consciente puede cambiar más que mil pensamientos. Empezá simple.',
    tag: 'Rituales',
    variant: 'recurso',
  },
  {
    media: homeImages.herramientas[5],
    icon: 'Guia',
    title: 'Tu Propósito',
    text: 'No es una fórmula. Es la pregunta que vas respondiendo con honestidad.',
    tag: 'Propósito',
    variant: 'recurso',
  },
  {
    media: homeImages.herramientas[6],
    icon: 'Corazon',
    title: 'Sinastría & Vínculos',
    text: 'Tus relaciones también tienen un mapa. Leerlo es entenderte más a vos.',
    tag: 'Vínculos',
    variant: 'herramienta',
  },
  {
    media: homeImages.herramientas[7],
    icon: 'Calendario',
    title: 'Calendario Lunar',
    text: 'Cada fase tiene su energía. Seguirla es inteligencia — no casualidad.',
    tag: 'Calendario',
    variant: 'recurso',
  },
  {
    media: homeImages.herramientas[8],
    icon: 'Energia',
    title: 'Cristales & Energía',
    text: 'Piezas que sostienen tu proceso. Sin misticismos innecesarios, con intención real.',
    tag: 'Cristales',
    variant: 'recurso',
  },
] as const

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
}

function toolHref(variant: ToolVariant): string {
  return variant === 'oraculo' ? '#oraculo' : '#contacto'
}

function HerramientaCajon({ item, index }: { item: HerramientaItem; index: number }) {
  const { ref, revealed } = useElaraCajonReveal(index)
  const variantClass =
    item.variant === 'oraculo'
      ? 'herramienta-cajon--oraculo'
      : item.variant === 'recurso'
        ? 'herramienta-cajon--recurso'
        : ''

  return (
    <a
      ref={ref}
      href={toolHref(item.variant)}
      data-elara-reveal="cajon"
      data-reveal-delay={index * 80}
      className={[
        'herramienta-cajon group elara-card',
        variantClass,
        revealed ? 'is-revealed' : 'opacity-0',
      ].join(' ')}
    >
      <div className="herramienta-cajon__visual">
        <ElaraMediaCard
          media={item.media}
          alt={item.title}
          veil="card"
          aspect="card"
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
          frameClassName="aspect-[16/10] min-h-0 w-full rounded-none"
        />
      </div>
      <div className="herramienta-cajon__body">
        <div className="herramienta-cajon__head">
          <ElaraIcon name={item.icon} size="md" />
          <span className="herramienta-cajon__tag">{item.tag}</span>
        </div>
        <h3 className="herramienta-cajon__title">{item.title}</h3>
        <p className="herramienta-cajon__text">{item.text}</p>
        <span className="herramienta-cajon__cta btn-explorar">
          <span className="btn-explorar__label">Explorar</span>
          <span className="herramienta-cajon__arrow btn-arrow__icon" aria-hidden>
            →
          </span>
        </span>
      </div>
    </a>
  )
}

/** Grilla Pixar · 9 herramientas (portal explorar) */
export function HerramientasExplorarSection() {
  return (
    <section
      id="explorar-herramientas"
      className="sec-herramientas elara-section relative overflow-hidden px-6 pb-24 pt-20 scroll-mt-[5.5rem]"
    >
      <ElaraSectionBridge position="top" />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/35 to-transparent"
      />

      <div className="elara-section__content mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-12 text-center md:mb-16"
        >
          <p className="sec-herramientas__eyebrow mb-4 text-[10px] tracking-[0.4em] uppercase">
            ✦ Portal de herramientas
          </p>
          <h2 className="sec-herramientas__title font-display text-[2.4rem] leading-[1.06] tracking-tight md:text-[3.2rem] lg:text-[3.6rem]">
            Lo que siempre fuiste
            <br />
            <em className="font-serif-italic font-light text-[var(--color-pale-lav)]/90 italic">capaz de hacer.</em>
          </h2>
          <p className="sec-herramientas__lead font-serif-italic mx-auto mt-5 max-w-lg text-lg leading-relaxed italic">
            Nueve formas de volverte a encontrar. Sin afán, sin drama. Con precisión.
          </p>
        </motion.div>

        <div className="herramientas-grid">
          {HERRAMIENTAS.map((item, index) => (
            <HerramientaCajon key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
