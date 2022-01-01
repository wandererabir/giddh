import React from "react";
import logo from "../assets/logo.svg";
import { useAuth0 } from '@auth0/auth0-react';

const Hero = () => {
  const {isAuthenticated, user} = useAuth0();
  if (isAuthenticated){
    return(
      <div className="text-center text-white hero my-5">
      <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
      <h1 className="mb-4">Welcome to GIDDH, {user.given_name}</h1>
  
      <p className="lead">
        Place for you to store all your information safely
  
      </p>
    </div>
    )
  }
  else{
    return(
      <div className="text-center text-white hero my-5">
      <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
      <h1 className="mb-4">Welcome to GIDDH</h1>
  
      <p className="lead">
        Place for you to store all your information safely
  
      </p>
    </div>
    )
  }

};

export default Hero;
