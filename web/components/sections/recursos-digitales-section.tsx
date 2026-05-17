const tabs = ['Destacados', 'Ebooks', 'Journals', 'Plantillas', 'Wallpapers', 'Kits']

export function RecursosDigitalesSection() {
  return (
    <section className="bg-[#0d0920] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-3">05 · Recursos Digitales</p>
        <h2 className="text-[#e8e0f0] font-serif text-4xl font-bold mb-8">Recursos que inspiran, guían y transforman.</h2>
        <div className="flex gap-2 flex-wrap mb-8">
          {tabs.map((tab, i) => (
            <button key={tab} className={`px-4 py-2 rounded-full text-sm transition-colors ${i === 0 ? 'bg-[#7c3aed] text-white' : 'border border-[#2d1f4e] text-[#b8a8d0] hover:border-[#C9A84C]/40'}`}>
              {tab}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {['Guía para Manifestar', 'Diario de la Abundancia', 'Planificador Lunar', 'Kit de Rituales', 'Colección Luna'].map((r, i) => (
            <div key={r} className="bg-[#1a0f2e] border border-[#2d1f4e] rounded-xl overflow-hidden">
              <div className="h-32 bg-[#2d1f4e] flex items-center justify-center text-[#C9A84C]/30 text-xs">[ img ]</div>
              <div className="p-4">
                <p className="text-[#e8e0f0] text-sm font-medium mb-1">{r}</p>
                <p className="text-[#C9A84C] font-bold">${[12, 18, 9, 20, 6][i]} USD</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
