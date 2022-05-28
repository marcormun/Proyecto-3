let miLuchador = 0;
const cambiarPantalla = (numPantalla) => {

    let pantallaCambio = "pantalla" + numPantalla;
    let arrPantallas = ["pantalla1", "pantalla2", "pantalla3", "pantalla4"];

    //Le decimos a filter que si encuentra el valor que le pasamos en el array, no lo incluya
    arrPantallas = arrPantallas.filter(val => !pantallaCambio.includes(val));
    //Le ponemos display "block" a la pantalla deseada
    document.getElementById(pantallaCambio).style.display = "flex";
    //Recorremos el arrayPantallas para poner el display:none
    for(let pantalla of arrPantallas) {
        document.getElementById(pantalla).style.display = "none";
    }
}
const pjSeleccionado = idPersonaje => {
    miLuchador = idPersonaje;
    const BIDEN = '<img src="img/biden.png" alt="" class="tamañoImagen">';
    const PUTIN = '<img src="img/putin.png" alt="" class="tamañoImagen">';
    if(idPersonaje===1){
        document.querySelector("#luchador1").innerHTML = BIDEN;
        document.querySelector("#luchador2").innerHTML = PUTIN;
        presidente1.seleccionado = true;
    }else{
        document.querySelector("#luchador1").innerHTML = PUTIN;
        document.querySelector("#luchador2").innerHTML = BIDEN;
        presidente2.seleccionado = true;
    }
}
const luchar = () => {
    presidente1.atacar()
    presidente2.atacar()

    if(presidente1.vida<=0){
        cambiarPantalla(4);
    }
}
// const mostrarGanador 