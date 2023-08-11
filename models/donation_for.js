'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class donation_for extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  donation_for.init({
    donation_type: DataTypes.STRING,
    dona_name: DataTypes.STRING,
    diaty: DataTypes.STRING,
    address: DataTypes.STRING,
    organiser_details: DataTypes.STRING,
    payment_type: DataTypes.STRING,
    bank_name: DataTypes.STRING,
    branch_name: DataTypes.STRING,
    temple_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'donation_for',
  });
  return donation_for;
};