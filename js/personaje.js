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

    setSeleccionado(seleccionado){
        this.seleccionado = seleccionado;
    }

    setGanador(haGanado){
        this.ganador = haGanado;
    }
    setVida(vida){
        this.vida = vida;
    }

    atacar() {
        this.vida -= Math.floor(Math.random()*(15-5)+2);
    }
}

let presidente1 = new Presidente (1,"Joe Biden","Estados Unidos","../img/banderaEEUU.jpg");
let presidente2 = new Presidente (1,"Vladimir Putin","Rusia","../img/banderaRusia.jpg");