module.exports = (sequelize, dataTypes) => {
    const text = sequelize.define('text', {
        isRead: {
            type: dataTypes.BOOLEAN
        },
        message: {
            type: DataTypes.STRING(255)
        }
    }, {
        timestamp: true
    });

    return text;
}