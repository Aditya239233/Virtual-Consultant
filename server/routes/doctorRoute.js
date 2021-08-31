const bodyParser = require("body-parser");
var express = require("express");
const doctorAccess= require('../controllers/doctorAccessControllers')

const router = express.Router();
router.post("/registerdoctor", doctorAccess.doctorRegister);

module.exports = router;