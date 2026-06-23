import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { TrackedLink } from '@/components/tracked-link'
import { getStudioService, studioServices } from '@/lib/studio-services'

type ServiceDetailPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return studioServices.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getStudioService(slug)

  if (!service) {
    return {
      title: 'Servicio no encontrado',
    }
  }

  return {
    title: service.shortTitle,
    description: service.summary,
  }
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params
  const service = getStudioService(slug)

  if (!service) notFound()

  return (
    <main className="min-h-screen bg-[var(--studio-ink)] text-[var(--studio-paper)]">
      <section className="relative overflow-hidden px-5 pt-32 pb-20 md:px-8 lg:px-12">
        <div className="pointer-events-none absolute inset-0 -z-0" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(200,162,74,0.16),transparent_32%),radial-gradient(circle_at_78%_26%,rgba(91,95,232,0.16),transparent_36%)]" />
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(247,242,234,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(247,242,234,0.7)_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_24rem] lg:items-end">
          <div>
            <Link
              href="/servicios"
              className="text-[0.68rem] font-black tracking-[0.26em] text-[var(--studio-gold)] uppercase hover:text-[var(--studio-paper)]"
            >
              ← Servicios
            </Link>
            <p className="mt-12 text-[0.7rem] font-black tracking-[0.34em] text-[var(--studio-gold)] uppercase">
              {service.eyebrow}
            </p>
            <h1 className="mt-4 max-w-5xl font-display text-[3.1rem] leading-[0.98] md:text-[5.6rem]">
              {service.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--studio-paper)]/70">
              {service.promise}
            </p>
          </div>

          <aside className="rounded-[12px] border border-[var(--studio-gold)]/24 bg-[var(--studio-paper)]/[0.06] p-6 backdrop-blur-xl">
            <p className="text-[0.64rem] font-black tracking-[0.28em] text-[var(--studio-gold)] uppercase">
              Entregable base
            </p>
            <p className="mt-4 text-base font-bold leading-7 text-[var(--studio-paper)]/86">
              {service.deliverable}
            </p>
            <TrackedLink
              href="/descubrimiento"
              tracking={{
                event: 'cta_click',
                category: 'lead',
                label: 'service_detail_top',
                service: service.slug,
              }}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-[10px] bg-[var(--studio-gold)] px-5 py-3 text-center text-[0.74rem] font-black tracking-[0.2em] text-[var(--studio-ink)] uppercase"
            >
              Cotizar este servicio
            </TrackedLink>
          </aside>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">
          <InfoBlock title="Ideal para" items={service.idealFor} />
          <InfoBlock title="Incluye" items={service.includes} />
          <InfoBlock title="Proceso" items={service.process} ordered />
        </div>
      </section>

      <section className="bg-[var(--studio-paper)] px-5 py-20 text-[var(--studio-text)] md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-[0.68rem] font-black tracking-[0.34em] text-[var(--studio-indigo)] uppercase">
              Preguntas
            </p>
            <h2 className="font-display text-[2.45rem] leading-[1.02] md:text-[3.7rem]">
              Antes de invertir, despejemos lo importante.
            </h2>
          </div>
          <div className="grid gap-3">
            {service.faq.map((item) => (
              <article
                key={item.question}
                className="rounded-[10px] border border-[var(--studio-text)]/10 bg-white/65 p-5 shadow-[0_16px_38px_rgba(11,16,32,0.06)]"
              >
                <h3 className="text-lg font-black">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--studio-text)]/68">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-[14px] border border-[var(--studio-gold)]/25 bg-[var(--studio-paper)]/[0.06] p-7 text-center backdrop-blur-xl md:p-12">
          <p className="mb-4 text-[0.68rem] font-black tracking-[0.34em] text-[var(--studio-gold)] uppercase">
            Siguiente paso
          </p>
          <h2 className="font-display text-[2.45rem] leading-[1.02] md:text-[3.8rem]">
            Cuéntame que quieres resolver.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--studio-paper)]/68">
            No necesitas llegar con el alcance perfecto. Con una idea, un problema o una meta comercial ya podemos ordenar el camino.
          </p>
          <TrackedLink
            href="/descubrimiento"
            tracking={{
              event: 'cta_click',
              category: 'lead',
              label: 'service_detail_bottom',
              service: service.slug,
            }}
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-[10px] bg-[var(--studio-gold)] px-6 py-3 text-[0.78rem] font-black tracking-[0.22em] text-[var(--studio-ink)] uppercase"
          >
            Pedir diagnostico
          </TrackedLink>
        </div>
      </section>

      <footer className="px-5 pb-10 text-sm text-[var(--studio-paper)]/48 md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl justify-center gap-4 border-t border-[var(--studio-paper)]/10 pt-6">
          <Link href="/legal" className="hover:text-[var(--studio-gold)]">Privacidad y terminos</Link>
          <Link href="/servicios" className="hover:text-[var(--studio-gold)]">Todos los servicios</Link>
        </div>
      </footer>
    </main>
  )
}

function InfoBlock({
  title,
  items,
  ordered = false,
}: {
  title: string
  items: readonly string[]
  ordered?: boolean
}) {
  const List = ordered ? 'ol' : 'ul'

  return (
    <article className="rounded-[12px] border border-[var(--studio-paper)]/10 bg-[var(--studio-paper)]/[0.045] p-6">
      <h2 className="font-display text-3xl">{title}</h2>
      <List className="mt-6 space-y-4">
        {items.map((item, index) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-[var(--studio-paper)]/68">
            <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[var(--studio-gold)]/45 text-[0.68rem] font-black text-[var(--studio-gold)]">
              {ordered ? index + 1 : '•'}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </List>
    </article>
  )
}
