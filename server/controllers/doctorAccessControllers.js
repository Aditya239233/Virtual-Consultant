const bcrypt = require("bcrypt");
const doctor = require("../model/doctor");
const consultationRequest = require("../model/consultationRequest");
var ObjectId = require("mongodb").ObjectId;
const fs = require("fs");
const { v4: uuidV4 } = require("uuid");

const doctorRegister = async (request, response) => {
  console.log(request.body);
  try {
    const doctorExists = await doctor.findOne({
      medical_id: request.body.medical_id,
    });
    if (doctorExists) {
      return response.status(409).send("This doctor already exists");
    }
  } catch (error) {
    response.status(400).send(error);
  }
  var doctorValid = false;
  try {
    const data = fs.readFileSync(
      "/Users/aditya/Desktop/workspace/school/Virtual-Consultant/server/scraping/doctors.txt",
      "utf-8"
    );
    const lines = data.split(/\r?\n/);
    lines.forEach((line) => {
      var temp_name = request.body.first_name + " " + request.body.last_name;
      if (line == temp_name) {
        console.log(temp_name);
        doctorValid = true;
      }
    });
  } catch (error) {
    console.log(error);
  }
  if (doctorValid == true) {
    const new_doctor = new doctor({
      first_name: request.body.first_name,
      last_name: request.body.last_name,
      medical_id: request.body.medical_id,
      email: request.body.email,
      password: request.body.password,
      username: request.body.username,
      confirm_password: request.body.confirm_password,
      specialization: request.body.specialization,
    });

    bcrypt.hash(new_doctor.password, 10, function (err, hash) {
      if (err) {
        return next(err);
      }
      new_doctor.password = hash;
      new_doctor.confirm_password = hash;
      new_doctor
        .save()
        .then((data) => {
          console.log("successfully created a new doctor account");
        })
        .catch((error) => {
          console.log("error", error);
        });
    });
    console.log(response.statusCode);
    response.json({
      statuscode: response.statusCode,
    });
  } else {
    response.json({
      statuscode: 400,
      message: "doctor name invalid",
    });
  }
};
const doctorLogin = async (request, response) => {
  console.log(request.body);
  try {
    const doctor_doc = await doctor.findOne({
      username: request.query["username"],
    });
    if (doctor_doc) {
      const match = await bcrypt.compare(
        request.query["password"],
        doctor_doc["password"]
      );
      if (match) {
        response.json({
          statuscode: response.statusCode,
        });
      } else {
        response.json({
          statuscode: response.statusCode,
          message: "password incorrect",
        });
      }
    } else {
      response.json({
        statuscode: 400,
        message: "user not found",
      });
    }
  } catch (error) {
    response.status(400).send(error);
  }
};

const viewDoctorProfile = async (request, response) => {
  const doctor_doc = await doctor.findOne({
    username: request.query["username"],
  });
  if (doctor_doc) {
    response.json({
      status: response.statusCode,
      first_name: doctor_doc["first_name"],
      last_name: doctor_doc["last_name"],
      username: doctor_doc["username"],
      email: doctor_doc["email"],
      medical_id: doctor_doc["medical_id"],
    });
  } else {
    response.json({
      status: response.statusCode,
      message: "user does not exist",
    });
  }
  console.log(doctor_doc);
};

const viewNotifications = async (request, response) => {
  const consultation_requests = await consultationRequest.find({
    type: request.query["type"],
  });
  let filtered_requests = [];
  console.log(consultation_requests.length)
  for (let i = 0; i < consultation_requests.length; i++) {
    severity = consultation_requests[i].severity_level;
    timestamp = Math.round(consultation_requests[i].timestamp.getTime()/1000);
    today=Math.round(Date.now()/1000);
    let diffSeconds = today - timestamp;
    console.log(today)
    console.log("Hello")
    console.log(timestamp)
    //var diffMins = Math.round(((diffMilli % 86400000) % 3600000) / 60000);
    if (severity == "High") {
      if (diffSeconds < 600) {
        filtered_requests.push(consultation_requests[i]);
      }
    }
    if (severity == "Medium") {
      if (diffSeconds < 1200) {
        filtered_requests.push(consultation_requests[i]);
      }
    }
    if (severity == "Low") {
      if (diffSeconds < 1800) {
        filtered_requests.push(consultation_requests[i]);
      }
    }
  }
  response.json({
    status: response.statusCode,
    consultation_requests: filtered_requests,
  });
};

const acceptConsultationRequest = async (request, response) => {
  const accepted_request = await consultationRequest.findOneAndDelete({
    _id: ObjectId(request.data.id),
  });
  console.log(accepted_request);
  response.json({
    status: response.statusCode
  });
};

module.exports = {
  doctorRegister,
  doctorLogin,
  viewDoctorProfile,
  viewNotifications,
  acceptConsultationRequest,
};
