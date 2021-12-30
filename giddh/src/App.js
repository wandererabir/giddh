import React from 'react';
import './App.css';
import {NavBar, Footer, Loading, Contacts} from './components';
import { Container } from "react-bootstrap";
import { Route, Routes } from 'react-router-dom';
import { Home, Profile, ExternalApi } from "./views";
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {isLoading} = useAuth0();
  if(isLoading){
    return <Loading />
  }

  return (
    <div id="app" className="d-flex flex-column h-100 bg-dark">
    <NavBar />
    <Container className="flex-grow-1 mt-5">
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/external-api" element={<Contacts />} />
      </Routes>
    </Container>
    <Footer />
  </div>

  );
}

export default App;
