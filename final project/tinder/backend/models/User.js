module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        fullName: {
            type: DataTypes.STRING(128),
            unique: true
        },
        email: {
            type: DataTypes.STRING(128),
            unique: true
        },
        password: {
            type: DataTypes.STRING(255)
        },
        gender: {
            type: DataTypes.STRING(6)
        }
    }, {
        tableName: 'users',
        timestamp: true
    });

    User.associate = (models) => {
        User.hasMany(models.Interest, {foreignKey: 'user_id'});
        User.belongsToMany(models.Interest, {through: models.prefer, foreignKey: 'user_id'});

        User.hasOne(models.ITEM_BE);
        User.belongsTo(models.ITEM_BE)

        User.hasOne(models.ITEM_TEXT);
        User.belongsTo(models.ITEM_TEXT)
    };

    return User;
}