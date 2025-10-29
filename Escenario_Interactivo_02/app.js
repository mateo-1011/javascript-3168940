 const juego1Clickeables = document.querySelectorAll('#juego1 .clickeable');
const juego1Contador = document.querySelector('#juego1 .contador');

const juego2Clickeables = document.querySelectorAll('#juego2 .clickeable');
const juego2Contador = document.querySelector('#juego2 .contador');

const juego3Clickeables = document.querySelectorAll('#juego3 .clickeable');
const juego3Contador = document.querySelector('#juego3 .contador');

// puntaje
let score1 = 0;
let score2 = 0;
let score3 = 0;

//manejar clic
function manejarClic(item, contadorElement, scoreRef) {
  item.classList.add('salida');

  setTimeout(function() {
    item.style.display = 'none';

    if (contadorElement === juego1Contador) {
      score1 += 1;
      contadorElement.textContent = score1;
    } else if (contadorElement === juego2Contador) {
      score2 += 1;
      contadorElement.textContent = score2;
    } else if (contadorElement === juego3Contador) {
      score3 += 1;
      contadorElement.textContent = score3;
    }

    reaparecerItem(item);
  }, 500);
}

//reaparecer en posición aleatoria
function reaparecerItem(item) {
  setTimeout(function() {
    const top = Math.floor(Math.random() * 300) + 100;
    const left = Math.floor(Math.random() * 600) + 50;
    item.style.top = top + 'px';
    item.style.left = left + 'px';
    item.style.display = 'block';
    item.classList.remove('salida');
  }, 800);
}





function posicionarInicial(items) {
  items.forEach(function(item) {
    const top = Math.floor(Math.random() * 300) + 100;
    const left = Math.floor(Math.random() * 600) + 50;
    item.style.top = top + 'px';
    item.style.left = left + 'px';
    item.style.display = 'block'; 
  });
}




// Juego 1
juego1Clickeables.forEach(function(item) {
  item.addEventListener('click', function() {
    manejarClic(item, juego1Contador);
  });
});

// Juego 2
juego2Clickeables.forEach(function(item) {
  item.addEventListener('click', function() {
    manejarClic(item, juego2Contador);
  });
});

// Juego 3
juego3Clickeables.forEach(function(item) {
  item.addEventListener('click', function() {
    manejarClic(item, juego3Contador);
  });
});


posicionarInicial(juego1Clickeables);
posicionarInicial(juego2Clickeables);
posicionarInicial(juego3Clickeables); 

/* Carrusel */
/* 1. Variables */
const escenas = document.querySelectorAll('.escena');
const miniaturas = document.querySelectorAll('.mini');
const flechaIzquierda = document.querySelector('.flecha.izquierda');
const flechaDerecha = document.querySelector('.flecha.derecha');

let indice = 0;

console.log(escenas);
console.log(miniaturas);
console.log(flechaIzquierda);
console.log(flechaDerecha);

/* 2. Funciones */
function mostrarEscena(i) {

    for (let j = 0; j < escenas.length; j++) {
        escenas[j].classList.remove('activo');
        
    }
 escenas[i].classList.add('activo');
 indice = i;

}

//Mostrar la pantalla i al iniciar 
mostrarEscena(0);

flechaDerecha.addEventListener('click', function() {
    indice = indice -1
    if (indice < 0) {
        indice = escenas.length -1;
    }
    mostrarEscena(indice);
});

flechaIzquierda.addEventListener('click', function() {
    indice = indice +1
    if (indice >= escenas.length) {
        indice = 0;
    }
    mostrarEscena(indice);
});