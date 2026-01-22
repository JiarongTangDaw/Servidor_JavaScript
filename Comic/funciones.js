import { Comic } from "./Comic.js";

// comprobamos si en localStorege hay un item con el nombre listaComics
let listaComics = JSON.parse(localStorage.getItem('listaComics'));
if(listaComics == null){// no existe item listaComics
    // inicializamos la lista en vacio
    listaComics = [];
    // creamos el item con la lista inicializada a cero en json
    localStorage.setItem('listaComics',JSON.stringify(listaComics));
}


function listarComics() {
    //obtenemos el elemento con id listado
    let listado = document.getElementById('listado');
    // cargamos los valores del item listaComis en una variable
    let lista = JSON.parse(localStorage.getItem('listaComics'));
    // comprobamos si tiene elementos dentro de la lista
    if (lista.length == 0) { // no tiene
        //cargamo el inner HTML de listado
        let inner = listado.innerHTML;
        // añadimos una frase indicando que no hay elementos en la lista
        inner += "<h2 id='nohay'> No hay comics registrados, añade un comic</h2>";    
        // modificamos el innerHTML del DOM
        listado.innerHTML = inner;    
    }else{// si tiene elementos
        //inicializamos una variable en la que guardaresmos el nuevo html
        let html = '';
        //for por cada elemento de la lista de comics
        for (const comic of lista) {
            // añadimos el codigo html por cada comic
            html += `
                 <!-- campo para el titulo el valor es el que esta registrado en el array en el campo titulo, y el id es titulo + id que esta en el array -->
                <input type="text" id="titulo${comic.id}" value="${comic.titulo}">
                <!-- campo para el autor el valor es el que esta registrado en el array en el campo autor, y el id es autor + id que esta en el array -->
                <input type="text" id="autor${comic.id}" value="${comic.autor}" >
                <!-- campo para el estado el valor es el que esta registrado en el array en el campo estado, y el id es estado + id que esta en el array -->
                <select id="estado${comic.id}" require>
                    <option value="pendiente"${comic.estado == "pendiente"? 'selected':''}>Pendiente</option>
                    <option value="leyendo" ${comic.estado == "leyendo"? 'selected':''}>Leyendo</option>
                    <option value="leido" ${comic.estado == "leido"? 'selected':''}>Leido</option>
                </select>
                <!-- campo para el ubicacion el valor es el que esta registrado en el array en el campo ubicacion, y el id es ubicacion + id que esta en el array -->
                <select id="ubicacion${comic.id}">
                    <option value="estanteria1" ${comic.ubicacion == "estanteria1"? 'selected':''}>Estanteria 1</option>
                    <option value="estanteria2" ${comic.ubicacion == "estanteria2"? 'selected':''}>Estanteria 2</option>
                    <option value="mueble" ${comic.ubicacion == "mueble"? 'selected':''}>Mueble</option>
                </select>
                <!-- campo para el prestado el valor es el que esta registrado en el array en el campo prestado, y el id es prestado + id que esta en el array -->
                <select name="prestado${comic.id}" id="prestado${comic.id}">
                    <option value="si" ${comic.prestado == true? 'selected':''}>Si</option>
                    <option value="no" ${comic.prestado == false? 'selected':''}>No</option>
                </select>
                <!-- campo con botones de eliminar y modificar para modificar y eliminar comic, por el cual se le pasa el id del comic al que seleccionamos -->
                <div class="botones">
                    <input type="button" value="MOD" onclick= "modificar(${comic.id});">
                    <input type="button" value="DEL" onclick= "eliminar(${comic.id});">
                </div>`;
           
        }
        // modificamos el innerHTML de listado
         listado.innerHTML = html;
    }
}

// Función para obtener el elemento máximo según una propiedad
function obtenerElementoMaximo(propiedad) {
    // cargamos la lista de comics desde el localStorage
    let comics = JSON.parse(localStorage.getItem('listaComics'));
    // comprobamos si la lista está vacía
    if (!comics || comics.length === 0) { // está vacía
        return 0;
    }
    // Usamos reduce para encontrar el objeto con el valor máximo de la propiedad
    const maximo = comics.reduce((a, b) => {
        if (!a) return b; 
        return (b[propiedad] > a[propiedad]) ? b : a;
    }, 0);

    return maximo[propiedad];
}

//funcion para actualizar los id de la lista de comics
function actualizarId() {
    //carga la lista de comics del localstorege
    let lista = JSON.parse(localStorage.getItem('listaComics'));
    //actuliza los id de la lista de comics
    lista = lista.map((comic,indice) => {
        
        return {...comic, // copia los campos del comic que no se va ha modificar
            id : indice +1
        }; //retorna el objeto Comic completo con solo el campo id modificado
    });
    //actualizamos el local storege
    localStorage.setItem('listaComics',JSON.stringify(lista));
}

//funcion añadir
function agregar() {
    // sacamos los valores de los campos a añadir
    let titulo = document.getElementById('titulo0').value;
    let autor = document.getElementById('autor0').value;
    let estado = document.getElementById('estado0').value;
    let ubicacion = document.getElementById('ubicacion0').value;
    let prestado = document.getElementById('prestado0').value;

    //comprobamos que no haya ningun campo vacio
    if(titulo == "" || autor == "" || estado == "" || ubicacion == "" || prestado == ""){ // si hay campos vacios
        alert('No puede haber campos vacios al añadir un comic nuevo');
    }else{// no hay campos vacios
        //carga la lista de comics del localstorege
        let lista = JSON.parse(localStorage.getItem('listaComics'));
        //obtenemos el id para el nuevo elemento
        let id = obtenerElementoMaximo('id') + 1;
        // cambiamos a boolean el valor de prestado
        let prestadoB = prestado == 'si'? true : false;
        // creamos un nuevo comic con los valores
        let newComic = new Comic (id,titulo,autor,estado,ubicacion,prestadoB);
        //añadimos el comic nuevo a la lista
        lista.push(newComic);
        //actualizamos el local storege
        localStorage.setItem('listaComics',JSON.stringify(lista));
        //mostrar por pantalla
        listarComics();
        
        // limpiamos los campos de la seccion nuevo
        document.getElementById('titulo0').value = '';
        document.getElementById('autor0').value = '';
        document.getElementById('estado0').value = '';
        document.getElementById('ubicacion0').value = '';
        document.getElementById('prestado0').value = '';
    }
}

//funcion para elimnar comic
function eliminar(id) {
   let titulo = document.getElementById('titulo'+ id).value;
   // confirmamos que el usuario quiere realizar la eliminacion
   let salida = confirm(`Va a eliminar el comic ${titulo}.¿Desea continuar?`);

   // confirmar si quiere seguir con la eliminacion
   if(salida){// se confirma la eliminacion
        //carga la lista de comics del localstorege
        let lista = JSON.parse(localStorage.getItem('listaComics'));
        //filtra por el id sacando un nuevo array solo con comic que no tiene el id
        lista = lista.filter(comic => comic.id != id);
        // guardamos en local storage
        localStorage.setItem('listaComics',JSON.stringify(lista));
        //actualizamos el id de la lista de comics
        actualizarId();
        //mostra lista de comics
        listarComics();
   }
    
}

//funcion para modificar comic
function modificar(id) {
    // sacar los valores de cada campo para la modificacion
    let titulo = document.getElementById('titulo'+ id).value;
    let autor = document.getElementById('autor' + id).value;
    let estado = document.getElementById('estado' + id).value;
    let ubicacion = document.getElementById('ubicacion' + id).value;
    let prestado = document.getElementById('prestado' + id).value;

    // comprobar que no hay campos vacios
    if(titulo == "" || autor == "" || estado == "" || ubicacion == "" || prestado == ""){ // si hay campos vacios
        alert('No puede haber campos vacios al modificar un comic');
    }else{// no hay campos vacios
        //carga la lista de comics del localstorege
        let lista = JSON.parse(localStorage.getItem('listaComics'));
        // cambiar a boolean el valor de prestado
        let prestadoB = prestado == 'si'? true: false;
       //actuliza la lista de comic modificando los valores del comic con el id correcto
        lista = lista.map(comic => {
            if(comic.id != id){
                return comic;
            }else{
                return { 
                    ... comic, // copia los campos de comic que no vamos a modificar
                    titulo : titulo, //modifca titulo
                    autor : autor, //modifica autor
                    estado : estado, //modifica estado
                    ubicacion : ubicacion, //modifica ubicacion
                    prestado : prestadoB // modifica prestado
                }; // retorna el objeto Comic completo con los campos modificados si se ha realizado alguno
            }
        });
        // guardamos en local storage
        localStorage.setItem('listaComics',JSON.stringify(lista));
        
        //mostra lista de comics
        listarComics();
    }
}

// expresiones agregadas para que las funciones sean globales para el html
// en module las funciones no son globales por defecto
// por lo que hay que agregarlas al objeto window
window.agregar = agregar;
window.eliminar = eliminar;
window.modificar = modificar;

// primer mostra por pantalla la lista de comics
listarComics(); 