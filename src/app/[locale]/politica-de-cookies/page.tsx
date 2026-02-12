import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata = {
  title: 'Política de Cookies — Magnetia',
  description: 'Información sobre el uso de cookies en el sitio web de Magnetia, S.L.L.',
  robots: {
    index: true,
    follow: false,
  },
}

export default function PoliticaDeCookies() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20 px-5 lg:px-10">
        <div className="max-w-[800px] mx-auto prose prose-gray">
          <h1 className="font-bold text-4xl tracking-tight mb-8 text-magnetia-black">
            Política de Cookies
          </h1>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Última actualización: 10 de febrero de 2026
          </p>

          {/* Qué son las cookies */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            1. ¿Qué son las cookies?
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Una cookie es un archivo pequeño que se almacena en el ordenador del usuario y nos permite reconocerle. El conjunto de cookies nos ayuda a mejorar la calidad de nuestro sitio web, permitiéndonos controlar qué páginas resultan útiles, cuáles no y cuáles son susceptibles de mejora.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Las cookies son esenciales para el funcionamiento de Internet, aportando innumerables ventajas en la prestación de servicios interactivos, facilitándole la navegación y usabilidad de nuestra web.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            La información que le proporcionamos a continuación le ayudará a comprender los diferentes tipos de cookies:
          </p>

          {/* Tipos de cookies */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            2. Tipos de Cookies
          </h2>

          <h3 className="font-semibold text-xl mt-8 mb-3 text-magnetia-black">
            Según la entidad que las gestione
          </h3>
          <ul className="text-gray-600 mb-4 space-y-2 list-disc pl-6">
            <li>
              <strong>Cookies propias:</strong> Son aquellas que se envían al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por el usuario.
            </li>
            <li>
              <strong>Cookies de terceros:</strong> Son aquellas que se envían al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos través de las cookies.
            </li>
          </ul>

          <h3 className="font-semibold text-xl mt-8 mb-3 text-magnetia-black">
            Según el plazo de tiempo
          </h3>
          <ul className="text-gray-600 mb-4 space-y-2 list-disc pl-6">
            <li>
              <strong>Cookies de sesión:</strong> Son un tipo de cookies diseñadas para recabar y almacenar datos mientras el usuario accede a una página web. Se suelen emplear para almacenar información que solo interesa conservar para la prestación del servicio solicitado por el usuario en una sola ocasión.
            </li>
            <li>
              <strong>Cookies persistentes:</strong> Son un tipo de cookies en el que los datos siguen almacenados en el terminal y pueden ser accedidos y tratados durante un periodo definido por el responsable de la cookie, y que puede ir de unos minutos a varios años.
            </li>
          </ul>

          <h3 className="font-semibold text-xl mt-8 mb-3 text-magnetia-black">
            Según su finalidad
          </h3>
          <ul className="text-gray-600 mb-4 space-y-2 list-disc pl-6">
            <li>
              <strong>Cookies técnicas:</strong> Son aquellas que permiten al usuario la navegación a través del área restringida y la utilización de sus diferentes funciones, como por ejemplo, llevar a cabo el proceso de compra de un artículo.
            </li>
            <li>
              <strong>Cookies de personalización:</strong> Son aquellas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el terminal del usuario como por ejemplo serian el idioma o el tipo de navegador a través del cual se conecta al servicio.
            </li>
            <li>
              <strong>Cookies de análisis:</strong> Son aquellas que permiten al responsable de las mismas, el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas. La información recogida mediante este tipo de cookies se utiliza en la medición de la actividad de los sitios web, aplicación o plataforma y para la elaboración de perfiles de navegación de los usuarios de dichos sitios, con el fin de introducir mejoras en el servicio en función de los datos de uso que hacen los usuarios.
            </li>
            <li>
              <strong>Cookies publicitarias:</strong> Son aquellas que permiten la gestión, de la forma más eficaz posible, de los espacios publicitarios que, en su caso, el editor haya incluido en una página web, aplicación o plataforma desde la que presta el servicio solicitado en base a criterios como el contenido editado o la frecuencia en la que se muestran los anuncios.
            </li>
          </ul>

          {/* Cookies utilizadas */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            3. Cookies Utilizadas en este Sitio Web
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Este sitio web utiliza las siguientes cookies:
          </p>

          <h3 className="font-semibold text-xl mt-8 mb-3 text-magnetia-black">
            Google Analytics
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Este sitio web utiliza Google Analytics, un servicio de analítica web prestado por Google, Inc., una compañía de Delaware cuya oficina principal está en 1600 Amphitheatre Parkway, Mountain View (California), CA 94043, Estados Unidos.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Google Analytics utiliza cookies para ayudar al sitio web a analizar el uso que hacen los usuarios del sitio web. La información que genera la cookie acerca de su uso del sitio web (incluyendo su dirección IP) será directamente transmitida y archivada por Google en sus servidores de Estados Unidos.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Google usará esta información por cuenta nuestra con el propósito de seguir la pista de su uso del sitio web, recopilando informes de la actividad del sitio web y prestando otros servicios relacionados con la actividad del sitio web y el uso de Internet.
          </p>
          <ul className="text-gray-600 mb-4 space-y-1">
            <li><strong>Cookie:</strong> _ga, _gid, _gat</li>
            <li><strong>Tipo:</strong> Analítica / De terceros</li>
            <li><strong>Duración:</strong> 2 años (_ga), 24 horas (_gid), 1 minuto (_gat)</li>
            <li><strong>Finalidad:</strong> Análisis de uso del sitio web</li>
          </ul>

          <h3 className="font-semibold text-xl mt-8 mb-3 text-magnetia-black">
            Google AdSense
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Google, como proveedor asociado, utiliza cookies para publicar anuncios en nuestro sitio web. Google utiliza cookies para mostrar anuncios basados en las visitas anteriores de los usuarios a nuestro sitio web u otros sitios.
          </p>
          <ul className="text-gray-600 mb-4 space-y-1">
            <li><strong>Cookie:</strong> IDE, DSID, FLC</li>
            <li><strong>Tipo:</strong> Publicitaria / De terceros</li>
            <li><strong>Duración:</strong> Variable (hasta 24 meses)</li>
            <li><strong>Finalidad:</strong> Publicidad personalizada</li>
          </ul>

          <h3 className="font-semibold text-xl mt-8 mb-3 text-magnetia-black">
            DoubleClick
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            DoubleClick es una plataforma publicitaria de Google que utiliza cookies para mejorar la efectividad de la publicidad en línea.
          </p>
          <ul className="text-gray-600 mb-4 space-y-1">
            <li><strong>Cookie:</strong> id, test_cookie</li>
            <li><strong>Tipo:</strong> Publicitaria / De terceros</li>
            <li><strong>Duración:</strong> Variable</li>
            <li><strong>Finalidad:</strong> Publicidad basada en intereses</li>
          </ul>

          {/* Control de cookies */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            4. Cómo Gestionar las Cookies
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            En la mayoría de los navegadores web se ofrece la posibilidad de permitir, bloquear o eliminar las cookies instaladas en su equipo.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            A continuación puede acceder a la configuración de los navegadores web más frecuentes para aceptar, instalar o desactivar las cookies:
          </p>

          <h3 className="font-semibold text-xl mt-8 mb-3 text-magnetia-black">
            Google Chrome
          </h3>
          <ol className="text-gray-600 mb-4 space-y-2 list-decimal pl-6">
            <li>Haga clic en el menú (icono de tres puntos verticales) en la esquina superior derecha</li>
            <li>Seleccione "Configuración"</li>
            <li>Haga clic en "Privacidad y seguridad" en el panel izquierdo</li>
            <li>Seleccione "Cookies y otros datos de sitios"</li>
            <li>Aquí puede configurar sus preferencias de cookies</li>
          </ol>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Más información: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-magnetia-red hover:underline">https://support.google.com/chrome/answer/95647</a>
          </p>

          <h3 className="font-semibold text-xl mt-8 mb-3 text-magnetia-black">
            Mozilla Firefox
          </h3>
          <ol className="text-gray-600 mb-4 space-y-2 list-decimal pl-6">
            <li>Haga clic en el menú (icono de tres líneas horizontales) en la esquina superior derecha</li>
            <li>Seleccione "Configuración"</li>
            <li>Haga clic en "Privacidad y seguridad" en el panel izquierdo</li>
            <li>En la sección "Cookies y datos del sitio" puede gestionar las cookies</li>
          </ol>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Más información: <a href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-" target="_blank" rel="noopener noreferrer" className="text-magnetia-red hover:underline">https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-</a>
          </p>

          <h3 className="font-semibold text-xl mt-8 mb-3 text-magnetia-black">
            Safari
          </h3>
          <ol className="text-gray-600 mb-4 space-y-2 list-decimal pl-6">
            <li>Abra Safari y haga clic en "Safari" en la barra de menú</li>
            <li>Seleccione "Preferencias"</li>
            <li>Haga clic en la pestaña "Privacidad"</li>
            <li>En "Cookies y datos de sitios web" puede gestionar las cookies</li>
          </ol>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Más información: <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-magnetia-red hover:underline">https://support.apple.com/es-es/guide/safari/sfri11471/mac</a>
          </p>

          <h3 className="font-semibold text-xl mt-8 mb-3 text-magnetia-black">
            Microsoft Edge
          </h3>
          <ol className="text-gray-600 mb-4 space-y-2 list-decimal pl-6">
            <li>Haga clic en el menú (icono de tres puntos) en la esquina superior derecha</li>
            <li>Seleccione "Configuración"</li>
            <li>Haga clic en "Cookies y permisos del sitio"</li>
            <li>Seleccione "Cookies y datos del sitio"</li>
            <li>Aquí puede gestionar las cookies</li>
          </ol>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Más información: <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-magnetia-red hover:underline">https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge</a>
          </p>

          <h3 className="font-semibold text-xl mt-8 mb-3 text-magnetia-black">
            Opera
          </h3>
          <ol className="text-gray-600 mb-4 space-y-2 list-decimal pl-6">
            <li>Haga clic en el menú en la esquina superior izquierda</li>
            <li>Seleccione "Configuración"</li>
            <li>Haga clic en "Privacidad y seguridad" en el panel izquierdo</li>
            <li>En "Cookies y otros datos del sitio" puede gestionar las cookies</li>
          </ol>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Más información: <a href="https://help.opera.com/en/latest/web-preferences/#cookies" target="_blank" rel="noopener noreferrer" className="text-magnetia-red hover:underline">https://help.opera.com/en/latest/web-preferences/#cookies</a>
          </p>

          {/* Google Analytics Opt-out */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            5. Desactivar Google Analytics
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Si desea rechazar específicamente las cookies de Google Analytics en todos los navegadores, puede instalar el complemento de inhabilitación para navegadores de Google Analytics:
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-magnetia-red hover:underline">
              https://tools.google.com/dlpage/gaoptout
            </a>
          </p>

          {/* Consecuencias */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            6. Consecuencias de Desactivar las Cookies
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Si decide desactivar todas las cookies, la calidad y rapidez del servicio podría disminuir e incluso podría perder la posibilidad de acceder a algunos de los servicios ofrecidos en el sitio web.
          </p>

          {/* Actualizaciones */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            7. Actualizaciones de la Política
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Magnetia, S.L.L. puede modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos.
          </p>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Cuando se produzcan cambios significativos en esta Política de Cookies, se comunicarán a los usuarios a través del sitio web.
          </p>

          {/* Contacto */}
          <h2 className="font-bold text-2xl tracking-tight mt-12 mb-4 text-magnetia-black">
            8. Contacto
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Para cualquier duda sobre esta Política de Cookies, puede contactarnos en:
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
