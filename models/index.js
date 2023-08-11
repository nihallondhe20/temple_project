'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.pooja=require("./pooja")(sequelize, Sequelize.DataTypes)
db.poojaa=require("./pooja")(sequelize, Sequelize.DataTypes)

db.temple_data=require("./temple_data")(sequelize, Sequelize.DataTypes)
db.booking_poojs=require("./booking_poojs")(sequelize, Sequelize.DataTypes)
//db.Pooja_Add=require("./pooja")(sequelize, Sequelize.DataTypes)
//db.Pooja_Add=require("./pooja")(sequelize, Sequelize.DataTypes)
db.donation=require("./donation_details")(sequelize, Sequelize.DataTypes)
db.donation_for=require("./donation_for")(sequelize, Sequelize.DataTypes)

db.pooja.hasMany(db.booking_poojs,{
  foreignKey:"id",
   as:"bookpooja"
})

db.booking_poojs.belongsTo(db.pooja, {
	foreignKey: "temple_id",
	as: "poojaa",
});


db.donation_for.hasMany(db.donation,{
  foreignKey:"donation_for",
   as:"donatefor"
})

db.donation.belongsTo(db.donation_for, {
	foreignKey: "id",
	as: "donateform",
});


db.temple_data.hasMany(db.poojaa,{
  foreignKey:"temple_id",
   as:"templepooja"
})

db.poojaa.belongsTo(db.temple_data, {
	foreignKey: "id",
	as: "poojabytemple",
});




db.temple_data.hasMany(db.donation_for,{
  foreignKey:"temple_id",
   as:"donatetotemple"
})

db.donation_for.belongsTo(db.temple_data, {
	foreignKey: "id",
	as: "templedonation",
});


module.exports = db;
