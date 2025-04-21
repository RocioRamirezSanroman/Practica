// Datos para la página de contacto
const contactData = {
    header: {
        logo: {
            icon: 'fas fa-hands-helping',
            text: 'IvánLoraFisio'
        },
        navLinks: [
            { text: 'Inicio', url: 'index.html', active: false },
            { text: 'Servicios', url: 'servicios.html', active: false },
            { text: 'Nosotros', url: 'nosotros.html', active: false },
            { text: 'Contacto', url: 'contacto.html', active: true }
        ],
        ctaButton: {
            text: 'Cita Online',
            url: 'contacto.html'
        }
    },
    contactForm: {
        title: 'Envíanos un mensaje',
        description: 'Completa el formulario y te responderemos a la brevedad',
        fields: [
            {
                type: 'text',
                id: 'name',
                label: 'Nombre completo*',
                required: true
            },
            {
                type: 'email',
                id: 'email',
                label: 'Correo electrónico*',
                required: true
            },
            {
                type: 'tel',
                id: 'phone',
                label: 'Teléfono',
                required: false
            },
         
            {
                type: 'textarea',
                id: 'message',
                label: 'Mensaje*',
                required: true,
                rows: 5
            },
            {
                type: 'checkbox',
                id: 'privacy',
                label: 'Acepto la política de privacidad*',
                required: true
            }
        ],
        submitButton: {
            text: 'Enviar Mensaje',
            icon: 'fas fa-paper-plane'
        }
    },
    contactInfo: {
        title: 'Información de contacto',
        description: 'Estamos disponibles para atenderte en nuestro horario habitual o mediante cita previa.',
        items: [
            {
                icon: 'fas fa-map-marker-alt',
                title: 'Dirección',
                details: ['Calle Cortes 16, 11570, La Barca de la Florida, Cádiz']
            },
            {
                icon: 'fas fa-phone-alt',
                title: 'Teléfonos',
                details: ['+34 670 399 412']
            },
            {
                icon: 'fas fa-envelope',
                title: 'Correo electrónico',
                details: ['ivanlorafisioterapia@gmail.com']
            },
            {
                icon: 'fas fa-clock',
                title: 'Horario de atención',
                details: ['Lunes a Viernes: 8:00 - 20:00', 'Sábados: 9:00 - 14:00']
            }
        ],
        socialTitle: '',
        socialLinks: [
           
        ]
    },
    map: {
        src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3201.0634994287684!2d-5.935083924704173!3d36.648922976213356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0dba8e5b64a75f%3A0xfb0b87251fd0c03b!2sCtra.%20Cortes%2C%2016%2C%2011570%20La%20Barca%20de%20la%20Florida%2C%20C%C3%A1diz!5e0!3m2!1ses!2ses!4v1745221531930!5m2!1ses!2ses',
        title: 'Ubicación de IvánLoraFisio'
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
            { text: 'Contacto', url: 'contacto.html' }
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
                <i class="${contactData.header.logo.icon}"></i>
                <span>${contactData.header.logo.text}</span>
            </div>
            <nav>
                <ul>
                    ${contactData.header.navLinks.map(link => `
                        <li><a href="${link.url}" ${link.active ? 'class="active"' : ''}>${link.text}</a></li>
                    `).join('')}
                    <li><a href="${contactData.header.ctaButton.url}" class="btn-nav">${contactData.header.ctaButton.text}</a></li>
                </ul>
            </nav>
        </div>
    `;
}

// Función para cargar el formulario de contacto
function loadContactForm() {
    const form = document.getElementById('contactForm');
    
    form.innerHTML = `
        ${contactData.contactForm.fields.map(field => {
            if (field.type === 'select') {
                return `
                    <div class="form-group">
                        <label for="${field.id}">${field.label}</label>
                        <select id="${field.id}" name="${field.id}" ${field.required ? 'required' : ''}>
                            ${field.options.map(option => `
                                <option value="${option.value}">${option.text}</option>
                            `).join('')}
                        </select>
                    </div>
                `;
            } else if (field.type === 'textarea') {
                return `
                    <div class="form-group">
                        <label for="${field.id}">${field.label}</label>
                        <textarea id="${field.id}" name="${field.id}" rows="${field.rows || 5}" ${field.required ? 'required' : ''}></textarea>
                    </div>
                `;
            } else if (field.type === 'checkbox') {
                return `
                    <div class="form-group">
                        <input type="checkbox" id="${field.id}" name="${field.id}" ${field.required ? 'required' : ''}>
                        <label for="${field.id}">${field.label}</label>
                    </div>
                `;
            } else {
                return `
                    <div class="form-group">
                        <label for="${field.id}">${field.label}</label>
                        <input type="${field.type}" id="${field.id}" name="${field.id}" ${field.required ? 'required' : ''}>
                    </div>
                `;
            }
        }).join('')}
        <button type="submit" class="btn btn-primary" style="width: 100%;">
            <i class="${contactData.contactForm.submitButton.icon}"></i> ${contactData.contactForm.submitButton.text}
        </button>
    `;
}

// Función para cargar la información de contacto
function loadContactInfo() {
    const contactDetails = document.getElementById('contactDetails');
    
    contactDetails.innerHTML = `
        ${contactData.contactInfo.items.map(item => `
            <div class="contact-item">
                <div class="contact-icon">
                    <i class="${item.icon}"></i>
                </div>
                <div class="contact-text">
                    <h3>${item.title}</h3>
                    ${item.details.map(detail => `<p>${detail}</p>`).join('')}
                </div>
            </div>
        `).join('')}
        <div class="social-contact">
            <h3>${contactData.contactInfo.socialTitle}</h3>
            <div class="social-icons">
                ${contactData.contactInfo.socialLinks.map(link => `
                    <a href="${link.url}"><i class="${link.icon}"></i></a>
                `).join('')}
            </div>
        </div>
    `;
}

// Función para cargar el mapa
function loadMap() {
    const map = document.getElementById('locationMap');
    map.src = contactData.map.src;
    map.title = contactData.map.title;
}

// Función para cargar el formulario de cita rápida
function loadQuickAppointment() {
    const form = document.getElementById('quickAppointment');
    const features = document.querySelector('.appointment-features');
    
    features.innerHTML = contactData.quickAppointment.features.map(feature => `
        <li><i class="fas fa-check-circle"></i> ${feature}</li>
    `).join('');
    
    form.innerHTML = `
        ${contactData.quickAppointment.formFields.map(field => `
            <div class="form-group">
                <label for="${field.id}">${field.label}</label>
                <input type="${field.type}" id="${field.id}" ${field.required ? 'required' : ''}>
            </div>
        `).join('')}
        <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">
            <i class="${contactData.quickAppointment.submitButton.icon}"></i> ${contactData.quickAppointment.submitButton.text}
        </button>
    `;
}

// Función para cargar las preguntas frecuentes
function loadFAQs() {
    const faqContainer = document.getElementById('faqContainer');
    
    faqContainer.innerHTML = contactData.faqs.map((faq, index) => `
        <div class="faq-item ${index === 0 ? 'active' : ''}">
            <div class="faq-question">
                <h3>${faq.question}</h3>
                <i class="fas fa-chevron-${index === 0 ? 'up' : 'down'}"></i>
            </div>
            <div class="faq-answer ${index === 0 ? 'active' : ''}">
                <p>${faq.answer}</p>
            </div>
        </div>
    `).join('');
}

// Función para cargar el footer
function loadFooter() {
    const footer = document.getElementById('main-footer');
    
    footer.innerHTML = `
        <div class="container">
            <div class="footer-content">
                <div class="footer-section about">
                    <div class="logo">
                        <i class="${contactData.footer.logo.icon}"></i>
                        <span>${contactData.footer.logo.text}</span>
                    </div>
                    <p>${contactData.footer.description}</p>
                    <div class="social-icons">
                        ${contactData.footer.socialLinks.map(link => `
                            <a href="${link.url}"><i class="${link.icon}"></i></a>
                        `).join('')}
                    </div>
                </div>
                <div class="footer-section links">
                    <h3>Enlaces Rápidos</h3>
                    <ul>
                        ${contactData.footer.quickLinks.map(link => `
                            <li><a href="${link.url}">${link.text}</a></li>
                        `).join('')}
                    </ul>
                </div>
                <div class="footer-section contact">
                    <h3>Contacto</h3>
                    ${contactData.footer.contactInfo.map(info => `
                        <p><i class="${info.icon}"></i> ${info.text}</p>
                    `).join('')}
                </div>
            </div>
            <div class="copyright">
                <p>${contactData.footer.copyright}</p>
            </div>
        </div>
    `;
}

// Función para inicializar los eventos
function initEvents() {
    // Eventos para las preguntas frecuentes
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');
            
            answer.classList.toggle('active');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        });
    });

    // Evento para el formulario de contacto
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        this.reset();
    });

    // Evento para el formulario de cita rápida
    document.getElementById('quickAppointment').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Cita reservada con éxito. Recibirás un correo de confirmación.');
        this.reset();
    });
}

// Función principal para cargar todo el contenido
function loadContactPage() {
    loadHeader();
    loadContactForm();
    loadContactInfo();
    loadMap();
    loadQuickAppointment();
    loadFAQs();
    loadFooter();
    initEvents();
}

// Cargar la página cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', loadContactPage);
