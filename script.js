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