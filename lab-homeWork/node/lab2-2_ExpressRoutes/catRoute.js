let express = require('express');
let router = express.Router();

router.get('/eat', (req, res) => {
  res.send('cat eats');
});

router.get('/sleep', (req, res) => {
  res.send('cat sleeps');
});

module.exports = router;