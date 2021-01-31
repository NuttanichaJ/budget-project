module.exports = (sequelize, DataTypes) => {
    const Sub_Project = sequelize.define('Sub_Project', {
        SP_ID : { 
            type: DataTypes.INTEGER,
            defaultValue: function() {
                return generateMyId()
            },
            primaryKey: true,
        },
        MP_ID : { 
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        SP_NAME : DataTypes.STRING,
        SP_OWNER : DataTypes.STRING ,
        SP_INDICATOR : DataTypes.STRING ,
        SP_TARGET_VALUE : DataTypes.STRING ,
        SP_BUDGET : DataTypes.FLOAT ,
        SP_TOTAL_AMOUNT : DataTypes.FLOAT ,
        SP_APPROVE_USE : DataTypes.FLOAT ,
        SP_DISBURSE : DataTypes.FLOAT ,
        SP_TOTAL_FROM_PRINCIPLE : DataTypes.FLOAT ,
        SP_TOTAL_FROM_DISBURSE : DataTypes.FLOAT ,
        SP_INCOME : DataTypes.FLOAT ,
        SP_OUTCOME : DataTypes.FLOAT ,
        SP_CREATE_DATE : DataTypes.DATE ,
        SP_CREATE_USER_ID : DataTypes.INTEGER ,
        PROBLEM : DataTypes.STRING,
        ANNOTATION : DataTypes.STRING,
        PERFORMANCE_RESULT : DataTypes.STRING,
        DATAIL_RESULT : DataTypes.STRING,

    })

    return Sub_Project
}