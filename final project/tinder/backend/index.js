require('dotenv').config();

const PORT = process.env.PORT || 3001;

const express = require('express');
const app = express();
const cors = require('cors');
// const userRoutes = require('./routes/users');
const db = require('./models');

// require('./config/passport/passport');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use('/users', userRoutes);

db.sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
}).catch((err) => console.log(err));