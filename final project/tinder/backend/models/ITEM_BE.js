module.exports = (sequelize, dataTypes) => {
    const ITEM_BE = sequelize.define('ITEM_BE', {
        isRead: {
            type: dataTypes.BOOLEAN
        },
        message: {
            type: dataTypes.STRING(255)
        }
    }, {
        timestamp: true
    }, {
        tableName: 'item_bes',
        timestamp: true
    });

    ITEM_BE.associate = (models) => {
        ITEM_BE.belongsToMany(models.User, { through: models.be, foreignKey: 'user_id' });
        ITEM_BE.belongsToMany(models.User, { through: models.been, foreignKey: 'user_id' });
    }

    return ITEM_BE;
}