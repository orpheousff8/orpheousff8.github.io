module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING(128),
            unique: true
        }
    }, {
        tableName: 'interests',
        timestamp: false
    });

    User.associate = models => {
        User.hasMany(models.User, {through: models.prefer, foreignKey: 'interest_id'});
        User.belongsToMany(models.User, {through: models.prefer, foreignKey: 'interest_id'});
    };

    return User;
}