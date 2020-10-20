module.exports = (sequelize, DataTypes) => {
    const Pikka = sequelize.define('Pikka', {
        caption: {
            type: DataTypes.STRING(32)
        },
        imgSrc: {
            type: DataTypes.STRING(255)
        }
    }, {
        tableName: 'pikkas',
        timestamp: false
    });

    Pikka.associate = models => {
        Pikka.hasOne(models.Comment);
        Pikka.belongsToMany(models.User, { through: models.like, foreignKey: 'pikka_id' })
    };
    
    return Pikka;
}