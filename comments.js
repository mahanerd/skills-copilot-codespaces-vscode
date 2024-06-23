// Create web server
// 1. Load the express module
// 2. Create an express application
// 3. Create a route for the home page
// 4. Start the server

// 1. Load the express module
const express = require('express');

// 2. Create an express application
const app = express();

// 3. Create a route for the home page
app.get('/', (req, res) => {
  res.send('Hello World');
});

// 4. Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Run the server
// $ node comments.js
// Server is running on http://localhost:3000
// Visit http://localhost:3000 in your browser to see the message 'Hello World'

// In this example, we created a web server that listens on port 3000 and responds with 'Hello World' when we visit http://localhost:3000 in our browser. This is the most basic example of a web server in Express.
// We will build on this example in the next lesson to create a more complex web server that can handle different types of requests and responses.    