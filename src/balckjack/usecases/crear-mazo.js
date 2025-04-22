import _ from 'underscore';


/** 
 * Crea un mazo de cartas
 * @param {Array <string>} tiposdecartas - Ejemplo ['C', 'D', 'H', 'S'] Arreglo de tipos de cartas
 * @param {Array <string>} tiposespeciales - Ejemplo ['J', 'Q', 'K', 'A'] Arreglo de cartas especiales
 * @returns {Array <string>} Retorna un mazo de cartas
 */ 

export const crearMazo = (tiposdecartas, tiposespeciales) => {

    if(!tiposdecartas || !tiposespeciales) {
      throw new Error('tiposdecartas y tiposespeciales son necesarios');
    }

    if(tiposdecartas.length < 1 || tiposespeciales.length < 1) throw new Error('Debe ser un arreglo de string')

let mazo = [];

    for (let i = 2; i <= 10; i++) {
      for (let tipo of tiposdecartas) {
        mazo.push(`${i}${tipo}`);
      }
    }

    for (let tipo of tiposdecartas) {
      for (let ten of tiposespeciales) {
        mazo.push(`${ten}${tipo}`);
      }
    }
    return _.shuffle(mazo)
  }
