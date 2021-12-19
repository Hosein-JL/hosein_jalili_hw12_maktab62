const express = require("express");
const path = require("path");

const userController = require(path.join(
  path.dirname(__dirname),
  "controllers",
  "user.js"
));

const router = express.Router();

router.post("/updateUser", userController.updateUser);

router.get("/:username", userController.getUserPage);

module.exports = router;
