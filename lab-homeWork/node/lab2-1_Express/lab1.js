let express = require('express');
let app = express();

app.get('/bye', (req, res) => {
  res.send('Good bye');
});

app.listen(5555);