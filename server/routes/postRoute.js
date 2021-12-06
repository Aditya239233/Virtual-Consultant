var express = require("express");
const postAccess = require('../controllers/postAccessControllers')

const router = express.Router();

router.post("/createpost", postAccess.createPost);
router.put("/editpost", postAccess.updatePost);
router.delete("/deletepost", postAccess.deletePost);
router.put("/likepost", postAccess.likePost);
router.get("/patienttimeline", postAccess.timelinePostPatient);
router.get("/doctortimeline", postAccess.timelinePostDoctor)

module.exports = router;