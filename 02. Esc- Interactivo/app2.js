/* animacion moneda */

/* const minerales = document.querySelectorAll('.bloque');
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
 */


/* const ball1 = document.querySelector('#ball1');
const ball2 = document.querySelector('#ball2');
const ball3 = document.querySelector('#ball3');
const ball4 = document.querySelector('#ball4');


const scoreDisplay = document.querySelector('#score');

// Variable del puntaje total
let score = 0;


function reaparecer(ball) {
  ball.style.opacity = '0';
  ball.style.pointerEvents = 'none';

  setTimeout(function() {
    const top = Math.floor(Math.random() * 300) + 50;  
    const left = Math.floor(Math.random() * 650) + 40; 
    ball.style.top = top + 'px';
    ball.style.left = left + 'px';
    ball.style.opacity = '1';
    ball.style.pointerEvents = 'auto';
  }, 600);
}

function sumarPunto(ball) {
  score += 1;
  scoreDisplay.textContent = score;
  reaparecer(ball);
}


ball1.addEventListener('click', function() {
  sumarPunto(ball1);
});

ball2.addEventListener('click', function() {
  sumarPunto(ball2);
});

ball3.addEventListener('click', function() {
  sumarPunto(ball3);
});

ball4.addEventListener('click', function() {
  sumarPunto(ball4);
});
 */




const bugs = document.querySelectorAll('.bug');
const scoreElement = document.querySelector('#puntos');
let score = 0;

function handleBugClick(event) {
    const bug = event.target;
    bug.style.display = 'none';
    score++;
    scoreElement.textContent = `Puntuación: ${score}`;
    checkWin();
}

function checkWin() {
    if (score === 4) {
        alert('¡Ganaste! Has terminado todo el polen.');
    }
}

bugs.forEach(bug => {
    bug.addEventListener('click', handleBugClick);
});
