const db = require("../models");
const generateUniqueId = require("generate-unique-id");
var bodyParser = require('body-parser');
const store = require("../models/store");
const hall_prop = require("../models/hall_prop")
const Hall_prop = db.hall_prop
module.exports = function (app, sequelize, passport) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });



    app.post(
        "/hall/add",
        bodyParser.json(),
      //  passport.authenticate("user_rule", { session: false }),
        async (req, res) => {
            console.log(req.body)
            await Hall_prop.create({
                firstName: req.body.name,
                mobile: req.body.mobile,
                lastName: req.body.comments,
                address:req.body.address,
                amount:req.body.amount,
                city:req.body.city,
                payment_type:req.body.payment_type,
                cheque_no:req.body.cheque_no,
                adhar_card:req.body.adhar_card,
                pan_card:req.body.pan_card,
                event_name:req.body.event_name,
                comments:req.body.comments,
                hall_name:req.body.hall_name,
                timing:req.body.timing,

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
        "/hall/all",
        // passport.authenticate("user_rule", { session: false }),
        async (req, res) => {

            Hall_prop.findAll({
                // where: { userId: req.agent_id },
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
        "/hall/id",
        bodyParser.json(),
        // passport.authenticate("user_rule", { session: false }),
        async (req, res) => {

            Hall_prop.findOne({
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
        "/hall/delete",
        bodyParser.json(),
      //  passport.authenticate("user_rule", { session: false }),
        async (req, res) => {
            await Hall_prop.findOne({
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