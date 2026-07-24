import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { DiscoveryForm } from '@/components/discovery-form'
import { TrackedLink } from '@/components/tracked-link'

export const metadata: Metadata = {
  title: 'Automatiza tu negocio',
  description:
    'Automatizaciones para negocios pequeños: formularios, emails, WhatsApp y CRM conectados. Menos trabajo manual, cero clientes perdidos. Diagnóstico gratis.',
  robots: { index: false, follow: false },
}

const dolores = [
  {
    dolor: 'Respondés lo mismo mil veces',
    solucion:
      'Emails y WhatsApp automáticos que contestan al instante con tu voz — cada lead recibe respuesta aunque estés dormida.',
  },
  {
    dolor: 'Los datos viven regados por todos lados',
    solucion:
      'Formularios, hojas y CRM conectados: cada cliente entra una sola vez y aparece donde lo necesitás.',
  },
  {
    dolor: 'Se te escapan clientes por no hacer seguimiento',
    solucion:
      'Recordatorios y seguimientos automáticos — nadie se queda sin respuesta, nada se pierde en el camino.',
  },
] as const

const pasos = [
  ['01', 'Diagnóstico gratis', 'Me contás cómo trabajás hoy. 20 minutos, sin compromiso.'],
  ['02', 'Propuesta cerrada', 'Te digo exactamente qué automatizar primero, con precio fijo antes de empezar.'],
  ['03', 'Sistema andando', 'Lo construyo, lo probamos juntas y te lo dejo funcionando solo.'],
] as const

const faq = [
  [
    '¿Qué se puede automatizar exactamente?',
    'Formularios que llegan a tu CRM, respuestas de email y WhatsApp, recordatorios de cita, facturas, reportes en hojas de cálculo, avisos internos… si lo hacés a mano cada semana, casi seguro se puede automatizar.',
  ],
  [
    '¿Cuánto tarda?',
    'La mayoría de automatizaciones quedan andando entre 1 y 3 semanas, según la cantidad de procesos.',
  ],
  [
    '¿Necesito tener página web?',
    'No. Muchas automatizaciones funcionan con lo que ya usás: WhatsApp, Gmail, hojas de cálculo, tu CRM actual.',
  ],
  [
    '¿Qué pasa después del diagnóstico?',
    'Te mando una propuesta con lo que automatizaría primero y su precio cerrado. Si te sirve, arrancamos. Si no, te quedás con el diagnóstico gratis.',
  ],
] as const

export default function LpAutomatizaciones() {
  return (
    <main className="min-h-screen bg-[var(--editorial-smoke)] text-[var(--editorial-ink)]">
      {/* mini-header: solo marca, sin navegación */}
      <header className="flex items-center justify-between px-5 pt-6 md:px-10">
        <Link href="/" className="font-display text-xl italic">
          Elara Nova
        </Link>
        <TrackedLink
          href="#diagnostico"
          tracking={{ event: 'cta_click', category: 'lead', label: 'lp_auto_header' }}
          className="rounded-full bg-[var(--editorial-plum)] px-5 py-2.5 text-[0.7rem] font-black tracking-[0.18em] text-[var(--editorial-ivory)] uppercase"
        >
          Diagnóstico gratis
        </TrackedLink>
      </header>

      {/* HERO */}
      <section className="px-5 pt-14 pb-16 md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-[0.68rem] font-black tracking-[0.28em] text-[var(--editorial-gold)] uppercase">
              Automatización para negocios pequeños
            </p>
            <h1 className="mt-5 font-display text-[2.9rem] leading-[1.0] md:text-[4.6rem]">
              Automatizá tu negocio: menos trabajo manual, <em className="text-[var(--editorial-plum)]">cero clientes perdidos.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--editorial-cacao)]">
              Si todavía respondés cada mensaje, copiás datos a mano y perseguís clientes uno por
              uno, tu negocio depende de que vos no te enfermes nunca. Eso se arregla.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <TrackedLink
                href="#diagnostico"
                tracking={{ event: 'cta_click', category: 'lead', label: 'lp_auto_hero' }}
                className="inline-flex min-h-12 items-center rounded-full bg-[var(--editorial-plum)] px-7 text-[0.78rem] font-black tracking-[0.18em] text-[var(--editorial-ivory)] uppercase"
              >
                Pedir mi diagnóstico gratis
              </TrackedLink>
              <span className="text-sm text-[var(--editorial-cacao)]">20 min · sin compromiso</span>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] border border-[var(--editorial-stone)]">
            <Image
              src="/_assets/photos/evelyn_pro_hero.jpg"
              alt="Evelyn Patiño, ingeniera de software, automatizando un negocio"
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 40rem"
              className="object-cover object-[58%_22%]"
            />
          </div>
        </div>
      </section>

      {/* DOLORES → SOLUCIONES */}
      <section className="bg-[var(--editorial-ivory)] px-5 py-16 md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-2xl font-display text-3xl md:text-5xl">
            ¿Te suena alguna de estas?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {dolores.map(({ dolor, solucion }) => (
              <article key={dolor} className="rounded-[14px] border border-[var(--editorial-stone)] bg-[var(--editorial-smoke)] p-6">
                <h3 className="font-display text-xl text-[var(--editorial-plum)]">{dolor}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--editorial-cacao)]">{solucion}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="px-5 py-16 md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-3xl md:text-5xl">Así de simple.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pasos.map(([n, titulo, texto]) => (
              <div key={n} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--editorial-gold)] font-display text-[var(--editorial-gold)]">
                  {n}
                </span>
                <div>
                  <h3 className="font-display text-lg">{titulo}</h3>
                  <p className="mt-1.5 text-sm leading-7 text-[var(--editorial-cacao)]">{texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRUEBA + PRECIO */}
      <section className="bg-[var(--editorial-aubergine)] px-5 py-16 text-[var(--editorial-ivory)] md:px-10 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[0.68rem] font-black tracking-[0.28em] text-[var(--editorial-gold)] uppercase">
              Caso real
            </p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              val-débarras: pedidos que llegan solos, cada día.
            </h2>
            <p className="mt-5 max-w-xl leading-8 text-[var(--editorial-lavender)]">
              Para esta empresa suiza construí el sistema completo: formularios que capturan cada
              solicitud, seguimiento automático y campañas conectadas. No una página bonita — un
              sistema que genera pedidos reales sin trabajo manual.
            </p>
          </div>
          <div className="h-fit rounded-[14px] border border-[var(--editorial-gold)]/30 bg-white/[0.04] p-7">
            <p className="text-[0.68rem] font-black tracking-[0.28em] text-[var(--editorial-gold)] uppercase">
              Inversión
            </p>
            <p className="mt-3 font-display text-4xl">Desde 450 €</p>
            <ul className="mt-5 space-y-2.5 text-sm leading-7 text-[var(--editorial-lavender)]">
              <li>✦ Precio cerrado antes de empezar — sin sorpresas</li>
              <li>✦ Funciona con las herramientas que ya usás</li>
              <li>✦ Te lo dejo andando y te enseño a manejarlo</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-16 md:px-10 lg:px-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl">Preguntas de siempre</h2>
          <div className="mt-8 divide-y divide-[var(--editorial-stone)]">
            {faq.map(([q, a]) => (
              <details key={q} className="group py-4">
                <summary className="cursor-pointer list-none font-display text-lg marker:content-none">
                  <span className="mr-2 text-[var(--editorial-gold)]">✦</span>
                  {q}
                </summary>
                <p className="mt-3 pl-6 text-sm leading-7 text-[var(--editorial-cacao)]">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section id="diagnostico" className="bg-[var(--studio-ink)] px-5 py-20 text-[var(--studio-paper)] md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <p className="text-[0.68rem] font-black tracking-[0.28em] text-[var(--studio-gold)] uppercase">
            Diagnóstico gratis · 20 minutos
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl md:text-5xl">
            Contame cómo trabajás hoy y te muestro qué automatizar primero.
          </h2>
          <div className="mt-10">
            <DiscoveryForm />
          </div>
        </div>
      </section>

      {/* footer mínimo */}
      <footer className="px-5 py-8 text-center text-xs text-[var(--editorial-cacao)]">
        <Link href="/legal" className="hover:text-[var(--editorial-plum)]">
          Privacidad y términos
        </Link>
        <span className="mx-2">·</span>
        <span>Elara Nova · Evelyn Patiño</span>
      </footer>
    </main>
  )
}
