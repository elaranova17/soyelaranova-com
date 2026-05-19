export function MensajeDiaSection() {
  return (
    <section className="bg-[#0a0612] py-16 px-6 md:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#C9A84C] text-xs tracking-widest uppercase mb-6">Mensaje Cósmico del Día</p>
        <h2 className="text-[#e8e0f0] font-serif text-3xl md:text-4xl font-bold mb-4">
          Hoy el universo te recuerda que tu luz no necesita permiso para brillar.
        </h2>
        <p className="text-[#b8a8d0] mb-8">Confía. Fluye. Todo se acomoda.</p>
        <a href="/herramientas" className="text-[#C9A84C] text-sm border border-[#C9A84C]/40 px-6 py-2 rounded-full hover:bg-[#C9A84C]/10 transition-colors">
          Ver mensajes anteriores →
        </a>
      </div>
    </section>
  )
}
