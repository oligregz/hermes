import { createContext, useState } from 'react';
import { postClient, getClients } from '../services/sevice';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [client, setClient] = useState(
    {
      name: "",
      telephone:"",
    }
  );

  const login = () => {
    // busca no banco de dados o nome do cliente passado
    // em lowercase e checa se já existe, caso sim, seta o client
    // no state que vai ficar true no routes e loga.
    console.log("Client", client);
  }

  const register = (name, telephone) => {
    // checa no banco de dados se já existe esse client, caso sim,
    // envia mensagem(alert) de já existente e redireciona para login,
    // caso contrário, adiciona no banco de dados.

    const clients = getClients();

    console.log("Clients", clients);
  }

  return <AuthContext.Provider
    value={ 
      {
        client,
        login,
        register,
      }
    }
  >{ children }</AuthContext.Provider>;
}