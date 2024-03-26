const router = require("express").Router();
const postsController = require("../../controllers/postsController");

// ? Route /api/posts/
// ? Route /
router.route("/").get(postsController.getAllPosts);

module.exports = router;
