let express = require('express');
let router = express.Router();

router.get('*', (req, res) => {
  res.send('404 User Not Found');
})

module.exports = router;