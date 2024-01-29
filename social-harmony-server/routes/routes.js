const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

// Define your routes
router.post('/users', controller.logInController);
router.post('/users/create', controller.signUpController);

module.exports = router;
