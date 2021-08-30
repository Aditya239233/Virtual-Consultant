var express = require('express');
const bodyParser = require('body-parser');
const patient_route = require('./routes/patientRoute.js');
const doctor_route = require('./routes/doctorRoute.js');

const router = express.Router();

var app = express();
app.listen(3000, () => {
    console.log('Server listening on 3000');
})

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://khushk21:Wwerocks21@cluster0.g2oxr.mongodb.net/VirtualConsultantDatabase?retryWrites=true&w=majority', () => {
    console.log("connected to mongodb successfully")
})

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/registerpatient', patient_route);

app.use('/', doctor_route);