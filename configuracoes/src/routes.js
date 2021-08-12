import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import EditarConta from './components/EditarConta'
import TodasContas from './components/TodasContas';
import Configuracoes from './components/Configuracoes';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Configuracoes} path="/" exact />
            <Route component={TodasContas} path="/todas-contas" />
            <Route component={EditarConta} path="/editar-conta" />
        </BrowserRouter>
    )
}

export default Routes;