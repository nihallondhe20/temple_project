'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pooja extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pooja.init({
    name: DataTypes.STRING,
    timing: DataTypes.STRING,
    language: DataTypes.STRING,
    amount: DataTypes.STRING,
    code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pooja',
  });
  return pooja;
};