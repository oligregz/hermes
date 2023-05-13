const express = require('express');
const routes = require('./routes/routes.js');
require('./database');

const app = express();

app.use(express.json());
app.use(routes);

module.exports = app;