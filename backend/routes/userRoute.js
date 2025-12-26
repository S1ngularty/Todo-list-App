const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.route("/user").post(userController.createUser);
router
  .route("/user/:id")
  .get(userController.getUserById)
  .post(userController.updateUser);

  module.exports = router
