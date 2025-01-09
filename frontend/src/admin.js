import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AddUserForm from './AddUserForm';

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); // Correct hook usage

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('No token found. Redirecting to /adminlogin...');
      navigate('/adminlogin'); // Correct usage
      return;
    }})

  /*  axios
      .get('https://kritibackend.onrender.com/api/users', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log('Fetched users:', response.data);
        setUsers(response.data);
      })
      .catch((err) => {
        console.error('Error fetching users:', err);
        if (err.response?.status === 401) {
          console.log('Unauthorized. Redirecting to /login...');
          navigate('/login'); // Redirect if unauthorized
        }
      });
  }, [navigate]);
*/
  const handleLogout = () => {
    console.log('Logging out...');
    localStorage.removeItem('token');
    console.log('Token removed. Redirecting to /login...');
    navigate('/login'); // Redirecting to login after logout
  };

  const handleDeleteUser = (userId) => {
    const token = localStorage.getItem('token');
    axios
      .delete(`https://kritibackend.onrender.com/api/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        setUsers(users.filter((user) => user._id !== userId)); // Update state
        alert('User deleted successfully!');
      })
      .catch((err) => {
        console.error('Error deleting user:', err);
        alert('Error deleting user');
      });
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>

      <h2>All Users</h2>
     

      <h2>Manage Users</h2>
      <AddUserForm />
    </div>
  );
};

export default AdminPage;
