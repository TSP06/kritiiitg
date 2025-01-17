import React, { useState } from 'react';
import axios from 'axios';

const AdminLoginForm = () => {
  const [username, setUsername] = useState('');  // Changed to username
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://kritibackend.onrender.com/api/auth/login',
        { username, password, role: 'admin' }, // Include role in the payload
        {
          headers: {
            'Content-Type': 'application/json',
            withCredentials: true, // Set appropriate headers
          },
        }
      );

      const token = response.data.token; // Extract token from the response
      localStorage.setItem('token', token); // Store the token in localStorage
      alert('Admin login successful!');
    } catch (err) {
      console.error(err); // Log error for debugging
      alert('Invalid admin credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: 'auto' }}>
      <h2>Admin Login</h2>
      <input
        type="text"  // Changed to text for username
        value={username}  // Changed to username
        onChange={(e) => setUsername(e.target.value)}  // Updated to handle username input
        placeholder="Admin Username"
        required
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '10px',
          boxSizing: 'border-box',
        }}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Admin Password"
        required
        style={{
          width: '100%',
          padding: '10px',
          marginBottom: '10px',
          boxSizing: 'border-box',
        }}
      />
      <button
        type="submit"
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        Login as Admin
      </button>
    </form>
  );
};

export default AdminLoginForm;
