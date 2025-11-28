/* const infoHero = document.querySelector('.hero-content');
infoHero.innerHTML = `
    <img src="${comic.portada}</img>" alt="Portada del comic" class="comic-cover"/>
    <h1>${comic.nombreComic}</h1>
    <p>${comic.sipnosis}</p>
    

` */

import { comic } from "./bd.js";


const sinopsisParrafo = document.querySelector('#sinopsis');
const gallery = document.querySelector('.section');





console.log(comic);

sinopsisParrafo.innerHTML = comic.sipnosis; 

comic.personajes.forEach(char => {
  const link = document.createElement("a");
  link.href = `personaje.html?id=${char.id}`;
  link.className = "card-link"; 

  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${char.imagen}" alt="${char.nombre}">
    <h3>${char.nombre}</h3>
    <p>${char.descripcion}</p>
  `;

  link.appendChild(card);
  gallery.appendChild(link);
});


const chapters = document.querySelector(".chapters");

  

 comic.capitulos.forEach(cap => {
    const link = document.createElement("a");
    link.href = `capitulo${cap.id}.html`;
    link.className = "chapter-link";

    const div = document.createElement("div");
    div.className = "chapter-card";
    div.innerHTML = `
      <div class="chapter-thumb">
        <img src="${cap.portada || 'img/miniatura.png'}">
      </div>
      <div class="chapter-content">
        <h3>Capítulo ${cap.id}</h3>
        <p>${cap.nombre}</p>
      </div>
    `;

    link.appendChild(div);
    chapters.appendChild(link);
  });

