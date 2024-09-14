document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formulario');
    form.addEventListener('submit', function(event) {
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (nombre.length < 3) {
            alert('El nombre y apellido debe tener al menos 3 caracteres');
            event.preventDefault();
            return;
        }

        const emialValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emialValidation.test(email)) {
            alert('El email no es valido');
            event.preventDefault();
            return;
        }

        const phoneValidation = /^[0-9]{7,15}$/;
        if (!phoneValidation.test(telefono)) {
            alert('El teléfono debe contener solo números y tener entre 7 y 15 dígitos.');
            event.preventDefault();
            return;
        }

        if (message.length < 10) {
            alert('El mensaje debe tener al menos 10 caracteres');
            event.preventDefault();
            return;
        }
    });

});

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById('nombre-confirmacion').textContent = urlParams.get('nombre');
    document.getElementById('email-confirmacion').textContent = urlParams.get('email');
    document.getElementById('telefono-confirmacion').textContent = urlParams.get('telefono');
    document.getElementById('mensaje-confirmacion').textContent = urlParams.get('message');
}