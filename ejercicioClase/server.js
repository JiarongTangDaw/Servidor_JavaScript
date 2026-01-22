// importar express
const express = require('express');

// crear una aplicacion express
const app = express();

//--- acceso a archivos estaticos
app.use(express.static(__dirname));

// definir el puerto en el que escuchara el servidor
const PORT = process.env.PORT || 3000;

const path = require('path');

//iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

app.get('/',(req,res) =>{
  res.sendFile(path.join(__dirname,'','index.html'));
})