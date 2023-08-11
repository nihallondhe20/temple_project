const db = require("../models");
const generateUniqueId = require("generate-unique-id");
var bodyParser = require('body-parser');
//const store = require("../models/store");
const temple_data = require("../models/temple_data")
const Temple = db.temple_data
const path = require("path");
const multer = require("multer");
const fs = require("fs")
const pooja = require("../models/pooja")
const poojaaa = db.pooja

const donation_for = require("../models/donation_for")
const donation_fors = db.donation_for

module.exports = function (app, sequelize, passport) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });



    const filestrg = multer.diskStorage({  destination:(req,file,cb) => {  cb(null,'./photos') },
    filename:(req,file,cb) =>{
        cb(null,file.originalname)
    },
    rename: function (fieldname, filename) {
        return filename.replace(/\W+/g, '-').toLowerCase();
    }
      ,
    limits : { fileSize:100000 },
   
  });
  const upload = multer({storage:filestrg,
    fileFilter: (req, file, cb) => {
        if (file.originalname.match(/\.(png|jpg)$/)) {
          cb(null, true);
        } else {
          cb(null, false);
          console.log('Only .jpg, .png  format allowed!');
        }
    }

})


    app.post(
        "/temple/add",upload.single("photos"),
        bodyParser.json(),
        //  passport.authenticate("user_rule", { session: false }),
        async (req, res) => {
            
            console.log(fs.createReadStream(req.file.path).path)
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
                photos: fs.createReadStream(req.file.path).path,
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
            Temple.findAll({
                // where: { id: 2},
                include: [{ model: poojaaa, as: "templepooja" },{ model: donation_fors, as: "donatetotemple" }],
              //  include: [{ model: donation_fors, as: "donatetotemple" }]
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