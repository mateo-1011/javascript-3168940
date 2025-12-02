import { comic } from "./bd.js";

// Leemos el id de la URL: capitulos.html?id=1
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));

// Buscamos el capítulo
const capitulo = comic.capitulos.find(c => c.id === id);

// Seleccionamos el contenedor
const contenedor = document.querySelector('.capitulo-contenido');


  // Todo bien → mostramos el capítulo completo
  contenedor.innerHTML = `
    <h1 class="titulo-capitulo">CAPÍTULO ${capitulo.id}</h1>
    <h2 class="nombre-capitulo">${capitulo.nombre}</h2>
    <div class="video-container">
      <iframe src="https://www.youtube.com/watch?v=4NO-fhaneV0" 
              title="${capitulo.nombre}"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen></iframe>
    </div>

    <div class="info-capitulo">
      <p><strong>Personajes principales:</strong> ${Array.isArray(capitulo.personajes) ? capitulo.personajes.join(', ') : capitulo.personajes}</p>
      <p>${capitulo.descripcion}</p>
    </div>
  `;

  // Cambiamos el título de la pestaña
  document.title = `Capítulo ${capitulo.id}: ${capitulo.nombre} | Acordezón`;
