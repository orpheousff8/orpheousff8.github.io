let express = require('express');
let bodyParser = require('body-parser');
let app = express();

//เขียนฟังก์ชัน add ของ a และ b โดยใช้ body ในการส่ง a และ b มาให้ Express.js

app.use(bodyParser.urlencoded({ extended: true }));

let userRoute = require('./userRoute');
app.use('/user', userRoute);

app.listen(3000);