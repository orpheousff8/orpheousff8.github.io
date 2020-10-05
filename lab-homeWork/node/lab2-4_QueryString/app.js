let express = require('express');
let app = express();

let userRoute = require('./userRoute');
app.use('/user', userRoute);

app.listen(3000);