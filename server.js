const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const actions = require('./data/routers/actions-router');
const projects = require('./data/routers/projects-router');

const server = express();

server.use(express.json(), morgan('dev'), helmet());
server.use('/actions', actions);
server.use('/projects', projects);

server.get('/', (req, res) => {
  res.send(`
    <h2>Sprint Challenge - Node Express</h2>
    <p>Welcome to the base route!</p>
    `);
});

module.exports = server;
