import Image from 'next/image'
import Link from 'next/link'
import { siteImages } from '@/lib/site-images'

type LecturaStep = {
  id: string
  number: number
  title: string
  description: string
}

const LECTURA_STEPS: readonly LecturaStep[] = [
  {
    id: 'pregunta',
    number: 1,
    title: 'Haz tu pregunta',
    description: 'Cuéntanos tu duda o situación.',
  },
  {
    id: 'lectura',
    number: 2,
    title: 'Realizamos tu lectura',
    description:
      'Con intención y conexión, nuestro equipo trabaja para vos.',
  },
  {
    id: 'respuesta',
    number: 3,
    title: 'Recibí tu lectura',
    description: 'Te enviamos un PDF con tu mensaje.',
  },
] as const

const PRICE_BULLETS: readonly string[] = [
  '1 pregunta específica',
  'Lectura profunda y clara',
  'Respuesta en 24h hábiles',
] as const

function LecturaStepsList() {
  return (
    <ol className="mt-8 space-y-5">
      {LECTURA_STEPS.map((step) => (
        <li key={step.id} className="flex gap-4">
          <span
            className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center text-sm font-bold text-[#C9A84C]"
            aria-hidden
          >
            {step.number}
          </span>
          <p className="text-sm leading-relaxed text-[#9080b0]">
            <span className="font-semibold text-[#e8e0f0]">{step.title}</span>
            {' — '}
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  )
}

function PriceCard() {
  return (
    <div className="mt-8 rounded-2xl border border-[#2d1f4e] bg-[#1a0f2e] p-6">
      <p className="text-3xl font-bold tracking-tight text-[#e8e0f0]">
        $24{' '}
        <span className="text-lg font-normal text-[#9080b0]">USD</span>
      </p>
      <p className="mt-3 text-sm leading-relaxed text-[#9080b0]">
        · {PRICE_BULLETS.join(' · ')}
      </p>
    </div>
  )
}

function ImagePlaceholder() {
  return (
    <div className="relative min-h-[400px] overflow-hidden rounded-2xl">
      <Image
        src={siteImages.tarot.seccion}
        alt="Lecturas de tarot personalizadas — Elara Nova"
        fill
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-[#0a0612]/20" />
    </div>
  )
}

export function LecturasTarotSection() {
  return (
    <section
      id="lecturas-tarot"
      className="bg-[#0a0612] px-6 py-20 md:px-16"
      aria-labelledby="lecturas-tarot-heading"
    >
      <div className="mx-auto grid max-w-7xl items-stretch gap-12 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="mb-3 text-xs tracking-widest text-[#C9A84C] uppercase">
            03 · Tarot
          </p>
          <h2
            id="lecturas-tarot-heading"
            className="font-serif text-4xl font-bold text-[#e8e0f0]"
          >
            Haz tu pregunta. Recibe tu respuesta.
          </h2>
          <p className="mt-3 text-[#9080b0]">
            Lectura personalizada en máximo 24 horas hábiles.
          </p>

          <LecturaStepsList />
          <PriceCard />

          <Link
            href="/lecturas"
            className="mt-8 inline-flex w-fit items-center rounded-full bg-[#7c3aed] px-8 py-3 text-xs font-semibold tracking-widest text-white uppercase"
          >
            Hacer mi pregunta →
          </Link>
        </div>

        <ImagePlaceholder />
      </div>
    </section>
  )
}
