// routes/authRoutes.js
const express = require('express');
const { registerUser, loginUser, verifyUser, addUser, deleteUser } = require('../controllers/userController');

const router = express.Router();

//router.post('/register', registerUser); // Admin registration route
router.post('/login', loginUser);       // User login route
router.post('/add-user', addUser);      // Route to add a user
router.get('/protected', verifyUser, (req, res) => res.send('This is a protected route!'));
router.delete('/delete-user/:id', deleteUser);

module.exports = router; // Ensure this exports the router

