module.exports = (sequelize, DataTypes) => {
    const Department = sequelize.define('DEPARTMENT', {
        D_ID : { 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        D_Name : DataTypes.STRING,
    })

    return Department
}