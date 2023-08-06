const db = require("../models");
const generateUniqueId = require("generate-unique-id");
var bodyParser = require('body-parser');
//const store = require("../models/store");
const temple_data = require("../models/temple_data")
const Temple = db.temple_data
module.exports = function (app, sequelize, passport) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });



    app.post(
        "/temple/add",
        bodyParser.json(),
        //  passport.authenticate("user_rule", { session: false }),
        async (req, res) => {

            await Temple.create({

                t_name: req.body.t_name,
                mobile: req.body.mobile,
                gmail: req.body.gmail,
                address: req.body.address,
                city: req.body.city,
                found_date: req.body.found_date,
                diety: req.body.diety,
                pujari: req.body.pujari,
                timing_oc: req.body.timing_oc,
                photos: req.body.photos,
                instructions: req.body.instructions,
                comments: req.body.comments,
                comments: req.body.comments,
                comments: req.body.comments,
                fb: req.body.fb,
                insta: req.body.insta,
                gallary: req.body.gallary,
                copyright: req.body.copyright,
                specific: req.body.specific


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
        "/temple/all",
        // passport.authenticate("user_rule", { session: false }),
        async (req, res) => {
            console.log(temple_data)
            Temple.findAll({
                // where: { userId: req.agent_id },
                // include: [{ model: Notary, as: "notary" }],
            })
                .then((appo) => {

                    res.json({ msg: "all user appointments", appo });
                })
                .catch((err) => {
                    console.log(err);
                    return ({
                        msg: ">> Error while fetching user appointments",
                        err,
                    });
                });


        }
    );


    app.post(
        "/temple/id",
        bodyParser.json(),
        // passport.authenticate("user_rule", { session: false }),
        async (req, res) => {

            Temple.findOne({
                where: { id: req.body.id },
                // include: [{ model: Notary, as: "notary" }],
            })
                .then((appo) => {

                    res.json({ msg: "all user appointments", appo });
                })
                .catch((err) => {
                    console.log(err);
                    return ({
                        msg: ">> Error while fetching user appointments",
                        err,
                    });
                });


        }
    );



    app.post(
        "/temple/delete",
        bodyParser.json(),
        //  passport.authenticate("user_rule", { session: false }),
        async (req, res) => {
            await Temple.findOne({
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