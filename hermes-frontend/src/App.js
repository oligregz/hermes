import React from 'react';
import GlobalStyle from './styles/global';
import RoutesApp from './routes';
import { AuthProvider } from './contexts/auth';

const App = () => {
  return (
    <div>
      <AuthProvider>
        <RoutesApp />
        <GlobalStyle />
      </AuthProvider>
    </div>
  )
}

export default App
