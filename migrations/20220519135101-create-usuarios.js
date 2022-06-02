'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id: {
        type: Sequelize.TINYINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    usuario: {
        type: Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    tipoUsuario: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
    },  
    status: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    visto: {
        type: Sequelize.DATE,
        allowNull: true,
    }
});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};