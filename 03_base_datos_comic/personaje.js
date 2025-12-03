import { comic } from "./bd.js";

// Leemos el id de la URL (personaje.html?id=1)
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));

if (isNaN(id) || comic.personajes.find(p => p.id === id) === undefined) window.location.href = "index.html";

// Buscamos el personaje
const personaje = comic.personajes.find(p => p.id === id);

// Seleccionamos el contenedor
const personajedetalle = document.querySelector('.personaje-detalle');


  // Todo bien → mostramos el título "Personajes" + la info real del personaje
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

  // Cambiamos el título de la pestaña del navegador
  document.title = personaje.nombre + " | Acordezón";
