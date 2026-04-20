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

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('subscribe-form');
    const formState = document.getElementById('form-state');
    const successState = document.getElementById('success-state');

    if (form && formState && successState) {
        form.addEventListener('submit', function(event) {
            
            event.preventDefault();

            formState.classList.remove('opacity-100');
            formState.classList.add('opacity-0');

            setTimeout(() => {
                
                formState.classList.add('hidden');
                successState.classList.remove('hidden');

                setTimeout(() => {
                    successState.classList.remove('opacity-0');
                    successState.classList.add('opacity-100');
                }, 50);

            }, 500);
        });
    }
});