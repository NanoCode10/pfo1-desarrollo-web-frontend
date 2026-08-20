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