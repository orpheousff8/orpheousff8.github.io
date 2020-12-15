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
        User.belongsToMany(models.Interest, {through: models.prefer, as: 'user_id' ,foreignKey: 'user_id'});

        User.belongsToMany(models.User, {through: models.be, as: 'user_id_be' ,foreignKey: 'user_id'});
        User.belongsToMany(models.User, {through: models.be, as: 'user_id_been' ,foreignKey: 'user_id'});

        User.belongsToMany(models.User, {through: models.text, as: 'user_id_sender' ,foreignKey: 'user_id'});
        User.belongsToMany(models.User, {through: models.text, as: 'user_id_receiver' ,foreignKey: 'user_id'});
    };

    return User;
}