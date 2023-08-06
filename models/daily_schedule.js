'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class daily_schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  daily_schedule.init({
    store_name: DataTypes.STRING,
    select_user: DataTypes.STRING,
    others: DataTypes.STRING,
    a12m: DataTypes.STRING,
    a1m: DataTypes.STRING,
    a2m: DataTypes.STRING,
    a3m: DataTypes.STRING,
    a4m: DataTypes.STRING,
    a5m: DataTypes.STRING,
    a6m: DataTypes.STRING,
    a7m: DataTypes.STRING,
    a8m: DataTypes.STRING,
    a9m: DataTypes.STRING,
    a10m: DataTypes.STRING,
    a11m: DataTypes.STRING,
    p12m: DataTypes.STRING,
    p1m: DataTypes.STRING,
    p2m: DataTypes.STRING,
    p3m: DataTypes.STRING,
    p4m: DataTypes.STRING,
    p5m: DataTypes.STRING,
    p6m: DataTypes.STRING,
    p7m: DataTypes.STRING,
    p8m: DataTypes.STRING,
    p9m: DataTypes.STRING,
    p10m: DataTypes.STRING,
    p11m: DataTypes.STRING,
    p12m: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'daily_schedule',
  });
  return daily_schedule;
};