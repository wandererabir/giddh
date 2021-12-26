import React from 'react';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <Login />
      <Logout />
    </>

  );
}

export default App;
