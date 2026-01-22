let url = "https://rickandmortyapi.com/api/character";

// Función para llamar a la API y obtener los datos
async function llamarApi(url) {
    try {// Realiza la solicitud a la API
        let response = await fetch(url);
        let data = await response.json();
        return data;
    } catch (error) {// Manejo de errores
        alert("Error en el fech" + error);
        return [];
    }  
}

// Función para guardar los datos en localStorage
function guardarLocalhost(item,dato) {
    // Elimina el ítem si ya existe
    localStorage.removeItem(item);
    // Guarda el dato en localStorage
    localStorage.setItem(item, JSON.stringify(dato));
}

// Función para sacar los datos en localStorage
function sacarLocalhost(item) {
    // saca los datos del item de localstorage
    let datos = localStorage.getItem(item);
    //comporbar si item existe
    if(datos != null){//si existe
        //parsea los datos sacados a JSON
        let resultado = JSON.parse(datos);
        //retorna los datos parseados
        return resultado;
    }else{//no existe
        return datos;
    }
}

//funcion para cargar todos los datos de la api
async function cargarDatos(url){
    let datos = []; // objeto para guardar los personajes
    let next = url; // variable para controlar la paginacion
    let respuesta = {}; // objeto par alamacenar la respuesta de la llamada a la api
    //bucle que garantiza su ejecucion al menos una vez para la obtencion de los datos de api
    do{
        // llama a la api con la url actual 
        respuesta = await llamarApi(next);
        //actualiza next con la url de la siguiente pagina
        next = respuesta.info.next;
        // recorre los elementos de la pagina actual para guardarlos en datos
        for (const element of respuesta.results) {
            datos.push(element);
        }
        
    }while(next != null) // continua siempre que next no sea null
    
    // retorna los datos acumulados
    return datos;
}

//muestra lista de personajes
function mostrar() {
    //obtenemos lista de personajes desde localstore
    let listaPersonajes = sacarLocalhost('perRicky');

    // obtenemos el contenedor main donde se muestra los personajes
    let main = document.getElementById('listaPersonajes');

    //comporbar que existe personajes cargados
    if(listaPersonajes != null){ // si hay personajes

        //iteramos sobre cada personaje de la lista
        for (const per of listaPersonajes) {

            //creacion de contenedor para cada ficha de persoanje
            let div = document.createElement('div');
            div.className = 'fichaPersonaje';
            
            //agregar un evento al hacer click
            div.addEventListener('click',function () {
                //guardar el personaje seleccionado en localstorage
                guardarLocalhost('perSelected',per);
                //redirige a la pagina del personaje
                window.location.href = "http://localhost:3000/RickMorty/personaje";
            })

            // aplicacion de estilo especial
            if(per.species === "Human"){ // si es humano
                // cambia el color de background a rojo
                div.style.backgroundColor = "#e74c3c";
            }

            //crear imagen de personaje
            let img = document.createElement('img');
            img.src = per.image; //URL de la imagen
            img.alt = per.name; // Texto alternativo con nombre de personaje

            // titulo con el nombre del personaje
            let h2 = document.createElement('h2');
            h2.textContent = per.name;

            //agragar los elementos al div
            div.appendChild(img); // agregar la imagen
            div.appendChild(h2); // agregar el nombre

            //agregar la ficha del personaje al main
            main.appendChild(div);
        }
    }else{ // no hay personajes
        main.innerHTML = "<h2> No se ha podido cargar los datos de Ricky y Morty</h2>";
    }
    
}

//funcion para mostrar los datos de un personaje en especifico
function mostrarPersonaje() {
    //obtener los datos del personaje desde localStorage
    let per = sacarLocalhost('perSelected');

    //obtener el contenedor main donde se vera los detalles del personaje
    let main = document.getElementById('personaje');

    //verificar si existe un personaje seleccionado
    if (per != null) { //si existe

        //crea el contenedor para el personaje
        let div = document.createElement('div');
        div.className = 'personaje';

        //aplicar color especial segun condicion
        if(per.species === "Human"){ //es un humano
            //cambia a rojo color de background
            div.style.backgroundColor = "#e74c3c";
        }

        //crear la imagen para el personaje
        let img = document.createElement('img');
        img.src = per.image; // URL de la imagen
        img.alt = per.name; //texto alternativo con nombre de personjae

        //titulo con el nombre del personaje
        let h2 = document.createElement('h2');
        h2.textContent = per.name;

        // Crear tabla para almacenar en que episodios aparece el personaje
        let tabla = document.createElement('table');

        // Crear cabecera (thead)
        let thead = document.createElement('thead');
        let filaCabecera = document.createElement('tr');

        // Añadir celdas de cabecera
        let th1 = document.createElement('th');
        th1.textContent = 'Episodios en los que aparece';
        
        //agregar los elementos a la cabecera de la tabla
        filaCabecera.appendChild(th1);
        thead.appendChild(filaCabecera);

        //agregar cabecera a la tabla
        tabla.appendChild(thead);

        //Crear cuerpo (tbody) de la tabla
        let tbody = document.createElement('tbody');
        
        //iteracion sobre las url de los episodios
        for (const url of per.episode) {
            // crear fila para el episodio
            let filaDatos = document.createElement('tr');

            // dividos la url del episodio por '/'
            let partesUrl = url.split('/');
            // sacamos el ultimo elemento de la url partida par sacar num de cap
            let numCap = partesUrl[partesUrl.length - 1];

            //crear celda con enlace al episodio
            let celda1 = document.createElement('td');
            
            //creacion del enlace
            let a = document.createElement('a');
            a.textContent = 'Episodio ' + numCap; //episodio con su numero
            a.href = url; //enlace a la URL del episodo

            //agregar los elementos a la fila de datoa
            celda1.appendChild(a);
            filaDatos.appendChild(celda1);

            //agregar la fila de datos al cuerpo de la tabla
            tbody.appendChild(filaDatos);
        }

        //agregar el cuerpo de la tabla a la tabla
        tabla.appendChild(tbody);
        
        //agregar los elementos al div que contiene los detallaes del personaje
        div.appendChild(img); //agregar img
        div.appendChild(h2); //agregar nombre personaje
        div.appendChild(tabla); //agregar tabla de episodios

        //agregar el div al contenedor main
        main.appendChild(div);
    } else { //no hay personaje seleccionado
        main.innerHTML = "<h2> No has seleccionado ningun personaje</h2>";
    }
    
}

//carga de todos los datos de la api
let datos = await cargarDatos(url);

//guardado de los datos obtenidos en localstorage
guardarLocalhost('perRicky',datos);

//detectar la pagina en la que nos encontramos
let urlActual = window.location.href;

//comprobar en que pagina nos encontramos
if (urlActual.includes('personaje')) { //pagina de detalles del personaje
    //mostrar detalles del personaje seleccionado
    mostrarPersonaje();
}else{ //pagina principal con listado de todos los personajes
    //mostrar listado completo de personajes
    mostrar();
}




