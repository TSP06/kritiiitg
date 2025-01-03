require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/user');
const registerRoutes = require('./routes/register')

const app = express();
app.use(express.json());

// Enable CORS for all routes
app.use(cors()); // This allows all origins (use more restrictive rules for production)

// Connect to MongoDB
mongoose.connect("mongodb+srv://Tanu:Tanu060105@kriti.k10ov.mongodb.net/?retryWrites=true&w=majority&appName=Kriti")
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));
  app.get('/', (req, res) => {
    res.send('Hello');
  });
// Routes
app.use('/api/auth', userRoutes);
app.use('/api/register',registerRoutes);
// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
