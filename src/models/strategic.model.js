module.exports = (sequelize, DataTypes) => {
    const Strategic = sequelize.define('STRATEGIC', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        Strategic_ID : { 
            type: DataTypes.INTEGER,
        },
        Strategic_Desc : DataTypes.STRING,
    })

    return Strategic
}