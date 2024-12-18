// routes/authRoutes.js
const express = require('express');
const { registerUser, loginUser, verifyUser, addUser, deleteUser } = require('../controllers/userController');
const { authenticate, isAdmin } = require('../controllers/auth');

const router = express.Router();

//router.post('/register', registerUser); // Admin registration route
router.post('/login', loginUser);       // User login route
router.post('/admin/add-user', addUser);      // Route to add a user
//router.get('/protected', verifyUser, (req, res) => res.send('This is a protected route!'));
router.delete('/admin/delete-user/:id',authenticate,isAdmin, deleteUser);

module.exports = router; // Ensure this exports the router

