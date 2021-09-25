const mongoose = require("mongoose");
const chatSchema = mongoose.Schema({
    patientUsername:{
        type:String,
        required: true
    },
    doctorUsername:{
        type:String,
        required:true
    },
    text_messages:[
        {
            timestamp:{
                type: Date,
                required:true,
                default: Date.now()
            },
            text:{
                type: String,
                required:true
            },
            sender:{
                type:String,
                required:true
            }
        }
    ]

})

module.exports = mongoose.model('chat', chatSchema);