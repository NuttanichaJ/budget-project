module.exports = (sequelize, DataTypes) => {
    const Management_MP = sequelize.define('Management_MP', {
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

    return Management_MP
}