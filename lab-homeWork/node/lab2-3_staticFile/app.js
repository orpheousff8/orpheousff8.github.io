let express = require('express');
let app = express();

// โจทย์ Lab 3
// แสดงรูปอะไรก็ได้ที่ localhost:3000/picture.png
// นอกจากนั้น ให้แสดงคำว่า “404 Not Found”

// Optional: ไม่ว่าจะเข้าที่ไหนใน localhost:3000/user
// ให้แสดงคำว่า “404 User Not Found”

// app.use(express.static('./public/'));        //access static files via / eg. /picture.png
app.use('/pub', express.static('./public/'));   //access static file via /pub eg. /pub/picture.png

app.get('/', (req, res) => {
    res.redirect('/pub/picture.png');
});                                             //also be able to access static file via / by redirecting to /pub/picture.png

let userRoute = require('./userRoute');
app.use('/user', userRoute);

let staticRoute = require('./staticRoute');
app.use('*', staticRoute);

app.listen(3000);