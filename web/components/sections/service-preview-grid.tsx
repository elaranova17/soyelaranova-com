'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ServiceIcon } from '@/components/editorial/service-icons'
import { getHomeSection, type ServicePreviewSection } from '@/lib/site-config'

function accentTitle(title: string, accentWords: string[]) {
  const accent = accentWords[0]
  if (!accent || !title.includes(accent)) {
    return <span className="svc-preview__title-main">{title}</span>
  }
  const [before, after] = title.split(accent)
  return (
    <>
      <span className="svc-preview__title-main">{before}</span>
      <em className="svc-preview__title-accent">{accent}</em>
      <span className="svc-preview__title-main">{after}</span>
    </>
  )
}

export function ServicePreviewGrid() {
  const section = getHomeSection<ServicePreviewSection>('home-services')
  const reduceMotion = useReducedMotion()

  if (!section || section.component !== 'ServicePreviewGrid') return null

  return (
    <section className="svc-preview" id="servicios-preview" aria-labelledby="svc-preview-title">
      <div className="svc-preview__inner ds-container">
        <header className="svc-preview__header">
          <p className="svc-preview__eyebrow">{section.heading.eyebrow}</p>
          <h2 id="svc-preview-title" className="svc-preview__title">
            {accentTitle(section.heading.title, section.heading.accentWords)}
          </h2>
        </header>

        <ul className="svc-preview__grid">
          {section.cards.map((card, index) => (
            <motion.li
              key={card.number}
              className="svc-preview__item"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={card.href} className="svc-preview__card">
                <div className="svc-preview__card-top">
                  <span className="svc-preview__num">{card.number}</span>
                  <ServiceIcon name={card.icon} className="svc-preview__icon" />
                </div>
                <h3 className="svc-preview__card-title">{card.title}</h3>
                <p className="svc-preview__card-desc">{card.description}</p>
                <span className="svc-preview__card-link">
                  Explorar
                  <ArrowRight size={14} strokeWidth={1.75} aria-hidden />
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>

        <div className="svc-preview__cta-wrap">
          <Link href={section.cta.href} className="svc-preview__cta">
            <span>{section.cta.label}</span>
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}
