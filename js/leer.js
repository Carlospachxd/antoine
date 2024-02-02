document.addEventListener('DOMContentLoaded', function () {
  const promociones = document.querySelectorAll('.promocion');

  promociones.forEach(promocion => {
    const parrafo = promocion.querySelector('p');
    const botonLeerMas = document.createElement('button');
    botonLeerMas.textContent = 'Leer más';
    botonLeerMas.classList.add('leer-mas');

    botonLeerMas.addEventListener('click', function () {
      parrafo.classList.toggle('descripcion-expandida');
      botonLeerMas.textContent = parrafo.classList.contains('descripcion-expandida') ? 'Mostrar menos' : 'Leer más';
    });

    promocion.appendChild(botonLeerMas);
  });
});