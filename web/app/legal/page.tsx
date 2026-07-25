import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Legal',
  description:
    'Política de privacidad, términos de uso y datos de contacto de Elara Nova.',
}

const sections = [
  {
    title: 'Responsable',
    text: 'Este sitio es gestionado por Evelyn Patiño / Elara Nova. Para consultas sobre privacidad, servicios o contenido, podés escribir a elaranova.17@gmail.com.',
  },
  {
    title: 'Datos que podés compartir',
    text: 'Cuando completás un formulario, escribís por email o contactás por WhatsApp, podés compartir datos como nombre, correo, teléfono, negocio, presupuesto, objetivos del proyecto y cualquier información que decidas incluir.',
  },
  {
    title: 'Para qué se usan',
    text: 'Uso esos datos para responder tu solicitud, preparar pre-análisis o propuestas, coordinar reuniones, entregar servicios contratados y mejorar la comunicación comercial del estudio.',
  },
  {
    title: 'Medición y publicidad',
    text: 'El sitio puede usar herramientas de analítica o publicidad como Google Analytics, Google Tag Manager, Meta Pixel o Plausible para medir visitas, clics, formularios y conversiones. Estas herramientas ayudan a entender qué contenido funciona y a optimizar campañas.',
  },
  {
    title: 'Terceros',
    text: 'Algunos enlaces pueden llevar a servicios externos como email, WhatsApp, plataformas de pago, calendarios, herramientas de automatización o redes sociales. Cada plataforma aplica sus propias políticas de privacidad.',
  },
  {
    title: 'Conservación',
    text: 'Los datos de contacto y proyecto se conservan mientras sean necesarios para responder, prestar el servicio, cumplir obligaciones administrativas o mantener el historial comercial razonable.',
  },
  {
    title: 'Tus derechos',
    text: 'Podés solicitar acceso, corrección o eliminación de tus datos escribiendo a elaranova.17@gmail.com. Si existe una obligación legal de conservar cierta información, se explicará en la respuesta.',
  },
  {
    title: 'Términos de uso',
    text: 'El contenido de este sitio es informativo. Solicitar un pre-análisis o enviar información no crea automáticamente una relación contractual. Cada proyecto se confirma mediante alcance, tiempos, precio y condiciones aceptadas por ambas partes.',
  },
  {
    title: 'Propiedad intelectual',
    text: 'Los textos, diseños, estructura, imágenes y materiales del sitio pertenecen a sus respectivos autores o titulares. No está permitido copiarlos o reutilizarlos comercialmente sin autorización.',
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
            Esta página resume cómo se gestiona la información compartida a través de este sitio y las condiciones generales de uso de Elara Nova.
          </p>
          <p className="mt-4 text-sm leading-7 text-[var(--editorial-cacao)]/75">
            Última actualización: 23 de junio de 2026.
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
