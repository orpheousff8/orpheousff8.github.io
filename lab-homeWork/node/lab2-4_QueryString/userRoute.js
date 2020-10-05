let express = require('express');
let router = express.Router();

// Lab - ทำ path ที่บวกเลข a และ b
// ลองดู localhost:3000/user/add/1/2

router.get('/add/:a/:b', (req, res) => {
  let a = Number(req.params.a);
  let b = Number(req.params.b);
  res.send(`${a + b}`);
});

// แก้ UserRoute.js ให้เป็นแบบนี้
// และลอง path ต่อไปนี้
// localhost:3000/user/?id=hello
// localhost:3000/user/?id=1234
// localhost:3000/user/?id=1&2

router.get('/', (req, res) => {
  res.send(req.query.id);
});

module.exports = router;