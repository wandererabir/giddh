import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Container} from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth0 } from '@auth0/auth0-react';

const Database = () => {
    const [users, setUser] = useState([]);
    const {isAuthenticated, user} = useAuth0();

    useEffect(() => {
      loadUsers();
    }, []);
  
    const loadUsers = async () => {
      const result = await axios.get("https://fake-server-walkover.herokuapp.com/users");
      setUser(result.data.reverse());
    };
  
    const deleteUser = async id => {
      toast.warning('Deleted the user');
      await axios.delete(`https://fake-server-walkover.herokuapp.com/users/${id}`);
      loadUsers();
    };

    if (isAuthenticated){
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
    else{
      return(
        <Container className="mb-5 text-white text-center">
        <h1>You can't access database</h1>
       </Container>
      )
    }
    
}

export default Database
