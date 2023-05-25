import React from 'react';
import './Navbar.css';

const Navbar = () => {

  const handleNavClick = () => {
    // função para limpar o storage caso esteja sendo usado.
    console.log('saiu');
  };

  return (
    <div className='nav'>
      <h4>{`Seja bem-vindo(a) !`}</h4>
      <h2>Faça sua reserva</h2>
      <nav className="nav nav-pills nav-fill" onClick={handleNavClick}>
        <a className="nav-item nav-link active" href="/login">Sair</a>
      </nav>
    </div>
  )
}

export default Navbar;
