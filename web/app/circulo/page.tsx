import type { Metadata } from 'next'
import { ComingSoonSection } from '@/components/coming-soon-section'

export const metadata: Metadata = {
  title: 'El Círculo · Elara Nova',
  description: 'Mujeres en reinvención manifestando juntas. WhatsApp + Telegram.',
}

export default function CirculoPage() {
  return (
    <ComingSoonSection
      bg="/hero/circle-bg.jpg"
      eyebrow="El Círculo Privado"
      title="Únete al círculo. Manifestemos juntas."
      description="Un espacio íntimo en WhatsApp y Telegram. Rituales diarios, frecuencias y contenido inédito. +10K almas ascendiendo."
    />
  )
}
