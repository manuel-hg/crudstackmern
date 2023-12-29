import {useState} from 'react'
import uniquid from "uniqid"

export default () => {
    const [initialState, setInitialState] = useState({
        nombre: '',
        email: '',
        telefono: ''
    })
    const {nombre, email, telefono} = initialState

    const agregarUsuario = async() =>{
        try{
            const request = await fetch(
                'http://localhost:5000/api/usuario/agregar',
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
                        'id': uniquid()
                    })
                })
            const response = await request.json();
            console.log(response);
        } catch (error) {
            console.log("error" + error)
        }
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <h2>Crear nuevo usuario</h2>
                </div>
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

                    <button className="btn btn-success" onClick={agregarUsuario}>Actualizar Usuario</button>
                </div>
            </div>
        </div>
    )
}