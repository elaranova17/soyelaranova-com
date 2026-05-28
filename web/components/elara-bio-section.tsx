'use client'

import Link from 'next/link'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

/** Sección 5 · La mujer detrás (Evelyn) — rediseño elara-bio */
export function ElaraBioSection() {
  const { setRef: setLabelRef, style: labelStyle } = useScrollReveal<HTMLParagraphElement>({
    index: 0,
    translateY: 20,
  })
  const { setRef: setLeadRef, style: leadStyle } = useScrollReveal<HTMLParagraphElement>({
    index: 1,
    translateY: 24,
  })
  const { setRef: setBodyRef, style: bodyStyle } = useScrollReveal<HTMLParagraphElement>({
    index: 2,
    translateY: 24,
  })
  const { setRef: setCtaRef, style: ctaStyle } = useScrollReveal<HTMLDivElement>({
    index: 3,
    translateY: 16,
  })

  return (
    <section className="elara-bio scroll-mt-[5.5rem]" id="evelyn" aria-labelledby="evelyn-heading">
      <div className="bio-container">
        <p ref={setLabelRef} id="evelyn-heading" className="bio-label" style={labelStyle}>
          ✦ La mujer detrás
        </p>

        <p ref={setLeadRef} className="bio-lead" style={leadStyle}>
          Detrás de mí hay una mujer real: <em>Evelyn Patiño.</em>
          <br />
          Ingeniera de software. Madre colombiana en Suiza.
          <br />
          Creadora de espacios donde lo íntimo y lo profesional se encuentran.
        </p>

        <p ref={setBodyRef} className="bio-body" style={bodyStyle}>
          Toda su vida dentro de fábricas de software — construyendo soluciones, automatizando lo
          imposible. Crea cada rincón de este espacio con amor y dedicación, porque sabe que lo que
          vos traés acá es real.
        </p>

        <div ref={setCtaRef} style={ctaStyle}>
          <Link href="/linktree" className="bio-cta">
            Conocé más de Evelyn
            <span className="arrow" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
