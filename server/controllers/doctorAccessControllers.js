const bcrypt = require("bcrypt");
const doctor = require("../model/doctor");
const fs = require("fs");
const doctorRegister = async (request, response) => {
    try {
        const doctorExists = await doctor.findOne({
            medical_id: request.body.medical_id
        });
        if (doctorExists) {
            return response.status(409).send('This doctor already exists');
        }

    } catch (error) {
        response.status(400).send(error);
    }
    var doctorValid = false;
    try {
        const data = fs.readFileSync('/Users/khush/Desktop/Virtual-Consultant/scraping/server/doctors.txt', 'utf-8');
        const lines = data.split(/\r?\n/);
        lines.forEach((line) => {
            var temp_name = request.body.first_name + " " + request.body.last_name
            if (line == temp_name) {
                console.log(temp_name)
                doctorValid = true;
            }
        });
    } catch (error) {
        console.log(error)
    }
    if (doctorValid == true) {
        const new_doctor = new doctor({
            first_name: request.body.first_name,
            last_name: request.body.last_name,
            medical_id: request.body.medical_id,
            email: request.body.email,
            password: request.body.password,
            username: request.body.username,
            confirm_password: request.body.confirm_password
        });

        bcrypt.hash(new_doctor.password, 10, function (err, hash) {
            if (err) {
                return next(err);
            }
            new_doctor.password = hash;
            new_doctor.confirm_password = hash;
            new_doctor
                .save()
                .then((data) => {
                    console.log("successfully created a new doctor account");
                })
                .catch((error) => {
                    console.log("error", error);
                });
        });
        console.log(response.statusCode);
        response.json({
            'statuscode': response.statusCode
        })
    } else {
        response.json({
            'statuscode': 400,
            'message': 'doctor name invalid'
        })
    }
}
const doctorLogin = async (request, response) => {
    console.log(request.body)
    try {
        const doctor_doc = await doctor.findOne({
            'username': request.body.username
        });
        if (doctor_doc) {
            const match = await bcrypt.compare(request.body.password, doctor_doc['password']);
            if (match) {
                response.json({
                    'statuscode': response.statusCode
                });
            } else {
                response.json({
                    'statuscode': response.statusCode,
                    'message': 'password incorrect'
                });
            }
        } else {
            response.json({
                'statuscode': 400,
                'message': 'user not found'
            })
        }
    } catch (error) {
        response.status(400).send(error);
    }
}

const viewDoctorProfile = async (request, response) => {
    const doctor_doc = await patient.findOne({
        username: request.body.username
    })
    if (doctor_doc) {
        response.json({
            "status": response.statusCode,
            "first_name": doctor_doc['first_name'],
            "last_name": doctor_doc['last_name'],
            "username": doctor_doc['username'],
            "email": doctor_doc['email'],
            "medical_id": doctor_doc['medical_id']
        });
    } else {
        response.json({
            "status": response.statusCode,
            "message": "user does not exist"
        })
    }
    console.log(doctor_doc)
}

module.exports = {
    doctorRegister,
    doctorLogin,
    viewDoctorProfile
}