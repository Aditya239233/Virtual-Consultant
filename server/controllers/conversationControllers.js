const chat=require('../model/chat')
const doctor = require('../model/doctor')
const patient = require("../model/patient");

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
    if(chat_doc.length>0){
        text_messages=chat_doc[0].text_messages
        console.log(text_messages)
        text_messages=text_messages.sort((a, b) => (a.timestamp) > new Date(b.timestamp) ? 1 : -1)
        console.log(text_messages)
        response.json({
            'status': response.statusCode,
            'chat_messages':text_messages
        })
    }
    else
    {
        response.json({
            'status': response.statusCode
        })
    }
    
}

const retrieveAllConversationPartners= async (request, response) => {
    const chat_patient=await chat.find({
        patientUsername: request.body.username
    })
    chat_partners=[]
    if(chat_patient.length>0){
        // console.log("Its a patient")
        for(let i = 0; i < chat_patient.length; i++){ 
            console.log(chat_patient[i].doctorUsername)
            chat_partners.push(chat_patient[i].doctorUsername)
    }
    console.log(chat_partners)
    response.json({
        'status':response.statusCode,
        'chat_partners':chat_partners
    })
    }
    else{
    const chat_doctor=await chat.find({
        doctorUsername: request.body.username
    })
    chat_partners=[]
    if(chat_doctor.length>0){
        for(let i = 0; i < chat_doctor.length; i++){ 
            console.log(chat_doctor[i].patientUsername)
            chat_partners.push(chat_doctor[i].patientUsername)
    }
    
    console.log(chat_partners)
    response.json({
        'status':response.statusCode,
        'chat_partners':chat_partners
    })
}
    
}
    
}

module.exports={
    newChat,
    retrieveConversation,
    retrieveAllConversationPartners
}