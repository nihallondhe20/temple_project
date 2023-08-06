const db = require("../models");
const generateUniqueId = require("generate-unique-id");
var bodyParser = require('body-parser');
const donation_details = require("../models/donation_details");
const donation_d = db.donation_details

const donation_form = require("../models/donation_form")
const donation_direct = db.donation_form

module.exports = function (app, sequelize, passport) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

  

    app.post(
        "/donation/add",
        bodyParser.json(),
      //  passport.authenticate("user_rule", { session: false }),
        async (req, res) => {
            console.log(req.body)
            await donation_d.create({
                donation_type: req.body.name,
                address: req.body.user,
                remark: req.body.comments,
                amount:req.body.location,
                city:req.body.others,
                payment_type:req.body.payment_type,
                cheque_no:req.body.cheque_no,
                adhar_card:req.body.adhar_card,
                pan_card:req.body.pan_card,
                date:req.body.date,
                comments:req.body.comments,
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
        "/donation/all",
        // passport.authenticate("user_rule", { session: false }),
        async (req, res) => {

            donation_d.findAll({
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
        "/donation/id",
        bodyParser.json(),
        // passport.authenticate("user_rule", { session: false }),
        async (req, res) => {

            donation_d.findOne({
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
        "/donation/delete",
        bodyParser.json(),
      //  passport.authenticate("user_rule", { session: false }),
        async (req, res) => {
            await donation_d.findOne({
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




    app.post(
        "/donation_direct/add",
        bodyParser.json(),
      //  passport.authenticate("user_rule", { session: false }),
        async (req, res) => {
            console.log(req.body)
            await donation_direct.create({
                fullName: req.body.fullName,
                mobile: req.body.mobile,
                email: req.body.email,
                address: req.body.address,
                amount: req.body.amount,
                gotra: req.body.gotra,
                payment_type: req.body.payment_type,
                cheque_no: req.body.cheque_no,
                bank_name: req.body.bank_name,
                branch_name: req.body.branch_name,
                date: req.body.data,
                transaction_id: req.body.transaction_id
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
        "/donation_direct/all",
        // passport.authenticate("user_rule", { session: false }),
        async (req, res) => {

            donation_direct.findAll({
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
        "/donation_direct/id",
        bodyParser.json(),
        // passport.authenticate("user_rule", { session: false }),
        async (req, res) => {

            donation_direct.findOne({
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



   
}