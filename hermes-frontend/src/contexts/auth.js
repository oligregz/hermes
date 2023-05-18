import { createContext, useState } from 'react';
import { getClients } from '../services/sevice';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [client, setClient] = useState(
    {
      name: "",
      telephone:"",
    }
  );

  const login = async (name) => {

    try {
      const result = await getClients();

      const searchRegisteredClient = result.clients
        .filter((client) => {
          return client.name === name
        }
      );

      if (searchRegisteredClient.length === 0) {
        return 0;
      }
      console.log(searchRegisteredClient);
      return searchRegisteredClient;
    } catch (e) {
      console.error(e);
    }
  }

  const register = async (name, telephone) => {
    try {
      const result = await getClients();

      const searchRegisteredClient = result.clients.filter((client) => client.name === name
        && client.telephone === telephone
      );

      if (searchRegisteredClient.length === 0) {
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