const db = require("../models");
const generateUniqueId = require("generate-unique-id");
var bodyParser = require('body-parser');
const daily_schedule = require("../models/daily_schedule");
const D_sdule = db.daily_schedule
module.exports = function (app, sequelize, passport) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

  

    app.post(
        "/schedule/add",
        bodyParser.json(),
      //  passport.authenticate("user_rule", { session: false }),
        async (req, res) => {
            console.log(req.body)
            await Store.create({
                store_name: req.body.name,
                select_user: req.body.user,
                comments: req.body.comments,
                location:req.body.location,
                others:req.body.others
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
        "/schedule/all",
        // passport.authenticate("user_rule", { session: false }),
        async (req, res) => {

            Store.findAll({
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
        "/schedule/delete",
        bodyParser.json(),
      //  passport.authenticate("user_rule", { session: false }),
        async (req, res) => {
            await Store.findOne({
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
