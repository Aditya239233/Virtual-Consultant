const chat=require('../model/chat')

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

module.exports={
    newChat,
    retrieveConversation
}