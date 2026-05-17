export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#0a0612] flex items-center px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[#C9A84C] text-sm tracking-widest uppercase mb-4">Bienvenida a</p>
          <h1 className="text-[#e8e0f0] font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
            Tu universo para crear la vida que sueñas.
          </h1>
          <p className="text-[#b8a8d0] text-lg mb-8 max-w-md">
            Herramientas, guía y magia práctica para mujeres que quieren transformarse, crear y vivir con propósito.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="/herramientas" className="bg-[#7c3aed] text-white px-8 py-3 rounded-full font-medium hover:bg-[#6d28d9] transition-colors">
              Descubre tu camino →
            </a>
            <a href="/herramientas" className="border border-[#C9A84C] text-[#C9A84C] px-8 py-3 rounded-full font-medium hover:bg-[#C9A84C]/10 transition-colors">
              Explora herramientas
            </a>
          </div>
        </div>
        <div className="relative h-96 md:h-full bg-[#1a0f2e] rounded-2xl overflow-hidden">
          {/* Imagen: Elara escribiendo en escritorio con velas */}
          <div className="absolute inset-0 flex items-center justify-center text-[#C9A84C]/30 text-sm">[ hero-elara-escritorio.jpg ]</div>
        </div>
      </div>
    </section>
  )
}
