module.exports = (sequelize, DataTypes) => {
    const STRATEGY = sequelize.define('STRATEGY', {
        Strategy_ID : { 
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        Strategy_DESC : DataTypes.STRING,
    })

    return STRATEGY
}