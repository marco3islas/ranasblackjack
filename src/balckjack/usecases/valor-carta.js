
  /**
   * Pide el valor de la carta
   * @param {string} carta - Carta del mazo
   * @returns {number} Retorna el valor de la carta
   */
  export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);

    return (isNaN(valor)) ?
      (valor === 'A') ? 11 : 10
      : parseInt(valor);

  }