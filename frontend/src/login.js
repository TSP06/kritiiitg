// LoginForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './LoginForm.css'

const LoginForm = ({ setUserLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('userToken', response.data.token);
      alert('Login successful!');
      setUserLoggedIn(true); // Pass `true` indicating user is logged in
      navigate('/'); // Navigate to the home page or dashboard
    } catch (err) {
      alert('Invalid credentials');
    }
  };

  const handleClose = () => {
    navigate('/'); // Ensure proper navigation on close button click
  }

  return (
    <div className="login-container">
      <div className="logintitle">
        <h1 className="logintitle">Login</h1>

        <div className="close-icon" onClick={handleClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 36 36">
            <path fill="white" d="M21.533 18.002L33.768 5.768a2.5 2.5 0 0 0-3.535-3.535L17.998 14.467L5.764 2.233a2.5 2.5 0 0 0-3.535 0a2.5 2.5 0 0 0 0 3.535l12.234 12.234L2.201 30.265a2.498 2.498 0 0 0 1.768 4.267c.64 0 1.28-.244 1.768-.732l12.262-12.263l12.234 12.234a2.5 2.5 0 0 0 1.768.732a2.5 2.5 0 0 0 1.768-4.267z"/>
          </svg>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="loginform">
        <input 
          className="loginfield" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
          required 
        />
        <input 
          className="loginfield" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          required 
        />
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
