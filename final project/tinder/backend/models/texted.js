module.exports = (sequelize, dataTypes) => {
    const texted = sequelize.define('texted', {

    }, {
        timestamp: false
    });

    return texted;
}