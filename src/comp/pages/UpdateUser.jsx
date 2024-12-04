import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({ Title: '', Author: '', Category: '', Image: '', Description: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/BlogData/${id}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.error('Error fetching Data:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/BlogData/${id}`, user)
      .then(response => {
        alert('User updated successfully');
        navigate('/ViewUser');
      })
      .catch(error => {
        console.error('Error updating Data:', error);
      });
  };

  return (
    <div className="container my-5">
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="Title"
            value={user.Title}
            onChange={handleChange}
            required
          />
        </div>
       
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="Author"
            className="form-control"
            name="Author"
            value={user.Author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="Category"
            className="form-control"
            name="Category"
            value={user.Category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input
            type="text"
            className="form-control"
            name="Image"
            value={user.Image}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            name="Description"
            value={user.Description}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default UpdateUser;
