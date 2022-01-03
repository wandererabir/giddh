import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Database from './Database';
import { useAuth0 } from '@auth0/auth0-react';
require('es6-promise').polyfill();


const DataTable = () => {
  const {isAuthenticated} = useAuth0();
  const [data, setData] = useState([]);
  const [q, setQ] = useState('');
  const [searchColumns, setSearchColumns] = useState([
    'name',
  ]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("https://fake-server-walkover.herokuapp.com/users");
    setData(result.data);
  };

  function search(rows) {
    return rows.filter((row) =>
      searchColumns.some(
        (column) =>
          row[column]
            .toString()
            .toLowerCase()
            .indexOf(q.toLowerCase()) > -1,
      ),
    );
  }

  const columns = data[0] && Object.keys(data[0]);
  if (isAuthenticated){
  return (
    <div className="container-fluid bg-white">
        <h1>Database</h1>
      <div className="container">
        <input
          type='text'
          placeholder="Search here"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        {columns &&
          columns.map((column) => (
            <label className="mx-1">
              <input
                type='checkbox'
                checked={searchColumns.includes(column)}
                onChange={(e) => {
                  const checked = searchColumns.includes(column);
                  setSearchColumns((prev) =>
                    checked
                      ? prev.filter((sc) => sc !== column)
                      : [...prev, column],
                  );
                }}
              />
              {column}
            </label>
          ))}
      </div>
      <div>
        <Database users={search(data)} />
      </div>
    </div>
  );
  }
  else{
    return(
      <Container className="mb-5 text-white text-center">
      <h1>You can't access database</h1>
     </Container>
    )
  }
}

export default DataTable
