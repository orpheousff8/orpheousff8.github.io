const express = require('express');
const app = express();
const cors = require('cors');
// const { uniqueId } = require('lodash');
const pikkaListRoutes = require('./routes/pikkaList');
const db = require('./models');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(express.urlencoded({ extended: false }));

let pikka = [
    {id: uniqueId(), caption: "aaaaa", image: "a.jpg"}, {id: uniqueId(), caption: "bbbbb", image: "b1.jpg"}, 
    {id: uniqueId(), caption: "bbbbb", image: "b2.jpg"},{id: uniqueId(), caption: "aabbb", image: "ab.jpg"},
    {id: uniqueId(), caption: "bbbcc", image: "b3.jpg"},{id: uniqueId(), caption: "aabbb", image: "ax.jpg"}
];

app.post('/login', (req, res) => {
    // console.log(req.body);
    res.status(200).send(`Logged in!`);
});

app.post('/signup', (req, res) => {
    // console.log(req.body);
    res.status(201).send(`User signed up!`);
});

app.post('/create', (req, res) => {
    // console.log(req.body);

    const pieces = req.body.image.split('\\');
    const piece = pieces[pieces.length - 1];

    const item = {
        id: uniqueId(),
        caption: req.body.username,
        image: piece
    };

    pikka.push(item);

    console.log(pikka);

    res.status(201).send(`Pikka added!`);
});

app.get('/search', (req, res) => {
    res.status(204).send('Not yet implemented');
});

app.get('/search/:caption', (req, res) => {

    const caption = req.params.caption;

    const pikkaResult = pikka.filter((item) => item.caption.includes(caption));

    if (pikkaResult) {
        res.send(JSON.stringify(pikkaResult));
    }
    else {
        res.status(204).send('Not found Pikka');
    }
});

const port = process.env.port || 3001;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});