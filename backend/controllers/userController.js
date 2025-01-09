const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'tanu';

// Add user
exports.addUser = async (req, res) => {
  try {
    const { name, username, password, role } = req.body;

    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already in use' });
    }

    // Prevent creating admin accounts via public routes

    // Create a new user instance and save to the database
    const user = new User({ name, username, password, role });
    await user.save();

    res.status(201).json({ message: 'User added successfully!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    console.log(user);
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: '1hr' }
    );
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Verify user (optional for protected routes)
/*exports.verifyUser = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'Access Denied' });
  
  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid Token' });
  }
};*/

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    // Find and delete user by ID
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
