import type { Metadata } from 'next'
import { ComingSoonSection } from '@/components/coming-soon-section'

export const metadata: Metadata = {
  title: 'Herramientas Astrales · Elara Nova',
  description: 'Carta astral, tránsitos y mapas natales. Tu cielo en mis manos.',
}

export default function HerramientasPage() {
  return (
    <ComingSoonSection
      bg="/hero/manifiesto-bg.jpg"
      eyebrow="Herramientas Astrales"
      title="Tu cielo en el momento exacto."
      description="Carta natal completa, tránsitos planetarios y mapas relacionales. PDF artesanal + lectura en audio."
    />
  )
}
