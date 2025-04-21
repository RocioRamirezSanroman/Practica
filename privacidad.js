// Datos para las páginas legales (Aviso Legal y Política de Privacidad)
const legalData = {
    header: {
        logo: {
            icon: 'fas fa-hands-helping',
            text: 'IvánLoraFisio'
        },
        navLinks: [
            { text: 'Inicio', url: 'index.html', active: false },
            { text: 'Servicios', url: 'servicios.html', active: false },
            { text: 'Nosotros', url: 'nosotros.html', active: false },
            { text: 'Contacto', url: 'contacto.html', active: false }
        ],
        ctaButton: {
            text: 'Cita Online',
            url: 'contacto.html'
        }
    },
    footer: {
        logo: {
            icon: 'fas fa-hands-helping',
            text: 'IvánLoraFisio'
        },
        description: 'Centro especializado en fisioterapia y rehabilitación con más de 15 años de experiencia ayudando a nuestros pacientes.',
        socialLinks: [
            { icon: 'fab fa-facebook-f', url: '#' },
            { icon: 'fab fa-instagram', url: '#' },
            { icon: 'fab fa-whatsapp', url: '#' }
        ],
        quickLinks: [
            { text: 'Inicio', url: 'index.html' },
            { text: 'Servicios', url: 'servicios.html' },
            { text: 'Sobre Nosotros', url: 'nosotros.html' },
            { text: 'Contacto', url: 'contacto.html' },
            { text: 'Aviso Legal', url: 'aviso-legal.html' },
            { text: 'Política de Privacidad', url: 'privacidad.html' }
        ],
        contactInfo: [
            { icon: 'fas fa-map-marker-alt', text: 'Av. Salud 1234, Ciudad' },
            { icon: 'fas fa-phone', text: '+34 123 456 789' },
            { icon: 'fas fa-envelope', text: 'info@IvánLoraFisio.com' },
            { icon: 'fas fa-clock', text: 'L-V: 8:00 - 20:00' }
        ],
        copyright: '© 2023 IvánLoraFisio. Todos los derechos reservados.'
    }
};

// Función para cargar el header
function loadHeader() {
    const header = document.getElementById('main-header');
    
    header.innerHTML = `
        <div class="container header-container">
            <div class="logo">
                <i class="${legalData.header.logo.icon}"></i>
                <span>${legalData.header.logo.text}</span>
            </div>
            <nav>
                <ul>
                    ${legalData.header.navLinks.map(link => `
                        <li><a href="${link.url}" ${link.active ? 'class="active"' : ''}>${link.text}</a></li>
                    `).join('')}
                    <li><a href="${legalData.header.ctaButton.url}" class="btn-nav">${legalData.header.ctaButton.text}</a></li>
                </ul>
            </nav>
        </div>
    `;
}



// Función principal para cargar la página
function loadLegalPage() {
    loadHeader();
    loadFooter();
}

// Cargar la página cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadLegalPage);