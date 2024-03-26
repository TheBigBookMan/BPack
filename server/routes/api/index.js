const router = require("express").Router();
const profileRoutes = require("./profileRoutes");
const postsRoutes = require("./postsRoutes");
const hostelRoutes = require("./hostelRoutes");

router.use("/profile", profileRoutes);
router.use("/posts", postsRoutes);
router.use("/hostel", hostelRoutes);

module.exports = router;
