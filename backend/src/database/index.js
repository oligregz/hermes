const Sequelize = require('sequelize');
const dataconfig = require('../config/database.js');

const Client = require('../models/Client.model.js');
const Table = require('../models/Table.model.js');
const Reserve = require('../models/Reserve.model.js');

const connection = new Sequelize(dataconfig);

Client.init(connection);
Table.init(connection);
Reserve.init(connection);

// use the command 
// $ npx sequelize db:migrate --name "name of migraton.js"
// doing one migration at a time and starting from client, table and reserve


module.exports = connection;