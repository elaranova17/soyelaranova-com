import { HeroSection } from '@/components/sections/hero-section'
import { SobreSection } from '@/components/sections/sobre-section'
import { DescubreCaminoSection } from '@/components/sections/descubre-camino-section'
import { HerramientasAstralesSection } from '@/components/sections/herramientas-astrales-section'
import { LecturasTarotSection } from '@/components/sections/lecturas-tarot-section'
import { CalendarioSection } from '@/components/sections/calendario-section'
import { MensajeDiaSection } from '@/components/sections/mensaje-dia-section'
import { RecursosDigitalesSection } from '@/components/sections/recursos-digitales-section'
import { AmazonSanctuarySection } from '@/components/sections/amazon-sanctuary-section'
import { ComunidadSection } from '@/components/sections/comunidad-section'
import { AtelierSection } from '@/components/sections/atelier-section'
import { CursosSection } from '@/components/sections/cursos-section'
import { ManifiestoSection } from '@/components/sections/manifiesto-section'

export default function Page() {
  return (
    <main>
      <HeroSection />
      <SobreSection />
      <DescubreCaminoSection />
      <HerramientasAstralesSection />
      <LecturasTarotSection />
      <CalendarioSection />
      <MensajeDiaSection />
      <RecursosDigitalesSection />
      <AmazonSanctuarySection />
      <ComunidadSection />
      <AtelierSection />
      <CursosSection />
      <ManifiestoSection />
    </main>
  )
}
