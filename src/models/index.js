const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  storage: dbConfig.storage,
  operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.MAIN_PROJECT = require("./MAIN_PROJECT")(sequelize, Sequelize);
db.SUB_PROJECT = require("./SUB_PROJECT")(sequelize, Sequelize);
db.DEPARTMENT = require("./DEPARTMENT")(sequelize, Sequelize);
db.HISTORY = require("./HISTORY")(sequelize, Sequelize);
db.STRATEGIC_ISSUE = require("./STRATEGIC_ISSUE")(sequelize, Sequelize);
db.STRATEGIC = require("./STRATEGIC")(sequelize, Sequelize);
db.STRATEGY = require("./STRATEGY")(sequelize, Sequelize);
db.TRANSFER = require("./TRANSFER")(sequelize, Sequelize);
db.USER = require("./USER")(sequelize, Sequelize);

//Define 1:1 SUB_PROJECT + STRATEGY
db.DEPARTMENT.hasOne(db.USER, {
  as: "USER"
})
db.USER.belongsTo(db.DEPARTMENT, {
  foreignKey: "D_ID",
  as: "DEPARTMENT"
})

// Define 1:1 MAIN_PROJECT + DEPARTMENT
db.DEPARTMENT.hasOne(db.MAIN_PROJECT, {
  as: "MAIN_PROJECT",
})
db.MAIN_PROJECT.belongsTo(db.DEPARTMENT, {
  foreignKey: "D_ID",
  as: "DEPARTMENT"
})

//Define 1:1 MAIN_PROJECT + STRATEGIC_ISSUE
db.STRATEGIC_ISSUE.hasOne(db.MAIN_PROJECT, {
  as: "MAIN_PROJECT"
})
db.MAIN_PROJECT.belongsTo(db.STRATEGIC_ISSUE, {
  foreignKey: "Strategic_Issue_ID",
  as: "STRATEGIC_ISSUE"
})

//Define 1:1 MAIN_PROJECT + STRATEGIC
db.STRATEGIC.hasOne(db.MAIN_PROJECT, {
  as: "MAIN_PROJECT"
})
db.MAIN_PROJECT.belongsTo(db.STRATEGIC, {
  foreignKey: "Strategic_ID",
  as: "STRATEGIC"
})

//Define 1:1 MAIN_PROJECT + STRATEGY
db.STRATEGY.hasOne(db.MAIN_PROJECT, {
  as: "MAIN_PROJECT"
})
db.MAIN_PROJECT.belongsTo(db.STRATEGY, {
  foreignKey: "Strategy_ID",
  as: "STRATEGY"
})

//Define 1:M MAIN_PROJECT + SUB_PROJECT
db.MAIN_PROJECT.hasMany(db.SUB_PROJECT, {
  as: "SUB_PROJECT"
})
db.SUB_PROJECT.belongsTo(db.MAIN_PROJECT, {
  foreignKey: "MP_ID",
  as: "MAIN_PROJECT"
})

//Define 1:M MAIN_PROJECT + HISTORY
db.MAIN_PROJECT.hasMany(db.HISTORY, {
  as: "HISTORY"
})
db.HISTORY.belongsTo(db.MAIN_PROJECT, {
  foreignKey: "Edited_MP_ID",
  as: "MAIN_PROJECT"
})

//Define 1:M SUB_PROJECT + HISTORY
db.SUB_PROJECT.hasMany(db.HISTORY, {
  as: "HISTORY"
})
db.HISTORY.belongsTo(db.SUB_PROJECT, {
  foreignKey: "Edited_SP_ID",
  as: "SUB_PROJECT"
})

//Define 1:1 MAIN_PROJECT + USER
db.USER.hasOne(db.MAIN_PROJECT, {
  as: "CREATE_MP"
})
db.MAIN_PROJECT.belongsTo(db.USER, {
  foreignKey: "MP_Create_User_ID",
  as: "CREATE_USER"
})

//Define 1:1 SUB_PROJECT + USER
db.USER.hasOne(db.SUB_PROJECT, {
  as: "CREATE_SP"
})
db.SUB_PROJECT.belongsTo(db.USER, {
  foreignKey: "SP_Create_User_ID",
  as: "CREATE_USER"
})

//Define 1:1 USER + HISTORY
db.USER.hasMany(db.HISTORY, {
  as: "HISTORY"
})
db.HISTORY.belongsTo(db.USER, {
  foreignKey: "Edited_User_ID",
  as: "USER"
})

//Define 1:1 USER + TRANSFER
db.USER.hasOne(db.TRANSFER, {
  as: "TRANSFER"
})
db.TRANSFER.belongsTo(db.USER, {
  foreignKey: "User_ID",
  as: "TRANSFER"
})

//Define 1:1 TRANSFER + MP_ID_In (MAIN_PROJECT)
db.MAIN_PROJECT.hasOne(db.TRANSFER, {
  as: "TRANSFER_In"
})
db.TRANSFER.belongsTo(db.MAIN_PROJECT, {
  foreignKey: "MP_ID_In",
  as: "MP_TRANSFER_IN"
})
//Define 1:1 TRANSFER + MP_ID_Out (MAIN_PROJECT)
db.MAIN_PROJECT.hasOne(db.TRANSFER, {
  as: "TRANSFER_Out"
})
db.TRANSFER.belongsTo(db.MAIN_PROJECT, {
  foreignKey: "MP_ID_Out",
  as: "MP_TRANSFER_OUT"
})

//Define 1:1 TRANSFER + SP_ID_In (SUB_PROJECT)
db.SUB_PROJECT.hasOne(db.TRANSFER, {
  as: "TRANSFER_In"
})
db.TRANSFER.belongsTo(db.SUB_PROJECT, {
  foreignKey: "SP_ID_In",
  as: "SP_TRANSFER_IN"
})
//Define 1:1 TRANSFER + SP_ID_Out (SUB_PROJECT)
db.SUB_PROJECT.hasOne(db.TRANSFER, {
  as: "TRANSFER_Out"
})
db.TRANSFER.belongsTo(db.SUB_PROJECT, {
  foreignKey: "SP_ID_Out",
  as: "SP_TRANSFER_OUT"
})


//Define M:M USER + SUB_PROJECT
db.USER.belongsToMany(db.SUB_PROJECT, {
  through: "MANAGEMENT_SP",
  as: "USER_MANAGEMENT_SP",
  foreignKey: "SP_ID",
})
db.SUB_PROJECT.belongsToMany(db.USER, {
  through: "MANAGEMENT_SP",
  as: "USER",
  foreignKey: "User_ID",
})

//Define M:M USER + MAIN_PROJECT
db.USER.belongsToMany(db.MAIN_PROJECT, {
  through: "MANAGEMENT_MP",
  as: "USER_MANAGEMENT_MP",
  foreignKey: "SP_ID",
})
db.MAIN_PROJECT.belongsToMany(db.USER, {
  through: "MANAGEMENT_MP",
  as: "USER",
  foreignKey: "User_ID",
})

module.exports = db;