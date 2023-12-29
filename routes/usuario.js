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

const ModeloUsuario = mongoose.model('usuarios', eschemausuario);
module.exports = router

//ruta de prueba
/*router.get('/ejemplo', (req, res) => {
    res.end('saludo carga desde ruta test');
})*/

router.post('/agregar', async (req, res) => {
    try{
        const nuevoUsuario = await new ModeloUsuario({
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono,
            idUsuario: req.body.id
        })
        nuevoUsuario.save();   

        res.json({
            status: 200,
            response: 'Usuario guardado correctamente'
        })
    } catch(error){
        res.json({
            status: 404,
            response: error
        })        
    }
});

router.post('/obtener', async (req, res) => {
    try {
        const grupos = await ModeloUsuario.find().exec()
        res.json({
            status: 200,
            response: grupos
        })   
    } catch (error) {
        res.json({
            status: 404,
            response: error
        })   
    }
})

router.post('/obtenerUsuario', async (req, res) => {
    try {
        const grupos = await ModeloUsuario.findOne({idUsuario: req.body.idUsuario}).exec()
        res.json({
            status: 200,
            response: grupos
        })   
    } catch (error) {
        res.json({
            status: 404,
            response: error
        })   
    }
})

router.post('/editar', async (req, res) => {
    try {
        const find = await ModeloUsuario.findOneAndUpdate({idUsuario: req.body.id}, {
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono
        }).exec();
        res.json({
            status: 200,
            response: 'Se ha actualizado correctamente'
        })   
    } catch (error) {
        res.json({
            status: 404,
            response: error
        })   
    }
})

router.post('/eliminar', async (req, res) => {
    try {
        const grupos = await ModeloUsuario.findOneAndDelete({idUsuario: req.body.id}).exec()
        res.json({
            status: 200,
            response: 'Se ha eliminado correctamente'
        })  
    } catch (error) {
        res.json({
            status: 404,
            response: error
        })   
    }
})


