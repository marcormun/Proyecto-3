class Presidente {
    constructor(id, nombre, nacionalidad,urlBandera){
        this.id = id;
        this.nombre = nombre;
        this.vida = 100;
        this.nacionalidad = nacionalidad;
        this.urlBandera = urlBandera;
    }
}

let presidente1 = new Presidente (1,"Joe Biden","Estados Unidos");
let presidente2 = new Presidente (1,"Vladimir Putin","Rusia");