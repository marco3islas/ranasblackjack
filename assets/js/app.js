const miBlackJack= (() => {
  'use strict'

  // Alcanzar 21 puntos o lo mas cercano posible sin pasarse.

  let mazo = [];
  const tipos = ['C', 'D', 'H', 'S'],
    tens = ['J', 'Q', 'K', 'A'],
    btnNuevoJuego = document.getElementById('nuevoJuego'),
    btnPedir = document.getElementById('pedirCarta'),
    btnStop = document.getElementById('stop');
    const barajar = new Audio("assets/sounds/shuffling-cards-01.mp3");
    const burla = new Audio("assets/sounds/funny-chipmunk-laugh-doug-organ-1-00-01.mp3")
    const perdisteSound = new Audio("assets/sounds/frog-laughing-meme.mp3")
    const gansteSound = new Audio("assets/sounds/goodresult.mp3")

  const alerta = document.getElementById('alerta');

  const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHtml = document.querySelectorAll('span');

  let puntosParticipantes = [];

  const iniciarJuego = (numeroJugadores = 2) => {


    puntosParticipantes=[];

    for (let i = 0; i < numeroJugadores; i++) {
      puntosParticipantes.push(0)
    }

    puntosHtml.forEach(elem => elem.innerText = 0);
    divCartasJugadores.forEach(elem => elem.innerHTML = '');


    btnPedir.disabled = true;
    btnStop.disabled = true;
    alerta.innerText = '';
    alerta.classList.remove('ganaste', 'perdiste', 'empate', 'mensaje-rebote', 'mensaje-ganador');

  }

  // Esta funcion hace un mazo nuevo y lo devuelve revuelto o barajado
  const crearMazo = () => {

    mazo = [];
    for (let i = 2; i <= 10; i++) {
      for (let tipo of tipos) {
        mazo.push(`${i}${tipo}`);
      }
    }

    for (let tipo of tipos) {
      for (let ten of tens) {
        mazo.push(`${ten}${tipo}`);
      }
    }
    barajar.play();
    return _.shuffle(mazo)
  }



  // Esta funcion pide una carta del mazo
  const pedirCarta = () => {

    if (mazo.length < 1) {
      alert('No hay mas cartas');
      throw 'No hay mas cartas';
    }

    // Tomar una carta del mazo y esa carta debe ser eliminada del mazo
    return mazo.shift();
  }

  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);

    return (isNaN(valor)) ?
      (valor === 'A') ? 11 : 10
      : parseInt(valor);

  }

  // Turno 0 = jugador 1, turno ultimo =  IA
  const sumarPuntos = (carta, turno) => {

    puntosParticipantes[turno] += valorCarta(carta);

    puntosHtml[turno].innerText = puntosParticipantes[turno];

    return puntosParticipantes[turno];

  }

  const crearCarta = (carta, turno )=> {

      const imgCarta = document.createElement('img')
      imgCarta.src = `../assets/cartas/${carta}.webp`
      imgCarta.classList.add('carta')
      imgCarta.classList.add('carta-animada');
      imgCarta.loading = 'lazy';
      divCartasJugadores[turno].append(imgCarta);

    setTimeout(() => {

      imgCarta.classList.add('carta-flotante');

    }, 600);
  }


  const determinarGanador =() => {

    const [puntosJugador, puntosIa] = puntosParticipantes;

    setTimeout(() => {
      if (puntosJugador === puntosIa) {
        alerta.classList.add('empate')
        alerta.classList.add('mensaje-rebote');
        alerta.innerText = `Es un empate 🦆🦆🦆`
      } else if (puntosJugador > 21) {
        alerta.classList.add('perdiste')
        alerta.classList.add('mensaje-rebote');
        perdisteSound.play();
        alerta.innerText = `IA GANO 🐊🐊🐊`
      } else if (puntosIa > 21) {
        alerta.classList.add('ganaste')
        alerta.classList.add('mensaje-ganador');
        gansteSound.play();
        alerta.innerText = `Player 1 GANO  😎😎😎`
      } else if (puntosJugador < puntosIa) {
        alerta.classList.add('perdiste')
        alerta.classList.add('mensaje-rebote');
        alerta.innerText = `IA  GANO 🐸🐸🐸`
        burla.play();
      }

    }, 100);

  }

  // Turno IA
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const turnoIa = async (puntosMinimos) => {
  let puntosIa = 0;

  do {
    const carta = pedirCarta();
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
  // Eventos

  btnPedir.addEventListener('click', () => {

    const carta = pedirCarta();

    const puntosJugador = sumarPuntos(carta, 0);

    crearCarta(carta, 0);

    if (puntosJugador > 21) {
      btnPedir.disabled = true;
      turnoIa(puntosJugador);
      btnStop.disabled = true;
    } else if (puntosJugador === 21) {
      btnPedir.disabled = true;
      turnoIa(puntosJugador);
      btnStop.disabled = true;
    }
  });

  btnStop.addEventListener('click', () => {

    btnPedir.disabled = true;
    turnoIa(puntosParticipantes[0]);
    btnStop.disabled = true;
  })

  btnNuevoJuego.addEventListener('click', () => {
    iniciarJuego();
    btnPedir.disabled = false;
    btnStop.disabled = false;
    mazo = crearMazo();
  })

  return {
    juegoNuevo: iniciarJuego
  }
})();
