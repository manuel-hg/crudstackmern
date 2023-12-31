import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AgregarUsuario, EditarUsuario, ListadoUsuario } from './components'

export default () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Crud Mern Stack</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/agregar">Agregar</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<ListadoUsuario />}
                    />
                    <Route
                        path="/agregar"
                        element={<AgregarUsuario />}
                    />
                    <Route
                        path="/editar/:idUsuario"
                        element={<EditarUsuario />}
                    />
                </Routes>
            </Router>
        </>
    );
}


