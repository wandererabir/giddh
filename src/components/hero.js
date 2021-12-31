import React from "react";
import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center text-white hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Welcome to GIDDH</h1>

    <p className="lead">
      Place for you to store all your information safely

    </p>
  </div>
);

export default Hero;
