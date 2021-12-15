const express = require('express');
const path = require('path');

const contactController = require(path.join(path.dirname(__dirname), 'controllers', 'contact.js'));
const router = express.Router();

router.get('/', contactController);

module.exports = router;