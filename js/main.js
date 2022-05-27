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