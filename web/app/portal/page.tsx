import type { Metadata } from 'next'
import { ComingSoonSection } from '@/components/coming-soon-section'

export const metadata: Metadata = {
  title: 'Portal · Elara Nova',
  description: 'La puerta de entrada a tu viaje ancestral.',
}

export default function PortalPage() {
  return (
    <ComingSoonSection
      bg="/hero/hero-bg.jpg"
      eyebrow="Elara Nova · Portal"
      title="La puerta abierta hacia adentro."
      description="Aquí confluyen tu calendario lunar, tu carta astral y tu oráculo íntimo. Pronto verás el portal completo."
    />
  )
}
