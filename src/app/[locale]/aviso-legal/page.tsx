import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata = {
  title: 'Aviso Legal — Magnetia',
  description: 'Información legal y condiciones de uso del sitio web de Magnetia, S.L.L.',
  robots: {
    index: true,
    follow: false,
  },
}

export default function AvisoLegal() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 px-5 lg:px-10">
        <div className="max-w-[800px] mx-auto prose prose-gray">
          <h1 className="font-bold text-4xl tracking-tight mb-8 text-magnetia-black">Aviso Legal</h1>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Última actualización: 10 de febrero de 2026
          </p>

          {/* Datos Identificativos */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            1. Datos Identificativos
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico, se informa de los siguientes datos:
          </p>
          <ul className="text-gray-600 mb-4 space-y-2">
            <li><strong>Titular:</strong> Magnetia, S.L.L.</li>
            <li><strong>CIF:</strong> B44693810</li>
            <li><strong>Domicilio social:</strong> Calle Pelayo 8, 1ºB, 33800 Cangas del Narcea, Asturias, España</li>
            <li><strong>Email:</strong> <a href="mailto:hola@magnetia.io" className="text-magnetia-red hover:underline">hola@magnetia.io</a></li>
            <li><strong>Teléfono:</strong> <a href="tel:+34634185582" className="text-magnetia-red hover:underline">(+34) 634 18 55 82</a></li>
            <li><strong>Registro Mercantil:</strong> Asturias, Tomo 4535, Libro 0, Folio 49, Sección 8ª, Hoja AS-61406, Inscripción 1ª</li>
          </ul>

          {/* Condiciones de Uso */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            2. Condiciones de Uso
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            El acceso y uso de este sitio web atribuye la condición de usuario y supone la aceptación plena de todas las condiciones incluidas en este Aviso Legal. El usuario se compromete a hacer un uso correcto del sitio web de conformidad con la legislación vigente.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Magnetia, S.L.L. se reserva el derecho de modificar en cualquier momento las condiciones generales de uso de este sitio web, por lo que el usuario debe revisar periódicamente este apartado.
          </p>

          {/* Obligaciones del Usuario */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            3. Obligaciones del Usuario
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            El usuario se compromete a:
          </p>
          <ul className="text-gray-600 mb-4 space-y-2 list-disc pl-6">
            <li>Hacer un uso adecuado y lícito del sitio web</li>
            <li>No utilizar el sitio web para fines ilícitos o contrarios a lo establecido en el presente Aviso Legal</li>
            <li>No realizar actividades publicitarias o de explotación comercial sin autorización previa</li>
            <li>No difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico, de apología del terrorismo o atentatorio contra los derechos humanos</li>
            <li>No introducir virus informáticos, archivos defectuosos, o cualquier otro programa o archivo que pueda dañar el funcionamiento del sitio web</li>
          </ul>

          {/* Propiedad Intelectual */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            4. Propiedad Intelectual e Industrial
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Todos los contenidos de este sitio web, incluyendo textos, imágenes, marcas, gráficos, logotipos, botones, archivos de software, combinaciones de colores, así como la estructura, selección, ordenación y presentación de sus contenidos, se encuentran protegidos por las leyes sobre Propiedad Intelectual e Industrial.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            El uso no autorizado de la información contenida en este sitio web, así como la lesión de los derechos de Propiedad Intelectual o Industrial de Magnetia, S.L.L. o de terceros incluidos en el sitio web, dará lugar a las responsabilidades legalmente establecidas.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Queda expresamente prohibida la reproducción total o parcial de este sitio web, ni siquiera mediante un hiperenlace, sin la autorización expresa de Magnetia, S.L.L.
          </p>

          {/* Enlaces */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            5. Enlaces a Terceros
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Este sitio web puede contener enlaces a sitios web de terceros. Magnetia, S.L.L. no asume ninguna responsabilidad por el contenido de dichos sitios web ni por las prácticas de privacidad de los mismos. La inclusión de estos enlaces no implica la aprobación de los contenidos de dichas páginas web.
          </p>

          {/* Limitación de Responsabilidad */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            6. Limitación de Responsabilidad
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Magnetia, S.L.L. no se hace responsable de los daños y perjuicios de cualquier naturaleza que puedan deberse a:
          </p>
          <ul className="text-gray-600 mb-4 space-y-2 list-disc pl-6">
            <li>La falta de disponibilidad, mantenimiento y efectivo funcionamiento del sitio web o de sus servicios y contenidos</li>
            <li>La existencia de virus, programas maliciosos o lesivos en los contenidos</li>
            <li>El uso ilícito, negligente, fraudulento o contrario al presente Aviso Legal</li>
            <li>La falta de licitud, calidad, fiabilidad, utilidad y disponibilidad de los servicios prestados por terceros y puestos a disposición de los usuarios en el sitio web</li>
          </ul>
          <p className="text-gray-600 mb-4 leading-relaxed">
            No obstante, Magnetia, S.L.L. se compromete a hacer todo lo posible para garantizar la disponibilidad y el correcto funcionamiento del sitio web.
          </p>

          {/* Protección de Datos */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            7. Protección de Datos
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Para conocer cómo tratamos sus datos personales, consulte nuestra{' '}
            <a href="/politica-de-privacidad" className="text-magnetia-red hover:underline">
              Política de Privacidad
            </a>.
          </p>

          {/* Legislación Aplicable */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            8. Legislación Aplicable y Jurisdicción
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Las presentes Condiciones Generales se rigen por la legislación española. Para la resolución de cualquier conflicto que pueda surgir con ocasión de la visita al sitio web o del uso de los servicios que en él se puedan ofertar, Magnetia, S.L.L. y el Usuario acuerdan someterse a los Jueces y Tribunales del domicilio del Usuario.
          </p>

          {/* Contacto */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            9. Contacto
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Para cualquier consulta relacionada con este Aviso Legal, puede contactarnos en:
          </p>
          <ul className="text-gray-600 mb-4 space-y-2">
            <li><strong>Email:</strong> <a href="mailto:hola@magnetia.io" className="text-magnetia-red hover:underline">hola@magnetia.io</a></li>
            <li><strong>Teléfono:</strong> <a href="tel:+34634185582" className="text-magnetia-red hover:underline">(+34) 634 18 55 82</a></li>
            <li><strong>Dirección:</strong> Calle Pelayo 8, 1ºB, 33800 Cangas del Narcea, Asturias, España</li>
          </ul>
        </div>
      </main>
      <Footer showCta={false} />
    </>
  )
}
