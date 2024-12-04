
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ViewUser = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:3000/BlogData')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleDelete = (userId) => {
    axios.delete(`http://localhost:3000/BlogData/${userId}`)
      .then(response => {
        setUsers(users.filter(user => user.id !== userId));
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  const handleUpdate = (userId) => {
    navigate(`/update-user/${userId}`);
  };

  return (
    <>
      <div className="container my-5 viewuser">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Users</h2>
          <div>
            <button className="btn btn-outline-secondary me-2" style={{width:"150px"}}>Sort</button>
            <button className="btn btn-outline-secondary" style={{width:"150px"}}>Add Filter</button>
          </div>
        </div>
        <ul className="nav nav-pills mb-3">
          <li className="nav-item">
            <a className="nav-link active" href="#">All</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Delete</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Update</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">View</a>
          </li>
        </ul>
        <table className="table table-hover ">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Category</th>
              <th scope="col">Author</th>
              <th scope="col">Image</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="table-hover ">
                <td>{user.Title}</td>
                <td>{user.Category}</td>
                <td>{user.Author}</td>
                <td>{user.Description}</td>
                <td>{user.Image}</td>

                <td>
                  <button
                    className="badge bg-warning text-dark"
                    style={{width:"70px",marginLeft:"100px"}}
                    onClick={() => handleUpdate(user.id)}
                  >
                    Update
                  </button>
                  
                  <button
                    className="badge bg-success"
                    style={{width:"70px"}}
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ViewUser;
