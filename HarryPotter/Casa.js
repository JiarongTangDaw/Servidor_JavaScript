export class Casa {
    //constructor con parámetros
    constructor(nombreCasa,listaPersonajes) {
        this.nombreCasa = nombreCasa;
        this.listaPersonajes = listaPersonajes;
    }
    getNombreCasa() {
        return this.nombreCasa;
    }
    getListaPersonajes() {
        return this.listaPersonajes;
    }
    setListaPersonajes(newPersonaje) {
        this.listaPersonajes.push(newPersonaje);
    }
    //método para enumerar personajes
    enumerarPersonajes() {
        return this.listaPersonajes.length;
    }
    //método para enumerar personajes masculinos
    enumerarPersonajesMasculinos(){
        return this.listaPersonajes.filter(personaje => personaje.genero == "male").length;
    }
}