module.exports = (sequelize, DataTypes) => {
    const TRANSFER = sequelize.define('TRANSFER', {
        Transfer_ID : { 
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        Amount : DataTypes.FLOAT ,
        // MP_ID_In : DataTypes.INTEGER,
        // SP_ID_In : DataTypes.INTEGER,
        // MP_ID_Out : DataTypes.INTEGER,
        // SP_ID_Out : DataTypes.INTEGER,
        // User_ID : DataTypes.INTEGER,
    })

    return TRANSFER
}