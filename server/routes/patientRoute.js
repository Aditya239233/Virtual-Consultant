const bodyParser = require("body-parser");
var express = require("express");
const bcrypt = require("bcrypt");
const patient = require("../model/patient.js");
const router = express.Router();
router.post("/registerpatient", (request, response) => {
    console.log(response.statusCode);
    const new_patient = new patient({
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password,
        age: request.body.age,
        weight: request.body.weight,
        height: request.body.height,
        bmi: request.body.bmi,
        allergies: request.body.allergies,
    });
    bcrypt.hash(new_patient.password, 10, function (err, hash) {
        if (err) {
            return next(err);
        }
        new_patient.password = hash;
        new_patient
            .save()
            .then((data) => {
                console.log("successfully created a new patient");
            })
            .catch((error) => {
                console.log("error", error);
            });
    });
    response.json({
        'statuscode': response.statusCode
    })
});
module.exports = router;