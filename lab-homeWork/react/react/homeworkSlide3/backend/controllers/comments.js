const db = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const createComment = async (req, res) => {     //req.user come from DB, then added by passport
    // console.log(req.body);
    // console.log(req.user.dataValues.id);
    try {
        const newComment = await db.Comment.create({
            comment: req.body.comment,
            UserId: req.user.dataValues.id,
            PikkaId: req.body.pikkaId
        });
        res.status(201).send(`Comment added!`);
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "Error" });
    }
};

const searchCommentByPikkaId = async (req, res) => {
    const pikkaId = Number(req.params.pikkaId);

    try {
        const commentList = await db.Comment.findAll({
            attributes: ['id','comment'],
            where: {
                PikkaId: pikkaId
            },
            include: [{
                model: db.User, 
                attributes: ['username']
            }]
        });

        res.status(200).send(JSON.stringify(commentList)); //will return [] anyway if found nothing (good for Mapping)

    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "Error" });
    }
}

module.exports = {
    createComment,
    searchCommentByPikkaId,
};