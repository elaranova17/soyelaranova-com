import type { Metadata } from 'next'
import { ComingSoonSection } from '@/components/coming-soon-section'

export const metadata: Metadata = {
  title: 'Atelier · Elara Nova',
  description: 'Ingeniería con alma. Mi taller B2B donde el código y la magia convergen.',
}

export default function AtelierPage() {
  return (
    <ComingSoonSection
      bg="/hero/b2b-bg.jpg"
      eyebrow="Atelier · B2B"
      title="Ingeniería con alma."
      description="Estrategia y desarrollo web por Evelyn Patiño Laverde. Donde el alto rendimiento de Node.js se fusiona con la sabiduría de la Nueva Era."
    />
  )
}
