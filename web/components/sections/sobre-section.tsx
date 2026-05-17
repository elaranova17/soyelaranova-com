export function SobreSection() {
  return (
    <section className="bg-[#0d0920] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative h-80 bg-[#1a0f2e] rounded-2xl overflow-hidden">
          {/* Video thumbnail o imagen de Elara */}
          <div className="absolute inset-0 flex items-center justify-center text-[#C9A84C]/30 text-sm">[ sobre-elara-video.jpg ]</div>
        </div>
        <div>
          <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-3">00 · Sobre Elara Nova</p>
          <h2 className="text-[#e8e0f0] font-serif text-4xl font-bold mb-6">
            Un espacio creado por y para mujeres que quieren más de la vida.
          </h2>
          <p className="text-[#b8a8d0] mb-8">
            Elara Nova nace desde la reinvención, la intuición y el arte. Aquí combinamos magia, diseño y tecnología para ayudarte a alinearte con tu propósito y brillar sin pedir permiso.
          </p>
          <a href="/manifiesto" className="bg-[#7c3aed] text-white px-8 py-3 rounded-full font-medium">
            Conoce nuestra historia →
          </a>
        </div>
      </div>
    </section>
  )
}
