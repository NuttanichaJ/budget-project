module.exports = (sequelize, DataTypes) => {
    const Strategy = sequelize.define('STRATEGY', {
        Strategy_ID : { 
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        Strategy_Desc : DataTypes.STRING,
    })

    return Strategy
}