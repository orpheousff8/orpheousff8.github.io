const express = require('express');
const router = express.Router();
const likeControllers = require('../controllers/likes');
const passport = require('passport');

const authentication = passport.authenticate("jwt", { session: false });

router.post('/update', authentication, likeControllers.updateLike);
router.get('/search', authentication, likeControllers.searchLike);

module.exports = router;