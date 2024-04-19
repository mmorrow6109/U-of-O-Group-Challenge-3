const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');
const { MongoClient, ServerApiVersion } = require('mongodb');

const PORT = process.env.PORT || 3001;
const app = express();
require("dotenv").config();

// Database URI
const dbUri = 'mongodb+srv://msmorrow6109:ooTTE0TQtUxY9H5Q@uofogc3.2s8ffxb.mongodb.net/?retryWrites=true&w=majority&appName=UofOGC3';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(dbUri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error('MongoDB connection error:', error);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

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

// Start listening for incoming requests
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}!`);
  console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
});
