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

  const register = async (name, telephone) => {
    try {
      const result = await getClients();

      const existClient = result.clients.filter((client) => client.name === name
        && client.telephone === telephone
      );

      if (existClient.length === 0) {
        return 0;
      }

      console.log(result.clients)
      return result.clients;
    } catch (error) {
      console.error(error);
    }

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