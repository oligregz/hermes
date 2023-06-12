require('dotenv').config();

const dataconfig = {
  dialect: 'mysql',
  port: process.env.PORT,
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  define: {
    timestamp: true,
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
};

module.exports = dataconfig;