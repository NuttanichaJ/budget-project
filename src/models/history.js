module.exports = (sequelize, DataTypes) => {
    const History = sequelize.define('History', {
        HISTORY_ID : { 
            type: DataTypes.INTEGER,
            defaultValue: function() {
                return generateMyId()
            },
            primaryKey: true,
        },
        MASSAGE : DataTypes.STRING,
        EDITED_USER_ID : DataTypes.INTEGER,
        EDITED_PROJECT_ID : DataTypes.INTEGER,
        DATE : DataTypes.DATE ,

    })

    return History
}