const dataconfig = {
  dialect: 'mysql',
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  define: {
    timestamp: true,
    underscored: true,
  }
};

export default dataconfig;