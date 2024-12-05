import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/BlogData")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        alert("Failed to load data. Please try again later.");
      });
  };

  const handleDelete = (userId) => {
    const user = users.find((user) => user.id === userId);
    if (window.confirm(`Are you sure you want to delete "${user?.Title}"?`)) {
      axios
        .delete(`http://localhost:3000/BlogData/${userId}`)
        .then(() => {
          setUsers(users.filter((user) => user.id !== userId));
          alert(`User "${user?.Title}" deleted successfully.`);
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
          alert("Failed to delete the user. Please try again.");
        });
    }
  };

  const handleUpdate = (userId) => {
    navigate(`/update-user/${userId}`);
  };

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Blog Data</h2>
        <div>
          <button className="btn btn-outline-secondary me-2" style={{ width: "150px" }}>
            Sort
          </button>
          <button className="btn btn-outline-secondary" style={{ width: "150px" }}>
            Add Filter
          </button>
        </div>
      </div>

      <table className="table table-hover table-responsive">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Author</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.Title}</td>
                <td>{user.Category}</td>
                <td>{user.Author}</td>
                <td>{user.Description}</td>
                <td>
                  <img
                    src={user.Image}
                    alt={user.Title}
                    style={{ width: "50px", height: "50px", objectFit: "cover" }}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-warning btn-sm  mb-1"
                    onClick={() => handleUpdate(user.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger btn-sm  mb-1 "
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                Data Not Found...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewUser;
