import { comic } from "./bd.js";

// Leer el id de la URL
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));

// Buscar capítulo
const capitulo = comic.capitulos.find(c => c.id === id);

const contenedor = document.querySelector('.capitulo-contenido');

  contenedor.innerHTML = `
    <h1 class="titulo-capitulo">CAPÍTULO ${capitulo.id}</h1>
    <h2 class="nombre-capitulo">${capitulo.nombre}</h2>
    <div class="video-container">
      <video class="video" controls>
        <source src="videos/video.mov" type="video/mp4">
        source src="videos/video.webm" type="video/webm">
        title="${capitulo.nombre}"
       </video>
              
    </div>

    <div class="info-capitulo">
      <p><strong>Personajes principales:</strong> ${Array.isArray(capitulo.personajes) ? capitulo.personajes.join(', ') : capitulo.personajes}</p>
      <p>${capitulo.descripcion}</p>
    </div>
  `;


  document.title = `Capítulo ${capitulo.id}: ${capitulo.nombre} | Acordezón`;
