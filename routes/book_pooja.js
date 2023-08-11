const db = require("../models");
const generateUniqueId = require("generate-unique-id");
var bodyParser = require('body-parser');
const booking_poojs = require("../models/booking_poojs");
const Pooja = require("../models/pooja");
const Booking_poojs = db.booking_poojs
const pooja = db.Poojs
module.exports = function (app, sequelize, passport) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

  

    app.post(
        "/Booking_poojs/add",
        bodyParser.json(),
      //  passport.authenticate("user_rule", { session: false }),
        async (req, res) => {
            console.log(req.body)
            await Booking_poojs.create({
                name: req.body.name,
                timing: req.body.timing,
                language: req.body.language,
                amount:req.body.amount,
                pid:req.body.pid,
                pooja_id:req.body.pooja_id
            })
                .then((result) => {
                    res.json({ msg: "New category created", data: result });
                })
                .catch((err) => {
                    console.log(err);
                    res.json({ msg: ">> Error while saving data: ", err });
                });
        }
    );



    app.get(
        "/Booking_poojs/all",
        // passport.authenticate("user_rule", { session: false }),
        async (req, res) => {

            Booking_poojs.findAll({
                // where: { userId: req.agent_id },
                // include: [{ model: pooja, as: "pooja_id" }],
            })
                .then((appo) => {
                    
                    res.json ({ msg: "all user appointments", appo });
                }) 
                .catch((err) => {
                    console.log(err);
                    return({
                        msg: ">> Error while fetching user appointments",
                        err,
                    });
                });
           
    
           }
    );


    app.post(
        "/Booking_poojs/id",
        bodyParser.json(),
        // passport.authenticate("user_rule", { session: false }),
        async (req, res) => {

            Booking_poojs.findOne({
                 where: { id: req.body.id },
                // include: [{ model: Notary, as: "notary" }],
            })
                .then((appo) => {
                    
                    res.json ({ msg: "all user appointments", appo });
                }) 
                .catch((err) => {
                    console.log(err);
                    return({
                        msg: ">> Error while fetching user appointments",
                        err,
                    });
                });
           
    
           }
    );



    app.post(
        "/Booking_poojs/delete",
        bodyParser.json(),
      //  passport.authenticate("user_rule", { session: false }),
        async (req, res) => {
            await Booking_poojs.findOne({
                where: {
                    id: req.body.id,
               //     appointmentId: req.body.appointmentId,
                },
            })
                .then(async (userdel) => {
                    if (userdel) {
                        await userdel
                            .destroy({
                              //  include: [{ model: Notary, as: "notary" }],
                            })
                            .then(() => {
                                res.json({
                                    msg: "successfully deleted the appointment",
                                });
                            })
                            .catch((err) => {
                                console.log(err);
                                res.json({
                                    msg: ">> Error while deleteing appointment document",
                                    err,
                                });
                            });
                    }
                    // }
                })
                .catch((err) => {
                    console.log(err);
                    res.json({
                        msg: ">> Error while finding appointment document",
                        err,
                    });
                }); 
        }
    );


}