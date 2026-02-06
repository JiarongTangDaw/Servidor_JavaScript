import { Nave } from "./nave";
import { Pelicula } from "./pelicula";

export class Personaje {
    nombre: string = "";
    pelis: Pelicula[]  = [];
    naves: Nave[] = [];
}