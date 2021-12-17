const express = require("express");
const path = require("path");
const router = express.Router();

const loginController = require(path.join(
  path.dirname(__dirname),
  "controllers",
  "login.js"
));

router.get("/", loginController);

module.exports = router;
