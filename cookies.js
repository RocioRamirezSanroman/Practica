// Datos para las páginas legales (Aviso Legal, Política de Privacidad y Cookies)
const legalData = {
    header: {
        logo: {
            icon: 'fas fa-hands-helping',
            text: 'FisioCenter'
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
            text: 'FisioCenter'
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
            { text: 'Política de Privacidad', url: 'privacidad.html' },
            { text: 'Política de Cookies', url: 'cookies.html' }
        ],
        contactInfo: [
            { icon: 'fas fa-map-marker-alt', text: 'Av. Salud 1234, Ciudad' },
            { icon: 'fas fa-phone', text: '+34 123 456 789' },
            { icon: 'fas fa-envelope', text: 'info@fisiocenter.com' },
            { icon: 'fas fa-clock', text: 'L-V: 8:00 - 20:00' }
        ],
        copyright: '© 2023 FisioCenter. Todos los derechos reservados.'
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

// Función para cargar el footer
function loadFooter() {
    const footer = document.getElementById('main-footer');
    
    footer.innerHTML = `
        <div class="container">
            <div class="footer-content">
                <div class="footer-section about">
                    <div class="logo">
                        <i class="${legalData.footer.logo.icon}"></i>
                        <span>${legalData.footer.logo.text}</span>
                    </div>
                    <p>${legalData.footer.description}</p>
                    <div class="social-icons">
                        ${legalData.footer.socialLinks.map(link => `
                            <a href="${link.url}"><i class="${link.icon}"></i></a>
                        `).join('')}
                    </div>
                </div>
                <div class="footer-section links">
                    <h3>Enlaces Rápidos</h3>
                    <ul>
                        ${legalData.footer.quickLinks.map(link => `
                            <li><a href="${link.url}">${link.text}</a></li>
                        `).join('')}
                    </ul>
                </div>
                <div class="footer-section contact">
                    <h3>Contacto</h3>
                    ${legalData.footer.contactInfo.map(info => `
                        <p><i class="${info.icon}"></i> ${info.text}</p>
                    `).join('')}
                </div>
            </div>
            <div class="copyright">
                <p>${legalData.footer.copyright}</p>
            </div>
        </div>
    `;
}

// Función para adaptar la tabla de cookies en móviles
function adaptCookiesTable() {
    if (window.innerWidth <= 576) {
        const table = document.querySelector('.cookies-table table');
        if (table) {
            const headers = [];
            // Obtener los encabezados
            table.querySelectorAll('thead th').forEach(th => {
                headers.push(th.textContent.trim());
            });
            
            // Aplicar a cada celda
            table.querySelectorAll('tbody tr').forEach(tr => {
                tr.querySelectorAll('td').forEach((td, index) => {
                    td.setAttribute('data-label', headers[index]);
                });
            });
        }
    }
}

// Función principal para cargar la página
function loadLegalPage() {
    loadHeader();
    loadFooter();
    adaptCookiesTable();
    
    // Volver a adaptar la tabla si cambia el tamaño de la ventana
    window.addEventListener('resize', adaptCookiesTable);
}

// Cargar la página cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadLegalPage);