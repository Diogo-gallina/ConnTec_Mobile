const sequelize = require('sequelize');
const { Sequelize } = require('sequelize');
const database = require('../components/db');
 
const Usuario = database.define('usuario', {
    id: {
        type: Sequelize.TINYINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Usuario: {
        type: Sequelize.STRING,
        allowNull: false
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
        defaultValue: 'U'
    },  
    status: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    visto: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: CURRENT_TIMESTAMP
    },
})

module.exports = Amigos;