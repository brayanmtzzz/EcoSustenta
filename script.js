document.addEventListener('DOMContentLoaded', function() {

    // --- MANEJO DEL MENÚ MÓVIL ---
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // --- CARRUSEL AUTOMÁTICO ---
    const carousel = document.querySelector('.carousel-inner');
    if (carousel) {
        const items = carousel.querySelectorAll('.carousel-item');
        let currentIndex = 0;
        const totalItems = items.length;

        function showNextSlide() {
            items[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % totalItems;
            items[currentIndex].classList.add('active');
        }

        setInterval(showNextSlide, 5000); // Cambia cada 5 segundos
    }

    // --- LÓGICA DE LA VENTANA MODAL DE PROYECTOS ---
    const modal = document.getElementById('project-modal');
    const projectCards = document.querySelectorAll('.project-card');
    const closeModalBtn = document.querySelector('.modal-close');

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            // 1. Obtener datos desde los atributos data-* de la tarjeta
            const title = card.dataset.title;
            const description = card.dataset.description;
            const benefits = card.dataset.benefits.split(';');
            const materials = card.dataset.materials.split(';');
            const instructions = card.dataset.instructions.split(';');

            // 2. Poblar la ventana modal con los datos
            modal.querySelector('#modal-title').textContent = title;
            modal.querySelector('#modal-description').textContent = description;

            const benefitsList = modal.querySelector('#modal-benefits');
            benefitsList.innerHTML = ''; // Limpiar lista anterior
            benefits.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                benefitsList.appendChild(li);
            });

            const materialsList = modal.querySelector('#modal-materials');
            materialsList.innerHTML = '';
            materials.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                materialsList.appendChild(li);
            });
            
            const instructionsList = modal.querySelector('#modal-instructions');
            instructionsList.innerHTML = '';
            instructions.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                instructionsList.appendChild(li);
            });

            // 3. Mostrar la ventana modal
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Evitar scroll del fondo
        });
    });

    // Función para cerrar la modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    closeModalBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });

});