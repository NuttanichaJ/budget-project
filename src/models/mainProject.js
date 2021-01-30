module.exports = (sequelize, DataTypes) => {
    const Main_Project = sequelize.define('Main_Project', {
        MP_ID : { 
            type: DataTypes.INTEGER,
            defaultValue: function() {
                return generateMyId()
            },
            primaryKey: true,
        },
        D_ID : DataTypes.INTEGER,
        MP_NAME : DataTypes.STRING,
        MP_OWNER : DataTypes.STRING ,
        STRATEGIC_ISSUE_ID : DataTypes.INTEGER ,
        STRATEGIC_ID : DataTypes.INTEGER ,
        STRATEGY_ID : DataTypes.INTEGER ,
        MP_INDICATOR : DataTypes.STRING ,
        MP_TARGET_VALUE : DataTypes.STRING ,
        MP_BUDGET : DataTypes.FLOAT ,
        MP_TOTAL_AMOUNT : DataTypes.FLOAT ,
        MP_APPROVE_USE : DataTypes.FLOAT ,
        MP_DISBURSE : DataTypes.FLOAT ,
        MP_TOTAL_FROM_PRINCIPLE : DataTypes.FLOAT ,
        MP_TOTAL_FROM_DISBURSE : DataTypes.FLOAT ,
        MP_INCOME : DataTypes.FLOAT ,
        MP_OUTCOME : DataTypes.FLOAT ,
        MP_CREATE_DATE : DataTypes.DATE ,
        MP_CREATE_USER_ID : DataTypes.INTEGER ,
    })

    return Main_Project
}