let urlHP = "https://hp-api.onrender.com/api/characters";

// Importación de clases
import { Casa } from "./Casa.js";
import { Personaje } from "./Personaje.js";


// Función para llamar a la API y obtener los datos
async function llamarApi(url) {
    try {// Realiza la solicitud a la API
        let response = await fetch(url);
        let data = await response.json();
        return data;
    } catch (error) {// Manejo de errores
        console.error("Error fetching data:", error);
        return [];
    }  
}

// Función para pintar los personajes en el DOM
function pintarPersonajes(listaPersonajes) {
    let listaPersonajesDiv = document.getElementById("listaPersonajes");
    let contenedor = document.createElement("div");
    contenedor.className = "contenedor-personajes";

    // Pintar cada personaje
    for (const personaje of listaPersonajes) {
        // Crear elementos HTML para cada personaje
        let div = document.createElement("div");
        div.className = "personaje";
        //crear imagen y nombre
        let img = document.createElement("img");
        img.src = personaje.getImg();
        let h3 = document.createElement("h3");
        h3.className = "nombre";
        h3.textContent = personaje.getNombre();

        // Añadir evento click para mostrar detalles del personaje
        div.appendChild(img);
        div.appendChild(h3);

        //crear evento click
        div.addEventListener("click", function() {
            let nombre = personaje.getNombre();
            let varita = personaje.getVarita();
            let mago = personaje.isMago();
            alert(`Nombre: ${nombre}\nMago: ${mago}\nVarita: \n Madera - ${varita.wood},\n Núcleo - ${varita.core},\n Longitud(cm) - ${varita.length}`);
        });
        //añadir al contenedor de personajes
        contenedor.appendChild(div);
    }
    //añadir al div principal de personajes
    listaPersonajesDiv.appendChild(contenedor);
}

//carga de todos los datos de la api
let datos = await llamarApi(urlHP);

// Array para las casas
let casas = [
    new Casa("Gryffindor",[]),
    new Casa("Hufflepuff",[]),
    new Casa("Ravenclaw",[]),
    new Casa("Slytherin",[]),
    new Casa("Homeless",[])
]

// Procesar los datos y asignar personajes a sus casas
for (const personaje of datos) {
    let nombre = personaje.name || "Desconocido";
    let genero = personaje.gender || "Desconocido";
    let esMago = personaje.wizard || false;
    let varita = personaje.wand || {};
    let img = personaje.image || "";

    // Crear instancia de Personaje
    let newPersonaje = new Personaje(nombre,genero,esMago,varita,img);
    let casa = null;
    // Asignar personaje a la casa correspondiente
    if(personaje.house == ""){
        let house = "Homeless";
        casa = casas.find(casa => casa.getNombreCasa() === house); 
    }else{
        casa = casas.find(casa => casa.getNombreCasa() === personaje.house);
    }
    // Añadir personaje a la casa
    casa.setListaPersonajes(newPersonaje);
}

// Obtener el select del DOM
let selectCasa = document.getElementById("casas");
// Rellenar el select con las casas
for (const casa of casas) {
    let option = document.createElement("option");
    option.value = casa.getNombreCasa();
    option.textContent = casa.getNombreCasa();
    selectCasa.appendChild(option);
}

// Manejo del evento change del select
selectCasa.addEventListener("change", function() {
    let casaSeleccionada = this.value;
    let listaPersonajesDiv = document.getElementById("listaPersonajes");
    //limpiar div antes de pintar
    listaPersonajesDiv.innerHTML = "";

    //si hay una casa seleccionada
    if(casaSeleccionada !== ""){
        //buscar la casa seleccionada
        let casa = casas.find(casa => casa.getNombreCasa() === casaSeleccionada);

        //pintar el nombre de la casa
        let h2 = document.createElement("h2");
        h2.textContent = casaSeleccionada;
        //añadir evento click para mostrar número de personajes y masculinos
        h2.addEventListener("click", function() {
            let numTotal = casa.enumerarPersonajes();
            let numMasculinos = casa.enumerarPersonajesMasculinos();
            alert(`En la casa ${casaSeleccionada} hay ${numTotal} personajes, de los cuales ${numMasculinos} son masculinos.`);
        });
        //añadir el h2 al div
        listaPersonajesDiv.appendChild(h2);
         //pintar los personajes de la casa seleccionada
        pintarPersonajes(casa.getListaPersonajes());
    };
    
});

