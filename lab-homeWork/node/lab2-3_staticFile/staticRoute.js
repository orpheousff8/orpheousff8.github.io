let express = require('express');
let router = express.Router();

router.get('*', function (req, res) {
  res.send('404 Not Found');
})

module.exports = router;