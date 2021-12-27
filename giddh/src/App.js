import React from 'react';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <Login />
      <Logout />
      <Profile />
    </>

  );
}

export default App;
