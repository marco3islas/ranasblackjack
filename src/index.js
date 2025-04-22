import _ from 'underscore';

import {
  crearMazo,
  pedirCarta,
  turnoIa,
  crearCarta,
  puntosParticipantes,
  iniciarJuego,
  sumarPuntos,
  mostrarInstrucciones
} 
from '../src/balckjack/usecases/index.js';

const miBlackJack= (() => {
  'use strict'

  // Alcanzar 21 puntos o lo mas cercano posible sin pasarse.

  let mazo = [];
  const tiposdecartas = ['C', 'D', 'H', 'S'],
  tiposespeciales = ['J', 'Q', 'K', 'A'],
  btnNuevoJuego = document.getElementById('nuevoJuego'),
  btnPedir = document.getElementById('pedirCarta'),
  btnStop = document.getElementById('stop'),
  btnInstrucciones = document.getElementById('instrucciones');
  const barajar = new Audio("/assets/sounds/shuffling-cards-01.mp3");

  const alerta = document.getElementById('alerta');



  // Esta funcion hace un mazo nuevo y lo devuelve revuelto o barajado

  mazo = crearMazo(tiposdecartas, tiposespeciales);

  // Eventos

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

  btnInstrucciones.addEventListener('click', () => {
    mostrarInstrucciones();
  });

  btnStop.addEventListener('click', () => {

    btnPedir.disabled = true;
    turnoIa(puntosParticipantes[0],  mazo);
    btnStop.disabled = true;
  })

  btnNuevoJuego.addEventListener('click', () => {
    iniciarJuego(2, btnPedir, btnStop, alerta);
    btnPedir.disabled = false;
    btnStop.disabled = false;
    mazo = crearMazo(tiposdecartas, tiposespeciales);
    barajar.play();
  })

  return {
    juegoNuevo: iniciarJuego
  }
})();
