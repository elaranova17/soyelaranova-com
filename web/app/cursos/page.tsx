import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cursos',
  description: 'Cursos, experiencias y recursos digitales en preparacion dentro del universo Elara Nova.',
}

const courses = [
  {
    title: 'Cursos de autoconocimiento',
    text: 'Experiencias cortas para volver a ti sin convertir el bienestar en otra lista de pendientes.',
    image: '/images/elara-cursos.png',
  },
  {
    title: 'Rituales guiados',
    text: 'Audios, ejercicios y plantillas para acompanar semanas concretas del Ciclo Nova.',
    image: '/images/elara-meditando.png',
  },
  {
    title: 'Herramientas digitales',
    text: 'Recursos descargables para journaling, oraculo, planificacion suave y seguimiento personal.',
    image: '/images/elara-aprendiendo.png',
  },
] as const

export default function CursosPage() {
  return (
    <main className="min-h-screen bg-[var(--editorial-smoke)] px-5 pt-28 pb-20 text-[var(--editorial-ink)] md:px-8 lg:px-12">
      <section className="mx-auto max-w-7xl">
        <p className="text-[0.68rem] font-black tracking-[0.26em] text-[var(--editorial-gold)] uppercase">
          Cursos · Elara Nova
        </p>
        <h1 className="mt-5 max-w-4xl font-display text-[3.2rem] leading-[0.94] md:text-[5.8rem]">
          La escuela futura de Elara empieza aqui.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--editorial-cacao)]">
          Esta linea reunira cursos, experiencias, audios y herramientas. Por ahora queda organizada para crecer sin perder el tono editorial.
        </p>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {courses.map((course) => (
            <article key={course.title} className="overflow-hidden rounded-[18px] border border-[var(--editorial-stone)] bg-[var(--editorial-ivory)]">
              <div className="relative aspect-[4/3]">
                <Image src={course.image} alt="" fill sizes="(max-width: 1024px) 92vw, 30vw" className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="font-display text-3xl leading-none text-[var(--editorial-plum)]">{course.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--editorial-cacao)]">{course.text}</p>
              </div>
            </article>
          ))}
        </div>

        <Link
          href="/#productos"
          className="mt-10 inline-flex min-h-12 items-center rounded-full border border-[var(--editorial-plum)]/25 px-6 text-[0.78rem] font-black tracking-[0.2em] text-[var(--editorial-plum)] uppercase"
        >
          Ver productos actuales
        </Link>
      </section>
    </main>
  )
}
