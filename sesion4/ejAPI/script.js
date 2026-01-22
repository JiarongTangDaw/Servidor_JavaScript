import { Api } from "./Api.js";

//let url = 'https://jsonplaceholder.typicode.com';
let url = 'http://localhost:3000/videojuegos';

let api = new Api(url);

let getAllVideojuegos = await api.getAll('');
console.log(getAllVideojuegos);

let getAllVideojuegosid = await api.getById('',20);
console.log(getAllVideojuegosid);

let getAllVideojuegosid2 = await api.getById('',2);
console.log(getAllVideojuegosid2);

let newJuego = {
    "id": 6,
    "titulo": "Pokemon Legends: Z-A",
    "anyo": 2025,
    "consola": "Nintendo Switch"
};
let postVideojuego = await api.post('',newJuego);
console.log(postVideojuego);

let objPut = {
    "titulo": "Black Myth: Wukong",
    "anyo": 2026,
    "consola": "PC"
}

let putVideoJuego = await api.put('',6,objPut);
console.log(putVideoJuego);

let objPatch = {
    "anyo": 2025,
}
let salida_patch = await api.patch('',6, objPatch);
console.log(salida_patch);

let salida_delete = await api.delete('',6);
console.log("salida_delete", salida_delete);

let salida_getByDelete = await api.getById('',6);
console.log("salidasalida_getByDelete_getByPatch", salida_getByDelete);

/*let getAllPosts = await api.getAll('posts');
let getById = await api.getById('posts',1);
let post = await api.post('posts',{
    title: 'foo',
    body: 'bar',
    userId: 1,
})

let put = await api.put('posts',1,{
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
})

let patch = await api.patch('posts',1, {
    body: 'cosa',
})

let elim = await api.delete('posts',1)

let des = await api.getById('posts',1);

document.getElementById('datos').textContent = 
            JSON.stringify(getAllPosts, null, 2);

console.log(getById);
console.log(put);
console.log(patch);
console.log(elim);
console.log(des);*/