import React from "react";
import { NavLink as RouterNavLink, Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import Logout from './Logout';
import logo from "../assets/logo.svg";

const MainNav = () => (
  <Nav className="mr-auto">
    <Nav.Link
      as={RouterNavLink}
      to="/"
      exact
      activeClassName="router-link-exact-active "
      className="text-white "
    >
      Home
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/profile"
      exact
      activeClassName="router-link-exact-active"
      className="text-white"
    >
      Profile
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/database"
      exact
      activeClassName="router-link-exact-active"
      className="text-white "
    >
      Database
    </Nav.Link>

    
  </Nav>
);

const AuthNav = () => {
  const { isAuthenticated} = useAuth0();

  return(
    <Nav className="justify-content-end">
      {isAuthenticated ?<Logout /> : <Login />}
    </Nav>
  );

};;

const NavBar = () => {
  return (
    <Navbar bg="primary" expand="md">
      <Container>
        <Navbar.Brand as={RouterNavLink} className="logo" to="/" >
        <img className="mb-1 app-logo" src={logo} alt="React logo" width="120" />
        </Navbar.Brand>
        <MainNav />
        <AuthNav />
      </Container>
    </Navbar>
  );
};

export default NavBar;
