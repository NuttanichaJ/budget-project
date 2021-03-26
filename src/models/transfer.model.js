module.exports = (sequelize, DataTypes) => {
    const Transfer = sequelize.define('TRANSFER', {
        Transfer_ID : { 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        Amount : DataTypes.FLOAT ,
    })

    return Transfer
}