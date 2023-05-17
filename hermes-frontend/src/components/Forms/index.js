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
    if(name.length === 0 || telephone.length === 0) {
      alert("Preencha os campos!");
      return;
    }
    
    // aqui chama a função que vai mandar uma requisição para o banco de
    // dados com o nome e o telefone do cliente para cadastrar
    // e depois que vier o response, loga na homes
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
      <Input
        type="text"
        placeholder="Digite seu telefone"
        value={telephone}
        onChange={(e) => [setTelephone(e.target.value)]}
      />
      <Button
        Text="Cadastrar"
        onClick={handleRegister}
      />

    </div>
  )
}

export default FormRegister;
