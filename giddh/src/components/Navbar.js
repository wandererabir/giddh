import React from "react";
import { NavLink as RouterNavLink, Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from '@auth0/auth0-react';
import Login from './Login';
import Logout from './Logout';

const MainNav = () => (
  <Nav className="mr-auto ">
    <Nav.Link
      as={RouterNavLink}
      to="/"
      exact
      activeClassName="router-link-exact-active "
    >
      Home
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/profile"
      exact
      activeClassName="router-link-exact-active"
    >
      Profile
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/database"
      exact
      activeClassName="router-link-exact-active"
    >
      Database
    </Nav.Link>

    <Link className="btn btn-outline-dark mr-5" to="/useradd">Add User</Link>
  </Nav>
);

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();

  return(
    <Nav className="justify-content-end">
      {isAuthenticated ?<Logout /> : <Login />}
    </Nav>
  );

};;

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        <Navbar.Brand as={RouterNavLink} className="logo" to="/" />
        <MainNav />
        <AuthNav />
      </Container>
    </Navbar>
  );
};

export default NavBar;
