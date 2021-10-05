var express = require("express");
const bodyParser = require("body-parser");
const patient_route = require("./routes/patientRoute.js");
const doctor_route = require("./routes/doctorRoute.js");
const chat_route = require("./routes/chatRoute.js");
const post_route = require("./routes/postRoute.js");

const router = express.Router();
const { v4: uuidV4 } = require("uuid");
var app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.use("/", doctor_route);

app.use("/", chat_route);

app.use("/", patient_route);
io.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId) => {
    console.log(roomId, userId);
    socket.join(roomId);
    socket.broadcast.to(roomId).emit("user-connected", userId);
    socket.on("message", (message) => {
      //send message to the same room
      io.to(roomId).emit("createMessage", message);
    });
    socket.on("disconnect", () => {
      socket.broadcast.to(roomId).emit("user-disconnected", userId);
    });
  });
});
server.listen(8000, () => {
  console.log("Server listening on 8000");
});

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://khushk21:Wwerocks21@cluster0.g2oxr.mongodb.net/VirtualConsultantDatabase?retryWrites=true&w=majority",
  () => {
    console.log("connected to mongodb successfully");
  }
);
app.use("/", doctor_route);

app.use("/", post_route);
