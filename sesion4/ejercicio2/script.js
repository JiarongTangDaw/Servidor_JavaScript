let urlD = "https://dragonball-api.com/api/characters";
let urlH = "https://hp-api.onrender.com/api/characters";

async function obtenerDatos(url) {
    try {
        let res = await fetch(url);
        let datos = await res.json();
        return datos
    } catch (error) {
        console.log(error);
        return [];
    }
}

let dDragon = await obtenerDatos(urlD);
console.log("Fecth para Dragonball: ");
console.log(dDragon);

let dHarry = await obtenerDatos(urlH);
console.log("Fecth para Harry Potter: ");
console.log(dHarry);

Promise.all([obtenerDatos(urlD),obtenerDatos(urlH)]).then(function (res){
    console.log("Promise all: ");
    for (const element of res) {
        console.log(element);
    }
})

Promise.race([obtenerDatos(urlD),obtenerDatos(urlH)]).then(function(res){
    console.log("Promise Race: ");
    console.log(res);    
})