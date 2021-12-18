const express = require('express');
const path = require('path');

const loginController = require(path.join(path.dirname(__dirname), 'controllers', 'login.js'))

const router = express.Router();

router.get('/', loginController.getLoginPage);

router.post('/login', loginController.checkLogin)

module.exports = router;