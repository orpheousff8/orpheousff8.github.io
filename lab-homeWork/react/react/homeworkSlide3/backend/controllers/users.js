const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const signupUser = async (req, res) => {
    // console.log(req.body);
    const { username, email, password } = req.body;
    try {
        const targetUser = await db.User.findOne({ 
            where: {
                [Op.or] : [{username: username}, {password: password}]
            } 
        });
        if (targetUser) {
            res.status(400).send({ message: "Username or Email already taken!" });
        } else {
            const salt = await bcrypt.genSalt(12);
            const hash = await bcrypt.hash(password, salt);

            await db.User.create({
                username: username,
                email: email,
                password: hash
            });
            res.status(201).send({ message: "User signed up." });
        }
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "Error" });
    }
};

const loginUser = async (req, res) => {
    // console.log(req.body);
    const { username, password } = req.body;
    try {
        const targetUser = await db.User.findOne({ where: {username: username} });
        if (!targetUser) {
            res.status(400).send({ message: "Username or password is wrong." });
        } else {
            const isCorrectPassword = await bcrypt.compare(password, targetUser.password);
            if (isCorrectPassword) {
                const payload = {
                    username: targetUser.username,
                    id: targetUser.id
                };
                const token = jwt.sign(payload, process.env.SECRET_OR_KEY, { expiresIn: 3600 });
                res.status(200).send({
                    token: token,
                    message: "Login successful."
                });
            } else {
                res.status(400).send({ message: "Username or password is wrong." });
            }
            res.status(200).send(`Logged in!`);
        }
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "Error" });
    }
};

const forgotPassword = async (req, res) => {
    // console.log(req.body);
    const { username, email } = req.body;
    try {
        const targetUser = await db.User.findOne({ 
            where: {
                [Op.and]: [{ username: username }, { email: email }]
            } 
        });
        if (!targetUser) {
            res.status(400).send({ message: "Username or email is wrong." });
        } else {
            res.status(200).send({ message: "Found username and email!" });
        }
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "Error" });
    }
};

module.exports = {
    signupUser,
    loginUser,
    forgotPassword
};