let url = "https://hp-api.onrender.com/api/characters";

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

function guardarLocal(lista) {
    for (const key in lista) {        
        for (const element of lista[key]) {
            if(element.image === ''){
                element.image = "./assets/defecto.webp";
            }
            if(element.yearOfBirth === null){
                element.yearOfBirth = "no especificado";
            }
            if(key == 'Homeless'){
                element.house = key;
            }
        }
        let listaString = JSON.stringify(lista[key]);
        localStorage.setItem(key,listaString);
    }
}

function dividirEnCasas(lista) {
    let salida = {};
    for (const element of lista) {
        let casa = element.house;
        let existeCasa = false;
        if(casa == ''){
            casa = 'Homeless';
        }
        for (const key in salida) {
            if(key == casa){
                existeCasa = true;
                break;
            }
        }
        if(!existeCasa){
            salida[casa] = [];
        }
        salida[casa].push(element);
    }
    return salida;
}

function mostarCasa(casa) {
    let main = document.getElementById('main-content2');

    let h2 = document.createElement('h2');
    h2.textContent = casa;
     h2.setAttribute('data-casa', casa);
    main.appendChild(h2);

    let list = localStorage.getItem(casa);
    let personajes = JSON.parse(list);
    personajes.sort((a,b) =>{
        if(a.yearOfBirth === null){
            return 1;
        }
        if(b.yearOfBirth === null){
            return -1;
        }
        return a.yearOfBirth - b.yearOfBirth;
    })

    let divPrincipal = document.createElement('div');
    divPrincipal.id = 'contPersonajes';
    for (const element of personajes) {
        let div = document.createElement('div');
        div.className = 'personaje';
        div.setAttribute('data-casa', casa);

        let img = document.createElement('img');
        img.src = element.image;
        img.alt = element.name;

        let h3 = document.createElement('h3');
        h3.textContent = element.name;

        div.appendChild(img);
        div.appendChild(h3);

        let p1 = document.createElement('p');
        p1.innerHTML = `<b>Apodos:</b> <br>`;

        if(element.alternate_names.length > 0){
            for (const elem of element.alternate_names) {
                p1.innerHTML += `${elem} <br>`;
            }
        }else{
            p1.innerHTML += "No espeficicado";
        }
        div.appendChild(p1);
        
        let p2 = document.createElement('p');
        p2.innerHTML = `<b>Año de nacimiento:</b> ${element.yearOfBirth}`;

        div.appendChild(p2);
        divPrincipal.appendChild(div);
        div.addEventListener('click',function(){
            localStorage.setItem('perElegido',JSON.stringify(element));
            window.location.href = "http://localhost:3000/Sesion3/harryPotter/personaje";
        })
    }
    main.appendChild(divPrincipal);
}

function mostrarPersonaje() {
    let data = localStorage.getItem('perElegido');
    let personaje = JSON.parse(data);

    let main = document.getElementById("main-content3");// Obtiene el contenedor principal
    
    let div = document.createElement("div");
    div.className = "personaje-detalle";
    div.setAttribute('data-casa', personaje.house);

    let img = document.createElement("img");
    img.className = "img-personaje-detalle";
    img.src = personaje.image;

    let h2 = document.createElement("h2");
    h2.textContent = personaje.name;

    let pCasa = document.createElement("p");
    pCasa.innerHTML = `<b>Casa al que pertenece:</b> ${personaje.house}`;

    let pApodos = document.createElement("p");
    pApodos.innerHTML = `<b>Apodos:</b> <br>`;
    if(personaje.alternate_names.length > 0){
        for (const name of personaje.alternate_names) {
                pApodos.innerHTML += `${name} <br>`;
            }
    }else{
        pApodos.innerHTML += "No especificado";
    }

    let pNacimiento = document.createElement("p");
    pNacimiento.innerHTML = `<b>Año de nacimiento:</b> ${personaje.yearOfBirth}`;

    let pPatronus = document.createElement("p");
    pPatronus.innerHTML = `<b>Patronus:</b> ${personaje.patronus}`;

    let pGender = document.createElement("p");
    pGender.innerHTML = `<b>Genero:</b><br> ${personaje.gender}`;

    let boton = document.createElement('button');
    boton.className = "boton-volver";
    boton.textContent = "Volver";
    boton.addEventListener('click',function () {
        window.location.href = "http://localhost:3000/Sesion3/harryPotter/casa";
    })

    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(pGender);
    div.appendChild(pCasa);
    div.appendChild(pNacimiento);
    div.appendChild(pPatronus);
    div.appendChild(pApodos);
    main.appendChild(div);
    main.appendChild(boton);
}

let lista = await llamarApi(url);

let casas = dividirEnCasas(lista);

let urlUbicacion = window.location.href;

let listaH1 = document.querySelectorAll('h1');
for (const h1 of listaH1) {
    h1.addEventListener('click', function() {
        window.location.href = "http://localhost:3000/Sesion3/harryPotter/";
    })
}

if(urlUbicacion.includes('personaje')){
    mostrarPersonaje();
}else if(urlUbicacion.includes('casa')){
    let casa = localStorage.getItem('casa');
    mostarCasa(casa);
}else{
    guardarLocal(casas);
    let griffindor = document.getElementById('Gryffindor');
    let slytherin = document.getElementById('Slytherin');
    let ravenclaw = document.getElementById('Ravenclaw');
    let hufflepuf = document.getElementById('Hufflepuff');
    let homeless = document.getElementById('Homeless');
    griffindor.addEventListener('click',function () {
        localStorage.setItem('casa','Gryffindor');
        window.location.href = "http://localhost:3000/Sesion3/harryPotter/casa";
    })

    slytherin.addEventListener('click',function () {
        localStorage.setItem('casa','Slytherin');
        window.location.href = "http://localhost:3000/Sesion3/harryPotter/casa";
    })

    homeless.addEventListener('click',function (){
        localStorage.setItem('casa','Homeless');
        window.location.href = "http://localhost:3000/Sesion3/harryPotter/casa";
    })

    ravenclaw.addEventListener('click',function (){
        localStorage.setItem('casa','Ravenclaw');
        window.location.href = "http://localhost:3000/Sesion3/harryPotter/casa";
    })

    hufflepuf.addEventListener('click',function () {
        localStorage.setItem('casa','Hufflepuff');
        window.location.href = "http://localhost:3000/Sesion3/harryPotter/casa";
    })
}
