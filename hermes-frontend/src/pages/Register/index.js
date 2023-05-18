import React from 'react';
import FormRegister from '../../components/Forms/Register/index';

const Registration = () => {
  return (
    <div>
      <h2>Cadastre-se</h2>
      <nav className="nav nav-pills nav-fill">
        <a className="nav-item nav-link" href="/login">Sair</a>
      </nav>
      <FormRegister />
    </div>
  )
}

export default Registration;
