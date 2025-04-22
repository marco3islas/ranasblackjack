import {valorCarta, puntosParticipantes, getPuntosHtml} from "../usecases/index.js";


  // Turno 0 = jugador 1, turno ultimo =  IA
export const sumarPuntos = (carta, turno) => {

    puntosParticipantes[turno] += valorCarta(carta);

    getPuntosHtml[turno].innerText = puntosParticipantes[turno];

    return puntosParticipantes[turno];

  }
