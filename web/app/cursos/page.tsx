import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cursos',
  description: 'Cursos, experiencias y recursos digitales en preparacion dentro del universo Elara Nova.',
}

const courses = [
  {
    impact: 'Autoconocimiento',
    script: 'sin prisa',
    text: 'Experiencias cortas para volver a ti sin convertir el bienestar en otra lista de pendientes.',
    image: '/images/elara-aprendiendo.png',
  },
  {
    impact: 'Rituales',
    script: 'guiados',
    text: 'Audios, ejercicios y plantillas para acompanar semanas concretas del Ciclo Nova.',
    image: '/images/ciclos-lunares-rituales.png',
  },
  {
    impact: 'Herramientas',
    script: 'digitales',
    text: 'Recursos descargables para journaling, oraculo, planificacion suave y seguimiento personal.',
    image: '/images/elara-cursos.png',
  },
] as const

export default function CursosPage() {
  return (
    <main className="min-h-screen bg-[var(--editorial-smoke)] px-5 pt-28 pb-20 text-[var(--editorial-ink)] md:px-8 lg:px-12">
      <section className="mx-auto max-w-7xl">
        <p className="home-eyebrow">
          <span aria-hidden="true" />
          Cursos · Elara Nova
        </p>
        <h1 className="type-lockup type-lockup--glow-soft page-lockup page-lockup--wide mt-5">
          <span className="type-lockup__impact">La escuela</span>
          <em className="type-lockup__script">futura de Elara</em>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--editorial-cacao)]">
          Esta linea reunira cursos, experiencias, audios y herramientas. Por ahora queda organizada
          para crecer sin perder el tono editorial.
        </p>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.impact}
              className="overflow-hidden rounded-[18px] border border-[var(--editorial-stone)] bg-[var(--editorial-ivory)]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={course.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 92vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="type-lockup type-lockup--glow-soft type-lockup--sm text-[clamp(1.7rem,2.6vw,2.2rem)]">
                  <span className="type-lockup__impact">{course.impact}</span>
                  <em className="type-lockup__script">{course.script}</em>
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--editorial-cacao)]">{course.text}</p>
              </div>
            </article>
          ))}
        </div>

        <Link href="/#recursos" className="home-button home-button--quiet mt-10">
          Ver recursos
        </Link>
      </section>
    </main>
  )
}
