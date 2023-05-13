const Sequelize = require('sequelize');
const dataconfig = require('../config/database.js');

const connection = new Sequelize(dataconfig);

module.exports = connection;