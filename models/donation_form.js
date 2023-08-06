'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class donation_form extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  donation_form.init({
    fullName: DataTypes.STRING,
    mobile: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    amount: DataTypes.STRING,
    gotra: DataTypes.STRING,
    payment_type: DataTypes.STRING,
    cheque_no: DataTypes.STRING,
    bank_name: DataTypes.STRING,
    branch_name: DataTypes.STRING,
    date: DataTypes.STRING,
    transaction_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'donation_form',
  });
  return donation_form;
};