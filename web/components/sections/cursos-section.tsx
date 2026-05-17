const cursos = [
  { badge: 'Más popular', title: 'Astrología para conectarte contigo', semanas: 8, lecciones: 32, precio: 97 },
  { badge: 'Nuevo', title: 'Tarot intuitivo para principiantes', semanas: 6, lecciones: 24, precio: 77 },
  { badge: 'Más elegido', title: 'Ciclos lunares y magia consciente', semanas: 4, lecciones: 16, precio: 57 },
  { badge: 'Transformador', title: 'Sanar para volver a ti', semanas: 7, lecciones: 28, precio: 87 },
]

export function CursosSection() {
  return (
    <section className="bg-[#0d0920] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-3">09 · Aprende con Elara</p>
        <h2 className="text-[#e8e0f0] font-serif text-4xl font-bold mb-10">Aprende. Integra. Transforma.</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {cursos.map((c) => (
            <div key={c.title} className="bg-[#1a0f2e] border border-[#2d1f4e] rounded-2xl overflow-hidden hover:border-[#C9A84C]/40 transition-colors">
              <div className="h-40 bg-[#2d1f4e] relative flex items-center justify-center text-[#C9A84C]/30 text-xs">
                [ curso-img ]
                <span className="absolute top-3 left-3 bg-[#C9A84C] text-black text-xs px-2 py-0.5 rounded-full font-medium">{c.badge}</span>
              </div>
              <div className="p-5">
                <h3 className="text-[#e8e0f0] font-semibold mb-3 text-sm">{c.title}</h3>
                <div className="flex items-center justify-between text-xs text-[#b8a8d0] mb-4">
                  <span>{c.semanas} semanas · {c.lecciones} lecciones</span>
                </div>
                <p className="text-[#C9A84C] font-bold">${c.precio} USD</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
