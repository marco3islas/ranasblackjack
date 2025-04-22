
  /**
   * Pide una carta del mazo
   * @param {Array <string>} mazo - El mazo de cartas
   * @returns {string} Retorna una carta del mazo
   */
  export const pedirCarta = (mazo) => {
    if (mazo.length < 1) {
      alert('No hay mas cartas');
      throw 'No hay mas cartas';
    }

    // Tomar una carta del mazo y esa carta debe ser eliminada del mazo
    return mazo.shift();
  }