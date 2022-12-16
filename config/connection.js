const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  require('dotenv').config();
  sequelize = new Sequelize(process.env.DB_NAME = 'ecommerce_db', process.env.DB_USER = 'root', process.env.DB_PW = 'Livnoor11', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306,
  });
}

module.exports = sequelize;
