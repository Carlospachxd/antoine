document.addEventListener('DOMContentLoaded', function () {
    // Inicializa Fotorama en la clase fotorama
    $('.fotorama').fotorama({
        width: '100%', // Opcional: Ancho completo
        height: 'auto', // Opcional: Altura automática
        nav: 'thumbs', // Opcional: Muestra miniaturas en dispositivos más grandes
        loop: true, // Opcional: Repite la galería
        arrows: 'always', // Opcional: Muestra flechas de navegación siempre
        click: true, // Opcional: Permite hacer clic para avanzar
        swipe: true // Opcional: Permite deslizar para avanzar
    });
});
