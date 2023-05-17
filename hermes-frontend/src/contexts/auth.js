import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  let [client, setClient] = useState();

  const login = () => {
    // busca no banco de dados o nome do cliente passado
    // em lowercase e checa se já existe, caso sim, seta o client
    // no state que vai ficar true no routes e loga.
    setClient = { login: "Logado" };
    console.log("Client", client);
  }

  const register = () => {
    // checa no banco de dados se já existe esse client, caso sim,
    // envia mensagem(alert) de já existente e redireciona para login,
    // caso contrário, adiciona no banco de dados.
    setClient = { register: "Registrado" };
    console.log("Client", client);
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