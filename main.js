// main.js - JavaScript común para todas las páginas

document.addEventListener('DOMContentLoaded', function() {
    // Activar animaciones al cargar
    animateOnScroll();
    
    // Smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Cerrar menú móvil si está abierto
                const mobileMenu = document.querySelector('.mobile-menu');
                if (mobileMenu && mobileMenu.classList.contains('active')) {
                    toggleMobileMenu();
                }
            }
        });
    });
    
    // Cambiar header al hacer scroll
    window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(26, 26, 26, 0.95)'; // ¡Esta es la línea que lo pone azul!
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.background = 'rgba(26, 26, 26, 0.95)'; // Este es el color oscuro por defecto
        header.style.boxShadow = 'none';
    }
});
    
    // Activar animaciones cuando el elemento es visible
    window.addEventListener('scroll', animateOnScroll);
    
    // Menú móvil (si existe)
    const menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Animación de números contadores (si existe en la página)
    const counters = document.querySelectorAll('.stat-number');
    if (counters.length > 0) {
        animateCounters();
    }
});

// Funciones comunes
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target;
        }
    });
}

function toggleMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    
    if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// Validación de formulario de contacto
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validación básica
        const nombre = this.querySelector('input[name="nombre"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const mensaje = this.querySelector('textarea[name="mensaje"]').value;
        
        if (!nombre || !email || !mensaje) {
            alert('Por favor complete todos los campos');
            return;
        }
        
        // Simular envío (en producción usaría fetch o AJAX)
        alert('Gracias por su mensaje. Nos pondremos en contacto pronto.');
        this.reset();
    });
}