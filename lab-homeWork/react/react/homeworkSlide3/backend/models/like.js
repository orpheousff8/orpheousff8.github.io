module.exports = (sequelize, dataTypes) => {
    const like = sequelize.define('like', {
        isLike: {
            type: dataTypes.BOOLEAN
        }
    }, {
        timestamp: false
    });

    return like;
}