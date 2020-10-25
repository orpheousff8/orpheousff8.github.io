require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/users');
const pikkaRoutes = require('./routes/pikkas');
const commentRoutes = require('./routes/comments');
const likeRoutes = require('./routes/likes');
const db = require('./models');

require('./config/passport/passport');

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({extended: true}));
app.use(express.urlencoded({ extended: false }));

app.use('/users', userRoutes);
app.use('/pikkas', pikkaRoutes);
app.use('/comments', commentRoutes);
app.use('/likes', likeRoutes);

db.sequelize.sync({ force: false}).then(() => {
    const port = process.env.PORT || 3001;
    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });
}).catch((err) => console.log(err));