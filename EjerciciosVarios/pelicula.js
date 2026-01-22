import { bestMovies, movieTitles } from "./datos.js";

function mostrar(lista) {
    for (let element of lista) {
        document.writeln(`<p>${element}</p>`);
    }
}

function mostrar2(lista){
    let contador = 1;
    for (let element of lista) {
        let texto = `<h4>${contador}</h4>`;
        for (const key in element) {
            texto += `<p>${key}: ${element[key]} </p>`;
        }
        document.writeln(texto);
        contador++;
    }
}

// espera a que se carge todo el contenido y luego ejecuta el contenido de la funcion
document.addEventListener('DOMContentLoaded',()=>{

    document.writeln("<h1>MOVIE TITLES</h1>");

    document.writeln("<h2>Lista antes de ordenar</h2>");

    mostrar(movieTitles);

    document.writeln("<h2>Lista despues de ordenar</h2>");
    let copia = [...movieTitles];
    copia.sort();
    mostrar(copia);

    document.writeln("<h3>Lista original</h3>");
    mostrar(movieTitles);

    document.writeln("<h2>Lista de 11 a 15</h2>");
    let copiaCorte = copia.slice(10,15);
    mostrar(copiaCorte);

    document.writeln("<h3>Lista original</h3>");
    mostrar(movieTitles);

    document.writeln("<h2>Mi lista de peliculas</h2>");
    let miLista = [...movieTitles];

    miLista.splice(0,1,"NeZha");
    miLista.splice(4,1,"El castillo ambulante");
    miLista.splice(16,1,"El viaje de Chihiro");
    mostrar(miLista);

    document.writeln("<h3>Lista original</h3>");
    mostrar(movieTitles);

    document.writeln("<h2>Añadir peli al principio</h2>");
    miLista.unshift("Pokemon: Arceus y la joya de la vida");
    mostrar(miLista);

    document.writeln("<h3>Lista original</h3>");
    mostrar(movieTitles);

    document.writeln("<h2>Añadir peli al final</h2>");
    miLista.push("Pokemon 4ever: Celebi - Voces del bosque");
    mostrar(miLista);

    document.writeln("<h3>Lista original</h3>");
    mostrar(movieTitles);

    document.writeln("<h1>BEST MOVIES</h1>");

    document.writeln("<h2>Lista antes de ordenar</h2>");
    mostrar2(bestMovies);

    document.writeln("<h2>Lista despues de ordenar</h2>");
    let copia2 = [...bestMovies];
    copia2.sort((a,b) => a.title.localeCompare(b.title));
    mostrar2(copia2);

    document.writeln("<h3>Lista original</h3>");
    mostrar2(bestMovies);

    document.writeln("<h2>Lista de 11 a 15</h2>");
    let copiaCorte2 = copia2.slice(10,15);
    mostrar2(copiaCorte2);

    document.writeln("<h3>Lista original</h3>");
    mostrar2(bestMovies);

    document.writeln("<h2>Mi lista de peliculas</h2>");
    let miLista2 = [...bestMovies];

    miLista2.splice(0,1,{title: "NeZha", director: "Jiaozi", actor:"Griffin Puatu"});
    miLista2.splice(4,1,{title : "El castillo ambulante", director : "Hayao Miyazaki", actor : "Chieko Baisho"});
    miLista2.splice(16,1,{title : "El viaje de Chihiro", director : "Hayao Miyazaki", actor : "Rumi Hiiragi"});
    mostrar2(miLista2);

    document.writeln("<h3>Lista original</h3>");
    mostrar2(bestMovies);

    document.writeln("<h2>Añadir peli al principio</h2>");
    miLista2.unshift({title : "Pokemon: Arceus y la joya de la vida", director : "Kunihiko Yuyama", actor : "Ikue Ōtani"});
    mostrar2(miLista2);

    document.writeln("<h3>Lista original</h3>");
    mostrar2(bestMovies);

    document.writeln("<h2>Añadir peli al final</h2>");
    miLista2.push({title : "Pokemon 4ever: Celebi - Voces del bosque", director : "Kunihiko Yuyama", actor : "Veronica Taylor"});
    mostrar2(miLista2);

    document.writeln("<h3>Lista original</h3>");
    mostrar2(bestMovies);

    document.writeln("<h2>ARRAY DE OBJETOS NUEVOS</h2>");
    let listaNueva = [];

    for (const element of bestMovies) {
        let tieneDirec = listaNueva.filter(elem => elem.director == element.director);

        if(tieneDirec.length == 0){
            let cantidad = bestMovies.filter(elem => elem.director == element.director).length;
            let esPesado = false;
            if(element.director == "Christopher Nolan"){
                esPesado = true;
            }
            listaNueva.push({director: element.director, contador: cantidad, pesado: esPesado});
        }
        
    }
    mostrar2(listaNueva);
       
})

function saludar(nombre) {
    return `¡Hola ${nombre}! Bienvenido a JavaScript`;
}


