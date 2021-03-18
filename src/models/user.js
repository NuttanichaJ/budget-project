module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        USER_ID : { 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        D_ID : DataTypes.INTEGER,
        USER_FNAME : DataTypes.STRING,
        USER_LNAME : DataTypes.STRING,
        EMAIL : DataTypes.STRING,
        PERMISSION : DataTypes.STRING,
    })

    return User
}