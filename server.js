const express = require("express");
const app = express()

//importar conexion con mongodb
const dbfile = require('./conexion');

app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend Node.js');
})

//configurar server basico // instalar nodemon
app.listen(5000, function(){
    console.log('El servidor esta corriendo correctamente');
})
