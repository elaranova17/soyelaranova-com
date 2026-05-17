const quizzes = [
  { icon: '✦', title: 'Quiz de Alma', desc: 'Descubre tu esencia.' },
  { icon: '⚡', title: 'Test de Energía', desc: 'Conoce tu estado actual.' },
  { icon: '◈', title: 'Ruta de Propósito', desc: 'Encuentra tu camino.' },
  { icon: '◉', title: 'Mi Momento', desc: '¿Qué etapa estás?' },
]

export function DescubreCaminoSection() {
  return (
    <section className="bg-[#0a0612] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-3">01 · Descubre tu Camino</p>
        <h2 className="text-[#e8e0f0] font-serif text-4xl font-bold mb-4 max-w-xl">
          Responde algunas preguntas y recibe guía personalizada para tu momento actual.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {quizzes.map((q) => (
            <div key={q.title} className="bg-[#1a0f2e] border border-[#2d1f4e] rounded-2xl p-6 hover:border-[#C9A84C]/40 transition-colors cursor-pointer">
              <span className="text-[#C9A84C] text-2xl block mb-3">{q.icon}</span>
              <h3 className="text-[#e8e0f0] font-semibold mb-2">{q.title}</h3>
              <p className="text-[#b8a8d0] text-sm">{q.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <a href="#" className="bg-[#7c3aed] text-white px-8 py-3 rounded-full font-medium">
            Comenzar mi descubrimiento →
          </a>
        </div>
      </div>
    </section>
  )
}
