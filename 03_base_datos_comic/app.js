/* const infoHero = document.querySelector('.hero-content');
infoHero.innerHTML = `
    <img src="${comic.portada}</img>" alt="Portada del comic" class="comic-cover"/>
    <h1>${comic.nombreComic}</h1>
    <p>${comic.sipnosis}</p>
    

` */



const sinopsisParrafo = document.querySelector('#sinopsis p');
const gallery = document.querySelector('.gallery');





console.log(comic);

sinopsisParrafo.innerHTML = comic.sipnosis;

// personajes
gallery.innerHTML = ''; 

comic.personajes.forEach(char => {
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
    <img src="${char.imagen}" alt="${char.nombre}">
    <h3>${char.nombre}</h3>
    <p>${char.descripcion}</p>
  `;
  gallery.appendChild(div);
});


const chapters = document.querySelector(".chapters");

chapters.innerHTML = "";   // ← borra los 3 capítulos que tienes escritos a mano

  comic.capitulos.forEach(cap => {   // ← "cap" no "char"
    const div = document.createElement("div");
    div.classList.add("chapter-card");
    div.innerHTML = `
      <div class="chapter-thumb">
        <img src="${cap.portada || 'img/miniatura.png'}" alt="Capítulo ${cap.id}: ${cap.nombre}">
      </div>
      <div class="chapter-content">
        <h3>Capítulo ${cap.id}</h3>
        <p>${cap.nombre}</p>
        <p>${cap.descripcion}</p>
      </div>
    `;
    chapters.appendChild(div);
  });