module.exports = (sequelize, dataTypes) => {
    const prefer = sequelize.define('prefer', {
        prefers: {
            type: dataTypes.BOOLEAN
        }
    }, {
        timestamp: false
    });

    return prefer;
}