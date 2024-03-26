const router = require("express").Router();
const profileController = require("../../controllers/profileController");

// ? Route /api/profile/
// ? Route /
router.route("/").get(profileController.getAllProfiles);

module.exports = router;
