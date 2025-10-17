const diamante = document.querySelector('.bloque-diamante');
const oro = document.querySelector('.bloque-oro');
const piedra = document.querySelector('.bloque-piedra');
const carbon = document.querySelector('.bloque-carbon');

const cd = document.querySelector('.count-diamante');
const co = document.querySelector('.count-oro');
const cp = document.querySelector('.count-piedra');
const cc = document.querySelector('.count-carbon');


let nDiamante = 0;
let nOro = 0;
let nPiedra = 0;
let nCarbon = 0;


function reaparecer(item) {
  item.style.opacity = '0';
  item.style.pointerEvents = 'none';
  setTimeout(function() {
   
    const top = Math.floor(Math.random() * 340) + 60;  
    const left = Math.floor(Math.random() * 640) + 40;  
    item.style.top = top + 'px';
    item.style.left = left + 'px';
    item.style.opacity = '1';
    item.style.pointerEvents = 'auto';
  }, 700);
}

//(cada uno suma y reaparece)
diamante.addEventListener('click', function() {
  nDiamante += 1;
  cd.textContent = nDiamante;
  reaparecer(diamante);
});

oro.addEventListener('click', function() {
  nOro += 1;
  co.textContent = nOro;
  reaparecer(oro);
});

piedra.addEventListener('click', function() {
  nPiedra += 1;
  cp.textContent = nPiedra;
  reaparecer(piedra);
});

carbon.addEventListener('click', function() {
  nCarbon += 1;
  cc.textContent = nCarbon;
  reaparecer(carbon);
});
