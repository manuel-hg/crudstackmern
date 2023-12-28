const express = require("express")
const router = express.Router()

const mongoose = require("mongoose")
const eschema = mongoose.Schema

const eschemausuario = new eschema({
    nombre: String,
    email: String,
    telefono: String,
    idUsuario: String
})

const ModeloUsuario = mongoose.model();
