module.exports = (sequelize, DataTypes) => {
    const Strategic_Issue = sequelize.define('Strategic_Issue', {
        STRATEGIC_ISSUE_ID : { 
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        SI_DESC : DataTypes.STRING,
    })

    return Strategic_Issue
}