module.exports = (sequelize, DataTypes) => {
    const Department = sequelize.define('Department', {
        D_ID : { 
            type: DataTypes.INTEGER,
            defaultValue: function() {
                return generateMyId()
            },
            primaryKey: true,
        },
        D_NAME : DataTypes.STRING,
    })

    return Department
}