'use client'

import { useMemo, useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type FormState = {
  name: string
  email: string
  business: string
  website: string
  service: string
  goal: string
  problem: string
  timeline: string
  budget: string
  notes: string
}

const initialForm: FormState = {
  name: '',
  email: '',
  business: '',
  website: '',
  service: 'No estoy segura todavia',
  goal: '',
  problem: '',
  timeline: 'Este mes',
  budget: 'Por definir',
  notes: '',
}

const serviceOptions = [
  'Sitio web profesional',
  'Landing page para campaña',
  'Automatizaciones',
  'Google Ads y medicion',
  'Productos digitales / ebook',
  'No estoy segura todavia',
]

const timelineOptions = ['Esta semana', 'Este mes', 'En 1-3 meses', 'Estoy explorando']

const budgetOptions = [
  'Menos de 500 EUR',
  '500-1.000 EUR',
  '1.000-2.500 EUR',
  '2.500+ EUR',
  'Por definir',
]

type WindowWithTracking = Window & {
  dataLayer?: Array<Record<string, unknown>>
  gtag?: (command: 'event', eventName: string, params?: Record<string, unknown>) => void
  plausible?: (eventName: string, options?: { props?: Record<string, unknown> }) => void
}

function trackDiscoveryEvent(eventName: string, service: string, label: string) {
  const win = window as WindowWithTracking
  const payload = {
    event: eventName,
    event_category: 'lead',
    event_label: label,
    service,
  }

  win.dataLayer?.push(payload)
  win.gtag?.('event', eventName, payload)
  win.plausible?.(eventName, { props: { category: 'lead', label, service } })
}

function buildEmailBody(form: FormState) {
  return [
    'Hola Evelyn, te comparto mi diagnostico inicial:',
    '',
    `Nombre: ${form.name}`,
    `Email: ${form.email}`,
    `Negocio / marca: ${form.business}`,
    `Web o redes: ${form.website || 'No aplica'}`,
    `Servicio que creo necesitar: ${form.service}`,
    `Objetivo principal: ${form.goal}`,
    `Problema actual: ${form.problem}`,
    `Tiempo ideal: ${form.timeline}`,
    `Presupuesto aproximado: ${form.budget}`,
    `Notas extra: ${form.notes || 'Sin notas extra'}`,
  ].join('\n')
}

export function DiscoveryForm() {
  const router = useRouter()
  const [form, setForm] = useState<FormState>(initialForm)
  const [needsManualSend, setNeedsManualSend] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const emailHref = useMemo(() => {
    const subject = `Descubrimiento de proyecto - ${form.name || 'La Aranoa'}`
    return `mailto:evelynpatildr@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildEmailBody(form))}`
  }, [form])

  const whatsappHref = useMemo(() => {
    const text = `Hola Evelyn, completé el diagnostico de La Aranoa. Soy ${form.name || '[tu nombre]'} y necesito ayuda con: ${form.service}.`
    return `https://wa.me/41783480550?text=${encodeURIComponent(text)}`
  }, [form.name, form.service])

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitError(null)
    setSubmitting(true)
    trackDiscoveryEvent('discovery_prepare', form.service, 'discovery_form_prepare')

    try {
      localStorage.setItem(
        'la-aranoa-discovery',
        JSON.stringify({ ...form, submittedAt: new Date().toISOString() }),
      )
    } catch {
      /* localStorage can be unavailable; email fallback still works */
    }

    try {
      const response = await fetch('/api/discovery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = (await response.json()) as {
        ok?: boolean
        emailSent?: boolean
        error?: string
        warning?: string
      }

      if (!response.ok || !data.ok) {
        setSubmitError(data.error ?? 'No pude preparar tu diagnóstico. Revisá los campos e intentá de nuevo.')
        return
      }

      if (data.emailSent) {
        trackDiscoveryEvent('generate_lead', form.service, 'discovery_api_sent')
        router.push('/gracias')
        return
      }

      setNeedsManualSend(true)
    } catch {
      setSubmitError('Error de conexión. Podés intentar de nuevo o enviarlo manualmente por email/WhatsApp.')
      setNeedsManualSend(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (needsManualSend) {
    return (
      <section className="rounded-[12px] border border-[var(--studio-gold)]/24 bg-[var(--studio-paper)]/[0.06] p-6 backdrop-blur-xl md:p-8">
        <p className="text-[0.68rem] font-black tracking-[0.28em] text-[var(--studio-gold)] uppercase">
          Envio manual
        </p>
        <h2 className="mt-5 font-display text-4xl leading-tight">Tus respuestas quedaron listas.</h2>
        <p className="mt-5 text-sm leading-7 text-[var(--studio-paper)]/68">
          No pude confirmar el envio automatico desde el servidor. Puedes enviarlas ahora por email o abrir WhatsApp para no perder el diagnostico.
        </p>
        {submitError ? (
          <p className="mt-4 rounded-[10px] border border-red-300/25 bg-red-400/10 p-3 text-sm leading-6 text-red-100">
            {submitError}
          </p>
        ) : null}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={emailHref}
            onClick={() => trackDiscoveryEvent('lead_email_click', form.service, 'discovery_email')}
            className="inline-flex min-h-12 items-center justify-center rounded-[10px] bg-[var(--studio-gold)] px-6 py-3 text-center text-[0.76rem] font-black tracking-[0.2em] text-[var(--studio-ink)] uppercase"
          >
            Enviar por email
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackDiscoveryEvent('lead_whatsapp_click', form.service, 'discovery_whatsapp')}
            className="inline-flex min-h-12 items-center justify-center rounded-[10px] border border-[var(--studio-paper)]/18 px-6 py-3 text-center text-[0.76rem] font-bold tracking-[0.2em] text-[var(--studio-paper)] uppercase"
          >
            Abrir WhatsApp
          </a>
          <Link
            href="/gracias"
            onClick={() => trackDiscoveryEvent('lead_confirmed', form.service, 'discovery_thanks')}
            className="inline-flex min-h-12 items-center justify-center rounded-[10px] border border-[var(--studio-gold)]/35 px-6 py-3 text-center text-[0.76rem] font-bold tracking-[0.2em] text-[var(--studio-gold)] uppercase"
          >
            Ya lo envié
          </Link>
        </div>
      </section>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[12px] border border-[var(--studio-paper)]/10 bg-[var(--studio-paper)]/[0.045] p-6 md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Nombre" required>
          <input
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            required
            className="studio-input"
            placeholder="Tu nombre"
          />
        </Field>
        <Field label="Email" required>
          <input
            type="email"
            value={form.email}
            onChange={(event) => updateField('email', event.target.value)}
            required
            className="studio-input"
            placeholder="tu@email.com"
          />
        </Field>
        <Field label="Negocio o marca" required>
          <input
            value={form.business}
            onChange={(event) => updateField('business', event.target.value)}
            required
            className="studio-input"
            placeholder="Nombre del negocio"
          />
        </Field>
        <Field label="Web, Instagram o referencia">
          <input
            value={form.website}
            onChange={(event) => updateField('website', event.target.value)}
            className="studio-input"
            placeholder="https://..."
          />
        </Field>
        <Field label="Servicio que crees necesitar" required>
          <select
            value={form.service}
            onChange={(event) => updateField('service', event.target.value)}
            required
            className="studio-input"
          >
            {serviceOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
        <Field label="Tiempo ideal" required>
          <select
            value={form.timeline}
            onChange={(event) => updateField('timeline', event.target.value)}
            required
            className="studio-input"
          >
            {timelineOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5 grid gap-5">
        <Field label="Que quieres lograr?" required>
          <textarea
            value={form.goal}
            onChange={(event) => updateField('goal', event.target.value)}
            required
            rows={4}
            className="studio-input"
            placeholder="Ej: conseguir mas clientes, lanzar un ebook, ordenar mi captacion de leads..."
          />
        </Field>
        <Field label="Que esta fallando o consumiendo demasiado tiempo?" required>
          <textarea
            value={form.problem}
            onChange={(event) => updateField('problem', event.target.value)}
            required
            rows={4}
            className="studio-input"
            placeholder="Cuéntame el problema real, aunque esté desordenado."
          />
        </Field>
        <Field label="Presupuesto aproximado">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {budgetOptions.map((option) => (
              <label
                key={option}
                className={[
                  'flex min-h-12 cursor-pointer items-center justify-center rounded-[10px] border px-3 py-2 text-center text-xs font-bold transition-colors',
                  form.budget === option
                    ? 'border-[var(--studio-gold)] bg-[var(--studio-gold)] text-[var(--studio-ink)]'
                    : 'border-[var(--studio-paper)]/14 bg-[var(--studio-paper)]/[0.03] text-[var(--studio-paper)]/70',
                ].join(' ')}
              >
                <input
                  type="radio"
                  name="budget"
                  value={option}
                  checked={form.budget === option}
                  onChange={(event) => updateField('budget', event.target.value)}
                  className="sr-only"
                />
                {option}
              </label>
            ))}
          </div>
        </Field>
        <Field label="Algo mas que deba saber?">
          <textarea
            value={form.notes}
            onChange={(event) => updateField('notes', event.target.value)}
            rows={3}
            className="studio-input"
            placeholder="Referencias, urgencias, herramientas que ya usas, ideas sueltas..."
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-[10px] bg-[var(--studio-gold)] px-6 py-3 text-center text-[0.78rem] font-black tracking-[0.22em] text-[var(--studio-ink)] uppercase transition-transform hover:-translate-y-0.5 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-65"
      >
        {submitting ? 'Enviando...' : 'Enviar diagnostico'}
      </button>
      {submitError ? (
        <p className="mt-4 rounded-[10px] border border-red-300/25 bg-red-400/10 p-3 text-center text-sm leading-6 text-red-100">
          {submitError}
        </p>
      ) : null}
      <p className="mt-4 text-center text-xs leading-6 text-[var(--studio-paper)]/45">
        Tus respuestas se envian a Evelyn. Si el servidor no puede confirmar el envio, te muestro una opcion manual por email o WhatsApp.
      </p>
    </form>
  )
}

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[0.68rem] font-black tracking-[0.22em] text-[var(--studio-gold)] uppercase">
        {label}
        {required ? ' *' : ''}
      </span>
      {children}
    </label>
  )
}
