import { comic } from "./bd.js";

// Leer id de la URL 
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));

if (isNaN(id) || comic.personajes.find(p => p.id === id) === undefined) window.location.href = "index.html";

// Buscar personaje
const personaje = comic.personajes.find(p => p.id === id);

const personajedetalle = document.querySelector('.personaje-detalle');

  personajedetalle.innerHTML = `
    <h1 class="titulo-seccion">Personajes</h1>

    <div class="personaje-info-completa">
      <img src="${personaje.imagen}" alt="${personaje.nombre}">

      <div class="info-personaje">
        <h2>${personaje.nombre}</h2>
        <p>${personaje.descripcion}</p>
      </div>
    </div>
  `;

  // Cambiar título de pestaña
  document.title = personaje.nombre + " | Acordezón";
