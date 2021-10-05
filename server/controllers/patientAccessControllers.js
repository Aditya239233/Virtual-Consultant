const patient = require("../model/patient");
//const doctor = require("../models/doctor");
const bcrypt = require("bcrypt");
const doctor = require("../model/doctor");

const patientRegister = async (request, response) => {
    console.log(response.statusCode);
    try {
        const patientExists = await patient.findOne({
            email: request.body.email
        });
        if (patientExists) {
            return response.status(409).send('This patient already exists');
        }

    } catch (error) {
        response.status(400).send(error);
    }
    const new_patient = new patient({
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password,
        age: request.body.age,
        weight: request.body.weight,
        height: request.body.height,
        bmi: request.body.weight / (request.body.height * request.body.height),
        allergies: request.body.allergies,
        confirm_password: request.body.confirm_password
    });
    bcrypt.hash(new_patient.password, 10, function (err, hash) {
        if (err) {
            return next(err);
        }
        new_patient.password = hash;
        new_patient.confirm_password = hash;
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
}
const patientLogin = async (request, response) => {
    try {
        const patient_doc = await patient.findOne({
            username: request.body.username
        });
        if (patient_doc) {
            const match = await bcrypt.compare(request.body.password, patient_doc['password']);
            if (match) {
                response.json({
                    'statuscode': response.statusCode,
                });
            } else {
                response.json({
                    'statuscode': response.statusCode,
                    'message': 'password incorrect',
                })
            }
        } else {
            response.json({
                'statuscode': 400,
                'message': 'user not found'
            });
        }
    } catch (error) {
        response.json({
            'statuscode': response.statusCode
        });
        response.status(400).send(error)
    }
}

const followDoctor = async (request,response) => {
    try{
        const doc = await doctor.findOne({username: request.body.doctor_username});
        const pat = await patient.findOne({username: request.body.patient_username});
        
        if(!doc.followers.includes(request.body.patient_username)){
            await doc.updateOne({$push: { followers: request.body.patient_username}});
            await pat.updateOne({$push: { following: request.body.doctor_username}});
            response.status(200).json("Following");
        }else {
         await doc.updateOne({$pull: {followers: request.body.patient_username}});
         await pat.updateOne({$pull: { following: request.body.doctor_username}});
         response.status(200).json("Unfollowed");
        }
 
    }catch(err){
        response.status(500).json(err);
    }
}

const unfollowDoctor = async (request,response) => {
    try{
        const Doctor = await doctor.findOne({username: request.body.doctor_username});
        const Patient = await patient.findOne({username: request.body.patient_username});
        if(Doctor.followers.includes(request.body.patient_username)){
            await Doctor.updateOne({ $pull: { followers: request.body.patient_username}});
            await Patient.updateOne({ $pull: { following: request.body.doctor_username}});
            response.status(200).json("Doctor has been unfollowed");
        }else{
            response.status(403).json("You don't follow thise doctor");
        }

    }catch(err){
        response.status(500).json(err)
    }
}
module.exports = {
    patientRegister,
    patientLogin,
    followDoctor,
    unfollowDoctor   
}