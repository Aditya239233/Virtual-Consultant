const bodyParser = require("body-parser");
var express = require("express");
const doctorAccess = require('../controllers/doctorAccessControllers')

const router = express.Router();
router.post("/registerdoctor", doctorAccess.doctorRegister);
router.get("/logindoctor", doctorAccess.doctorLogin);
router.get("/viewdoctorprofile", doctorAccess.viewDoctorProfile);
router.get("/viewnotifications",doctorAccess.viewNotifications);
router.delete("/acceptconsultationrequest",doctorAccess.acceptConsultationRequest);
module.exports = router;