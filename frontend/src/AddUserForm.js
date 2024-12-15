import React, { useState } from 'react';
import axios from 'axios';

const AddUserForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [userIdToDelete, setUserIdToDelete] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/add-user', { email, password });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Something went wrong');
    }
  };

  const handleDeleteUser = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Replace with token from your login flow

      const response = await axios.delete(`http://localhost:5000/api/auth/delete-user/${userIdToDelete}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDeleteMessage(response.data.message);
    } catch (error) {
      setDeleteMessage(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc' }}>
      <h2>Add User</h2>
      <form onSubmit={handleAddUser}>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button type="submit" style={{ padding: '10px', width: '100%' }}>
          Add User
        </button>
      </form>
      {message && <p style={{ marginTop: '10px' }}>{message}</p>}

      <h2>Delete User</h2>
      <form onSubmit={handleDeleteUser}>
        <div style={{ marginBottom: '10px' }}>
          <label>User ID or Email:</label>
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
