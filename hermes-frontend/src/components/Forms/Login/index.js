import React, { useState } from 'react';
import Button from '../../Button';
import Input from '../../Input';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const FormLogin = () => {

  const { login, currentClient } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const handleLogin = async () => {

    try {
      if(name === "") {
        alert("Preencha o campo com seu nome!");
        return;
      };

      const getLogin = await login(name);

      if (getLogin === 0) {
        alert("Usuário não cadastrado!");
        navigate("/register");
        return;
      }
      navigate("/home");
      console.log(currentClient);
    } catch (e) {
      console.error(e);
    }

  }

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
    console.log(value);
  };

  return (
    <div>
      <Input
        className="form-control"
        type="text"
        placeholder="Digite seu nome"
        value={name}
        onChange={handleNameChange}
      />
      <Button
        Type="button"
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
