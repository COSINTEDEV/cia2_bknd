'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Acceso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Acceso.init({
    login_intento: DataTypes.INTEGER,
    token: DataTypes.STRING,
    captcha: DataTypes.STRING,
    ultimo_login: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Acceso',
  });
  return Acceso;
};