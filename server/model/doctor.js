const mongoose = require("mongoose");
const doctorSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    medical_id: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    confirm_password: {
        type: String,
        required: true
    },
    specialization:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model("doctor", doctorSchema);