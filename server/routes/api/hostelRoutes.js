const router = require("express").Router();
const hostelController = require("../../controllers/hostelController");

// ? Route /api/hostel/
// ? Route /
router.route("/").get(hostelController.getAllHostels);

module.exports = router;
