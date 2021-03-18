module.exports = (sequelize, DataTypes) => {
    const STRATEGIC_ISSUE = sequelize.define('STRATEGIC_ISSUE', {
        Strategic_Issue_ID : { 
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        Strategic_Issue_Desc : DataTypes.STRING,
    })

    return STRATEGIC_ISSUE
}