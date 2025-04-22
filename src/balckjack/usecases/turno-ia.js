import {
  crearCarta,
  puntosParticipantes,
  determinarGanador,
  pedirCarta,
  sumarPuntos,
}
from "./index.js";

/**
 * 
 * @param {Number}puntosMinimos que la computadora necesita para ganar 
 * @param {Number}puntosIa que es el contador de los puntos de la computadora
 * @param {Array<string>}mazo
 */
  // Turno IA
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  export const turnoIa = async (puntosMinimos, mazo) => {
  if (!puntosMinimos) throw new Error('Puntos Minimos son necesarios');
  if (!mazo) throw new Error('El mazo es necesario');

    let puntosIa = 0;

    do {
      const carta = pedirCarta(mazo);
      puntosIa = sumarPuntos(carta, puntosParticipantes.length - 1);
      crearCarta(carta, puntosParticipantes.length - 1);
      if(puntosIa >= 17 && puntosIa <= 20) {
        await delay(1500);
      }else{
        await delay(500); // para que se vea cómo "piensa"
      }
    } while (puntosIa < puntosMinimos && puntosMinimos <= 21);

    determinarGanador();
  };
