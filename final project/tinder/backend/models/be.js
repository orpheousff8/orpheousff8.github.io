module.exports = (sequelize, dataTypes) => {
    const be = sequelize.define('be', {

    }, {
        timestamp: false
    });

    return be;
}