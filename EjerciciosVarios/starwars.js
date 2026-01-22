import { sw } from "./datos.js";

// copia el array de solo las naves
let lista = [...sw['results']];
// saco el array de naves donde pasajeros > 100
let nueva = lista.filter(nave => nave.passengers > 100);
// mapeo el array para que solo salga el nombre y el modelo
let listaFinal = nueva.map(nave => ({name: nave.name, modelo: nave.model}));

// muestra por consola lista de naves mapeada para mostra solo nombre y num pasajeros
console.log(lista.map(nave => ({name: nave.name, passengers: nave.passengers})));

// muestro por consola
console.log(listaFinal);
// saco array de naves donde pasajeros < 100 o no definido
let nueva2 = lista.filter(nave => (nave.passengers <= 100) || nave.passengers == "unknown");
// mapaeo el array para que solo salga nombre y modelo
let final = nueva2.map(nave => ({nombre:nave.name, modelo: nave.model}));
// muestro por consola
console.log(final);
