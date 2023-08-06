
"use strict";
const express = require("express");
const bodyParser = require("body-parser");
//const cors = require("cors");
require("dotenv").config();
const app = express();
const { Sequelize } = require("sequelize");
const stores = require("./models/store");


const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },

    // dialectOptions: {
    // 	ssl: {
    // 		rejectUnauthorized: false, // very important
    // 	},
    // },
});
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

connectDB();
// models.sequelize
// 	.authenticate()
// 	.then(function () {
// 		console.log("Connection successful");
// 	})
// 	.catch(function (error) {
// 		console.log("Error creating connection:", error);
// 	});



app.get("/", function (req, res, next) {
    res.json({ msg: "API Working" });
});

require("../v1/routes/user")(app,sequelize)
require("./routes/store")(app,sequelize)
require("./routes/hall_prop")(app,sequelize)
require("./routes/donation")(app,sequelize)
require("./routes/temple")(app,sequelize)

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
app.use(function fourOhFourHandler(req, res) {
    res.status(404).json("404");
});
app.use(function fiveHundredHandler(err, req, res, next) {
    console.error(err);
    res.status(500).json("500");
});

 
