const Sequelize = require('sequelize');

const sequelize = new Sequelize('tcc', 'root', '154515', {
    host: 'localhost',
    dialect:  'mysql'
  });

module.exports = sequelize;
