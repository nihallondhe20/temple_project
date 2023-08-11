const db = require("../models");
const generateUniqueId = require("generate-unique-id");
var bodyParser = require('body-parser');
const booking_poojs = require("../models/booking_poojs");
const pooja = require("../models/pooja");
const Pooja = db.pooja
const Booking_poojs = db.booking_poojs

module.exports = function (app, sequelize, passport) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

  

    app.post(
        "/pooja/add",
        bodyParser.json(),
      //  passport.authenticate("user_rule", { session: false }),
        async (req, res) => {
            console.log(req.body)
            await Pooja.create({
                name: req.body.name,
                timing: req.body.timing,
                language: req.body.language,
                amount:req.body.amount,
                code:req.body.code,
                temple_id:req.body.temple_id
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
        "/pooja/all",
        // passport.authenticate("user_rule", { session: false }),
        async (req, res) => {

            Pooja.findAll({
               
                where: { id: 1},
                 include: [{ model: Booking_poojs, as: "bookpooja" }],
                
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
        "/pooja/id",
        bodyParser.json(),
        // passport.authenticate("user_rule", { session: false }),
        async (req, res) => {

            Pooja.findOne({
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
        "/pooja/delete",
        bodyParser.json(),
      //  passport.authenticate("user_rule", { session: false }),
        async (req, res) => {
            await Pooja.findOne({
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