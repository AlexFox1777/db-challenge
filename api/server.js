const express = require('express');
const server = express();

const projectRouter = require('../projects/projects');
server.use(express.json());
server.use('/api/projects', projectRouter);

server.get('/', (req, res) =>{
    res.send('Projects :) ');
});

module.exports = server;