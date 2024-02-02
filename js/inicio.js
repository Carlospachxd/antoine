window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var scrollButton = document.querySelector('.scroll-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

// Script para volver al inicio cuando se hace clic en el botón
document.querySelector('.scroll-to-top').addEventListener('click', function() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
});