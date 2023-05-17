import React, { useState } from 'react';
import Button from '../../Button';
import Input from '../../Input';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { postClient } from '../../../services/sevice';

const FormRegister = () => {

  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleRegister = async () => {

    if(name === "" || telephone === "") {
      alert("Preencha os campos!");
      return;
    }

    try {
      const result = await register(name, telephone);

      if (result === 0) {
        // chama a função de registro
        postClient(name, telephone);
        navigate("/home");
        return;
      }

    } catch (error) {
      console.error(error);
    }
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
