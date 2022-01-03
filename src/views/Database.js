import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Container} from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Database = ({users}) => {
  
    const deleteUser = async id => {
      await axios.delete(`https://fake-server-walkover.herokuapp.com/users/${id}`);
      window.location.reload(false);
      toast.warning('Deleted the user');
    };

      return (
        <div className="container-fluid bg-white">
          <div className="py-4">
            <Link className="btn btn-outline-dark my-3" to="/user/add">Add User</Link>
            
            <table class="table border shadow">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                    <Link class="btn-sm btn-primary text-decoration-none mx-1" to={`/users/${user.id}`}>
                      View
                    </Link>
                    <Link
                      class="btn-sm btn-dark text-decoration-none  mx-1"
                      to={`/users/edit/${user.id}`}
                    >Edit</Link>
                    <button className="btn-sm btn-danger mx-1" onClick={()=>deleteUser(user.id)}>Delete</button>
                    <ToastContainer />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    
}

export default Database
