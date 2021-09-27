var express = require("express");
const postAccess = require('../controllers/postAccessControllers')

const router = express.Router();

router.post("/createpost", postAccess.createPost);
//router.put("/:id", postAccess.updatePost);
router.delete("/deletepost", postAccess.deletePost);
//router.put("/:id/like", postAccess.likePost);
//router.get("/timeline", postAccess.timelinePostPatient);
//router.get("/timeline", postAccess.timelinePostDoctor)

module.exports = router;