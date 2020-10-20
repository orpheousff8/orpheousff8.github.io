const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signupUser = async (req, res) => {
    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    try {
        const targetUser = await db.User.findOne({ where: { email: email } });
        if (targetUser) {
            res.status(400).send({ message: "Username already taken!" });
        } else {
            const salt = await bcrypt.genSalt(12);
            const hash = await bcrypt.hash(password, salt);

            await db.User.create({
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
    const { email, password } = req.body;
    try {
        const targetUser = await db.User.findOne({ where: { email: email } });
        if (!targetUser) {
            res.status(400).send({ message: "Email or password is wrong." });
        } else {
            const isCorrectPassword = await bcrypt.compare(password, targetUser.password);
            if (isCorrectPassword) {
                const payload = {
                    email: targetUser.email,
                    id: targetUser.id
                };
                const token = jwt.sign(payload, process.env.SECRET_OR_KEY, { expiresIn: 3600 });
                res.status(200).send({
                    token: token,
                    message: "Login successful."
                });
            } else {
                res.status(400).send({ message: "Email or password is wrong." });
            }
            res.status(200).send(`Logged in!`);
        }
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "Error" });
    }
};

module.exports = {
    signupUser,
    loginUser
};