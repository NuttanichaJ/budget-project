module.exports = (sequelize, DataTypes) => {
    const Strategic = sequelize.define('STRATEGIC', {
        Strategic_ID : { 
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        Strategic_Desc : DataTypes.STRING,
    })

    return Strategic
}