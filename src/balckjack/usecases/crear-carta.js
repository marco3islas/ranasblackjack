import { getDivCartasJugadores } from "./index.js";

/**
 * @param {String} carta
 * @returns {HTMLImageElement} imagen de retorno
*/

  export const crearCarta = (carta, turno )=> {
     if (!carta){
    throw new Error('La carta es un argumento obligatorio.')
  }

      const imgCarta = document.createElement('img')
      imgCarta.src = `../assets/cartas/${carta}.webp`
      imgCarta.classList.add('carta')
      imgCarta.classList.add('carta-animada');
      imgCarta.loading = 'lazy';
      getDivCartasJugadores[turno].append(imgCarta);

    setTimeout(() => {

      imgCarta.classList.add('carta-flotante');

    }, 600);
  }
