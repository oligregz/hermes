require('dotenv').config();

const dataconfig = {
  dialect: 'mysql',
  port: process.env.PORT,
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  define: {
    timestamp: false,
    underscored: true,
  }
};

module.exports = dataconfig;