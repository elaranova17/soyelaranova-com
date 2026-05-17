const cats = ['Journaling', 'Bienestar', 'Rituales', 'Belleza', 'Hogar', 'Creatividad']

export function AmazonSanctuarySection() {
  return (
    <section className="bg-[#0a0612] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-3">06 · Amazon Sanctuary</p>
        <h2 className="text-[#e8e0f0] font-serif text-4xl font-bold mb-4">Productos que elevan tu energía diaria.</h2>
        <p className="text-[#b8a8d0] mb-8">Recomendaciones curadas para tu bienestar, belleza y crecimiento.</p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-8">
          {cats.map((c) => (
            <div key={c} className="bg-[#1a0f2e] border border-[#2d1f4e] rounded-xl p-4 text-center hover:border-[#C9A84C]/40 transition-colors cursor-pointer">
              <p className="text-[#e8e0f0] text-xs font-medium">{c}</p>
            </div>
          ))}
        </div>
        <a href="/amazon" className="text-[#C9A84C] text-sm border border-[#C9A84C]/40 px-6 py-2 rounded-full hover:bg-[#C9A84C]/10 transition-colors">
          Ir a Amazon Sanctuary →
        </a>
      </div>
    </section>
  )
}
