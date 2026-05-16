import type { Metadata } from 'next'
import { ComingSoonSection } from '@/components/coming-soon-section'

export const metadata: Metadata = {
  title: 'Archivo Astral · Elara Nova',
  description: 'Tu mapa natal guardado, tus tránsitos del mes, tu historia astral.',
}

export default function ArchivoAstralPage() {
  return (
    <ComingSoonSection
      bg="/hero/manifiesto-bg.jpg"
      eyebrow="Archivo Astral"
      title="Tu historia escrita en el cielo."
      description="Tu carta natal queda guardada en tu cuenta. Tránsitos del mes, retornos solares y mapas comparativos."
    />
  )
}
