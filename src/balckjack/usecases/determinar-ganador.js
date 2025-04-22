import { 
  burla,
  ganasteSound,
  perdisteSound,
  puntosParticipantes,
} from "./index.js";

  export const determinarGanador =() => {

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
        ganasteSound.play();
        alerta.innerText = `Player 1 GANO  😎😎😎`
      } else if (puntosJugador < puntosIa) {
        alerta.classList.add('perdiste')
        alerta.classList.add('mensaje-rebote');
        alerta.innerText = `IA  GANO 🐸🐸🐸`
        burla.play();
      }

    }, 100);

  }
