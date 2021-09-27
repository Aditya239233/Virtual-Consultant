var express = require("express");

const patientAccess = require('../controllers/patientAccessControllers')

const router = express.Router();
router.post("/registerpatient", patientAccess.patientRegister);
router.get("/loginpatient", patientAccess.patientLogin);
//router.put("/:id/follow", patientAccess.followDoctor);
//router.put("/:id/unfollow", patientAccess.unfollowDoctor);
module.exports = router;