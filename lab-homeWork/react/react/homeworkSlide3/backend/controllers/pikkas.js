const db = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const createPikka = async (req, res) => {
    // console.log(req.body);

    const pieces = req.body.image.split('\\');
    const piece = pieces[pieces.length - 1];

    // const item = {
    //     id: uniqueId(),
    //     caption: req.body.username,
    //     image: piece
    // };

    // pikka.push(item);

    try {
        const newPikka = await db.Pikka.create({
            caption: req.body.username,
            imgSrc: piece
        });
        res.status(201).send(`Pikka added!`);
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "Error" });
    }
};

const showPikka = async (req, res) => {     //req.body comes from DB by passport after checked the token though the method is GET.
    //console.log(req.body);
    try {
        const pikkaList = await db.Pikka.findAll();
        res.status(201).send(pikkaList);
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "Error" });
    }
};

const searchPikkaId = async (req, res) => {
    const id = Number(req.params.id);

    try {
        const pikkaList = await db.Pikka.findAll({
            where: {
                id: id
            }
        });
        if (pikkaList) {
            res.status(201).send(JSON.stringify(pikkaList));
        } else {
            res.status(204).send('Not found Pikka');
        }
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "Error" });
    }
    // res.status(204).send('not yet implemented.');
}

const searchPikkaCaption = async (req, res) => {        //cannot get via params.caption which collide with searchPikkaId's params.id
    const caption = req.query.caption;

    // const pikkaResult = pikka.filter((item) => item.caption === caption);
    // const pikkaResult = pikka.filter((item) => item.caption.includes(caption));

    // if (pikkaResult) {
    //     res.send(JSON.stringify(pikkaResult));
    // }
    // else {
    //     res.status(204).send('Not found Pikka');
    // }

    try {
        const pikkaList = await db.Pikka.findAll({
            limit: 20,
            where: {
                caption: { [Op.like]: caption + '%' }
                // caption: caption 
            }
        });
        if (pikkaList) {
            res.status(201).send(JSON.stringify(pikkaList));
        } else {
            res.status(204).send('Not found Pikka');
        }
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "Error" });
    }
};

const deletePikkaId = async (req, res) => {
    const targetId = Number(req.params.id);

    try {
        const targetPikka = await db.Pikka.findOne({ where: { id: targetId } });
        if (targetPikka) {
            // await db.Pikka.destroy({ where: { id: targetId } });
            await targetPikka.destroy();     //same as above
            res.status(204).send();
        } else {
            res.status(404).send({ message: "Pikka not found." });
        }
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "Error" });
    }
};

const updatePikkaId = async (req, res) => {
    const targetId = Number(req.params.id);

    const pieces = req.body.image.split('\\');
    const piece = pieces[pieces.length - 1];

    try {
        const targetPikka = await db.Pikka.findOne({ where: { id: targetId } });
        if (targetPikka) {
            // const updatedPikka = await db.Pikka.update({ 
            //     caption: req.body.username,
            //     imgSrc: piece
            // }, { where: { id: targetId } });
            const updatedPikka = await targetPikka.update({     //same as above
                caption: req.body.username,
                imgSrc: piece
            });
            res.status(200).send({ message: "Pikka updated." });
        } else {
            res.status(404).send({ message: "Pikka not found." });
        }
    } catch (err) {
        console.log(err);
        res.status(400).send({ message: "Error" });
    }
}

module.exports = {
    createPikka,
    searchPikkaCaption,
    searchPikkaId,
    showPikka,
    deletePikkaId,
    updatePikkaId
};