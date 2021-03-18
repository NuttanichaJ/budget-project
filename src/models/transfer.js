module.exports = (sequelize, DataTypes) => {
    const Transfer = sequelize.define('Transfer', {
        TRANSFER_ID : { 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        AMOUNT : DataTypes.FLOAT ,
        MP_ID_IN : DataTypes.INTEGER,
        SP_ID_IN : DataTypes.INTEGER,
        MP_ID_OUT : DataTypes.INTEGER,
        SP_ID_OUT : DataTypes.INTEGER,
        USER_ID : DataTypes.INTEGER,
    })

    return Transfer
}