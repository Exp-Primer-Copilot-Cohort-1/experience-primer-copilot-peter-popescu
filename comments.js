// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { randomBytes } = require('crypto'); // built-in module
const axios = require('axios');

const app = express();

// parse request body
app.use(bodyParser.json());
// enable CORS
app.use(cors());

// store comments in memory
const commentsByPostId = {};

// GET request to get all comments for a post
app.get('/posts/:id/comments', (req, res) => {
  const postId = req.params.id;
  const comments = commentsByPostId[postId] || [];
  res.send(comments);
});

// POST request to