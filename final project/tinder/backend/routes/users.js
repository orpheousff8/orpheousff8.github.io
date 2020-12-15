const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/users');

router.post('/login', userControllers.loginUser);
router.post('/signup', userControllers.signupUser);
// router.post('/forgotPassword', userControllers.forgotPassword);

module.exports = router;