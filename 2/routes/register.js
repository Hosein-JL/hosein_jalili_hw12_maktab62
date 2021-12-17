const express = require("express");
const path = require("path");
const router = express.Router();

const registerController = require(path.join(
  path.dirname(__dirname),
  "controllers",
  "register.js"
));

router.get("/", registerController);

module.exports = router;
