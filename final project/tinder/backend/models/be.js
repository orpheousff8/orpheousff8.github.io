module.exports = (sequelize, dataTypes) => {
    const be = sequelize.define('be', {
        likes: {
            type: dataTypes.BOOLEAN
        },
        blocks: {
            type: dataTypes.BOOLEAN
        }
    }, {
        timestamp: true
    });

    return be;
}