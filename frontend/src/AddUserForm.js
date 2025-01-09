import React, { useState } from 'react';
import axios from 'axios';

const AddUserForm = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState(''); // renamed to 'username'
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // default role is 'user'
  const [message, setMessage] = useState('');
  const [userIdToDelete, setUserIdToDelete] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Authorization token
      const response = await axios.post(
        'https://kritibackend.onrender.com/api/auth/admin/add-user',
        { name, username, password, role },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(response.data.message);
      // Clear form fields after successful submission
      setName('');
      setUsername(''); // reset username
      setPassword('');
      setRole('user');
    } catch (error) {
      setMessage(error.response?.data?.message || 'Something went wrong');
    }
  };

  const handleDeleteUser = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Authorization token

      const response = await axios.delete(
        `https://kritibackend.onrender.com/api/auth/admin/delete-user/${userIdToDelete}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDeleteMessage(response.data.message);
      // Clear form field after successful deletion
      setUserIdToDelete('');
    } catch (error) {
      setDeleteMessage(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc' }}>
      <h2>Add User</h2>
      <form onSubmit={handleAddUser}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>User Name:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // updated to 'username'
            required
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit" style={{ padding: '10px', width: '100%' }}>
          Add User
        </button>
      </form>
      {message && <p style={{ marginTop: '10px' }}>{message}</p>}

      <h2>Delete User</h2>
      <form onSubmit={handleDeleteUser}>
        <div style={{ marginBottom: '10px' }}>
          <label>User ID or Username:</label> {/* changed email label to 'Username' */}
          <input
            type="text"
            value={userIdToDelete}
            onChange={(e) => setUserIdToDelete(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px', width: '100%' }}>
          Delete User
        </button>
      </form>
      {deleteMessage && <p style={{ marginTop: '10px' }}>{deleteMessage}</p>}
    </div>
  );
};

export default AddUserForm;
