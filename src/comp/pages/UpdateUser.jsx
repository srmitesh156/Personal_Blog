import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    Title: '',
    Author: '',
    Category: '',
    Image: '',
    Description: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/BlogData/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        alert('Failed to fetch user data. Please try again.');
      });
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/BlogData/${id}`, user)
      .then(() => {
        alert('User updated successfully');
        navigate('/ViewUser');
      })
      .catch((error) => {
        console.error('Error updating data:', error);
        alert('Failed to update user. Please try again.');
      });
  };

  return (
    <div className="container my-5">
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="Title"
            name="Title"
            value={user.Title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Author" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="Author"
            name="Author"
            value={user.Author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Category" className="form-label">
            Category
          </label>
          <input
            type="text"
            className="form-control"
            id="Category"
            name="Category"
            value={user.Category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Image" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="Image"
            name="Image"
            value={user.Image}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="Description"
            name="Description"
            value={user.Description}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
