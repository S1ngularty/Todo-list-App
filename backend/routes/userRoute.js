const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.route("/register").post(userController.createUser);
router.route("/login").post(userController.loginUser);
router
  .route("/user/:id")
  .get(userController.getUserById)
  .post(userController.updateUser);

module.exports = router;
