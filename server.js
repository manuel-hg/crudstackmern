const express = require("express");
const cors = require("cors");
const app = express()
app.use(express.json());
app.use(cors());

//importar conexion con mongodb
const dbfile = require('./conexion');

//importar archivo de rutas
const rutausuario = require("./routes/usuario");
app.use('/api/usuario', rutausuario);

app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend Node.js');
})

//configurar server basico // instalar nodemon
app.listen(5000, function(){
    console.log('El servidor esta corriendo correctamente');
})
