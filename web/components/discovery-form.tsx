'use client'

import { useMemo, useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

type FormState = {
  name: string
  email: string
  business: string
  sellsWhat: string
  website: string
  service: string
  pack: string
  channel: string
  leadVolume: string
  leadsLost: string
  afterContact: string
  tools: string
  siteIssues: string[]
  goal: string
  problem: string
  timeline: string
  budget: string
  notes: string
}

const STEPS = [
  {
    id: 0,
    eyebrow: 'Paso 1 · Vos',
    title: 'Empecemos por tu negocio.',
    tip: 'Con esto entiendo a quién ayudo y qué vendés — sin brief perfecto.',
  },
  {
    id: 1,
    eyebrow: 'Paso 2 · Captación',
    title: '¿Cómo llegan hoy los clientes?',
    tip: 'Acá detecto si se te escapan leads antes de que los atiendas.',
  },
  {
    id: 2,
    eyebrow: 'Paso 3 · Operación',
    title: '¿Qué pasa después del primer contacto?',
    tip: 'Si todo vive en WhatsApp o Excel, ahí suele estar la fuga.',
  },
  {
    id: 3,
    eyebrow: 'Paso 4 · Presencia',
    title: 'Tu web o redes: qué creés que falla.',
    tip: 'No hace falta que sea perfecta: marcá lo que ya sentís.',
  },
  {
    id: 4,
    eyebrow: 'Paso 5 · Rumbo',
    title: 'Qué querés lograr en los próximos 90 días.',
    tip: 'Con esto preparo tu pre-análisis y te digo si la sesión de 25 CHF tiene sentido.',
  },
] as const

const initialForm: FormState = {
  name: '',
  email: '',
  business: '',
  sellsWhat: '',
  website: '',
  service: 'No estoy segura todavía',
  pack: '',
  channel: '',
  leadVolume: '',
  leadsLost: '',
  afterContact: '',
  tools: '',
  siteIssues: [],
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
  'Google Ads y medición',
  'Productos digitales / ebook',
  'No estoy segura todavía',
]

const channelOptions = [
  'Instagram / redes',
  'WhatsApp / referidos',
  'Google / búsquedas',
  'Mi web actual',
  'Anuncios pagos',
  'Casi no llegan solos',
]

const volumeOptions = [
  'Menos de 5 leads/mes',
  '5–20 leads/mes',
  '20–50 leads/mes',
  'Más de 50 /mes',
  'No lo mido',
]

const lostOptions = ['Sí, se me pierden', 'A veces', 'Casi nunca', 'No lo sé']

const afterContactOptions = [
  'Respondo todo a mano (WhatsApp/email)',
  'Lo dudo en Excel o notas',
  'Uso un CRM, pero a medias',
  'Hay algo automático, pero falla',
  'No hay un proceso claro',
]

const siteIssueOptions = [
  'No tengo web / solo redes',
  'No se entiende qué ofrezco',
  'No hay un CTA claro',
  'Se ve improvisada',
  'No mido nada',
  'No convierte (poca gente contacta)',
  'Quiero Ads pero la base no está lista',
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

function composeProblem(form: FormState): string {
  if (form.problem.trim()) return form.problem.trim()
  const parts = [
    form.channel ? `Canal principal: ${form.channel}.` : '',
    form.leadVolume ? `Volumen: ${form.leadVolume}.` : '',
    form.leadsLost ? `¿Se pierden leads?: ${form.leadsLost}.` : '',
    form.afterContact ? `Después del contacto: ${form.afterContact}.` : '',
    form.tools ? `Herramientas: ${form.tools}.` : '',
    form.siteIssues.length ? `Presencia: ${form.siteIssues.join('; ')}.` : '',
  ].filter(Boolean)
  return parts.join(' ') || 'Sin detalle adicional de operación.'
}

function buildPayload(form: FormState) {
  const problem = composeProblem(form)
  const notes = [
    form.sellsWhat ? `Qué vende: ${form.sellsWhat}` : '',
    form.pack ? `Paquete: ${form.pack}` : '',
    form.notes ? `Notas: ${form.notes}` : '',
  ]
    .filter(Boolean)
    .join('\n')

  return {
    name: form.name,
    email: form.email,
    business: form.business,
    website: form.website,
    service: form.service,
    pack: form.pack,
    goal: form.goal,
    problem,
    timeline: form.timeline,
    budget: form.budget,
    notes,
    // extras for richer email (API may ignore unknown; we also fold into problem/notes)
    sellsWhat: form.sellsWhat,
    channel: form.channel,
    leadVolume: form.leadVolume,
    leadsLost: form.leadsLost,
    afterContact: form.afterContact,
    tools: form.tools,
    siteIssues: form.siteIssues.join(' | '),
  }
}

function buildEmailBody(form: FormState) {
  const payload = buildPayload(form)
  return [
    'Hola Evelyn, te comparto mi pre-análisis:',
    '',
    `Nombre: ${payload.name}`,
    `Email: ${payload.email}`,
    `Negocio / marca: ${payload.business}`,
    `Qué vende: ${form.sellsWhat || 'No indicado'}`,
    `Web o redes: ${payload.website || 'No aplica'}`,
    `Servicio: ${payload.service}`,
    `Paquete: ${payload.pack || 'Sin paquete'}`,
    `Canal de clientes: ${form.channel || '—'}`,
    `Volumen: ${form.leadVolume || '—'}`,
    `Leads perdidos: ${form.leadsLost || '—'}`,
    `Después del contacto: ${form.afterContact || '—'}`,
    `Herramientas: ${form.tools || '—'}`,
    `Issues de presencia: ${form.siteIssues.join('; ') || '—'}`,
    `Objetivo 90 días: ${payload.goal}`,
    `Operación (resumen): ${payload.problem}`,
    `Tiempo ideal: ${payload.timeline}`,
    `Presupuesto: ${payload.budget}`,
    `Notas: ${form.notes || 'Sin notas'}`,
  ].join('\n')
}

function ChoiceGrid({
  options,
  value,
  onChange,
  multi = false,
}: {
  options: readonly string[]
  value: string | string[]
  onChange: (next: string | string[]) => void
  multi?: boolean
}) {
  const selected = multi ? (value as string[]) : [value as string]

  function toggle(option: string) {
    if (!multi) {
      onChange(option)
      return
    }
    const current = value as string[]
    onChange(
      current.includes(option) ? current.filter((item) => item !== option) : [...current, option],
    )
  }

  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {options.map((option) => {
        const active = selected.includes(option)
        return (
          <button
            key={option}
            type="button"
            onClick={() => toggle(option)}
            className={[
              'min-h-12 rounded-[12px] border px-4 py-3 text-left text-sm leading-6 transition-colors',
              active
                ? 'border-[var(--studio-gold)] bg-[var(--studio-gold)] text-[var(--studio-ink)]'
                : 'border-[var(--studio-paper)]/14 bg-[var(--studio-paper)]/[0.03] text-[var(--studio-paper)]/78 hover:border-[var(--studio-gold)]/50',
            ].join(' ')}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}

export function DiscoveryForm({
  initialService,
  initialPack,
}: {
  initialService?: string
  initialPack?: string
} = {}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const servicioParam = searchParams.get('servicio') ?? ''
  const paqueteParam = searchParams.get('paquete') ?? ''
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<FormState>(() => ({
    ...initialForm,
    service: initialService || servicioParam || initialForm.service,
    pack: initialPack || paqueteParam || '',
  }))
  const [stepError, setStepError] = useState<string | null>(null)
  const [needsManualSend, setNeedsManualSend] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const emailHref = useMemo(() => {
    const subject = `Pre-análisis de proyecto - ${form.name || 'Elara Nova'}`
    return `mailto:elaranova.17@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildEmailBody(form))}`
  }, [form])

  const whatsappHref = useMemo(() => {
    const text = `Hola Evelyn, completé el pre-análisis. Soy ${form.name || '[tu nombre]'} y necesito ayuda con: ${form.service}.`
    return `https://wa.me/41783480550?text=${encodeURIComponent(text)}`
  }, [form.name, form.service])

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  function validateStep(current: number): string | null {
    if (current === 0) {
      if (!form.name.trim()) return 'Decime tu nombre.'
      if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Email inválido.'
      if (!form.business.trim()) return '¿Cómo se llama tu negocio o marca?'
      if (!form.sellsWhat.trim()) return 'Contame en una frase qué vendés.'
      return null
    }
    if (current === 1) {
      if (!form.channel) return 'Elegí cómo llegan hoy la mayoría de tus clientes.'
      if (!form.leadVolume) return 'Elegí un volumen aproximado (aunque sea “No lo mido”).'
      if (!form.leadsLost) return '¿Se te pierden leads? Elegí una opción.'
      return null
    }
    if (current === 2) {
      if (!form.afterContact) return 'Elegí qué pasa después del primer contacto.'
      return null
    }
    if (current === 3) {
      if (form.siteIssues.length === 0) return 'Marcá al menos una cosa que sientas que falla (o “No tengo web”).'
      return null
    }
    if (current === 4) {
      if (!form.goal.trim()) return 'Contame el objetivo de los próximos 90 días.'
      if (!form.timeline) return 'Elegí un tiempo ideal.'
      return null
    }
    return null
  }

  function goNext() {
    const error = validateStep(step)
    if (error) {
      setStepError(error)
      return
    }
    setStepError(null)
    trackDiscoveryEvent('preanalisis_step', form.service, `step_${step + 1}`)
    setStep((s) => Math.min(s + 1, STEPS.length - 1))
  }

  function goBack() {
    setStepError(null)
    setStep((s) => Math.max(s - 1, 0))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const error = validateStep(4)
    if (error) {
      setStepError(error)
      return
    }

    setSubmitError(null)
    setSubmitting(true)
    trackDiscoveryEvent('discovery_prepare', form.service, 'discovery_form_prepare')

    const payload = buildPayload(form)

    try {
      localStorage.setItem(
        'la-aranoa-discovery',
        JSON.stringify({ ...payload, submittedAt: new Date().toISOString() }),
      )
    } catch {
      /* ignore */
    }

    try {
      const response = await fetch('/api/discovery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = (await response.json()) as {
        ok?: boolean
        emailSent?: boolean
        error?: string
      }

      if (!response.ok || !data.ok) {
        setSubmitError(data.error ?? 'No pude preparar tu pre-análisis. Revisá e intentá de nuevo.')
        return
      }

      if (data.emailSent) {
        trackDiscoveryEvent('generate_lead', form.service, 'discovery_api_sent')
        router.push('/gracias')
        return
      }

      setNeedsManualSend(true)
    } catch {
      setSubmitError('Error de conexión. Podés intentar de nuevo o enviarlo manualmente.')
      setNeedsManualSend(true)
    } finally {
      setSubmitting(false)
    }
  }

  const progress = ((step + 1) / STEPS.length) * 100
  const meta = STEPS[step]

  if (needsManualSend) {
    return (
      <section className="rounded-[12px] border border-[var(--studio-gold)]/24 bg-[var(--studio-paper)]/[0.06] p-6 backdrop-blur-xl md:p-8">
        <p className="text-[0.68rem] font-black tracking-[0.28em] text-[var(--studio-gold)] uppercase">
          Envío manual
        </p>
        <h2 className="type-lockup type-lockup--glow mt-5 text-[clamp(2rem,4vw,3.2rem)]">
          <span className="type-lockup__impact">Tus respuestas</span>
          <em className="type-lockup__script">quedaron listas</em>
        </h2>
        <p className="mt-5 text-sm leading-7 text-[var(--studio-paper)]/68">
          No pude confirmar el envío automático. Mandalo por email o WhatsApp para no perder el
          pre-análisis.
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
      <div className="mb-6">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[0.68rem] font-black tracking-[0.22em] text-[var(--studio-gold)] uppercase">
            {meta.eyebrow}
          </p>
          <p className="text-[0.68rem] font-bold tracking-[0.16em] text-[var(--studio-paper)]/45 uppercase">
            {step + 1} / {STEPS.length}
          </p>
        </div>
        <div className="mt-3 h-1 overflow-hidden rounded-full bg-[var(--studio-paper)]/10">
          <div
            className="h-full rounded-full bg-[var(--studio-gold)] transition-[width] duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <h2 className="type-title type-title--cream mt-5 text-[clamp(1.7rem,3vw,2.35rem)]">{meta.title}</h2>
        <p className="mt-3 text-sm leading-7 text-[var(--studio-paper)]/62">{meta.tip}</p>
      </div>

      {step === 0 ? (
        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Nombre" required>
            <input
              value={form.name}
              onChange={(e) => updateField('name', e.target.value)}
              className="studio-input"
              placeholder="Tu nombre"
              autoComplete="name"
            />
          </Field>
          <Field label="Email" required>
            <input
              type="email"
              value={form.email}
              onChange={(e) => updateField('email', e.target.value)}
              className="studio-input"
              placeholder="tu@email.com"
              autoComplete="email"
            />
          </Field>
          <Field label="Negocio o marca" required>
            <input
              value={form.business}
              onChange={(e) => updateField('business', e.target.value)}
              className="studio-input"
              placeholder="Nombre del negocio"
            />
          </Field>
          <Field label="¿Qué vendés?" required>
            <input
              value={form.sellsWhat}
              onChange={(e) => updateField('sellsWhat', e.target.value)}
              className="studio-input"
              placeholder="Ej: vaciado de viviendas, coaching, joyería…"
            />
          </Field>
          <Field label="Web, Instagram o referencia">
            <input
              value={form.website}
              onChange={(e) => updateField('website', e.target.value)}
              className="studio-input"
              placeholder="https://… o @tuig"
            />
          </Field>
          <Field label="Servicio que creés necesitar" required>
            <select
              value={form.service}
              onChange={(e) => updateField('service', e.target.value)}
              className="studio-input"
            >
              {serviceOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </Field>
          {form.pack ? (
            <Field label="Paquete de interés">
              <input value={form.pack} readOnly className="studio-input opacity-90" />
            </Field>
          ) : null}
        </div>
      ) : null}

      {step === 1 ? (
        <div className="grid gap-7">
          <Field label="Canal principal de clientes" required>
            <ChoiceGrid
              options={channelOptions}
              value={form.channel}
              onChange={(v) => updateField('channel', v as string)}
            />
          </Field>
          <Field label="Volumen aproximado" required>
            <ChoiceGrid
              options={volumeOptions}
              value={form.leadVolume}
              onChange={(v) => updateField('leadVolume', v as string)}
            />
          </Field>
          <Field label="¿Se te pierden leads o mensajes?" required>
            <ChoiceGrid
              options={lostOptions}
              value={form.leadsLost}
              onChange={(v) => updateField('leadsLost', v as string)}
            />
          </Field>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="grid gap-7">
          <Field label="Después del primer contacto…" required>
            <ChoiceGrid
              options={afterContactOptions}
              value={form.afterContact}
              onChange={(v) => updateField('afterContact', v as string)}
            />
          </Field>
          <Field label="¿Qué herramientas usás hoy?">
            <input
              value={form.tools}
              onChange={(e) => updateField('tools', e.target.value)}
              className="studio-input"
              placeholder="WhatsApp, Gmail, Notion, HubSpot, Excel…"
            />
          </Field>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="grid gap-7">
          <Field label="URL o perfil (si no la pusiste antes)">
            <input
              value={form.website}
              onChange={(e) => updateField('website', e.target.value)}
              className="studio-input"
              placeholder="https://… o @instagram"
            />
          </Field>
          <Field label="¿Qué creés que falla en tu presencia?" required>
            <ChoiceGrid
              options={siteIssueOptions}
              value={form.siteIssues}
              onChange={(v) => updateField('siteIssues', v as string[])}
              multi
            />
          </Field>
        </div>
      ) : null}

      {step === 4 ? (
        <div className="grid gap-5">
          <Field label="Objetivo en los próximos 90 días" required>
            <textarea
              value={form.goal}
              onChange={(e) => updateField('goal', e.target.value)}
              rows={4}
              className="studio-input"
              placeholder="Ej: dejar de perder leads, tener web que venda, lanzar Ads con medición…"
            />
          </Field>
          <Field label="Tiempo ideal" required>
            <ChoiceGrid
              options={timelineOptions}
              value={form.timeline}
              onChange={(v) => updateField('timeline', v as string)}
            />
          </Field>
          <Field label="Presupuesto aproximado">
            <ChoiceGrid
              options={budgetOptions}
              value={form.budget}
              onChange={(v) => updateField('budget', v as string)}
            />
          </Field>
          <Field label="Algo más que deba saber">
            <textarea
              value={form.notes}
              onChange={(e) => updateField('notes', e.target.value)}
              rows={3}
              className="studio-input"
              placeholder="Urgencias, referencias, restricciones…"
            />
          </Field>
        </div>
      ) : null}

      {stepError ? (
        <p className="mt-5 rounded-[10px] border border-amber-300/30 bg-amber-400/10 p-3 text-sm leading-6 text-amber-50">
          {stepError}
        </p>
      ) : null}
      {submitError ? (
        <p className="mt-5 rounded-[10px] border border-red-300/25 bg-red-400/10 p-3 text-sm leading-6 text-red-100">
          {submitError}
        </p>
      ) : null}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {step > 0 ? (
          <button
            type="button"
            onClick={goBack}
            className="inline-flex min-h-12 items-center justify-center rounded-[10px] border border-[var(--studio-paper)]/18 px-6 text-[0.72rem] font-bold tracking-[0.18em] text-[var(--studio-paper)] uppercase"
          >
            Atrás
          </button>
        ) : (
          <span className="hidden sm:block" />
        )}

        {step < STEPS.length - 1 ? (
          <button
            type="button"
            onClick={goNext}
            className="inline-flex min-h-12 items-center justify-center rounded-[10px] bg-[var(--studio-gold)] px-7 text-[0.78rem] font-black tracking-[0.2em] text-[var(--studio-ink)] uppercase transition-transform hover:-translate-y-0.5"
          >
            Siguiente
          </button>
        ) : (
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex min-h-12 items-center justify-center rounded-[10px] bg-[var(--studio-gold)] px-7 text-[0.78rem] font-black tracking-[0.2em] text-[var(--studio-ink)] uppercase transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-65"
          >
            {submitting ? 'Enviando…' : 'Enviar pre-análisis'}
          </button>
        )}
      </div>

      <p className="mt-5 text-center text-xs leading-6 text-[var(--studio-paper)]/45">
        Después te mando la lectura. Si querés profundizar: sesión estratégica 20 min · 25 CHF.
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
