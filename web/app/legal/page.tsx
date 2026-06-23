import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Legal',
  description:
    'Politica de privacidad, terminos de uso y datos de contacto de La Aranoa Studio.',
}

const sections = [
  {
    title: 'Responsable',
    text: 'Este sitio es gestionado por Evelyn Patino / La Aranoa Studio. Para consultas sobre privacidad, servicios o contenido, puedes escribir a evelynpatildr@gmail.com.',
  },
  {
    title: 'Datos que puedes compartir',
    text: 'Cuando completas un formulario, escribes por email o contactas por WhatsApp, puedes compartir datos como nombre, correo, telefono, negocio, presupuesto, objetivos del proyecto y cualquier informacion que decidas incluir.',
  },
  {
    title: 'Para que se usan',
    text: 'Uso esos datos para responder tu solicitud, preparar diagnosticos o propuestas, coordinar reuniones, entregar servicios contratados y mejorar la comunicacion comercial del estudio.',
  },
  {
    title: 'Medicion y publicidad',
    text: 'El sitio puede usar herramientas de analitica o publicidad como Google Analytics, Google Tag Manager, Meta Pixel o Plausible para medir visitas, clics, formularios y conversiones. Estas herramientas ayudan a entender que contenido funciona y a optimizar campañas.',
  },
  {
    title: 'Terceros',
    text: 'Algunos enlaces pueden llevar a servicios externos como email, WhatsApp, plataformas de pago, calendarios, herramientas de automatizacion o redes sociales. Cada plataforma aplica sus propias politicas de privacidad.',
  },
  {
    title: 'Conservacion',
    text: 'Los datos de contacto y proyecto se conservan mientras sean necesarios para responder, prestar el servicio, cumplir obligaciones administrativas o mantener el historial comercial razonable.',
  },
  {
    title: 'Tus derechos',
    text: 'Puedes solicitar acceso, correccion o eliminacion de tus datos escribiendo a evelynpatildr@gmail.com. Si existe una obligacion legal de conservar cierta informacion, se explicara en la respuesta.',
  },
  {
    title: 'Terminos de uso',
    text: 'El contenido de este sitio es informativo. Solicitar un diagnostico o enviar informacion no crea automaticamente una relacion contractual. Cada proyecto se confirma mediante alcance, tiempos, precio y condiciones aceptadas por ambas partes.',
  },
  {
    title: 'Propiedad intelectual',
    text: 'Los textos, diseños, estructura, imagenes y materiales del sitio pertenecen a sus respectivos autores o titulares. No esta permitido copiarlos o reutilizarlos comercialmente sin autorizacion.',
  },
]

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-[var(--studio-paper)] text-[var(--studio-text)]">
      <section className="px-5 pt-32 pb-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="text-[0.68rem] font-black tracking-[0.26em] text-[var(--studio-indigo)] uppercase hover:text-[var(--studio-text)]"
          >
            ← Volver al inicio
          </Link>
          <p className="mt-12 mb-4 text-[0.7rem] font-black tracking-[0.34em] text-[var(--studio-indigo)] uppercase">
            Legal
          </p>
          <h1 className="font-display text-[3rem] leading-[0.98] md:text-[5.1rem]">
            Privacidad y terminos de uso.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--studio-text)]/68">
            Esta pagina resume como se gestiona la informacion compartida a traves de este sitio y las condiciones generales de uso de La Aranoa Studio.
          </p>
          <p className="mt-4 text-sm leading-7 text-[var(--studio-text)]/55">
            Ultima actualizacion: 23 de junio de 2026.
          </p>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-4xl gap-4">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[10px] border border-[var(--studio-text)]/10 bg-white/65 p-6 shadow-[0_16px_38px_rgba(11,16,32,0.06)]"
            >
              <h2 className="font-display text-3xl">{section.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--studio-text)]/68">{section.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
