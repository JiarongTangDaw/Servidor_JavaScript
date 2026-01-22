import { Coche } from "./Coche.js";

class CocheElectrico extends Coche{
    constructor(marca,modelo,anyo,autonomia){
        super(marca,modelo,anyo);
        this.autonomia = autonomia;
    }
    mostrarInfo(){
        return `Marca: ${this.marca} Modelo: ${this.modelo} Año: ${this.anyo} Autonomia: ${this.autonomia} km`;
    }
}

export {CocheElectrico};