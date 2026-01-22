class Coche{
    constructor(marca,modelo,anyo){
        this.marca = marca;
        this.modelo = modelo;
        this.anyo = anyo;
    }

    mostrarInfo(){
        return `Marca: ${this.marca} Modelo: ${this.modelo} Año: ${this.anyo}`;            
    }
}

export{Coche};