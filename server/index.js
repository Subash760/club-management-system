const express = require('express');   // Import Express
const dotenv = require('dotenv');     // Import dotenv for environment variables
const cors = require('cors');         // Import CORS middleware


const connectDB = require('./config/db');
connectDB();


dotenv.config();                      // Load environment variables

const app = express();                // Create Express app
const PORT = process.env.PORT || 5000;  // Use .env port or default to 5000

// Middleware
app.use(cors());                       // Enable CORS
app.use(express.json());               // Parse JSON requests

// Sample route (for testing)
app.get('/', (req, res) => {
  res.send('Server is running smoothly!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
