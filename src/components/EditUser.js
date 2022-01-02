import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth0 } from "@auth0/auth0-react";


const EditUser = () => {
  let history = useNavigate();
  const { id } = useParams();
  const {user} = useAuth0();
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const [users, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    timestamp:"",
    actions:"",
    Doneby:""
  });
  const { name, username, email, phone, website} = users;
  users.timestamp=Date().toLocaleString();
  users.actions="edited";
  users.Doneby=user.name;
  const onInputChange = e => {
    setUser({ ...users, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadUser();
  }, []);
  const onSubmit = async e => {
    e.preventDefault();
    toast.info('Edited a user');
    await axios.put(`https://fake-server-walkover.herokuapp.com/users/${id}`, users);
    await delay(5000);
    history('/database', { replace: true });
  };
  const loadUser = async () => {
    const result = await axios.get(`https://fake-server-walkover.herokuapp.com/users/${id}`);
    setUser(result.data);
  };


  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center text-white mb-4">Edit A User</h2>
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
          <button className="btn btn-warning btn-block">Update User</button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default EditUser;