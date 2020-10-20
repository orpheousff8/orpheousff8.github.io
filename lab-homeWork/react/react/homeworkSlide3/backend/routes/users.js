const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/users');

router.post('/login', userControllers.loginUser);
router.post('/signup', userControllers.signupUser);

module.exports = router;