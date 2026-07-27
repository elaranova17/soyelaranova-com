import { TrackedLink } from '@/components/tracked-link'

/**
 * Mi método — 4 pasos claros. Sección clara, organizada, sin scroll-hijack
 * ni animaciones dentro de un laptop. Un número por paso + línea dorada de secuencia.
 */

type Step = {
  number: string
  titleImpact: string
  titleScript: string
  text: string
}

const steps: readonly Step[] = [
  {
    number: '01',
    titleImpact: 'Miro tu',
    titleScript: 'negocio',
    text: 'Encuentro qué te frena, qué leads se pierden y dónde gastas de más. Llego con un diagnóstico claro, no con una hoja en blanco.',
  },
  {
    number: '02',
    titleImpact: 'Ordeno',
    titleScript: 'el sistema',
    text: 'Defino qué automatizar y en qué orden, priorizando lo que te devuelve horas y ventas primero. Sin gastar en herramientas que no necesitas.',
  },
  {
    number: '03',
    titleImpact: 'Construyo',
    titleScript: 'lo que vende',
    text: 'Web, automatización o embudo, hecho para durar: seguro, que escala y se mantiene. Pensado para convertir visitas en clientes.',
  },
  {
    number: '04',
    titleImpact: 'Lo dejo',
    titleScript: 'corriendo',
    text: 'Todo medido y conectado: sabes qué funciona y el negocio sigue sin ti encima. Recuperas tus horas y ningún lead se queda sin respuesta.',
  },
] as const

export function ImmersiveStory() {
  return (
    <section className="method" aria-labelledby="method-title">
      <div className="method__inner">
        <header className="method__head">
          <p className="home-eyebrow">
            <span aria-hidden="true" />
            Mi método
          </p>
          <h2 id="method-title" className="type-lockup type-lockup--glow-soft type-lockup--center">
            <span className="type-lockup__impact">Así</span>
            <em className="type-lockup__script">trabajo contigo</em>
          </h2>
          <p className="method__lead">
            Cuatro pasos claros: del diagnóstico a un sistema que trabaja por ti. Sin humo, sin sorpresas.
          </p>
        </header>

        <ol className="method__grid">
          {steps.map((step) => (
            <li key={step.number} className="method__step">
              <span className="method__num">{step.number}</span>
              <h3 className="method__title">
                <span className="method__title-impact">{step.titleImpact}</span>
                <em className="method__title-script">{step.titleScript}</em>
              </h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="method__cta">
          <TrackedLink
            href="/descubrimiento"
            tracking={{ event: 'cta_click', category: 'lead', label: 'home_method' }}
            className="home-button home-button--primary"
          >
            Hacer mi pre-análisis
          </TrackedLink>
        </div>
      </div>
    </section>
  )
}
