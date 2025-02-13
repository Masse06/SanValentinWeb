function cambiarPagina() {
    window.location.href = "sanValentin.html";
}

function moverBoton() {
    const boton2 = document.getElementById('boton2');
    
    // Calculamos una posición aleatoria para el segundo botón, asegurándonos de que no se superponga al primer botón.
    let x = Math.floor(Math.random() * (window.innerWidth - boton2.offsetWidth));
    let y = Math.floor(Math.random() * (window.innerHeight - boton2.offsetHeight));

    boton2.style.position = 'absolute';
    boton2.style.left = x + 'px';
    boton2.style.top = y + 'px';
}
