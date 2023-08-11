'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class donation_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  donation_details.init({
    donation_for: DataTypes.INTEGER,
    remark: DataTypes.STRING,
    address: DataTypes.STRING,
    amount: DataTypes.STRING,
    city: DataTypes.STRING,
    payment_type: DataTypes.STRING,
    cheque_no: DataTypes.STRING,
    adhar_card: DataTypes.STRING,
    pan_card: DataTypes.STRING,
    date: DataTypes.STRING,
    comments: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'donation_details',
  });
  return donation_details;
};