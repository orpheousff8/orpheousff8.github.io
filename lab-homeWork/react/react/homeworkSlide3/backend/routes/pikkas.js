const express = require('express');
const router = express.Router();
const pikkaControllers = require('../controllers/pikkas');
const passport = require('passport');

const authentication = passport.authenticate("jwt", { session: false });

router.post('/create', pikkaControllers.createPikka);
router.get('/show', authentication, pikkaControllers.showPikka);
router.get('/search/:id', pikkaControllers.searchPikkaId);
router.get('/search', pikkaControllers.searchPikkaCaption);
router.delete('/delete/:id', pikkaControllers.deletePikkaId);
router.put('/update/:id', pikkaControllers.updatePikkaId);

module.exports = router;