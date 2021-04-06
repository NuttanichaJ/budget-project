module.exports = (sequelize, DataTypes) => {
    const Mainproject = sequelize.define('MAIN_PROJECT', {
        MP_ID : { 
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        MP_Name : DataTypes.STRING,
        MP_Owner : DataTypes.STRING,
        MP_Indicator : DataTypes.STRING,
        MP_Target_Value : DataTypes.STRING,
        MP_Budget : DataTypes.FLOAT,
        MP_Total_Amount : DataTypes.FLOAT,
        MP_Approve_Use : DataTypes.FLOAT,
        MP_Disburse : DataTypes.FLOAT,
        MP_Total_From_Priciple : DataTypes.FLOAT,
        MP_Total_From_Disburse : DataTypes.FLOAT,
        MP_Income : DataTypes.FLOAT,
        MP_Outcome : DataTypes.FLOAT,
        Problem : DataTypes.STRING,
        Annotation : DataTypes.STRING,
        Performance_Result : DataTypes.STRING,
        Detail_Result : DataTypes.STRING,
        MP_Status : DataTypes.STRING,
    })

    return Mainproject
}