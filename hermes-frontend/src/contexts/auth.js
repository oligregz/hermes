import { createContext, useState } from 'react';
import { getClients, getReserves, getClientById } from '../services/sevice';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentClient, setCurrentClient] = useState("");
  const [clientForm, setClientForm] = useState({});
  const [fromSql, setFromSql] = useState({});

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
      setCurrentClient(searchRegisteredClient[0].name);
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
      return result.clients;
    } catch (error) {
      console.error(error);
    }
  }

  const reserves = async () => {
    try {
      const reserves = await getReserves();
      return reserves;
    } catch (e) {
      console.error(e);
    };
  };

  const clientById = async (id) => {
    try {
      const client = await getClientById(id);
      return client;
    } catch (e) {
      console.error(e);
    }
  }

  return <AuthContext.Provider
    value={ 
      {
        currentClient,
        login,
        register,
        reserves,
        clientById,
        clientForm,
        setClientForm,
        fromSql,
        setFromSql,
      }
    }
  >{ children }</AuthContext.Provider>;
}