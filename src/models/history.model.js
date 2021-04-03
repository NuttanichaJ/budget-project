module.exports = (sequelize, DataTypes) => {
    const History = sequelize.define('HISTORY', {
        History_ID : { 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        Message : DataTypes.STRING,
    })

    return History
}