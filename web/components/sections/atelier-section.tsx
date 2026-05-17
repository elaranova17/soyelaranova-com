const servicios = ['Diseño web y landing', 'Automatizaciones', 'Agentes IA', 'Branding e identidad', 'Estrategia digital']

export function AtelierSection() {
  return (
    <section className="bg-[#0a0612] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-3">08 · Atelier (Servicios)</p>
          <h2 className="text-[#e8e0f0] font-serif text-4xl font-bold mb-4">Creamos contigo, para tu marca y tu negocio.</h2>
          <ul className="space-y-2 mb-8">
            {servicios.map((s) => (
              <li key={s} className="flex items-center gap-3 text-[#b8a8d0] text-sm">
                <span className="text-[#C9A84C]">→</span> {s}
              </li>
            ))}
          </ul>
          <a href="/atelier" className="text-[#C9A84C] text-sm border border-[#C9A84C]/40 px-6 py-2 rounded-full hover:bg-[#C9A84C]/10 transition-colors">
            Ver nuestro portafolio →
          </a>
        </div>
        <div className="relative h-72 bg-[#1a0f2e] rounded-2xl overflow-hidden">
          {/* Imagen: atelier/workspace creativo */}
          <div className="absolute inset-0 flex items-center justify-center text-[#C9A84C]/30 text-sm">[ atelier-workspace.jpg ]</div>
        </div>
      </div>
    </section>
  )
}
