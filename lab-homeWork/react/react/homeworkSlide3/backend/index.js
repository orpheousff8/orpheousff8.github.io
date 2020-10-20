require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
// const { uniqueId } = require('lodash');
const userRoutes = require('./routes/users');
const pikkaRoutes = require('./routes/pikkas');
const db = require('./models');

require('./config/passport/passport');

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: false }));

// let pikka = [
//     {id: uniqueId(), caption: "aaaaa", image: "a.jpg"}, {id: uniqueId(), caption: "bbbbb", image: "b1.jpg"}, 
//     {id: uniqueId(), caption: "bbbbb", image: "b2.jpg"},{id: uniqueId(), caption: "aabbb", image: "ab.jpg"},
//     {id: uniqueId(), caption: "bbbcc", image: "b3.jpg"},{id: uniqueId(), caption: "aabbb", image: "ax.jpg"}
// ];

app.use('/users', userRoutes);
app.use('/pikkas', pikkaRoutes);

db.sequelize.sync({ force: false}).then(() => {
    const port = process.env.PORT || 3001;
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
}).catch((err) => console.log(err));