let express = require('express');
let router = express.Router();

router.post('/add', (req, res) => {
  let a = Number(req.body.a);
  let b = Number(req.body.b);
  res.send( String(a + b) );
});

module.exports = router;