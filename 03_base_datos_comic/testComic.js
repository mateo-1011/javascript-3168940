const InfoComic = document.querySelector('.info-comic');
const numeroPersonajes = document.querySelector('.card-personajes');


console.log(InfoComic);

InfoComic.innerHTML = `
    <small>${comic.year}</small>
    <h1>${comic.nombreComic}</h1>
    <p>${comic.sipnosis}</p>
    <p>${comic.genero}</p>
    
`

console.log(comic.personajes)

comic.personajes.forEach(char => {
  const div = document.createElement('div');
  div.classList.add('personaje');



    console.log(char.nombre)
    document.body.innerHTML += `<img src="${char.imagen}" width="200">`
});