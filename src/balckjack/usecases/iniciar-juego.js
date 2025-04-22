import { getDivCartasJugadores, getPuntosHtml, puntosParticipantes } from "./estado-juego";

  /**
   * Inicia un nuevo juego
   * @param {number} numeroJugadores - número de jugadores
   */
  export const iniciarJuego = (numeroJugadores = 2, btnPedir, btnStop, alerta) => {

    puntosParticipantes.length=0;

    for (let i = 0; i < numeroJugadores; i++) {
      puntosParticipantes.push(0)
    }

    // actualizar el Dom dinámicamente

    const puntosHtml = getPuntosHtml;
    const divCartasJugadores = getDivCartasJugadores;

    puntosHtml.forEach(elem => elem.innerText = 0);
    divCartasJugadores.forEach(elem => elem.innerHTML = '');


    btnPedir.disabled = true;
    btnStop.disabled = true;
    alerta.innerText = '';
    alerta.classList.remove('ganaste', 'perdiste', 'empate', 'mensaje-rebote', 'mensaje-ganador');

  }
