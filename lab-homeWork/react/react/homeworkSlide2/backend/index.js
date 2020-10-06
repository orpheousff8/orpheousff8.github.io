let express = require('express');
let app = express();
let cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/login', (req, res) => {
    console.log(req.body);
    res.status(200).send(`Logged in!`);
});

app.post('/signup', (req, res) => {
    console.log(req.body);
    res.status(201).send(`User signed up!`);
});

const port = process.env.port || 3001;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});