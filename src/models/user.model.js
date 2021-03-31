module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('USER', {
        User_ID : { 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        User_FName : DataTypes.STRING,
        User_LName : DataTypes.STRING,
        Email : DataTypes.STRING,
        Permission : {
            type: DataTypes.STRING,
            // enum: ["Branch", "Central", "Dean"]
        },
        Password : DataTypes.STRING,
    })

    return User
}