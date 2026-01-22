let urlD = "https://dragonball-api.com/api/characters";
let urlH = "https://hp-api.onrender.com/api/characters";




function pintar(datos) {
    console.log(datos);
}


function obtenerDatos(url) {
    return fetch(url)
        .then(response => {
            return response.json();
        })
        .catch(error => {
            console.error("Error al pintar datos");
            return [];
        })
}



obtenerDatos(urlD).then(datos =>{
    console.log("Con fetch Dragon Ball: ");
    pintar(datos);
});

obtenerDatos(urlH).then(datos => {
    console.log("Con fetch Harry Potter: ");
    pintar(datos);
});


Promise.all([obtenerDatos(urlD),obtenerDatos(urlH)]).then(function (resultados) {
    console.log("Con promise all: ");
    for (const element of resultados) {
        pintar(element);
    }
})


Promise.race([obtenerDatos(urlD),obtenerDatos(urlH)]).then(function (restulado) {
    console.log("Con promise race: ");
    pintar(restulado);
})

