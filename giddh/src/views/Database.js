import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
const Database = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
      loadUsers();
    }, []);
  
    const loadUsers = async () => {
      const result = await axios.get("http://localhost:3002/users");
      setUser(result.data.reverse());
    };
  
    const deleteUser = async id => {
      await axios.delete(`http://localhost:3002/users/${id}`);
      loadUsers();
    };
  
    return (
      <div className="container-fluid bg-white">
        <div className="py-4">
          <h1>Database</h1>
          
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
                  <Link class="btn btn-primary mx-1" to={`/users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mx-1"
                    to={`/users/edit/${user.id}`}
                  >Edit</Link>
                  <button className="btn-sm btn-danger mx-1" onClick={()=>deleteUser(user.id)}>Delete</button>
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
