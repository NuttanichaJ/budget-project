module.exports = (sequelize, DataTypes) => {
    const DEPARTMENT = sequelize.define('DEPARTMENT', {
        D_ID : { 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        D_Name : DataTypes.STRING,
    })

    return DEPARTMENT
}