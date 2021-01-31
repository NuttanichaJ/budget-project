module.exports = (sequelize, DataTypes) => {
    const Strategic = sequelize.define('Strategic', {
        STRATEGIC_ID : { 
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        STRATEGIC_DESC : DataTypes.STRING,
    })

    return Strategic
}