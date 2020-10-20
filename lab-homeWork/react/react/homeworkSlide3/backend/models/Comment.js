module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        comment: {
            type: DataTypes.STRING(255)
        }
    }, {
        tableName: 'Comments',
        timestamp: false
    });

    Comment.associate = models => {
        Comment.belongsTo(models.User);
        Comment.belongsTo(models.Pikka);
    };

    return Comment;
}