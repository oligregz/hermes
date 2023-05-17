import React, { useState } from 'react';
import Button from '../../Button';
import Input from '../../Input';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const FormLogin = () => {

  const { login } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const handleLogin = () => {

    if(name === "") {
      alert("Preencha o campo com seu nome!");
      return;
    }

    // aqui chama a função que vai mandar uma requisição para o banco de
    // dados o nome do cliente e checar se ele existe

    navigate("/home");
  }

  return (
    <div>
      <Input
        type="text"
        placeholder="Digite seu nome"
        value={name}
        onChange={(e) => [setName(e.target.value)]}
      />
      <Button
        Text="Entrar"
        onClick={handleLogin}
      />
      <label>
        Não tem cadastro?
        <Link to="/register">&nbsp;Cadastre-se!</Link>
      </label>
    </div>
  );
}

export default FormLogin;
