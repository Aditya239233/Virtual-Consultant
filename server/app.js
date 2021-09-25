var connect_socket = require("./controllers/patientAccessControllers")

var express = require('express');
const bodyParser = require('body-parser');
const patient_route = require('./routes/patientRoute.js');
const doctor_route = require('./routes/doctorRoute.js');


const router = express.Router();

var app = express();
const server = require('http').Server(app)
const io = require('socket.io')(server)
io.on('connection', socket => {
    socket.on('join-room', (roomId, userId) => {
        socket.join(roomId)
        socket.to(roomId).broadcast.emit('user-connected', userId)

        socket.on('disconnect', () => {
            socket.to(roomId).broadcast.emit('user-disconnected', userId)
        })
    })
})
server.listen(8000, () => {
    console.log('Server listening on 3000');
})

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://khushk21:Wwerocks21@cluster0.g2oxr.mongodb.net/VirtualConsultantDatabase?retryWrites=true&w=majority', () => {
    console.log("connected to mongodb successfully")
})

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use('/', patient_route);

app.use('/', doctor_route);