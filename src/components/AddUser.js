import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AddUser = () => {
  let history = useNavigate();
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const {user} = useAuth0();

  const [users, setUser] = useState({
    name: "",
    username: "",
    email: "",  
    phone: "",
    website: "",
    timestamp:Date().toLocaleString(),
    actions:"added",
    Doneby:user.name
  });
  const { name, username, email, phone, website} = users;
  
  const onInputChange = e => {
    setUser({ ...users, [e.target.name]: e.target.value });
  };
  const onSubmit = async e => {
    e.preventDefault();
    toast.info('Added a user');
    await axios.post("https://fake-server-walkover.herokuapp.com/users", users);
    await delay(5000);
    history('/database', { replace: true });
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center text-white mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Enter User's Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg mb-2"
              placeholder="E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              className="form-control form-control-lg mb-2"
              placeholder="Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Website Name"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add User</button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};
export default AddUser;