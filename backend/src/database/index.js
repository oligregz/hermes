const Sequelize = require('sequelize');
const dataconfig = require('../config/database.js');

const Client = require('../models/Client.model.js');
const Table = require('../models/Table.model.js');
const Reserve = require('../models/Reserve.model.js');

Client.init(connection);
Table.init(connection);
Reserve.init(connection);

const connection = new Sequelize(dataconfig);

module.exports = connection;