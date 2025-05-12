document.addEventListener('DOMContentLoaded', () => {
    const paymentDateElement = document.getElementById('paymentDate');
    const paymentForm = document.getElementById('paymentForm');
    const paymentMessage = document.getElementById('paymentMessage');

    // Obtener la fecha seleccionada (esto es un ejemplo, necesitarás pasarla desde la página anterior)
    const urlParams = new URLSearchParams(window.location.search);
    const selectedDate = urlParams.get('date');

    if (selectedDate) {
        paymentDateElement.textContent = selectedDate;
    } else {
        paymentDateElement.textContent = 'Fecha no disponible';
        //  Opcional:  Redirigir a la página de contacto o mostrar un mensaje de error
    }

    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simulación de procesamiento de pago (¡NO es seguro para producción!)
        const cardNumber = document.getElementById('cardNumber').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;

        if (cardNumber && expiryDate && cvv) {
            //  Aquí iría la lógica para enviar los datos a una pasarela de pago real
            //  En este ejemplo, solo simulamos el éxito
            paymentMessage.textContent = '¡Pago realizado con éxito! Recibirás un correo de confirmación.';
            paymentMessage.className = 'success';
            paymentMessage.classList.remove('hidden');
            paymentForm.reset();

            //  Opcional:  Redirigir a una página de confirmación después de un tiempo
            //  setTimeout(() => { window.location.href = 'confirmacion.html'; }, 3000);
        } else {
            paymentMessage.textContent = 'Por favor, completa todos los campos.';
            paymentMessage.className = 'error';
            paymentMessage.classList.remove('hidden');
        }
    });
});