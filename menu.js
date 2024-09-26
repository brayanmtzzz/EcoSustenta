const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const menuLinks = document.querySelectorAll('.nav-menu li a');

// Alternar el menú al hacer clic en el icono de hamburguesa
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Cerrar el menú automáticamente al hacer clic en un enlace
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Cerrar el menú si se hace clic fuera del menú
document.addEventListener('click', function(event) {
    if (!event.target.closest('.nav-menu') && !event.target.closest('.menu-toggle')) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});
