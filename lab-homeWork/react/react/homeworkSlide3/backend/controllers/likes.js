const db = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const updateLike = async (req, res) => {     //req.user come from DB, then added by passport
    const pikkaId = Number(req.body.pikkaId);
    const userId = Number(req.user.dataValues.id);
    let result;

    try {
        result = await db.like.findOne({
            attributes: ['isLike'],
            where: {
                [Op.and]: [{ pikka_id: pikkaId }, { user_id: userId }]
            }
        });

    } catch (err) {
        console.log(err);
    }

    if (result) {
        try {
            await db.like.update({
                isLike: !Boolean(result.isLike)
            }, {
                where: {
                    [Op.and]: [{ pikka_id: pikkaId }, { user_id: userId }]
                }
            });
            if (Boolean(result.isLike)) {
                res.status(200).send({ message: "Liked updated to Unliked" });
            } else {
                res.status(200).send({ message: "Unliked updated to Liked" })
            }

        } catch (err) {
            console.log(err);
            res.status(400).send({ message: "Error" });
        }
    } else {
        try {
            await db.like.create({
                isLike: true,
                pikka_id: pikkaId,
                user_id: userId
            });
            res.status(201).send({ message: "Liked" });
        } catch (err) {
            console.log(err);
            res.status(400).send({ message: "Error" });
        }
    }
};

const searchLike = async (req, res) => {
    const pikkaId = Number(req.query.pikkaId);
    const userId = Number(req.user.dataValues.id);

    // try {
    //     const result = await db.like.findOne({
    //         attributes: ['isLike'],
    //         where: {
    //             [Op.and]: [{ pikka_id: pikkaId }, { user_id: userId }]
    //         }
    //     });

    //     res.status(200).send(JSON.stringify(result)); //will return [] anyway if found nothing (good for Mapping)

    // } catch (err) {
    //     console.log(err);
    //     res.status(400).send({ message: "Error" });
    // }

    //not just find as above, but also automatically creates new rows and returns [{isLike: false},{isCreated}] if there are is no existing row
    try {
        result = await db.like.findOrCreate({
            attributes: ['isLike'],
            where: {
                [Op.and]: [{ pikka_id: pikkaId }, { user_id: userId }]
            },
            defaults: {
                isLike: false,
                pikka_id: pikkaId,
                user_id: userId
            }
        });
        console.log(result);
        res.status(200).send(JSON.stringify(result));   //return [{isLike:true/false}, {isCreated?}]
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "Error" });
    }
}

module.exports = {
    updateLike,
    searchLike
};