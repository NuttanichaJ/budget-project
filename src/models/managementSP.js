module.exports = (sequelize, DataTypes) => {
    const Management_SP = sequelize.define('Management_SP', {
        USER_ID : { 
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        SP_ID : { 
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        LAST_MANAGE_DATE : DataTypes.DATE ,
    })

    return Management_SP
}