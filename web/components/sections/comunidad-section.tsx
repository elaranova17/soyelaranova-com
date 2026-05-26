import Image from 'next/image'
import { siteImages } from '@/lib/site-images'

export function ComunidadSection() {
  return (
    <section className="bg-[#0d0920] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-3">07 · Comunidad Elara</p>
          <h2 className="text-[#e8e0f0] font-serif text-4xl font-bold mb-4">No estás sola en este camino.</h2>
          <p className="text-[#b8a8d0] mb-8">Únete a nuestra tribu y crecé junto a otras mujeres increíbles.</p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {['Grupo privado en WhatsApp', 'Cursos y talleres en vivo', 'Encuentros y meditaciones', 'Descuentos exclusivos'].map((b) => (
              <div key={b} className="flex items-start gap-2">
                <span className="text-[#C9A84C] mt-0.5">✦</span>
                <p className="text-[#b8a8d0] text-sm">{b}</p>
              </div>
            ))}
          </div>
          <a href="/#circulo" className="bg-[#7c3aed] text-white px-8 py-3 rounded-full font-medium">
            Quiero unirme →
          </a>
        </div>
        <div className="relative h-72 rounded-2xl overflow-hidden md:h-[400px]">
          <Image
            src={siteImages.comunidad.mujeres}
            alt="Comunidad Elara Nova — Mujeres que se apoyan"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-[#0d0920]/20" />
        </div>
      </div>
    </section>
  )
}
