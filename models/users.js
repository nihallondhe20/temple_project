'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    firstName: DataTypes.STRING,
    mobile: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    adhar_card: DataTypes.STRING,
    pan_card: DataTypes.STRING,
    other: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};