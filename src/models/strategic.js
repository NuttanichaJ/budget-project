module.exports = (sequelize, DataTypes) => {
    const STRATEGIC = sequelize.define('STRATEGIC', {
        Strategic_ID : { 
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        Strategic_Desc : DataTypes.STRING,
    })

    return STRATEGIC
}