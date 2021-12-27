import React from 'react';
import { useAuth0  } from '@auth0/auth0-react';
import {Button,Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Login = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
      !isAuthenticated && (
        <>
        <div className="container-fluid bg-dark  row align-items-center" style={{height: "100vh"}}>
        <Card className="bg-primary text-white mx-auto" style={{width:"28rem"}} >
          <Card.Header as="h5">Welcome To GIDDH</Card.Header>
          <Card.Body>
             <Card.Title>Are you member or not? Then register with us</Card.Title>
             <Card.Text>
               Click on it to Login/SignUp
             </Card.Text>
             <Button className='bg-white text-dark' onClick={() => loginWithRedirect()}>
               Log In
             </Button>
           </Card.Body>
        </Card>

        </div>
        </>

      )
    )
}

export default Login;