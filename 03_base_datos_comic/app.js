const infoHero = document.querySelector('.hero-content');
infoHero.innerHTML = `
    <img src="${comic.portada}</img>" alt="Portada del comic" class="comic-cover"/>
    <h1>${comic.nombreComic}</h1>
    <p>${comic.sipnosis}</p>
    

`