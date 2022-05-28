"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuarios.init(
    {
      idUsuario: { primaryKey: true, type: DataTypes.INTEGER },
      email: DataTypes.STRING,
      nome: DataTypes.STRING,
      senha: DataTypes.STRING,
      tipoUsuario: DataTypes.TINYINT(1),
      status: DataTypes.TEXT,
      visto: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "usuarios",
    }
  );
  return Usuarios;
};
