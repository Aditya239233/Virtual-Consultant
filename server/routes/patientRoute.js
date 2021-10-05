var express = require("express");

const patientAccess = require("../controllers/patientAccessControllers");

const router = express.Router();
router.post("/registerpatient", patientAccess.patientRegister);
router.get("/loginpatient", patientAccess.patientLogin);
router.get("/videoroom", patientAccess.patientRedirect);
router.post("/sendconsultationrequest", patientAccess.sendConsultationRequest);
router.get("/viewpatientprofile", patientAccess.viewPatientProfile);
router.get("/:videoroom", patientAccess.patientRoom);

router.put("/follow", patientAccess.followDoctor);
router.put("/unfollow", patientAccess.unfollowDoctor);
module.exports = router;
