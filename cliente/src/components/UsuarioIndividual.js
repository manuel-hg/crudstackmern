import {Link} from "react-router-dom";
import React from "react";

export default ({ conteo, idUsuario, nombre, email, telefono }) => {

    const borrarUsuario = async (id) => {
        try {
            const request = await fetch(
                'http://localhost:5000/api/usuario/eliminar',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    body: JSON.stringify({
                        'id': id
                    })
                })
            const response = await request.json();
            console.log(response)
        } catch (error) {
            console.log("error" + error)
        }
    }


    return (
        <div className="card border border-secondary">
            <div class="card-header d-flex justify-content-between">
                <h5 className="fw-light">
                    Usuario No°: {conteo}
                </h5>
                <div className="btn-group">
                    <Link to={`/editar/${idUsuario}`}><li className="btn btn-sm btn-round btn-info mx-1">Editar</li></Link>
                    <button className="btn btn-sm btn-round btn-danger mx-1" onClick={() => borrarUsuario(idUsuario)}>
                        <small>Eliminar</small>
                    </button>
                </div>
            </div>
            <div className="card-body">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <b>ID:</b> {idUsuario}
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <b>Nombre:</b> {nombre}
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <b>Email:</b> {email}
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <b>Teléfono:</b> {telefono}
                    </li>
                </ul>
            </div>
        </div>
    );
};
