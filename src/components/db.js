const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tcc', 'root', 'admin', {
    host: 'localhost',
    dialect:  'mysql'
  });

  module.exports = sequelize;
