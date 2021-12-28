import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {Nav,  Navbar, Button, NavDropdown} from 'react-bootstrap';



const Profile = () => {
  const { user, isAuthenticated, logout } = useAuth0();

  return (
    isAuthenticated && ( 
      <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img src="https://giddh.com/wp-content/themes/muteweb/assets/images/logo-white.svg"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav className="ml-auto justify-content-end">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/pricing">Pricing</Nav.Link>
              <Nav.Link href="/details">More details</Nav.Link>
              <NavDropdown key="start" id="dropdown-button-drop-start" drop="start" title={<img width="30px" src={user.picture}/>} id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">{user.name}</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                <Button size="sm" variant="dark" onClick={() => logout()}>
                 Log Out
                </Button>
                </NavDropdown.Item>

              </NavDropdown>
          </Nav>
      </Navbar.Collapse>
  </Navbar>
</>
    )
  )
}

export default Profile