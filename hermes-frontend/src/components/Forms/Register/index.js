import React, { useState } from 'react';
import Button from '../../Button';
import Input from '../../Input';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const FormRegister = () => {

  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleRegister = () => {

    if(name === "" || telephone === "") {
      alert("Preencha os campos!");
      return;
    }
    // aqui chama a função que vai mandar uma requisição para o banco de
    // dados com o nome e o telefone do cliente para cadastrar
    // e depois que vier o response, loga na home

    navigate("/home");
  }

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
    console.log(value); // Mostra o valor do nome no console
  };

  const handleTelephoneChange = (event) => {
    const value = event.target.value;
    setTelephone(value);
    console.log(value); // Mostra o valor do telefone no console
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Digite seu nome"
        value={name}
        onChange={handleNameChange}
      />
      <Input
        type="text"
        placeholder="Digite seu telefone"
        value={telephone}
        onChange={handleTelephoneChange}
      />
      <Button
        Text="Cadastrar"
        onClick={handleRegister}
      />

    </div>
  )
}

export default FormRegister;
