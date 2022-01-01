import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import TimeAgo from 'react-timeago'
import englishStrings from 'react-timeago/lib/language-strings/en'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
const ViewUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    webiste: "",
    timestamp: "",
    actions:""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`https://fake-server-walkover.herokuapp.com/users/${id}`);
    setUser(res.data);
  };
  const formatter = buildFormatter(englishStrings)
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/database">
        back to Home
      </Link>
      <h1 className="display-4 text-white">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">Username: {user.username}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Phone: {user.phone}</li>
        <li className="list-group-item">Website: {user.website}</li>
        <li className="list-group-item">Done by: {user.Doneby}</li>
        <p className="text-white">{user.actions} <TimeAgo date={user.timestamp} formatter={formatter} /></p>
      </ul>
    </div>
  );
};
export default ViewUser;