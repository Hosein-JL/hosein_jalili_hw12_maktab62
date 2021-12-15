const express = require('express');
const path = require('path');

const homeController = require(path.join(path.dirname(__dirname), 'controllers', 'home.js'));
const router = express.Router();

router.get('/', homeController);

module.exports = router;