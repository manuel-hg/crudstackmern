const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');

const db = mongoose.connection
db.on('connected', () => console.log('conectado correctamente mongodb'));
db.on('error', () => console.log('error en la conexion mongodb'));

module.exports = mongoose