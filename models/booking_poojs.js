'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class booking_poojs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  booking_poojs.init({
    name: DataTypes.STRING,
    timing: DataTypes.STRING,
    pay_type: DataTypes.STRING,
    amount: DataTypes.STRING,
    customer_name: DataTypes.STRING,
    cust_id: DataTypes.STRING,
    poojari_age: DataTypes.STRING,
    poojari_id: DataTypes.STRING,
    poojari_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'booking_poojs',
  });
  return booking_poojs;
};