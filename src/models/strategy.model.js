module.exports = (sequelize, DataTypes) => {
    const Strategy = sequelize.define('STRATEGY', {
        id : { 
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        Strategy_ID : { 
            type: DataTypes.INTEGER,
        },
        Strategy_Desc : DataTypes.STRING,
    })

    return Strategy
}