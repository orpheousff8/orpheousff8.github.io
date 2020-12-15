module.exports = (sequelize, dataTypes) => {
    const ITEM_TEXT = sequelize.define('ITEM_TEXT', {
        isRead: {
            type: dataTypes.BOOLEAN
        },
        message: {
            type: dataTypes.STRING(255)
        }
    }, {
        timestamp: true
    }, {
        tableName: 'item_texts',
        timestamp: true
    });

    ITEM_TEXT.associate = (models) => {
        ITEM_TEXT.belongsToMany(models.User, { through: models.texts, foreignKey: 'user_id' });
        ITEM_TEXT.belongsToMany(models.User, { through: models.texted, foreignKey: 'user_id' });
    }

    return ITEM_TEXT;
}