import { turnoIa, iniciarJuego, crearMazo, puntosParticipantes, pedirCarta, sumarPuntos} from './index.js';


export const registrarEventos = (btnPedir, btnStop, btnNuevoJuego, tiposdecartas, tiposespeciales) => {

  btnPedir.addEventListener('click', () => {

    const carta = pedirCarta(mazo);

    const puntosJugador = sumarPuntos(carta, 0);

    crearCarta(carta, 0);

    if (puntosJugador > 21) {
      btnPedir.disabled = true;
      turnoIa(puntosJugador,  mazo);
      btnStop.disabled = true;
    } else if (puntosJugador === 21) {
      btnPedir.disabled = true;
      turnoIa(puntosJugador,  mazo);
      btnStop.disabled = true;
    }
  });

  btnStop.addEventListener('click', () => {
    btnPedir.disabled = true;
    turnoIa(puntosParticipantes[0],  mazo);
    btnStop.disabled = true;
  })

  btnNuevoJuego.addEventListener('click', () => {
    iniciarJuego();
    btnPedir.disabled = false;
    btnStop.disabled = false;
    mazo = crearMazo(tiposdecartas, tiposespeciales);
  });
}
