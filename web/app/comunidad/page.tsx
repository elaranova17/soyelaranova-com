import type { Metadata } from 'next'
import { ComingSoonSection } from '@/components/coming-soon-section'

export const metadata: Metadata = {
  title: 'Comunidad · Elara Nova',
  description: 'El Círculo · mujeres en reinvención manifestando juntas.',
}

export default function ComunidadPage() {
  return (
    <ComingSoonSection
      bg="/hero/circle-bg.jpg"
      eyebrow="El Círculo"
      title="Manifestamos juntas."
      description="Un espacio sagrado donde la tecnología y el alma convergen. Rituales diarios, frecuencias y contenido inédito."
    />
  )
}
