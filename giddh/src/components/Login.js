import React from 'react';
import { useAuth0  } from '@auth0/auth0-react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
            <Button className='bg-white text-dark' onClick={() => loginWithRedirect()}>
               Logout
            </Button>
    );
};

export default Login;