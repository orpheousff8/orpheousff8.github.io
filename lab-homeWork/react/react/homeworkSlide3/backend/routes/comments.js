const express = require('express');
const router = express.Router();
const commentControllers = require('../controllers/comments');
const passport = require('passport');

const authentication = passport.authenticate("jwt", { session: false });

router.post('/create', authentication, commentControllers.createComment);
router.get('/search/:pikkaId', commentControllers.searchCommentByPikkaId);

module.exports = router;