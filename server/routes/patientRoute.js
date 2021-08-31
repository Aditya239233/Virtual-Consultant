var express = require("express");

const patientAccess=require('../controllers/patientAccessControllers')

const router = express.Router();
router.post("/registerpatient", patientAccess.patientRegister );


module.exports = router;