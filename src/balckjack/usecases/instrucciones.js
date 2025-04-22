
const btnCerrar = document.getElementById('cerrarInstrucciones');
const divInstrucciones = document.getElementById('divInstrucciones');

btnCerrar.addEventListener('click', () => {
  divInstrucciones.style.display = 'none';
});

export const cerrarInstrucciones = () => {
  divInstrucciones.style.display = 'block';
}
