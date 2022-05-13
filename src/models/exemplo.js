const { Sequelize } = require('sequelize');
const database = require('../components/db');
 
const User = database.define('user', {
    id: {
        type: Sequelize.TINYINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Usuario: {
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
        type: Sequelize.CHAR,
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
})

module.exports = User;