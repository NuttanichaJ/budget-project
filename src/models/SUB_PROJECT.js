module.exports = (sequelize, DataTypes) => {
    const SUB_PROJECT = sequelize.define('SUB_PROJECT', {
        SP_ID : { 
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        SP_Name : DataTypes.STRING,
        SP_Owner : DataTypes.STRING ,
        SP_Indicator : DataTypes.STRING ,
        SP_Target_Value : DataTypes.STRING ,
        SP_Budget : DataTypes.FLOAT ,
        SP_Total_Amount : DataTypes.FLOAT ,
        SP_Approve_Use : DataTypes.FLOAT ,
        SP_Disburs : DataTypes.FLOAT ,
        SP_Total_From_Priciple : DataTypes.FLOAT ,
        SP_Total_From_Disburse : DataTypes.FLOAT ,
        SP_Income : DataTypes.FLOAT ,
        SP_Outcome : DataTypes.FLOAT ,
        Problem : DataTypes.STRING,
        Annotation : DataTypes.STRING,
        Performance_Result : DataTypes.STRING,
        Detail_Result : DataTypes.STRING,

    })

    return SUB_PROJECT
}