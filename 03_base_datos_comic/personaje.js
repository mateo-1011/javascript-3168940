import { comic } from "./bd.js";

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id'));



const Personaje = comic.personajes.find(p => p.id === id);


const personajedetalle = document.querySelector('.personaje-detalle');


console.log(personajedetalle);
personajedetalle.innerHTML = `
img src="${personajes.imagen}">
    <h2>Rafael Orozco Adulto</h2>
    <span class="rol-badge">Personaje Principal</span>
    <p>Lorem ipsum dolor sit amet</p>
    <div class="info-extra">
      <p><strong>Rol en la historia:</strong> Rafael en su versión adulta. Regresa al pasado para guiar a su yo infantil y revivir los momentos que forjaron su leyenda musical.</p>
      <p><strong>Importancia:</strong> Representa la experiencia, el éxito alcanzado y el legado eterno del Binomio de Oro.</p>
    </div> 

`;
