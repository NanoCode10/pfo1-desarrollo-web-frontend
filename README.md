# PFO1 - Portfolio personal

Proyecto correspondiente a la materia **Desarrollo de Sistemas Web (Front End)**.

## Descripción

Portfolio personal responsive, desarrollado con HTML5, CSS y JavaScript vanilla, sin frameworks ni librerías externas.

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

- **Hero / presentación inicial**: encabezado con nombre, rol, una breve introducción, botones de acción y una terminal visual decorativa.
- **Presentación**: texto breve de introducción sobre el contexto del portfolio.
- **Habilidades**: listado de tecnologías y herramientas.
- **Sobre mí**: texto ampliado sobre intereses y motivación.
- **Contacto**: enlace al perfil de GitHub.
- **Footer**: información de la materia y el cuatrimestre.

## Funcionalidades

- Navegación mediante anchors a las distintas secciones.
- Menú hamburguesa responsive.
- Cierre automático del menú mobile al seleccionar una sección.
- Cambio de tema dark/light.
- Terminal visual del hero.
- Botón "Volver arriba".
- Enlace a GitHub.
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

## Estructura del proyecto

```
.
├── index.html
├── styles.css
├── script.js
├── assets/
│   └── avatar-nanocode.png
├── .gitignore
└── README.md
```

## Ejecución local

Al ser un proyecto estático, alcanza con:

- abrir `index.html` directamente en el navegador; o
- utilizar la extensión Live Server de Visual Studio Code.

No se requieren dependencias ni instalación adicional.

## Verificaciones realizadas

Durante la revisión final se comprobó:

- ausencia de overflow horizontal en los viewports revisados;
- navegación por anchors funcionando correctamente;
- cierre del menú hamburguesa al seleccionar una sección;
- funcionamiento del modo dark y light;
- funcionamiento del botón "Volver arriba";
- carga correcta del avatar;
- ausencia de errores de JavaScript relevantes en la consola.

El proyecto no cuenta con una suite de tests automatizados; las verificaciones se realizaron de forma manual.

## Deploy

La versión pública del proyecto está desplegada en Vercel:

https://pfo1-desarrollo-web-frontend.vercel.app/

## Autor

**Mariano Arenas**
GitHub: [NanoCode10](https://github.com/NanoCode10)
