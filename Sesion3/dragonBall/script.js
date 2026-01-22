let url = "https://dragonball-api.com/api/characters";

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

// Función para guardar los datos en localStorage
function guardarLocalhost(lista) {
    // Elimina el ítem si ya existe
    localStorage.removeItem("personajes");
    // Guarda la lista de personajes en localStorage
    localStorage.setItem("personajes", JSON.stringify(lista.items));
}

// Función para guardar el último ID seleccionado
function ultimoId(id){
    localStorage.setItem("ultimoId", id);// Guarda el ID del último personaje seleccionado
}

// Función para mostrar la lista de personajes
function mostrar() { 
    let lista = localStorage.getItem("personajes");// Obtiene la lista de personajes desde localStorage
    let personajes = JSON.parse(lista);// Parsea la lista de personajes
    let main = document.getElementById("main-content");// Obtiene el contenedor principal
    for (const per of personajes) {// Itera sobre cada personaje
        let div = document.createElement("div");// Crea un contenedor para el personaje
        div.className = "personaje";// Asigna una clase al contenedor
        div.addEventListener("click", function() {// Agrega un evento de clic al contenedor
            ultimoId(per.id);// Guarda el ID del personaje seleccionado
            window.location.href = "personaje.html";// Redirige a la página de detalles del personaje
        });
        // Crea y agrega los elementos del personaje al contenedor
        let img = document.createElement("img");
        img.className = "img-personaje";
        img.src = per.image;
        let h2 = document.createElement("h2");
        h2.textContent = per.name;
        let p = document.createElement("p");
        p.textContent = per.species;
        div.appendChild(img);
        div.appendChild(h2);
        main.appendChild(div);
        
    }
}

// Función para encontrar un personaje por su ID
function encontrarPersonajePorId(id, lista){
    for (const per of lista) {// Itera sobre la lista de personajes
        if(per.id == id){// Compara el ID del personaje con el ID proporcionado
            return per;
        }
    }
    return null;// Retorna null si no se encuentra el personaje
}

// Función para mostrar los detalles de un personaje
function mostrarPersonaje(){
    let main = document.getElementById("main-content2");// Obtiene el contenedor principal
    let id = localStorage.getItem("ultimoId");// Obtiene el ID del último personaje seleccionado
    let lista = localStorage.getItem("personajes");// Obtiene la lista de personajes desde localStorage
    let listaPersonajes = JSON.parse(lista);// Parsea la lista de personajes
    let personaje = encontrarPersonajePorId(id, listaPersonajes); // Encuentra el personaje por su ID
    if(personaje != null){// Si se encuentra el personaje, muestra sus detalles
        let div = document.createElement("div");
        div.className = "personaje-detalle";
        let img = document.createElement("img");
        img.className = "img-personaje-detalle";
        img.src = personaje.image;
        let h2 = document.createElement("h2");
        h2.textContent = personaje.name;
        let pRaza = document.createElement("p");
        pRaza.innerHTML = `<b>Raza:</b> ${personaje.race}`;
        let pGenero = document.createElement("p");
        pGenero.innerHTML = `<b>Género:</b> ${personaje.gender}`;
        let pKi = document.createElement("p");
        pKi.innerHTML = `<b>Ki:</b> ${personaje.ki}`;
        let pMaxKi = document.createElement("p");
        pMaxKi.innerHTML = `<b>Max Ki:</b> ${personaje.maxKi}`;
        let pDes = document.createElement("p");
        pDes.innerHTML = `<b>Descripción:</b><br> ${personaje.description}`;
        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(pRaza);
        div.appendChild(pGenero);
        div.appendChild(pKi);
        div.appendChild(pMaxKi);
        div.appendChild(pDes);
        main.appendChild(div);
    }else{// Si no se encuentra el personaje, muestra un mensaje de error
        main.innerHTML = "<h2>Personaje no encontrado</h2>";
    }

}

// Función para mostrar la tabla de personajes
function mostrarTabla() {
    let main = document.getElementById("main-content3");// Obtiene el contenedor principal
    let lista = localStorage.getItem("personajes");// Obtiene la lista de personajes desde localStorage
    let personajes = JSON.parse(lista);// Parsea la lista de personajes
    let table = document.createElement("table");// Crea la tabla
    table.id = "tabla";//
    let thead = document.createElement("thead");// Crea el encabezado de la tabla
    let tr = document.createElement("tr");// Crea una fila para el encabezado
    for (const key in personajes[0]) {// Itera sobre las claves del primer personaje para crear los encabezados de columna
        if(key != "description"){// Omite la columna de descripción
            let th = document.createElement("th"); // Crea una celda de encabezado
            th.textContent = key;// Asigna el texto del encabezado
            tr.appendChild(th);// Agrega la celda a la fila del encabezado
        }        
    }
    //agrega la fila al encabezado y el encabezado a la tabla
    thead.appendChild(tr);
    table.appendChild(thead);
    let tbody = document.createElement("tbody");    // Crea el cuerpo de la tabla
    for (const per of personajes) {// Itera sobre cada personaje para crear las filas de la tabla
        let trBody = document.createElement("tr");// Crea una fila para el cuerpo de la tabla
        for (const key in per) {// Itera sobre las claves del personaje
            if(key != "description"){// Omite la columna de descripción
                let td = document.createElement("td");// Crea una celda para la fila
                if(key === "name"){// Si la clave es "name", crea un enlace
                    let a = document.createElement("a");// Crea un elemento de enlace
                    a.className = "link-personaje";// Asigna una clase al enlace
                    a.textContent = per[key];// Asigna el texto del enlace
                    a.addEventListener('click', function() {
                        ultimoId(per.id);
                    });
                    a.href = "personaje.html";// Asigna la URL del enlace
                    td.appendChild(a);// Agrega el enlace a la celda
                } else{// Para otras claves, simplemente asigna el texto a la celda
                    td.textContent = per[key];
                };
                trBody.appendChild(td);// Agrega la celda a la fila del cuerpo de la tabla
            }
        }
        //agrega la fila al cuerpo de la tabla
        tbody.appendChild(trBody);
    }
    //agrega el cuerpo a la tabla y la tabla al contenedor principal
    table.appendChild(tbody);
    main.appendChild(table);
}

function buscarPersonaje(list) {
    let lista = document.getElementsByClassName('personaje');
    let listDiv = [];
    for (const element of list) {
        for (const div of lista) {
            let nombreP = div.lastChild.textContent;
            if(element == nombreP){
                listDiv.push(div);
            }
        }
    }
    return listDiv;
}
function cambioColor(color,lista) {
    for (const element of lista) {
        element.style.backgroundColor = color;
    }
}

function cambio() {
    let listPerHtml = document.getElementsByClassName('personaje');
    console.log(listPerHtml);

    let list = localStorage.getItem('personajes');
    let listP = JSON.parse(list);
    let razas = {};
    for (const element of listP) {
        let raza = element.race;
        let nombre = element.name;
        let existeRaza = false;
        for (const key in razas) {
            if (key == raza){
                existeRaza = true;
                break;
            }
        }
        if(!existeRaza){
            razas[raza] = [];
        }
        razas[raza].push(nombre);
    }


    let listado = [];
    for (const key in razas) {
        switch (key) {
            case 'Android':
                listado = buscarPersonaje(razas[key]);
                cambioColor('#A882EE',listado);
                break;
            case "Frieza Race":
                listado = buscarPersonaje(razas[key]);
                cambioColor('#F095D4',listado);
                break;
            case 'Human':
                listado = buscarPersonaje(razas[key]);
                cambioColor('#91F8E2',listado);
                break;
            case 'Namekian':
                listado = buscarPersonaje(razas[key]);
                cambioColor('#38C415',listado);
                break;
            
            default:
                listado = buscarPersonaje(razas[key]);
                cambioColor('#55ADFF',listado);
                break;
        }
        
    }
}



// Llama a la API y obtiene la lista de personajes
let listaPersonajes = await llamarApi(url);

// Determina la URL actual para decidir qué función ejecutar
let urlUbicacion = window.location.href;

// Ejecuta la función correspondiente según la página actual
if(urlUbicacion.includes("personaje")){// Página de detalles del personaje
    if(localStorage.getItem("personajes") === null){// Si no hay personajes en localStorage, los guarda
        guardarLocalhost(listaPersonajes);// Guarda la lista de personajes en localStorage
        ultimoId(1);// Establece el ID del primer personaje como el último ID seleccionado
    }
    // Muestra los detalles del personaje seleccionado
    mostrarPersonaje();
}else if(urlUbicacion.includes("tabla")){// Página de tabla de personajes
    if(localStorage.getItem("personajes") === null){// Si no hay personajes en localStorage, los guarda
        guardarLocalhost(listaPersonajes);// Guarda la lista de personajes en localStorage
        ultimoId(1);// Establece el ID del primer personaje como el último ID seleccionado
    }
    // Muestra la tabla de personajes
    mostrarTabla();
}else {// Página principal
    guardarLocalhost(listaPersonajes);// Guarda la lista de personajes en localStorage
    mostrar();// Muestra la lista de personajes
    cambio();
};
