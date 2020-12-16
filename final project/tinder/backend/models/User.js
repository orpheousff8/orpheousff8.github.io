module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: {
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

        User.hasOne(models.Image);

        User.belongsToMany(models.Interest, {through: models.prefer, foreignKey: 'userId'});

        User.belongsToMany(models.User, {through: models.be, as: 'userIdBe' ,foreignKey: 'userIdBe'});
        User.belongsToMany(models.User, {through: models.be, as: 'userIdBeen' ,foreignKey: 'userIdBeen'});

        User.belongsToMany(models.User, {through: models.text, as: 'userIdTexts' ,foreignKey: 'userIdTexts'});
        User.belongsToMany(models.User, {through: models.text, as: 'userIdTexted' ,foreignKey: 'userIdTexted'});

        //Used with belongsTo on be.js and text.js. the result is the same as User.belongsToMany

        // User.hasMany(models.be, {foreignKey: 'userId', as: 'userIdBe'});
        // User.hasMany(models.be, {foreignKey: 'userId', as: 'userIdBeen'});

        // User.hasMany(models.text, {foreignKey: 'userId', as: 'userIdTexts'});
        // User.hasMany(models.text, {foreignKey: 'userId', as: 'userIdTexted'});
    };

    return User;
}