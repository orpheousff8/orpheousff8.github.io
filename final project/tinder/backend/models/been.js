module.exports = (sequelize, dataTypes) => {
    const been = sequelize.define('been', {

    }, {
        timestamp: false
    });

    return been;
}