import React from 'react';
import { useAuth0  } from '@auth0/auth0-react';
import {Button, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Login = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
      !isAuthenticated && (
        <>
        <div className="container-fluid bg-dark" style={{height: "100vh"}}>
        <Button style={{position:"absolute", top: "50%", left: "50%", transform: "translateY(-50%)"}} onClick={() => loginWithRedirect()}>
          Log In
        </Button>
        </div>
        </>

      )
    )
}

export default Login;