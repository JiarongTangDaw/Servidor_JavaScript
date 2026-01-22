// importar express
const express = require('express');
const fs = require('fs');

// crear una aplicacion express
const app = express();

//--- acceso a archivos estaticos
app.use(express.static(__dirname));

// definir el puerto en el que escuchara el servidor
const PORT = process.env.PORT || 3000;

// sesion 2
const sesion2 = require('./sesion2/sesion2');
const path = require('path');

// ruta basica para el servidor
app.get('/', (req, res) => {
  res.send('<h1>¡Hola mundo! El servidor esta funcionando</h1>');
});

//iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

/*
  El '/variable' se pone en la url de la pagina es como una pagina mas de la web
  una navegacion entre paginas
*/
app.get('/variable',(req,res) => {
  const resultado = sesion2.variable();
  res.send(`La variable pinta ${resultado}`);
})


app.get('/concatenar', (req,res) => {
  const resultado = sesion2.concaternar();
  //res.send(`La concatenacion pintada: ${resultado}`);
  res.send(true);
})

const ejemplos = require('./ejemplo');

app.get('/ejemplos',(req,res) =>{
  const resultado = ejemplos.ejemplo();

  res.send(`Salida de ejemplos: ${resultado}`);
})

app.get('/ejemplohtml',(req,res) =>{
  res.sendFile(path.join(__dirname,'','index.html'));
})

app.get('/paises',(req,res) =>{
  res.sendFile(path.join(__dirname,'','index2.html'));
})

app.get('/ejercicios',(req,res) =>{
  res.sendFile(path.join(__dirname,'','index3.html'));
})

app.get('/localStorage',(req,res) =>{
  res.sendFile(path.join(__dirname,'','index4.html'));
})

app.get('/Comic/comic',(req,res) =>{
  res.sendFile(path.join(__dirname,'Comic','index.html'));
})

app.get('/sesion3/pokemon/',(req,res) =>{
  res.sendFile(path.join(__dirname,'/sesion3/pokemon/','index.html'));
})

app.get('/sesion3/componentes',(req,res) =>{
  res.sendFile(path.join(__dirname,'/sesion3/componentes','index.html'));
})

app.get('/sesion3/starWars',(req,res) =>{
  res.sendFile(path.join(__dirname,'/sesion3/starWars','index.html'));
})

app.get('/sesion3/dragonBall/tabla',(req,res) =>{
  res.sendFile(path.join(__dirname,'/sesion3/dragonBall','tabla.html'));
})

app.get('/sesion3/dragonBall/personaje',(req,res) =>{
  res.sendFile(path.join(__dirname,'/sesion3/dragonBall','personaje.html'));
})

app.get('/sesion3/dragonBall',(req,res) =>{
  res.sendFile(path.join(__dirname,'/sesion3/dragonBall','index.html'));
})

app.get('/sesion3/harryPotter',(req,res) =>{
  res.sendFile(path.join(__dirname,'/sesion3/harryPotter','index.html'));
})

app.get('/sesion3/harryPotter/personaje',(req,res) =>{
  res.sendFile(path.join(__dirname,'/sesion3/harryPotter','personaje.html'));
})

app.get('/sesion3/harryPotter/casa',(req,res) =>{
  res.sendFile(path.join(__dirname,'/sesion3/harryPotter','casas.html'));
})

app.get('/sesion4/ejercicio1',(req,res) =>{
  res.sendFile(path.join(__dirname,'/sesion4/ejercicio1','index.html'));
})

app.get('/RickMorty',(req,res) =>{
  res.sendFile(path.join(__dirname,'/RickMorty','index.html'));
})

app.get('/RickMorty/personaje',(req,res) =>{
  res.sendFile(path.join(__dirname,'/RickMorty','personaje.html'));
})

app.get('/sesion4/ejercicio2',(req,res) =>{
  res.sendFile(path.join(__dirname,'/sesion4/ejercicio2','index.html'));
})

app.get('/sesion4/starWars',(req,res) =>{
  res.sendFile(path.join(__dirname,'/sesion4/starWars','index.html'));
})

app.get('/sesion4/starWars2',(req,res) =>{
  res.sendFile(path.join(__dirname,'/sesion4/starWars2','index.html'));
})

app.get('/sesion4/ejAPI',(req,res) =>{
  res.sendFile(path.join(__dirname,'/sesion4/ejAPI','index.html'));
})

app.get('/HarryPotter',(req,res) =>{
  res.sendFile(path.join(__dirname,'','index.html'));
})


// PRUEBA DE API
app.use(express.json());

const BBDD = path.join(__dirname,'/sesion4/ejAPI/videojuegos.json');

function readBD() {
  if (!fs.existsSync(BBDD)) {
    fs.writeFileSync(BBDD, JSON.stringify([]));
  }
  const data = fs.readFileSync(BBDD, 'utf-8');
  return JSON.parse(data);
}

function writeDB(data) {
  fs.writeFileSync(BBDD, JSON.stringify(data, null, 2));
}



//*GET

app.get('/videojuegos',(req,res) =>{
    const juegos = readBD();
    res.json(juegos);
})

//*GET POR ID
app.get('/videojuegos/:id', (req, res) => {
  const juegos = readBD();
  const juego = juegos.find(j => j.id === Number(req.params.id));
  if (!juego) {
    return res.status(404).json({ message: 'Videojuego no encontrado' });
  }
  res.json(juego);
});

//*POST
app.post('/videojuegos', (req, res) => {
  const juegos = readBD();
  const newJuego = {
    id: juegos.length + 1,
    titulo: req.body.titulo,
    anyo: req.body.anyo,
    consola: req.body.consola,
  }
  
  juegos.push(newJuego);
  writeDB(juegos);
  res.status(201).json(newJuego);
});

//*PUT
app.put('/videojuegos/:id', (req, res) => {
  const juegos = readBD();
  const index = juegos.findIndex(v => v.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: 'Videojuego no encontrado' });
  }

  juegos[index] = {
    id: juegos[index].id,
    titulo: req.body.titulo,
    anyo: req.body.anyo,
    consola: req.body.consola,
  };


  writeDB(juegos);
  res.json(juegos[index]);
});

//*PATCH
app.patch('/videojuegos/:id', (req, res) => {
  const juegos = readBD();
  const juego = juegos.find(v => v.id === Number(req.params.id));


  if (!juego) {
    return res.status(404).json({ message: 'Videojuego no encontrado' });
  }


  Object.assign(juego, req.body);
  writeDB(juegos);
  res.json(juego);
});

//*DELETE
app.delete('/videojuegos/:id', (req, res) => {
  const juegos = readBD();
  const filtered = juegos.filter(v => v.id !== Number(req.params.id));


  if (filtered.length === juegos.length) {
    return res.status(404).json({ message: 'Videojuego no encontrado' });
  }


  writeDB(filtered);
  res.status(204).send();
});