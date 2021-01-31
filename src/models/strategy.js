module.exports = (sequelize, DataTypes) => {
    const Strategy = sequelize.define('Strategy', {
        STRATEGY_ID : { 
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        STRATEGY_DESC : DataTypes.STRING,
    })

    return Strategy
}