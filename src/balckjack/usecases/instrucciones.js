const btnCerrar = document.getElementById('cerrarInstrucciones');
const divInstrucciones = document.getElementById('divInstrucciones');
export const mostrarInstrucciones = () => {
    if (divInstrucciones.style.display === 'none'){
        divInstrucciones.style.display = 'block';
    } else {
        divInstrucciones.style.display = 'none';
    }

    btnCerrar.addEventListener('click', () => {
        divInstrucciones.style.display = 'none';
    });
}
