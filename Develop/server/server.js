const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const app = express();

// Database URI
const dbUri = 'mongodb+srv://msmorrow6109:ooTTE0TQtUxY9H5Q@uofogc3.2s8ffxb.mongodb.net/?retryWrites=true&w=majority&appName=UofOGC3';

// Create a new instance of an Apollo server with the GraphQL schema
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware // Assuming authMiddleware provides context for authentication
});

// Apply GraphQL middleware to Express app
server.applyMiddleware({ app, path: '/graphql' });

// Middleware for parsing incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));

  // Catch-all route to serve the React app in production
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

// Connect to MongoDB
mongoose.connect(dbUri)
.then(() => {
  // Start listening for incoming requests
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
})
.catch(err => console.error('MongoDB connection error:', err));