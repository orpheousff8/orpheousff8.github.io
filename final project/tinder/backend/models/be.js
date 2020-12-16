module.exports = (sequelize, dataTypes) => {
    const be = sequelize.define('be', {
        isLike: {
            type: dataTypes.BOOLEAN
        },
        isBlock: {
            type: dataTypes.BOOLEAN
        }
    }, {
        timestamp: true
    });

    //used with User.hasMany(be)+User.hasMany(be) on User.js. the result is the same as User.belongsToMany(User)+User.belongsToMany(User)

    // be.associate = (models) => {
    //     be.belongsTo(models.User, {foreignKey: 'userId', as: 'userIdBe'});
    //     be.belongsTo(models.User, {foreignKey: 'userId', as: 'userIdBeen'});
    // };

    return be;
}