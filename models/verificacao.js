'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class verificacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  verificacao.init({
    id: { primaryKey: true, type: DataTypes.INTEGER },
    uniqueString: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'verificacao',
  });
  return verificacao;
};