const express = require('express');
const path = require('path');

const productController = require(path.join(path.dirname(__dirname), 'controllers', 'product.js'));
const router = express.Router();

router.get('/:id', productController);

module.exports = router;