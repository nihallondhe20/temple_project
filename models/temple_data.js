'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class temple_data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  temple_data.init({
    t_name: DataTypes.STRING,
    mobile: DataTypes.STRING,
    gmail: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    found_date: DataTypes.STRING,
    diety: DataTypes.STRING,
    pujari: DataTypes.STRING,
    timing_oc: DataTypes.STRING,
    photos: DataTypes.STRING,
    instructions: DataTypes.STRING,
    comments: DataTypes.STRING,
    comments: DataTypes.STRING,
    comments: DataTypes.STRING,
    fb: DataTypes.STRING,
    insta: DataTypes.STRING,
    gallary: DataTypes.STRING,
    copyright: DataTypes.STRING,
    specific: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'temple_data',
  });
  return temple_data;
};