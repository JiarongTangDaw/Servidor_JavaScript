export class Personaje {
    //constructor con parámetros
    constructor(nombre,genero,esMago,varita,img) {
        this.nombre = nombre;
        this.genero = genero;
        this.esMago = esMago;
        // Verificar y asignar valores predeterminados a las propiedades de la varita
        for (const key in varita) {
            if (varita[key] === "" || varita[key] == null) {
                varita[key] = "Desconocido";
            }
        }
        this.varita = varita;
        this.img = img!="" ? img : "./defecto.png";
    }
    getNombre() {
        return this.nombre;
    }
    getVarita() {
        return this.varita;
    }
    getGenero() {
        return this.genero;
    }
    getImg() {
        return this.img;
    }
    //método para saber si es mago o no
    isMago() {
        let respuesta = this.esMago? "Es un mago":"No es un mago";
        return respuesta;
    }
}