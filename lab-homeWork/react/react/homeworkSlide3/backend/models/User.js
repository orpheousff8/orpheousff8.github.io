module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING(128),
            unique: true
        },
        email: {
            type: DataTypes.STRING(128),
            unique: true
        },
        password: {
            type: DataTypes.STRING(255)
        }
    }, {
        tableName: 'users',
        timestamp: true
    });

    User.associate = models => {
        User.hasOne(models.Comment);
        User.belongsToMany(models.Pikka, {through: models.like, foreignKey: 'user_id'});
    };

    return User;
}