let url = "https://pokeapi.co/api/v2/pokemon?limit=1500";
 // obtener la lista de pokemones
async function obtenerPokemones(url) { //funcion para obtener la lista de pokemones
  try {
    const respuesta = await fetch(url);//hacer fetch a la url
    const datos = await respuesta.json();//obtener los datos
    return datos.results;//retornar la lista de pokemones
  } catch (error) {//manejar errores
    console.log("Error al obtener los pokemones:", error);
    return [];
  }
};
 // obtener la imagen de cada pokemon
async function obtenerImagen(lista) {//funcion para obtener la imagen de cada pokemon
  try {
    let listaConImagen = [];
    for (const poke of lista) {//iterar sobre cada pokemon
        let url = poke.url; //obtener la url de cada pokemon
        const respuesta = await fetch(url);//hacer fetch a la url
        const datos = await respuesta.json();//obtener los datos del pokemon
        listaConImagen.push({...poke, imagen: datos.sprites.other["official-artwork"].front_default});//agregar la imagen al objeto pokemon
    }
    return listaConImagen;//retornar la lista con las imagenes
  } catch (error) {//manejar errores
    console.log("Error al obtener los pokemones:", error);
    return [];
  }
};
 // obtener la lista de pokemones
let listaPokemones = await obtenerPokemones(url);
//obtener la imagen de cada pokemon
let listaConImagen = await obtenerImagen(listaPokemones);

//crear un contenedor para los pokemones
let div = document.createElement("div");
div.id = "contenedor";

//iterar sobre la lista de pokemones con imagen
for (const poke of listaConImagen) {
    //crear un contenedor para cada pokemon 
    let tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-pokemon";
    //crear un elemento para el nombre del pokemon
    let nombre = document.createElement("h2");
    //crear un elemento para la imagen del pokemon
    let imagen = document.createElement("img");
    imagen.src = poke.imagen;
    imagen.alt = poke.name;
    //crear un elemento para la url del pokemon con nombre
    let enlace = document.createElement("a");
    enlace.classList = "enlace-pokemon";
    enlace.href = poke.url;
    enlace.textContent = poke.name;
    nombre.appendChild(enlace);
    //agregar el nombre, la imagen y el enlace al contenedor del pokemon
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(nombre);
    //agregar el contenedor del pokemon al contenedor principal
    div.appendChild(tarjeta);
}

//agregar el contenedor principal al body
let body = document.querySelector("body");
body.appendChild(div);



