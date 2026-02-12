import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata = {
  title: 'Política de Privacidad — Magnetia',
  description: 'Política de privacidad y protección de datos de Magnetia, S.L.L. conforme al RGPD.',
  robots: {
    index: true,
    follow: false,
  },
}

export default function PoliticaDePrivacidad() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 px-5 lg:px-10">
        <div className="max-w-[800px] mx-auto prose prose-gray">
          <h1 className="font-bold text-4xl tracking-tight mb-8 text-magnetia-black">
            Política de Privacidad
          </h1>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Última actualización: 10 de febrero de 2026
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            En Magnetia, S.L.L. nos tomamos muy en serio la protección de sus datos personales. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos su información personal de acuerdo con el Reglamento General de Protección de Datos (RGPD) y la legislación española vigente.
          </p>

          {/* Responsable */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            1. Responsable del Tratamiento
          </h2>
          <ul className="text-gray-600 mb-4 space-y-2">
            <li><strong>Titular:</strong> Magnetia, S.L.L.</li>
            <li><strong>CIF:</strong> B44693810</li>
            <li><strong>Domicilio:</strong> Calle Pelayo 8, 1ºB, 33800 Cangas del Narcea, Asturias, España</li>
            <li><strong>Email:</strong> <a href="mailto:hola@magnetia.io" className="text-magnetia-red hover:underline">hola@magnetia.io</a></li>
            <li><strong>Teléfono:</strong> <a href="tel:+34634185582" className="text-magnetia-red hover:underline">(+34) 634 18 55 82</a></li>
          </ul>

          {/* Datos que recopilamos */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            2. Datos que Recopilamos
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Podemos recopilar y tratar las siguientes categorías de datos personales:
          </p>
          <ul className="text-gray-600 mb-4 space-y-2 list-disc pl-6">
            <li><strong>Datos de identificación:</strong> Nombre, apellidos, dirección de correo electrónico, número de teléfono</li>
            <li><strong>Datos de la empresa:</strong> Nombre de la empresa, cargo, sector de actividad</li>
            <li><strong>Datos de navegación:</strong> Dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia (a través de cookies)</li>
            <li><strong>Datos comerciales:</strong> Información sobre consultas, contratación de servicios y comunicaciones</li>
          </ul>

          {/* Finalidad */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            3. Finalidad del Tratamiento
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Sus datos personales serán tratados para las siguientes finalidades:
          </p>
          <ul className="text-gray-600 mb-4 space-y-2 list-disc pl-6">
            <li>Gestionar solicitudes de información y consultas recibidas a través del sitio web</li>
            <li>Proporcionar los servicios contratados y mantener la relación comercial</li>
            <li>Realizar análisis y mejoras de nuestros servicios</li>
            <li>Enviar comunicaciones comerciales sobre nuestros servicios (solo con su consentimiento previo)</li>
            <li>Cumplir con obligaciones legales y fiscales</li>
          </ul>

          {/* Base Legal */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            4. Base Legal del Tratamiento
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            El tratamiento de sus datos se basa en:
          </p>
          <ul className="text-gray-600 mb-4 space-y-2 list-disc pl-6">
            <li><strong>Consentimiento:</strong> Al proporcionarnos sus datos a través de formularios de contacto o suscripción</li>
            <li><strong>Ejecución de contrato:</strong> Cuando es necesario para la prestación de servicios solicitados</li>
            <li><strong>Interés legítimo:</strong> Para análisis de uso del sitio web y mejora de servicios</li>
            <li><strong>Obligación legal:</strong> Cuando sea requerido por normativa vigente</li>
          </ul>

          {/* Plazo de Conservación */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            5. Plazo de Conservación
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Los datos personales proporcionados se conservarán durante el tiempo necesario para cumplir con la finalidad para la que se recabaron y para determinar las posibles responsabilidades que se pudieran derivar de dicha finalidad y del tratamiento de los datos. Como norma general, los datos se conservarán durante un plazo de <strong>5 años</strong> desde la última interacción, salvo que:
          </p>
          <ul className="text-gray-600 mb-4 space-y-2 list-disc pl-6">
            <li>Exista una obligación legal de conservación por un período superior</li>
            <li>El interesado solicite su supresión antes de dicho plazo</li>
            <li>Sea necesario para el cumplimiento de obligaciones contractuales vigentes</li>
          </ul>

          {/* Destinatarios */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            6. Destinatarios de los Datos
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Sus datos podrán ser comunicados a:
          </p>
          <ul className="text-gray-600 mb-4 space-y-2 list-disc pl-6">
            <li>Proveedores de servicios tecnológicos (hosting, email marketing, analítica web)</li>
            <li>Asesores legales, fiscales y contables</li>
            <li>Administraciones públicas cuando exista obligación legal</li>
          </ul>
          <p className="text-gray-600 mb-4 leading-relaxed">
            No se realizarán transferencias internacionales de datos fuera del Espacio Económico Europeo sin garantías adecuadas de protección.
          </p>

          {/* Derechos */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            7. Derechos del Usuario
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Conforme al RGPD, usted tiene derecho a:
          </p>
          <ul className="text-gray-600 mb-4 space-y-2 list-disc pl-6">
            <li><strong>Acceso:</strong> Conocer qué datos personales estamos tratando sobre usted</li>
            <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos</li>
            <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios</li>
            <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento de sus datos</li>
            <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado y de uso común</li>
            <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos en determinadas circunstancias</li>
            <li><strong>Revocación del consentimiento:</strong> Retirar el consentimiento en cualquier momento</li>
          </ul>

          {/* Ejercicio de Derechos */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            8. Ejercicio de Derechos
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Para ejercer cualquiera de estos derechos, puede contactarnos en:
          </p>
          <ul className="text-gray-600 mb-4 space-y-2">
            <li><strong>Email:</strong> <a href="mailto:hola@magnetia.io" className="text-magnetia-red hover:underline">hola@magnetia.io</a></li>
            <li><strong>Dirección postal:</strong> Calle Pelayo 8, 1ºB, 33800 Cangas del Narcea, Asturias, España</li>
          </ul>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Deberá incluir fotocopia de su DNI o documento equivalente que acredite su identidad. Responderemos a su solicitud en el plazo máximo de un mes desde la recepción.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-magnetia-red hover:underline">www.aepd.es</a>) si considera que el tratamiento de sus datos no es conforme a la normativa vigente.
          </p>

          {/* Seguridad */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            9. Medidas de Seguridad
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Magnetia, S.L.L. ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad e integridad de los datos personales que trata, así como para evitar su pérdida, alteración y/o acceso por parte de terceros no autorizados.
          </p>

          {/* Menores */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            10. Usuarios Menores de Edad
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Este sitio web no está dirigido a menores de 14 años. Si es menor de edad, necesitará el consentimiento de sus padres o tutores para proporcionarnos sus datos personales. Si detectamos que hemos recopilado datos de un menor sin el consentimiento parental adecuado, eliminaremos dicha información lo antes posible.
          </p>

          {/* Cookies */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            11. Cookies
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Este sitio web utiliza cookies para mejorar la experiencia del usuario y analizar el tráfico del sitio. Para más información sobre el uso de cookies, consulte nuestra{' '}
            <a href="/politica-de-cookies" className="text-magnetia-red hover:underline">
              Política de Cookies
            </a>.
          </p>

          {/* Modificaciones */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            12. Modificaciones de la Política
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Magnetia, S.L.L. se reserva el derecho de modificar la presente Política de Privacidad para adaptarla a novedades legislativas, jurisprudenciales o por cambios en nuestras prácticas empresariales. Cualquier modificación será publicada en este sitio web con indicación de la fecha de última actualización.
          </p>

          {/* Contacto */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            13. Contacto
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Si tiene alguna pregunta sobre esta Política de Privacidad o sobre el tratamiento de sus datos personales, no dude en contactarnos:
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
