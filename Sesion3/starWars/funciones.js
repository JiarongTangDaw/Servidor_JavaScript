let url = 'https://swapi.dev/api/people/';

// Función para obtener los datos de la API
async function obtenerDatos(url) {
    try {
        let respuesta = await fetch(url); // Realiza la solicitud a la API
        let datos = await respuesta.json();// Convierte la respuesta a JSON
        return datos.results;// Devuelve la lista de personajes
    } catch (error) {// Manejo de errores
        console.log('Error al obtener los datos:', error);// Muestra el error en la consola
        return [];// Devuelve una lista vacía en caso de error
    }
}
// Almacenar los datos 
let listaPersonajes = await obtenerDatos(url);

localStorage.clear(); // Limpiar el localStorage antes de guardar nuevos datos

// Guardar cada personaje en el localStorage
for (const personaje of listaPersonajes) {
    // Usar el nombre del personaje como clave y el objeto completo como valor
    localStorage.setItem(personaje.name, JSON.stringify(personaje));
}
