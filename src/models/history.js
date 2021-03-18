module.exports = (sequelize, DataTypes) => {
    const HISTORY = sequelize.define('HISTORY', {
        History_ID : { 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        Massage : DataTypes.STRING,
        Edited_User_ID : DataTypes.INTEGER,
        Edited_Project_ID : DataTypes.INTEGER,
    })

    return HISTORY
}