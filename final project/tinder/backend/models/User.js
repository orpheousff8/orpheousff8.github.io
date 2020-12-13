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

    User.associate = models => {
        User.hasMany(models.Interest, {through: models.prefer, foreignKey: 'user_id'});
        User.belongsToMany(models.Interest, {through: models.prefer, foreignKey: 'user_id'});

        User.hasMany(models.User, {through: models.be, foreignKey: 'user_id'});
        User.belongsToMany(models.User, {through: models.be, foreignKey: 'user_id'});

        User.hasMany(models.User, {through: models.text, foreignKey: 'user_id'});
        User.belongsToMany(models.User, {through: models.text, foreignKey: 'user_id'});
    };

    return User;
}