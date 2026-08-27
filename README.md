# PFO1 - Portfolio personal

Proyecto correspondiente a la materia **Desarrollo de Sistemas Web (Front End)**.

## Descripción

Portfolio personal responsive, desarrollado con HTML5, CSS y JavaScript vanilla, sin frameworks ni librerías externas.

## Enlaces

- **Portfolio:** https://portfolio.nanocode10.dev
- **Deploy alternativo (Vercel):** https://pfo1-desarrollo-web-frontend.vercel.app/
- **Repositorio:** https://github.com/NanoCode10/pfo1-desarrollo-web-frontend
- **Perfil de GitHub:** https://github.com/NanoCode10

## Objetivo

El proyecto aplica contenidos vistos en la materia:

- estructura semántica HTML;
- maquetación y estilos CSS;
- Flexbox y Grid;
- responsive design;
- interacción básica con JavaScript.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript vanilla
- Git / GitHub

## Secciones del sitio

- **Hero / presentación inicial**: encabezado con nombre, rol, una breve introducción, accesos rápidos a Habilidades y Contacto, y una terminal visual decorativa.
- **Presentación**: texto breve de introducción sobre el contexto del portfolio.
- **Habilidades**: listado de tecnologías y herramientas.
- **Sobre mí**: texto ampliado sobre intereses y motivación.
- **Contacto**: las tres vías reales para contactarme — correo directo (`mailto:`), un formulario de contacto en un modal y el enlace al perfil de GitHub.
- **Footer**: información de la materia y el cuatrimestre.

## Funcionalidades

- Navegación mediante anchors a las distintas secciones.
- Menú hamburguesa responsive.
- Cierre automático del menú mobile al seleccionar una sección.
- Cambio de tema dark/light.
- Terminal visual del hero.
- Botón "Volver arriba".
- Enlace a GitHub.
- En la sección Contacto: botón de correo directo (`mailto:`), botón "Formulario" que abre un formulario de contacto en un modal (`<dialog>` nativo, con validación HTML5 y un mensaje de confirmación local) y enlace a GitHub. Es una demostración de Front End: el proyecto es estático y no tiene backend, así que el formulario no envía datos a ningún servidor.
- Diseño responsive.

## Responsive

El sitio fue adaptado y verificado en distintos tamaños de pantalla. Se tomaron como referencia los siguientes tamaños:

- 375x667
- 390x844
- 480x800
- 768x1024
- Desktop 1440x900

Para lograrlo se utilizaron media queries junto con Flexbox y CSS Grid, ajustando la composición general, la navegación, el avatar, los botones del hero y la terminal según el ancho de pantalla disponible.

## Accesibilidad y buenas prácticas

- HTML semántico (`header`, `nav`, `main`, `section`, `footer`).
- Imágenes con texto alternativo: el avatar del hero incluye un `alt` descriptivo, y su versión decorativa en mobile usa `alt=""` junto con `aria-hidden="true"`.
- Navegación mediante enlaces internos (anchors).
- Áreas táctiles adecuadas en los botones del hero para uso en mobile.
- Uso de `<details>`/`<summary>` para el menú de navegación mobile.
- Atributos `rel="noopener noreferrer"` en los enlaces externos a GitHub.
- Formulario de contacto con `<label>` asociado a cada campo mediante `for`/`id`, validación HTML5 (`required`, `type="email"`) y modal (`<dialog>`) con título asociado, botón de cierre con `aria-label` y cierre nativo con Escape.

## Estructura del proyecto

```
.
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── avatar-mariano.png
│   └── avatar-nanocode.png
├── .gitignore
└── README.md
```

## Ejecución local

Al ser un proyecto estático, alcanza con:

- abrir `index.html` directamente en el navegador; o
- utilizar la extensión Live Server de Visual Studio Code.

No se requieren dependencias ni instalación adicional.

## Uso de inteligencia artificial

### Herramientas utilizadas

Durante el desarrollo se utilizaron herramientas de asistencia basadas en IA. Entre las utilizadas durante el proyecto estuvieron:

- **ChatGPT** (plan Plus): planificación de etapas.
- **Claude Code** (deepseek): usado en las etapas finales del proyecto para el ajuste responsive, la integración del formulario de contacto, la revisión de accesibilidad, la gestión del historial de Git y la redacción de esta documentación.
- **OpenCode** (con el agente Max, y los modelos DeepSeek V4 Flash Free y Kimi K3 a través de OpenCode Zen): utilizado en etapas anteriores para la implementación inicial de HTML/CSS/JS y para una etapa de rediseño visual, de la que salieron el hero en dos columnas, la terminal, el avatar y la paleta negro/blanco/gris/rojo.

### Experiencia previa

Ya existía experiencia previa utilizando asistentes de IA y herramientas de desarrollo asistido antes de esta PFO. Aun así, las decisiones de diseño y cada modificación puntual del proyecto fueron revisadas manualmente antes de incorporarlas al repositorio.

### Cómo se utilizó

En términos generales, la IA se usó para:

- proponer código HTML, CSS y JavaScript;
- revisar y ajustar estilos, estructura y JavaScript ya escritos;
- debugging del comportamiento responsive en distintos viewports;
- revisar aspectos de accesibilidad (labels, `alt`, foco, contraste);
- ayudar a redactar y ordenar esta documentación.

### Criterio propio y revisión

- El código generado o propuesto por IA fue revisado antes de incorporarlo.
- Los cambios se probaron en el navegador, incluyendo distintos tamaños de pantalla y ambos temas.
- Las propuestas se adaptaron al nivel y a las tecnologías permitidas en la materia, sin frameworks ni librerías.
- Se descartaron soluciones innecesariamente complejas en favor de la alternativa más simple que cumpliera el objetivo.
- La versión final fue verificada manualmente antes de la entrega.

## Autor

**Mariano Arenas**
GitHub: [NanoCode10](https://github.com/NanoCode10)
