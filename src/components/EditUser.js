import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const EditUser = () => {
  let history = useNavigate();
  const { id } = useParams();
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    timestamp:"",
    actions:""
  });
  const { name, username, email, phone, website} = user;
  user.timestamp=Date().toLocaleString();
  user.actions="edited";
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    loadUser();
  }, []);
  const onSubmit = async e => {
    e.preventDefault();
    toast.info('Edited a user');
    await axios.put(`https://fake-server-walkover.herokuapp.com/users/${id}`, user);
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
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Your Website Name"
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