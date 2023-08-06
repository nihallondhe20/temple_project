'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  store.init({
    store_name: DataTypes.STRING,
    select_user: DataTypes.STRING,
    comments: DataTypes.STRING,
    location: DataTypes.STRING,
    others: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'store',
  });
  return store;
};