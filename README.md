# Mariana Webmaster Test

Landing page desarrollada en Angular como prueba técnica para un rol de Desarrollador Web / Webmaster.

El proyecto demuestra una implementación sencilla pero estructurada de una landing responsive, con gestión de contenido desacoplada, formulario con validaciones, analítica mediante `dataLayer`, prácticas de SEO, accesibilidad y consideraciones de performance.

---

## Tecnologías utilizadas

- Angular
- TypeScript
- HTML5
- CSS3
- Reactive Forms
- RxJS
- JSON local para simulación de CMS
- dataLayer para simulación de Google Tag Manager

---

## Instalación

Clonar el repositorio:

```bash
git clone <https://github.com/marianarojherrera-alt/mariana-webmaster-test.git>
```

Entrar a la carpeta del proyecto:

```bash
cd mariana-webmaster-test
```

Instalar dependencias:

```bash
npm install
```

Ejecutar el proyecto en modo desarrollo:

```bash
ng serve
```

Abrir en el navegador:

```text
http://localhost:4200
```

Generar el build de producción:

```bash
ng build
```

---

## Estructura y decisiones técnicas

La aplicación fue dividida en componentes con responsabilidades específicas:

- `Header`: navegación principal y menú responsive.
- `Hero`: contenido principal y CTA.
- `Benefits`: sección de servicios o beneficios.
- `Contact`: formulario, validaciones y estados de envío.
- `Footer`: navegación secundaria e información legal.

La lógica que no corresponde directamente a presentación se separó en servicios.

El contenido principal del Hero se obtiene desde un archivo JSON externo al componente mediante un servicio de contenido. Esto simula un escenario donde posteriormente el JSON podría reemplazarse por un CMS o API sin modificar la estructura visual del componente.

El formulario utiliza Reactive Forms para centralizar validaciones, estados y manejo del envío.

El envío se simula mediante un servicio local con RxJS, permitiendo representar estados de carga, éxito y error sin requerir un backend completo.

---

## Decisión de mantenibilidad

Una de las decisiones principales para mejorar la mantenibilidad fue separar la presentación, la lógica y el acceso a contenido.

El Hero no contiene su contenido principal escrito directamente en el componente, sino que lo obtiene mediante `ContentService` desde un archivo JSON.

Esto reduce el acoplamiento entre contenido y presentación y facilita que, en una versión futura, la fuente de datos pueda reemplazarse por un CMS o API sin tener que reconstruir el componente.

También se utilizaron componentes independientes para evitar que toda la landing dependa de un único archivo y facilitar cambios futuros por sección.

---

## Gestión de contenido / simulación de CMS

El contenido principal del Hero se encuentra en:

```text
public/assets/content.json
```

Ejemplo:

```json
{
  "hero": {
    "eyebrow": "Web Designer & UX/UI",
    "title": "Web experiences designed to work.",
    "description": "I design and build responsive digital experiences focused on usability, performance and conversion.",
    "primaryCta": "Contact me",
    "secondaryCta": "View expertise"
  }
}
```

El archivo es consumido mediante un servicio Angular utilizando `HttpClient`.

Esto permite modificar los textos principales sin intervenir directamente en el template del componente.

---

## Formulario

El formulario contiene los siguientes campos:

- Name
- Email
- Message

Incluye:

- Validación de campos requeridos.
- Validación de formato de correo.
- Mensajes de error.
- Estado de carga durante el envío.
- Mensaje de éxito.
- Manejo básico de error.
- Servicio mock para simular la respuesta.

El botón cambia temporalmente a `Sending...` durante el proceso de envío.

---

## Analítica y dataLayer

Se implementó un servicio de analítica para centralizar los eventos enviados a `window.dataLayer`.

### CTA principal

Cuando el usuario hace clic en el CTA principal del Hero se registra:

```js
{
  event: 'cta_click',
  component: 'hero',
  cta_name: 'contact'
}
```

### Formulario enviado correctamente

Después de completar correctamente el envío simulado se registra:

```js
{
  event: 'form_success',
  form_name: 'contact'
}
```

### ¿Por qué `form_success` se registra después de la respuesta exitosa?

El evento `form_success` representa una conversión completada y no simplemente una intención de envío.

Si se registrara al presionar el botón, también se contarían intentos con errores de validación, fallos de red o respuestas fallidas del servicio.

Por eso el evento se dispara únicamente después de recibir una respuesta exitosa del servicio. De esta forma, la analítica representa con mayor precisión los formularios realmente completados.

---

## SEO

Se implementaron las siguientes prácticas:

- `<title>` descriptivo.
- Meta description.
- Uso de un único `h1`.
- Jerarquía semántica con `h1`, `h2` y `h3`.
- Uso de elementos semánticos como `header`, `main`, `section`, `article`, `nav` y `footer`.
- JSON-LD utilizando Schema.org.
- Navegación mediante enlaces internos.

Los datos estructurados describen a la persona y sus áreas de conocimiento mediante un schema de tipo `Person`.

---

## Accesibilidad

Se implementaron:

- Labels asociados mediante `for` e `id`.
- Controles HTML nativos.
- `autocomplete` en campos relevantes.
- `aria-invalid` para estados de validación.
- `aria-describedby` para relacionar campos con mensajes de error.
- `role="status"` y `aria-live` para mensajes exitosos.
- `role="alert"` para errores.
- `aria-expanded`, `aria-controls` y `aria-label` en el menú móvil.
- Navegación accesible mediante teclado.
- Diseño responsive para desktop y móvil.

---

## Performance

Se evitó incorporar librerías externas innecesarias para resolver funcionalidades que podían implementarse directamente con Angular, HTML y CSS.

Esto reduce el peso del bundle, la cantidad de dependencias y el JavaScript adicional enviado al navegador.

También se realizó un build de producción mediante:

```bash
ng build
```

para verificar que la aplicación compile correctamente para producción.

En una versión con contenido multimedia se aplicarían adicionalmente optimización de imágenes, formatos modernos como WebP o AVIF y lazy loading cuando corresponda.

---

## Mejoras SEO, AEO y GEO para una versión de producción

En una implementación real consideraría:

- Open Graph y metadatos para redes sociales.
- Canonical URL.
- Sitemap XML.
- `robots.txt`.
- Optimización de Core Web Vitals.
- Revisión con Lighthouse y PageSpeed Insights.
- Datos estructurados adicionales según el tipo de contenido.
- Contenido orientado a entidades e intención de búsqueda.
- Estructura de contenido preparada para respuestas directas y sistemas generativos.
- Google Search Console.
- Google Analytics 4.
- Integración real con Google Tag Manager.

---

## Mejoras adicionales si tuviera más tiempo

Implementaría:

- Conexión del formulario con un endpoint real.
- Variables de entorno para configuraciones externas.
- Tests unitarios adicionales.
- Estados de error simulados de forma configurable.
- Animaciones sutiles de interfaz.
- Pruebas responsive en más breakpoints y dispositivos.
- Auditoría completa con Lighthouse.
- Optimización avanzada de Core Web Vitals.
- Integración real con Google Tag Manager y GA4.
- CMS real para administrar el contenido.
- Deployment automático mediante CI/CD.

---

## Caso de criterio y colaboración

Ante solicitudes simultáneas de Marketing, SEO y mejoras técnicas, primero evaluaría impacto, urgencia, riesgo y esfuerzo de cada cambio.

Priorizaría la modificación de Marketing si existe una fecha de publicación inmediata y el cambio es necesario para una campaña del día siguiente, siempre que no comprometa la estabilidad del sitio.

Revisaría con SEO cuáles de sus solicitudes son críticas y cuáles pueden programarse para una segunda entrega.

Las mejoras técnicas que no representen un riesgo inmediato las documentaría como deuda técnica y las incluiría en un backlog priorizado.

Compartiría con todas las áreas una lista clara de cambios, prioridades, responsables y fechas.

También explicaría qué elementos entran en la entrega inmediata y cuáles se realizarán posteriormente.

Antes de publicar realizaría una validación rápida de funcionalidad, SEO crítico, analítica y responsive.

Después de la campaña retomaría las mejoras SEO y técnicas pendientes en una segunda iteración.

El objetivo sería mantener comunicación transparente y evitar implementar cambios apresurados que puedan afectar producción.

---

## Responsive

La interfaz fue probada tanto en escritorio como en dispositivos móviles.

En móvil:

- El menú principal cambia a navegación tipo hamburguesa.
- Las secciones se adaptan al ancho disponible.
- Las tarjetas pasan a una sola columna.
- El formulario cambia a una disposición vertical.
- Se evita el overflow horizontal.

---

## Build

El proyecto fue validado con:

```bash
ng build
```

El build de producción se genera correctamente.

---

## Autor

Mariana Rojas  
Web Designer & UX/UI