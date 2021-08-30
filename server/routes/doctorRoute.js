const bodyParser = require("body-parser");
var express = require("express");
const bcrypt = require("bcrypt");
const doctor = require("../model/doctor.js");
const router = express.Router();
router.post("/registerdoctor", (request, response) => {
    console.log(request.body)
    const new_doctor = new doctor({
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        medical_id: request.body.medical_id,
        email: request.body.email,
        password: request.body.password,
        username: request.body.username,
    });
    new_doctor
        .save()
        .then((data) => {
            console.log("successfully created a new doctor account");
        })
        .catch((error) => {
            console.log("error", error);
        });

    //   bcrypt.hash(new_doctor.password, 10, function (err, hash) {
    //     if (err) {
    //       return next(err);
    //     }
    //     new_doctor.password = hash;
    //     new_doctor
    //       .save()
    //       .then((data) => {
    //         console.log("successfully created a new doctor account");
    //       })
    //       .catch((error) => {
    //         console.log("error", error);
    //       });
    //   });
});
module.exports = router;