const express = require('express');
const path = require('path');

const signupController = require(path.join(path.dirname(__dirname), 'controllers', 'signup.js'))

const router = express.Router();

router.get('/', signupController.getSignupPage);

router.post('/', signupController.checkSignup)

module.exports = router;