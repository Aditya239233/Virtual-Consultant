const patient = require("../model/patient");
const chat = require('../model/chat')
const bcrypt = require("bcrypt");
const {
    v4: uuidV4
} = require('uuid');
const {
    request,
    response
} = require("express");

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
const patientRoom = (request, response) => {
    response.render('videoroom', {
        roomId: request.params.videoroom
    })
}
const patientRedirect = (request, response) => {
    response.redirect(`/${uuidV4()}`)
}

const newChat = async (request, response) => {
    const chat_exists = await chat.find({
        patientUsername: request.body.patientUsername,
        doctorUsername: request.body.doctorUsername
    })
    if(chat_exists.length>0)
    {
        chat_object=chat_exists[0].text_messages
        new_text={
            text: request.body.text,
            timestamp: request.body.timestamp,
            sender: request.body.sender
        }
        chat_object.push(new_text)
        console.log(chat_object)
        query={patientUsername: request.body.patientUsername,
            doctorUsername: request.body.doctorUsername}
        await chat.findOneAndUpdate(query, { text_messages: chat_object })

        response.json({
            'statuscode': response.statusCode,
        });
    }
    else{
    const new_chat = new chat({
        patientUsername: request.body.patientUsername,
        doctorUsername: request.body.doctorUsername,
        text_messages: [{
            text: request.body.text,
            timestamp: request.body.timestamp,
            sender: request.body.sender
        }]

    });
    new_chat
        .save()
        .then((data) => {
            console.log("successfully created a new chat");
            response.json({
                'statuscode': response.statusCode,
            });
        })
        .catch((error) => {
            console.log("error", error);
        });
    }
}

const retrieveConversation = async (request, response) => {
    const chat_doc = await chat.find({
        patientUsername: request.body.patientUsername,
        doctorUsername: request.body.doctorUsername
    })
    if (chat_doc) {
        console.log(chat_doc)
    }
    response.json({
        'status': response.statusCode
    })
}
const viewPatientProfile = async (request, response) => {
    const patient_doc = await patient.findOne({
        username: request.body.username
    })
    if (patient_doc) {
        response.json({
            "status": response.statusCode,
            "first_name": patient_doc['first_name'],
            "last_name": patient_doc['last_name'],
            "username": patient_doc['username'],
            "email": patient_doc['email'],
            "age": patient_doc['age'],
            "weight": patient_doc['weight'],
            "height": patient_doc['height'],
            "bmi": patient_doc['bmi'],
            "allergies": patient_doc['allergies'],
        });
    } else {
        response.json({
            "status": response.statusCode,
            "message": "user does not exist"
        })
    }
    console.log(patient_doc)
}
module.exports = {
    patientRegister,
    patientLogin,
    patientRoom,
    patientRedirect,
    newChat,
    retrieveConversation,
    viewPatientProfile
}