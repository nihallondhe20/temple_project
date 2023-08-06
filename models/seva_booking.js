'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class seva_booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  seva_booking.init({
    fullName: DataTypes.STRING,
    mobile: DataTypes.STRING,
    email: DataTypes.STRING,
    addredd: DataTypes.STRING,
    amount: DataTypes.STRING,
    gotra: DataTypes.STRING,
    payment_type: DataTypes.STRING,
    cheque_no: DataTypes.STRING,
    bank_name: DataTypes.STRING,
    branch_name: DataTypes.STRING,
    date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'seva_booking',
  });
  return seva_booking;
};