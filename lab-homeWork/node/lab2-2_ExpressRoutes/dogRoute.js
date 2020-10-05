let express = require('express');
let router = express.Router();

router.get('/walk', (req, res) => {
  res.send('dog walks');
})

router.get('/play', (req, res) => {
  res.send('dog plays');
})

module.exports = router;