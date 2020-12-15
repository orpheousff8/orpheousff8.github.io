module.exports = (sequelize, DataTypes) => {
    const Interest = sequelize.define('Interest', {
        name: {
            type: DataTypes.STRING(128),
            unique: true
        }
    }, {
        tableName: 'interests',
        timestamp: false
    });

    Interest.associate = (models) => {
        Interest.belongsToMany(models.User, {through: models.prefer, foreignKey: 'interest_id'});
    };

    return Interest;
}