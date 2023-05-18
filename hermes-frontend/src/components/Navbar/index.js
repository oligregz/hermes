import React from 'react';
import './Navbar.css';

const Navbar = () => {

  const handleNavClick = () => {
    console.log('saiu');
  };

  return (
    <div className='nav'>
      <h3>{`Seja bem-vindo(a) !`}</h3>
      <h2>Reservas</h2>
      <nav className="nav nav-pills nav-fill" onClick={handleNavClick}>
        <a className="nav-item nav-link active" href="/login">Sair</a>
      </nav>
    </div>
  )
}

export default Navbar;
