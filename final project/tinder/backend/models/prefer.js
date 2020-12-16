module.exports = (sequelize, dataTypes) => {
    const prefer = sequelize.define('prefer', {
        isPrefer: {
            type: dataTypes.BOOLEAN
        }
    }, {
        timestamp: false
    });

    return prefer;
}