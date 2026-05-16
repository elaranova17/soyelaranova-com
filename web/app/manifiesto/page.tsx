import type { Metadata } from 'next'
import { ComingSoonSection } from '@/components/coming-soon-section'

export const metadata: Metadata = {
  title: 'Manifiesto · Elara Nova',
  description: 'Cierre emocional e invitación final. Lo que crees, lo creas.',
}

export default function ManifiestoPage() {
  return (
    <ComingSoonSection
      bg="/hero/manifiesto-bg.jpg"
      eyebrow="06 · Manifiesto"
      title="Lo que crees, lo creas."
      description="Un universo, múltiples experiencias. Si llegaste hasta aquí, ya empezaste el camino de regreso a vos."
    />
  )
}
