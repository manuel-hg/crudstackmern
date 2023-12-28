export default () => {
    function agregarUsuario(){
        console.log("click");
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
                        <input type="text" className="form-control" placeholder="Nombre"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="email@email.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Telefono</label>
                        <input type="text" className="form-control" placeholder="55-55-55-55-55"/>
                    </div>

                    <button className="btn btn-success" onClick={agregarUsuario}>Guardar Usuario</button>
                </div>
            </div>
        </div>
    )
}