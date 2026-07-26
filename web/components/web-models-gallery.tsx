'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { StudioReveal, StudioRevealItem, StudioStagger } from '@/components/studio-reveal'
import { studioMotion } from '@/lib/studio-motion'
import { type WebModel, webModelsForContext } from '@/lib/web-models'

function WireframeMock({ model }: { model: WebModel }) {
  const reduce = useReducedMotion()

  return (
    <div className="web-mock" aria-hidden>
      <div className="web-mock__chrome">
        <span />
        <span />
        <span />
        <em>{model.id}.elaranova</em>
      </div>
      <div className="web-mock__screen">
        {model.sections.map((section, i) => (
          <motion.div
            key={section.label}
            className={`web-mock__block web-mock__block--${i === 0 ? 'hero' : i === model.sections.length - 1 ? 'cta' : 'body'}`}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: 0.08 * i,
              duration: studioMotion.duration,
              ease: studioMotion.ease,
            }}
          >
            <strong>{section.label}</strong>
            <small>{section.hint}</small>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function ModelCard({ model }: { model: WebModel }) {
  return (
    <article className="web-model">
      <WireframeMock model={model} />
      <div className="web-model__copy">
        <p className="home-eyebrow studio-accent">
          <span aria-hidden="true" />
          {model.eyebrow}
        </p>
        <h3 className="type-lockup type-lockup--glow-soft">
          <span className="type-lockup__impact">{model.title}</span>
          <em className="type-lockup__script">{model.script}</em>
        </h3>
        <p className="web-model__explain">{model.explain}</p>
        <p className="web-model__result font-serif">→ {model.result}</p>
        <p className="web-model__for">
          <span>Para quién:</span> {model.forWho}
        </p>
        <div className="web-model__foot">
          <span className="web-model__price font-display">{model.priceAnchor}</span>
          <Link href={model.href} className="studio-b2b__card-cta">
            Ver este pack →
          </Link>
        </div>
      </div>
    </article>
  )
}

export function WebModelsGallery({
  context = 'all',
  titleImpact = 'Modelos',
  titleScript = 'que puedes pedir',
  note = 'No son plantillas genéricas: son estructuras de venta. Toca un modelo para ver el pack.',
}: {
  context?: 'sitios-web' | 'landing-pages' | 'paginas-web' | 'all'
  titleImpact?: string
  titleScript?: string
  note?: string
}) {
  const models = webModelsForContext(context)

  return (
    <section className="web-models" aria-label="Modelos de páginas web">
      <StudioReveal className="web-models__head">
        <div>
          <p className="home-eyebrow studio-accent">
            <span aria-hidden="true" />
            Tutorial visual · estructuras reales
          </p>
          <h2 className="type-lockup type-lockup--glow-soft page-lockup">
            <span className="type-lockup__impact">{titleImpact}</span>
            <em className="type-lockup__script">{titleScript}</em>
          </h2>
        </div>
        <p className="web-models__note">{note}</p>
      </StudioReveal>

      <StudioStagger className="web-models__list">
        {models.map((model) => (
          <StudioRevealItem key={model.id}>
            <ModelCard model={model} />
          </StudioRevealItem>
        ))}
      </StudioStagger>
    </section>
  )
}

/** Mini comparativa didáctica: sitio vs landing */
export function WebVsLandingExplain() {
  return (
    <section className="web-vs" aria-label="Sitio vs landing">
      <StudioReveal>
        <p className="home-eyebrow studio-accent">
          <span aria-hidden="true" />
          Para que quede claro
        </p>
        <h2 className="type-lockup type-lockup--glow-soft page-lockup">
          <span className="type-lockup__impact">Sitio</span>
          <em className="type-lockup__script">≠ landing</em>
        </h2>
      </StudioReveal>
      <div className="web-vs__grid">
        <StudioReveal delay={0.06}>
          <article className="web-vs__card">
            <p className="web-vs__label font-display">Sitio web</p>
            <p>
              Varias páginas. Construye confianza, cuenta tu historia, posiciona en Google y da un
              hogar a tu marca. Ideal si te buscan por nombre o necesitas presencia completa.
            </p>
            <ul>
              <li>Inicio · servicios · sobre · contacto</li>
              <li>SEO base + credibilidad</li>
              <li>Varios caminos de entrada</li>
            </ul>
          </article>
        </StudioReveal>
        <StudioReveal delay={0.12}>
          <article className="web-vs__card web-vs__card--accent">
            <p className="web-vs__label font-display">Landing page</p>
            <p>
              Una sola página. Un solo objetivo. Se usa cuando pagas publicidad o lanzas algo: el
              anuncio promete X y la página cierra X. Menos menú, más conversión.
            </p>
            <ul>
              <li>1 promesa = 1 CTA</li>
              <li>Hecha para Ads / campañas</li>
              <li>Medible de punta a punta</li>
            </ul>
          </article>
        </StudioReveal>
      </div>
    </section>
  )
}
