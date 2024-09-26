// Configura las variables para el carrusel
const slides = document.querySelectorAll('.slide-open'); // Todas las imágenes del carrusel
let currentSlide = 0; // El índice de la imagen actual
const totalSlides = slides.length; // Total de imágenes
const intervalTime = 5000; // Tiempo de cambio automático (en milisegundos)

// Función para cambiar a la siguiente imagen
function showNextSlide() {
    // Desactivar la imagen actual
    slides[currentSlide].checked = false;

    // Incrementar el índice de la imagen actual
    currentSlide = (currentSlide + 1) % totalSlides; // Cicla a la primera imagen si llega al final

    // Activar la nueva imagen
    slides[currentSlide].checked = true;
}

// Configura el intervalo de cambio automático
setInterval(showNextSlide, intervalTime);
