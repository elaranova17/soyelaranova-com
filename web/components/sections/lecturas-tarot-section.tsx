export function LecturasTarotSection() {
  return (
    <section className="bg-[#0a0612] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-3">03 · Lecturas de Tarot</p>
          <h2 className="text-[#e8e0f0] font-serif text-4xl font-bold mb-4">Haz tu pregunta. Recibe tu respuesta.</h2>
          <p className="text-[#b8a8d0] mb-8">Lectura personalizada en máximo 24 horas hábiles.</p>
          <div className="space-y-4 mb-8">
            {['Haz tu pregunta', 'Realizamos tu lectura', 'Recibí tu lectura en PDF'].map((step, i) => (
              <div key={step} className="flex items-start gap-4">
                <span className="text-[#C9A84C] font-bold text-sm mt-0.5">{i + 1}</span>
                <p className="text-[#b8a8d0] text-sm">{step}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#1a0f2e] border border-[#2d1f4e] rounded-2xl p-6 mb-6">
            <p className="text-[#C9A84C] font-bold text-2xl mb-1">$24 <span className="text-sm font-normal">USD</span></p>
            <p className="text-[#b8a8d0] text-sm">· 1 pregunta específica · Lectura profunda · Respuesta en 24h</p>
          </div>
          <a href="#" className="bg-[#7c3aed] text-white px-8 py-3 rounded-full font-medium">
            Hacer mi pregunta →
          </a>
        </div>
        <div className="relative h-80 bg-[#1a0f2e] rounded-2xl overflow-hidden">
          {/* Imagen: Elara con cartas de tarot */}
          <div className="absolute inset-0 flex items-center justify-center text-[#C9A84C]/30 text-sm">[ tarot-elara-cartas.jpg ]</div>
        </div>
      </div>
    </section>
  )
}
