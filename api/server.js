const express = require('express');
const server = express();
const users_router = require('./routers/users_router');

server.use('/', users_router);

module.exports = server