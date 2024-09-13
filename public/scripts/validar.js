window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById('nombre-confirmacion').textContent = urlParams.get('nombre');
    document.getElementById('email-confirmacion').textContent = urlParams.get('email');
    document.getElementById('telefono-confirmacion').textContent = urlParams.get('telefono');
    document.getElementById('mensaje-confirmacion').textContent = urlParams.get('message');
}