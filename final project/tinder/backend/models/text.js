module.exports = (sequelize, dataTypes) => {
    const text = sequelize.define('text', {
        isRead: {
            type: dataTypes.BOOLEAN
        },
        message: {
            type: dataTypes.STRING(255)
        }
    }, {
        timestamp: true
    });

    //used with User.hasMany(text)+User.hasMany(text) on User.js. the result is the same as User.belongsToMany(User)+User.belongsToMany(User)

    // text.associate = (models) => {
    //     text.belongsTo(models.User, {foreignKey: 'userId', as: 'userIdTexts'});
    //     text.belongsTo(models.User, {foreignKey: 'userId', as: 'userIdTexted'});
    // };

    return text;
}