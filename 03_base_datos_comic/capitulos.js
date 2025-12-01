import { comic } from "./bd.js";
console.log(comic.capitulos);

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));
console.log("el id del capitulo es", id);



const Capituloscomic = comic.capitulos.find(cap => cap.id === id);


const capitulos = document.querySelector('.container-capitulo');

console.log(capitulos);


capitulos.innerHTML = `
<h1 class="titulo-capitulo">${Capituloscomic.nombre}</h1>
      <h2 class="nombre-capitulo">El Sueño en Becerril</h2>

      <div class="video-container">
        <iframe src="https://www.youtube.com/watch?v=5B3JGUXSRJo" 
                title="Capítulo 1 - El Sueño en Becerril" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
      </div>

      <div class="info-capitulo">
        <p><strong>${Capituloscomic.descripcion}</p>
        <p>Rafael adulto regresa mágicamente a Becerril, su pueblo natal. El sonido de un acordeón lejano lo transporta al pasado, donde se encuentra con su versión infantil: un niño tímido pero lleno de sueños y pasión por la música.</p>
        <p>Juntos recorren los recuerdos: las primeras notas en el acordeón, el miedo a cantar en público y el descubrimiento de que su voz tiene el poder de emocionar y unir corazones. Este capítulo muestra el origen puro del talento de Rafael Orozco.</p>
      </div>
`;
