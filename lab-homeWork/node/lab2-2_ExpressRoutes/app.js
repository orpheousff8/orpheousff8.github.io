let express = require('express')
let app = express()

// แสดง ‘dog walk’	ที่ http://localhost:3000/dog/walk/
// แสดง ‘dog play’		ที่ http://localhost:3000/dog/play/
// แสดง ‘cat eat’		ที่ http://localhost:3000/cat/eat/
// แสดง ‘cat sleep’		ที่ http://localhost:3000/cat/sleep/

let dogRoute = require('./dogRoute')
app.use('/dog', dogRoute)

let catRoute = require('./catRoute')
app.use('/cat', catRoute)

app.listen(3000)