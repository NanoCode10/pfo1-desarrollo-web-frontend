/* ==========================================================================
   PFO1 · Portfolio personal — Mariano Arenas
   Cambio de tema (dark / light)
   JS mínimo: solo se usa para el selector manual de tema.
   ========================================================================== */

const root = document.documentElement;

// Tema inicial: el elegido antes por el usuario (localStorage)
// o, si nunca eligió, el que tenga configurado su sistema.
const temaGuardado = localStorage.getItem('theme');
const temaSistema = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
root.dataset.theme = temaGuardado || temaSistema;

// Cada botón .theme-toggle alterna el tema y guarda la elección.
document.querySelectorAll('.theme-toggle').forEach((boton) => {
    // Texto accesible según el tema actual (sirve también para título).
    const label = () => (root.dataset.theme === 'dark')
        ? 'Cambiar a tema claro'
        : 'Cambiar a tema oscuro';

    const aplicarLabel = () => {
        boton.setAttribute('aria-label', label());
        boton.setAttribute('title', label());
    };

    aplicarLabel(); // estado inicial

    boton.addEventListener('click', () => {
        const nuevoTema = root.dataset.theme === 'dark' ? 'light' : 'dark';
        root.dataset.theme = nuevoTema;
        localStorage.setItem('theme', nuevoTema);
        aplicarLabel();
    });
});

// Menú hamburguesa: al elegir una sección, cierra el <details> mobile
// (el navegador ya mantiene aria-expanded del summary en sincronía con "open").
document.querySelectorAll('.mobile-menu-list a').forEach((enlace) => {
    enlace.addEventListener('click', () => {
        enlace.closest('.mobile-menu').open = false;
    });
});

// Modal de contacto: <dialog> nativo, sin backend. Escape y el ::backdrop
// ya los resuelve el navegador solo; acá abrimos, cerramos y manejamos el submit.
const contactDialog = document.getElementById('contact-dialog');
const contactForm = document.getElementById('contact-form');
const contactStatus = contactForm.querySelector('.form-status');

document.getElementById('contact-open').addEventListener('click', () => {
    contactDialog.showModal();
});

contactDialog.querySelector('.dialog-close').addEventListener('click', () => {
    contactDialog.close();
});

// "close" cubre tanto el botón de cerrar como la tecla Escape:
// deja el formulario listo para la próxima vez que se abra.
contactDialog.addEventListener('close', () => {
    contactForm.reset();
    contactStatus.textContent = '';
});

// Si llegamos acá, la validación HTML5 (required, type="email") ya aprobó
// los datos: solo evitamos el envío real (no hay servidor) y avisamos.
contactForm.addEventListener('submit', (evento) => {
    evento.preventDefault();
    contactStatus.textContent = 'Formulario de demostración: los datos fueron validados localmente y no se envían a ningún servidor.';
});

// La landing siempre debe abrir en el hero/inicio, y no reanudar la
// posición de una sección previa al recargar (p. ej. con #habilidades).
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
    // Elimina el hash de la URL sin agregar una entrada nueva al historial.
    if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    // Lleva el scroll siempre al principio.
    window.scrollTo(0, 0);
});