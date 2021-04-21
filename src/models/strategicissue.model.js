module.exports = (sequelize, DataTypes) => {
    const Strategic_Issue = sequelize.define('STRATEGIC_ISSUE', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        Strategic_Issue_ID : { 
            type: DataTypes.INTEGER,
        },
        Strategic_Issue_Desc : DataTypes.STRING,
    })

    return Strategic_Issue
}