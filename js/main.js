const BIDEN = '<img src="img/biden.png" alt="" class="tamañoImagen">';
const PUTIN = '<img src="img/putin.png" alt="" class="tamañoImagen">';
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
    if(idPersonaje===1){
        document.querySelector("#luchador1").innerHTML = BIDEN;
        document.querySelector("#luchador2").innerHTML = PUTIN;
        presidente1.setSeleccionado(true);
    }else{
        document.querySelector("#luchador1").innerHTML = PUTIN;
        document.querySelector("#luchador2").innerHTML = BIDEN;
        presidente1.setSeleccionado(false);
    }
}
const luchar = () => {
    let contenedor = document.getElementById("pantalla4");
    presidente1.atacar();
    presidente2.atacar();
    if(presidente1.vida<=0){
        presidente2.ganador = true;
        document.getElementById("pantalla4").style.backgroundImage = `url(${presidente2.urlBandera})`;
        document.querySelector("#pantalla4").innerHTML = PUTIN;
        let textoGanador = document.createElement("p");
        textoGanador.innerText = "Putin wins"
        textoGanador.style.fontSize = "6em";
        contenedor.appendChild(textoGanador);
        cambiarPantalla(4);
    }else if(presidente2.vida<=0){
        presidente1.ganador = true;   
        document.getElementById("pantalla4").style.backgroundImage = `url(${presidente1.urlBandera})`;
        document.querySelector("#pantalla4").innerHTML = BIDEN;
        let textoGanador = document.createElement("p");
        textoGanador.innerText = "Biden wins"
        textoGanador.style.fontSize = "6em";
        contenedor.appendChild(textoGanador);
        cambiarPantalla(4);
        
        
    }
    document.getElementById("vidaDisponible1").style.width = `${presidente1.vida}`+"%";
    document.getElementById("vidaDisponible2").style.width = `${presidente2.vida}`+"%";
}

const restart = () => {
    presidente1.setVida(100);
    presidente2.setVida(100);
    document.getElementById("vidaDisponible1").style.width = `${presidente1.vida}`+"%";
    document.getElementById("vidaDisponible2").style.width = `${presidente2.vida}`+"%";
    window.location.reload(1);
    
}