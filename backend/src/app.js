const express = require('express');
const routes = require('./routes/routes.js');
const cors = require('cors');
require('./database');

const app = express();

app.use(cors({ origin: '*' }));

app.use(express.json());
app.use(routes);

module.exports = app;