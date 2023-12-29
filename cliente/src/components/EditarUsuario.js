import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default () => {
    const params = useParams();
    const [initialState, setInitialState] = useState({
        nombre: '',
        email: '',
        telefono: '',
        idUsuario: ''
    });
    const { nombre, email, telefono, idUsuario } = initialState;
    const obtener_usuario = async () => {
        try {
            const request = await fetch(
                'http://localhost:5000/api/usuario/obtenerUsuario',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    body: JSON.stringify({
                        'idUsuario': params.idUsuario
                    })
                })
            const { response } = await request.json();
            setInitialState({ ...initialState, nombre: response.nombre, email: response.email, telefono: response.telefono, idUsuario: response.idUsuario })            

        } catch (error) {
            console.log("error" + error)
        }
    }

    const editarUsuario = async() =>{
        try{
            const request = await fetch(
                'http://localhost:5000/api/usuario/editar',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    body: JSON.stringify({
                        'nombre': nombre,
                        'email': email,
                        'telefono': telefono,
                        'id': idUsuario
                    })
                })
            const response = await request.json();
            console.log(response)
        } catch (error) {
            console.log("error" + error)
        }
    }
    useEffect(() => {
        obtener_usuario()
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="text-center">Editar usuario</h2>
                    <div className="col-sm-6 offset-3">
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" placeholder="Nombre" value={nombre} onChange={(e) =>setInitialState({...initialState, nombre:e.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="email@email.com" value={email} onChange={(e) =>setInitialState({...initialState, email:e.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Telefono</label>
                        <input type="text" className="form-control" placeholder="55-55-55-55-55" value={telefono} onChange={(e) =>setInitialState({...initialState, telefono:e.target.value})}/>
                    </div>

                    <button className="btn btn-info" onClick={editarUsuario}>Actualizar Usuario</button>
                </div>
                </div>
            </div>
        </div>
    )
}