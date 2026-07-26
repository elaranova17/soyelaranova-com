'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { StudioReveal, StudioRevealItem, StudioStagger } from '@/components/studio-reveal'
import { studioMotion } from '@/lib/studio-motion'
import {
  adsModels,
  automationModels,
  type SystemModel,
} from '@/lib/system-models'

function FlowGraphic({ model }: { model: SystemModel }) {
  const reduce = useReducedMotion()

  return (
    <div className="sys-flow" aria-hidden>
      {model.steps.map((step, i) => (
        <motion.div
          key={step.label}
          className="sys-flow__step"
          initial={reduce ? false : { opacity: 0, x: -8 }}
          whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            delay: 0.1 * i,
            duration: studioMotion.duration,
            ease: studioMotion.ease,
          }}
        >
          <span className="sys-flow__n font-display">{step.n}</span>
          <strong className="font-display">{step.label}</strong>
          <small>{step.hint}</small>
          {i < model.steps.length - 1 ? (
            <span className="sys-flow__arrow" aria-hidden>
              →
            </span>
          ) : null}
        </motion.div>
      ))}
    </div>
  )
}

function SystemCard({ model }: { model: SystemModel }) {
  return (
    <article className="sys-model">
      <FlowGraphic model={model} />
      <div>
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
        <div className="web-model__foot">
          <span className="web-model__price font-display">{model.priceAnchor}</span>
          <Link href={model.href} className="studio-b2b__card-cta">
            Ver pack →
          </Link>
        </div>
      </div>
    </article>
  )
}

export function SystemModelsGallery({
  kind,
}: {
  kind: 'auto' | 'ads'
}) {
  const models = kind === 'auto' ? automationModels : adsModels
  const titleImpact = kind === 'auto' ? 'Flujos' : 'Ads'
  const titleScript = kind === 'auto' ? 'que se entienden' : 'con lectura'
  const note =
    kind === 'auto'
      ? 'Tutorial del sistema: qué pasa con un lead paso a paso. Elige el nivel (Arranque o Pro) según cuántos flujos necesitas.'
      : 'Tutorial del embudo de pauta: el clic solo vale si la landing y el tracking cierran el círculo.'

  return (
    <section className="web-models" aria-label="Modelos de sistema">
      <StudioReveal className="web-models__head">
        <div>
          <p className="home-eyebrow studio-accent">
            <span aria-hidden="true" />
            Tutorial visual · cómo funciona
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
            <SystemCard model={model} />
          </StudioRevealItem>
        ))}
      </StudioStagger>
    </section>
  )
}
