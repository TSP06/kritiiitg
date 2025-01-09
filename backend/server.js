require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/user');
const registerRoutes = require('./routes/register');

const app = express();
app.use(express.json());

// Enable CORS with specified origins and credentials
const allowedOrigins = ['http://localhost:3001', 'https://kriti25.vercel.app']; // Add allowed origins here

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests from allowed origins or no origin (Postman/insomnia requests)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// Handle preflight requests explicitly for all routes
app.options('*', (req, res) => {
  res.set('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.sendStatus(204); // No Content
});

// Log all incoming requests for debugging
app.use((req, res, next) => {
  console.log('Request received:');
  console.log(`- Method: ${req.method}`);
  console.log(`- URL: ${req.url}`);
  console.log(`- Headers:`, req.headers);
  console.log(`- Body:`, req.body);
  next();
});

// Connect to MongoDB
mongoose.connect("mongodb+srv://Tanu:Tanu060105@kriti.k10ov.mongodb.net/?retryWrites=true&w=majority&appName=Kriti")
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Define basic route to check server status
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

// Attach routes
app.use('/api/auth', userRoutes);
app.use('/api/register', registerRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
