const express = require('express');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

// Database URI
const dbUri = 'mongodb+srv://msmorrow6109:ooTTE0TQtUxY9H5Q@uofogc3.2s8ffxb.mongodb.net/?retryWrites=true&w=majority&appName=UofOGC3';


// Connect to MongoDB
mongoose.connect(dbUri);

// Database connection events
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
  
  // Start listening for incoming requests
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});

// Middleware for parsing incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use(routes);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
}

// Catch-all route to serve the React app in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}
