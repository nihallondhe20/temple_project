'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nitya_seva extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  nitya_seva.init({
    fullName: DataTypes.STRING,
    seva_name: DataTypes.STRING,
    quantity: DataTypes.STRING,
    amount: DataTypes.STRING,
    total: DataTypes.STRING,
    date: DataTypes.STRING,
    diety: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'nitya_seva',
  });
  return nitya_seva;
};