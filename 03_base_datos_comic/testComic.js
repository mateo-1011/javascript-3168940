const InfoComic = document.querySelector('.info-comic');

console.log(InfoComic);

InfoComic.innerHTML = `
    <small>${comic.year}</small>
    <h1>${comic.nombreComic}</h1>
    <p>${comic.sipnosis}</p>
    <p>${comic.genero}</p>
    
`