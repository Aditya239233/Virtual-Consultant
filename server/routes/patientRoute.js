var express = require("express");

const patientAccess = require('../controllers/patientAccessControllers')

const router = express.Router();
router.post("/registerpatient", patientAccess.patientRegister);
router.get("/loginpatient", patientAccess.patientLogin);
router.get("/videoroom", patientAccess.patientRedirect);
router.get('/:videoroom', patientAccess.patientRoom);
router.post('/chat', patientAccess.newChat);
module.exports = router;