const express = require('express');
const server = express();
const cors = require('cors');
const users_router = require('./routers/users_router');

server.use(cors());
server.use('/', users_router);

module.exports = server