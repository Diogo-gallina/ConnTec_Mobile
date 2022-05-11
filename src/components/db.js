const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sys', 'root', 'admin', {
    host: 'localhost',
    dialect:  'mysql'
  });
module.exports = sequelize;
