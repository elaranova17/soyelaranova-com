import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Legal',
  description:
    'Politica de privacidad, terminos de uso y datos de contacto de Elara Nova.',
}

const sections = [
  {
    title: 'Responsable',
    text: 'Este sitio es gestionado por Evelyn Patino / Elara Nova. Para consultas sobre privacidad, servicios o contenido, puedes escribir a elaranova.17@gmail.com.',
  },
  {
    title: 'Datos que puedes compartir',
    text: 'Cuando completas un formulario, escribes por email o contactas por WhatsApp, puedes compartir datos como nombre, correo, telefono, negocio, presupuesto, objetivos del proyecto y cualquier informacion que decidas incluir.',
  },
  {
    title: 'Para que se usan',
    text: 'Uso esos datos para responder tu solicitud, preparar pre-analisis o propuestas, coordinar reuniones, entregar servicios contratados y mejorar la comunicacion comercial del estudio.',
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
    text: 'Puedes solicitar acceso, correccion o eliminacion de tus datos escribiendo a elaranova.17@gmail.com. Si existe una obligacion legal de conservar cierta informacion, se explicara en la respuesta.',
  },
  {
    title: 'Terminos de uso',
    text: 'El contenido de este sitio es informativo. Solicitar un pre-analisis o enviar informacion no crea automaticamente una relacion contractual. Cada proyecto se confirma mediante alcance, tiempos, precio y condiciones aceptadas por ambas partes.',
  },
  {
    title: 'Propiedad intelectual',
    text: 'Los textos, diseños, estructura, imagenes y materiales del sitio pertenecen a sus respectivos autores o titulares. No esta permitido copiarlos o reutilizarlos comercialmente sin autorizacion.',
  },
]

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-[var(--editorial-smoke)] text-[var(--editorial-ink)]">
      <section className="bg-[var(--editorial-ivory)] px-5 pt-32 pb-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="text-[0.66rem] font-bold tracking-[0.24em] text-[var(--editorial-cacao)] uppercase hover:text-[var(--editorial-plum)]"
          >
            ← Volver al inicio
          </Link>
          <p className="home-eyebrow mt-10">
            <span aria-hidden="true" />
            Legal
          </p>
          <h1 className="type-lockup type-lockup--glow-soft page-lockup page-lockup--wide mt-5">
            <span className="type-lockup__impact">Privacidad</span>
            <em className="type-lockup__script">y términos</em>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--editorial-cacao)]">
            Esta pagina resume como se gestiona la informacion compartida a traves de este sitio y las condiciones generales de uso de Elara Nova.
          </p>
          <p className="mt-4 text-sm leading-7 text-[var(--editorial-cacao)]/75">
            Ultima actualizacion: 23 de junio de 2026.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-4xl gap-4">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[18px] border border-[var(--editorial-stone)] bg-[var(--editorial-ivory)] p-6"
            >
              <h2 className="type-title type-title--plum type-title--lg">{section.title}</h2>
              <p className="mt-4 text-sm leading-7 text-[var(--editorial-cacao)]">{section.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
