'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hall_prop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hall_prop.init({
    firstName: DataTypes.STRING,
    mobile: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address: DataTypes.STRING,
    amount: DataTypes.STRING,
    city: DataTypes.STRING,
    payment_type: DataTypes.STRING,
    cheque_no: DataTypes.STRING,
    adhar_card: DataTypes.STRING,
    pan_card: DataTypes.STRING,
    event_name: DataTypes.STRING,
    comments: DataTypes.STRING,
    hall_name: DataTypes.STRING,
    timing: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hall_prop',
  });
  return hall_prop;
};