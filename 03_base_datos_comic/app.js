import { comic } from "./bd.js";

// 1. GENERAR EL HERO COMPLETO
const hero = document.querySelector(".hero");
hero.innerHTML = `
  <!-- FONDO QUE CAMBIA -->
  <div class="fondo-hero">
    <img src="img/hero1.jpg" class="fondo-img activa">
    <img src="img/hero2.jpg" class="fondo-img">
    <img src="img/hero3.jpg" class="fondo-img">
  </div>

  
  <div class="overlay"></div>
  <div class="hero-content">
    <img src="img/logo acordezon.png" alt="Logo Acordezón" class="logo-hero" />
    <h1>${comic.nombreComic}</h1>
    <p>Un cómic interactivo que revive el legado de Rafael Orozco y el poder del vallenato.</p>
    <a href="#sinopsis" class="btn">Descubre más</a>
  </div>
`;

// 2. GENERAR LA SINOPSIS
const sinopsisSection = document.querySelector("#sinopsis");
sinopsisSection.innerHTML = `
  <div class="container">
    <h2>Sinopsis</h2>
    <p>${comic.sipnosis}</p>
  </div>
`;

// 3. GENERAR PERSONAJES
const personajesSection = document.querySelector("#personajes");
personajesSection.innerHTML = `
  <div class="container">
    <h2>Personajes</h2>
    <div class="gallery"></div>
  </div>
`;

// Ahora sí existe el .gallery, lo usamos
const gallery = document.querySelector("#personajes .gallery");
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

// 4. GENERAR CAPÍTULOS
const capitulosSection = document.querySelector("#capitulos");
capitulosSection.innerHTML = `
  <div class="container">
    <h2>Capítulos</h2>
    <div class="chapters"></div>
  </div>
`;

// Ahora sí existe el .chapters
const chapters = document.querySelector("#capitulos .chapters");
comic.capitulos.forEach(cap => {
  const link = document.createElement("a");
  link.href = `capitulos.html?id=${cap.id}`;
  link.className = "chapter-link";

  const div = document.createElement("div");
  div.className = "chapter-card";
  div.innerHTML = `
    <div class="chapter-thumb">
      <img src="${cap.portada}" alt="${cap.nombre}">
    </div>
    <div class="chapter-content">
      <h3>Capítulo ${cap.id}</h3>
      <p>${cap.nombre}</p>
    </div>
  `;

  link.appendChild(div);
  chapters.appendChild(link);
});





// CARRUSEL SIMPLE (3 imágenes, cambia cada 5 segundos)
let foto = 0;
const fotos = document.querySelectorAll(".fondo-img");

function cambiarFoto() {
  fotos.forEach(img => img.classList.remove("activa"));
  foto = (foto + 1) % fotos.length;
  fotos[foto].classList.add("activa");
}

// Cambiar cada 5 segundos
setInterval(cambiarFoto, 5000);







