import React, { useEffect, useState } from "react"
import UsuarioIndividual from "./UsuarioIndividual"


export default () => {
    const [datosusuarios, setDatosUsuarios] = useState([]);

    const obtener_usuarios = async () => {
        try {
            const request = await fetch(
                'http://localhost:5000/api/usuario/obtener',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                })
            const { response } = await request.json();
            setDatosUsuarios(response);
        } catch (error) {
            console.log("error" + error)
        }
    }

    useEffect(() => {
        obtener_usuarios()
    }, [])

    return (
        <div className="container">
            <div className="row">
                <h2 className="text-center">Listado usuario</h2>
                {
                    datosusuarios?.map((x, i) => (
                        <div className="col-md-3 shadow-sm p-3">
                            <UsuarioIndividual conteo={i+1} {...x} />
                        </div>

                    ))
                }
            </div>
        </div>
    )
}