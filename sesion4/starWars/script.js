let url = 'https://swapi.dev/api/people/';

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

//constructor de personaje
function Personaje (name,naves){
    this.name = name;
    this.naves = naves;
    this.pintarNaves = function(){ //metodo para pintar las naves
        let txt = "";
        if(this.naves.length == 0 ){ //si no tiene naves
            txt = "No ha conducino ninguna nave";
        }else{ //si tiene naves
            //recorremos el array de naves
            for (let index = 0; index < this.naves.length; index++){
                if(index == this.naves.length -1){
                    txt += this.naves[index];
                }else{
                    txt += this.naves[index] + ", ";
                }
            }
        }
        return (this.name + " se monto en: " + txt);
    }
}

// Almacenar los datos 
let listaPersonajes = await obtenerDatos(url);
let personajes = [];

for (const persona of listaPersonajes.results) {
    let naves = [];
    for (const urlV of persona.vehicles) {
        let nameNave = await obtenerDatos(urlV);
        naves.push(nameNave.name);
    }

    for (const urlS of persona.starships) {
        let nameNave = await obtenerDatos(urlS);
        naves.push(nameNave.name);
    }

    let personaje = new Personaje(persona.name, naves);
    personajes.push(personaje);
}

for (const p of personajes) {
    console.log(p.pintarNaves());
}