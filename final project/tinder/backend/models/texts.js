module.exports = (sequelize, dataTypes) => {
    const texts = sequelize.define('texts', {

    }, {
        timestamp: false
    });

    return texts;
}