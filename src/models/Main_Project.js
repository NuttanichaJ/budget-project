module.exports = (sequelize, DataTypes) => {
    const MAIN_PROJECT = sequelize.define('MAIN_PROJECT', {
        MP_ID : { 
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        MP_Name : DataTypes.STRING,
        MP_Owner : DataTypes.STRING ,
        MP_Indicator : DataTypes.STRING ,
        MP_Target_Value : DataTypes.STRING ,
        MP_Budget : DataTypes.FLOAT ,
        MP_Total_Amount : DataTypes.FLOAT ,
        MP_Approve_Use : DataTypes.FLOAT ,
        MP_Disburse : DataTypes.FLOAT ,
        MP_Total_From_Priciple : DataTypes.FLOAT ,
        MP_Total_From_Disburse : DataTypes.FLOAT ,
        MP_Income : DataTypes.FLOAT,
        MP_Outcome : DataTypes.FLOAT,
        MP_Create_User_ID : DataTypes.INTEGER,
    })

    return MAIN_PROJECT
}