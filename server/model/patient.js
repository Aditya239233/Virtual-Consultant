const mongoose = require('mongoose');
const patientSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    weight: {
        type: Number
    },
    height: {
        type: Number
    },
    bmi: {
        type: String
    },
    allergies: {
        type: String
    },
    confirm_password: {
        type: String,
        required: true
    },
    following: {
        type: Array,
        default: []
    }
});
module.exports = mongoose.model('patient', patientSchema);