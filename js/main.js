console.log("JS cargado");

/* CARRUSEL — Obras icónicas */

const track = document.getElementById('carousel-track');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

if (track && prevBtn && nextBtn) {
    const visibles = 2;
    const total = track.children.length;
    let current = 0;

    function mover(direccion) {
        current += direccion;
        if (current < 0) current = 0;
        if (current > total - visibles) current = total - visibles;

        const ancho = track.children[0].offsetWidth + 16;
        track.style.transform = `translateX(-${current * ancho}px)`;
    }

    prevBtn.addEventListener('click', () => mover(-1));
    nextBtn.addEventListener('click', () => mover(1));
}