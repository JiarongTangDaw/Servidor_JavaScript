const url = "https://swapi.dev/api/people";

// Función para obtener los datos de la API
async function obtenerDatos(url) {
    try {
        let respuesta = await fetch(url); // Realiza la solicitud a la API
        let datos = await respuesta.json();// Convierte la respuesta a JSON
        return datos;// Devuelve la lista de personajes
    } catch (error) {// Manejo de errores
        console.log('Error al obtener los datos:', error);// Muestra el error en la consola
        return [];// Devuelve una lista vacía en caso de error
    }
}


class Personaje{
    constructor(name,lista){
        this.name = name;
        this.compartePeli = lista;
    }

    pintarPersonajePeli(){
        let tabla = document.createElement('table');
        let cabecera = document.createElement('tr');
        let filaCabecera = document.createElement('th');
        filaCabecera.textContent = `Personaje con los que comparte Pelicula ${this.name}`;
        cabecera.appendChild(filaCabecera);
        tabla.appendChild(cabecera);

        let cuerpo = document.createElement('tr');
        for (const persona of this.compartePeli) {
            let filaCuerpo = document.createElement('td');
            filaCuerpo.textContent = persona;
            cuerpo.appendChild(filaCuerpo);
        }

        tabla.appendChild(cuerpo);
        return tabla;
    }
}

let listaPersonajes = await obtenerDatos(url);
let personajes = [];
let error = '';

if (listaPersonajes.length == 0) {
    error = 'No se ha podido conectar a la api'
} else {
    for (const personaje of listaPersonajes.results) {
        let compartePeli = [];
        for (const urlPeli of personaje.films) {
            let datosPeli = await obtenerDatos(urlPeli);
            for (const urlCharacter of datosPeli.characters) {
                let datosCharacter = await obtenerDatos(urlCharacter);
                let nameChar = datosCharacter.name;
                if(!compartePeli.includes(nameChar) && nameChar != personaje.name){
                    compartePeli.push(nameChar);
                }
            }
        }
        let persona = new Personaje(personaje.name, compartePeli);
        personajes.push(persona);
    }
}



let body = document.querySelector('body');

// for (const personaje of personajes) {
//     body.appendChild(personaje.pintarPersonajePeli());
// }

// body.removeChild(body.firstChild);

// Forzar renderizado inmediato
if(error == ''){
    setTimeout(() => {
    body.innerHTML = ''; // Limpiar mensaje
    for (const personaje of personajes) {
        body.appendChild(personaje.pintarPersonajePeli());
    }
}, 100);
}else{
    body.innerHTML = ''; // Limpiar mensaje
    let h1 = document.createElement('h1');
    h1.textContent = error;
    h1.style.color = 'red';
    body.appendChild(h1);
}
