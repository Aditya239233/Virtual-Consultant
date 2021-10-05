const mongoose = require('mongoose');
const consultationRequestSchema = mongoose.Schema({
    severity_level: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    text: {
        type: String
    },
    sender:{
        type:String,
        required:true
    },
    acceptor:{
        type:String,
        required:true,
        default:" "
    },
    timestamp:{
        type:Date,
        required:true,
        default:Date.now()
    }
    
});
module.exports = mongoose.model('consultationRequest',consultationRequestSchema );