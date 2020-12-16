module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("Image", {
        type: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        },
        data: {
            type: DataTypes.BLOB("long"),
        },
    }, {
        tableName: 'images',
        timestamp: true
    });

    Image.associate = (models) => {
        Image.belongsTo(models.User);
    };

    return Image;
};