import React from 'react';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';

import { useAuth0 } from '@auth0/auth0-react';
import { Route, Routes } from 'react-router-dom';


function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <>
      <Login />
      <Profile />
      <Routes>                
             <Route exact path='/' component={Login}/> 
             <Route path='/features' component={Login}/>            
      </Routes>

      
      
    </>

  );
}

export default App;
