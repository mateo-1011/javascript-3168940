const imagen = document.querySelector ('#imagen')
const btnBN = document.querySelector ('#btnbn')
const btnblur = document.querySelector ('#btnblur')
const btnzoom = document.querySelector ('#btnzoom')

btnBN.addEventListener('click', () => {
   imagen.classList.toggle("bn")
});

btnblur.addEventListener('click', () => {
    imagen.classList.toggle("blur")
});

btnzoom.addEventListener('click', () => {
    imagen.classList.toggle("zoom")
});