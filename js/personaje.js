//Clase Presidente donde se almacenarán los datos del ganador, el personaje seleccionado y se restará la vida
class Presidente {
    constructor(id, nombre, nacionalidad,urlBandera){
        this.id = id;
        this.nombre = nombre;
        this.vida = 100;
        this.nacionalidad = nacionalidad;
        this.urlBandera = urlBandera;
        this.seleccionado = false;
        this.ganador = false
    }
    //Funcion para elegir personaje
    setSeleccionado(seleccionado){
        this.seleccionado = seleccionado;
    }
    //Funcion para almacenar el ganador
    setGanador(haGanado){
        this.ganador = haGanado;
    }
    //Funcion para hacer reset de la vida
    setVida(vida){
        this.vida = vida;
    }
    //Funcion para atacar
    atacar() {
        this.vida -= Math.floor(Math.random()*(15-5)+2);
    }
}

let presidente1 = new Presidente (1,"Joe Biden","Estados Unidos","../img/banderaEEUU.jpg");
let presidente2 = new Presidente (1,"Vladimir Putin","Rusia","../img/banderaRusia.jpg");