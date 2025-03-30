const express = require('express');   // Import Express
const dotenv = require('dotenv');     // Import dotenv for environment variables
const connectDB = require('./config/db');  // Import MongoDB connection function
const cors = require('cors');         // Import CORS middleware

// Import Routes
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const clubRoutes = require('./routes/clubRoutes');
const membershipRoutes = require('./routes/membershipRoutes');

dotenv.config();                      // Load environment variables

// Connect to MongoDB
connectDB();

const app = express();                // Create Express app
const PORT = process.env.PORT || 5000;  // Use .env port or default to 5000

// Middleware
app.use(express.json());
app.use(cors());                       // Enable CORS

// Routes
app.use('/api', userRoutes);
app.use('/api', eventRoutes);
app.use('/api', clubRoutes);
app.use('/api', membershipRoutes);

// Sample route (for testing)
app.get('/', (req, res) => {
  res.send('Server is running smoothly!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

