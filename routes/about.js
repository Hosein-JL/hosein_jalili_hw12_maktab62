const express = require('express');
const path = require('path');

const aboutController = require(path.join(path.dirname(__dirname), 'controllers', 'about.js'));
const router = express.Router();

router.get('/', aboutController);

module.exports = router;