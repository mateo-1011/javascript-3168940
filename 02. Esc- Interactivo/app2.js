/* animacion moneda */

const minerales = document.querySelectorAll('.bloque');
const contar = document.querySelector('.count');

let contador = 0;

minerales.forEach(item => {
    


    item.addEventListener('click', () => {
     item.style.filter = "grayscale(1)"
     item.classList.add('saltar');
     contador++
     contar.textContent = contador;
    });
});


