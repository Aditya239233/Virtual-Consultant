const bcrypt = require("bcrypt");
const doctor = require("../model/doctor");
const consultationRequest=require('../model/consultationRequest');
var ObjectId = require('mongodb').ObjectId;
const fs = require("fs");
const {
    v4: uuidV4
} = require('uuid');

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
        const data = fs.readFileSync('C:\\Users\\Aratrika\\Desktop\\NTU COURSES_PROJECTS_HACKS\\NTU YEAR 3, SEM 1\\ASE\\Virtual-Consultant\\server\\scraping\\doctors.txt', 'utf-8');
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
            confirm_password: request.body.confirm_password,
            specialization:request.body.specialization
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

const viewNotifications = async (request,response)=>{
    const consultation_requests=await consultationRequest.find({
        type:request.body.type
    })
    let filtered_requests=[]
    for (let i=0;i<consultation_requests.length;i++)
    {
        severity=consultation_requests[i].severity_level
        timestamp=consultation_requests[i].timestamp
        let diffMilli=Date.now()-timestamp
        var diffMins = Math.round(((diffMilli % 86400000) % 3600000) / 60000);
        console.log(diffMins)
        if(severity=='High')
        {
            if(diffMins<10)
            {
                filtered_requests.push(consultation_requests[i])
            }
        }
        if(severity=='Medium')
        {
            if(diffMins<20)
            {
                filtered_requests.push(consultation_requests[i])
            }
        }
        if(severity=='Low')
        {
            if(diffMins<30)
            {
                filtered_requests.push(consultation_requests[i])
            }
        }
    }
    response.json({
        'status':response.statusCode,
        'consultation_requests':filtered_requests
    })
}

const acceptConsultationRequest= async (request,response) => {
    const accepted_request= await consultationRequest.findOneAndDelete({
        _id:ObjectId(request.body.id)
    })
    console.log(accepted_request)
    response.redirect(`/${uuidV4()}`)

}

module.exports = {
    doctorRegister,
    doctorLogin,
    viewDoctorProfile,
    viewNotifications,
    acceptConsultationRequest
}