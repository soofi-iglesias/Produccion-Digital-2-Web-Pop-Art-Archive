console.log("JS cargado");

/* CARRUSEL — Obras icónicas (Con rebobinado) */

const track = document.getElementById('carousel-track');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

if (track && prevBtn && nextBtn) {
    const visibles = 2;
    const total = track.children.length;
    let current = 0;

    function mover(direccion) {
        current += direccion;
        
        // Lógica de rebobinado:
        if (current < 0) {
            // Si retrocedemos desde el principio, vamos al final
            current = total - visibles; 
        } else if (current > total - visibles) {
            // Si avanzamos desde el final, volvemos al principio
            current = 0; 
        }

        const ancho = track.children[0].offsetWidth + 16; // 16 es el gap-4
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