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

db.mainproject = require("./mainproject.model")(sequelize, Sequelize);
db.user = require("./user.model")(sequelize, Sequelize);
db.subproject = require("./subproject.model")(sequelize, Sequelize);
db.department = require("./department.model")(sequelize, Sequelize);
db.strategicissue = require("./strategicissue.model")(sequelize, Sequelize);
db.strategic = require("./strategic.model")(sequelize, Sequelize);
db.strategy = require("./strategy.model")(sequelize, Sequelize);
db.history = require("./history.model")(sequelize, Sequelize);
db.transfer = require("./transfer.model")(sequelize, Sequelize);

//Define 1:M MAIN_PROJECT + SUB_PROJECT
db.mainproject.hasMany(db.subproject, {
  foreignKey: "MP_ID",
  as: "subprojects"
});
db.subproject.belongsTo(db.mainproject, {
  foreignKey: "MP_ID",
  as: "mainprojects"
});

//Define 1:M USER + DEPARTMENT
db.department.hasMany(db.user, {
  as: "users",
  foreignKey: "D_ID",
})
db.user.belongsTo(db.department, {
  foreignKey: "D_ID",
  as:"departments"
});

// Define M:1 MAIN_PROJECT + DEPARTMENT
db.department.hasMany(db.mainproject, {
  foreignKey: "D_ID",
  as: "mainprojects",
});
db.mainproject.belongsTo(db.department, {
  foreignKey: "D_ID",
  as: "departments"
});

//Define M:1 MAIN_PROJECT + USER
db.user.hasMany(db.mainproject, {
  foreignKey: "MP_Create_User_ID",
  as: "created_MP"
})
db.mainproject.belongsTo(db.user, {
  foreignKey: "MP_Create_User_ID",
  as: "created_user"
})

//Define M:1 SUB_PROJECT + USER
db.user.hasOne(db.subproject, {
  foreignKey: "SP_Create_User_ID",
  as: "created_SP"
})
db.subproject.belongsTo(db.user, {
  foreignKey: "SP_Create_User_ID",
  as: "created_user"
})

//Define M:1 MAIN_PROJECT + STRATEGIC_ISSUE
db.strategicissue.hasMany(db.mainproject, {
  foreignKey: "Strategic_Issue_ID",
  as: "mainprojects"
})
db.mainproject.belongsTo(db.strategicissue, {
  foreignKey: "Strategic_Issue_ID",
  as: "strategicissue"
})

//Define M:1 STRATEGIC + STRATEGIC_ISSUE
db.strategicissue.hasMany(db.strategic, {
  foreignKey: "SI_ID",
  as: "strategics"
})
db.strategic.belongsTo(db.strategicissue, {
  foreignKey: "SI_ID",
  as: "strategicissue"
})

//Define M:1 MAIN_PROJECT + STRATEGIC
db.strategic.hasOne(db.mainproject, {
  foreignKey: "Strategy_ID",
  as: "mainprojects"
})
db.mainproject.belongsTo(db.strategic, {
  foreignKey: "Strategic_ID",
  as: "strategic"
})

//Define M:1 STRATEGY + STRATEGIC
db.strategic.hasMany(db.strategy, {
  foreignKey: "S_ID",
  as: "strategies"
})
db.strategy.belongsTo(db.strategic, {
  foreignKey: "S_ID",
  as: "strategic"
})

//Define M:1 MAIN_PROJECT + STRATEGY
db.strategy.hasOne(db.mainproject, {
  foreignKey: "Strategy_ID",
  as: "mainprojects"
})
db.mainproject.belongsTo(db.strategy, {
  foreignKey: "Strategy_ID",
  as: "strategy"
})

//Define 1:M MAIN_PROJECT + HISTORY
db.mainproject.hasMany(db.history, {
  foreignKey: "Edited_MP_ID",
  as: "histories"
})
db.history.belongsTo(db.mainproject, {
  foreignKey: "Edited_MP_ID",
  as: "mainproject"
})

//Define 1:M SUB_PROJECT + HISTORY
db.subproject.hasMany(db.history, {
  foreignKey: "Edited_SP_ID",
  as: "histories"
})
db.history.belongsTo(db.subproject, {
  foreignKey: "Edited_SP_ID",
  as: "subproject"
})

//Define 1:M USER + HISTORY
db.user.hasMany(db.history, {
  foreignKey: "Edited_User_ID",
  as: "histories"
})
db.history.belongsTo(db.user, {
  foreignKey: "Edited_User_ID",
  as: "user"
})

//Define M:1 USER + TRANSFER
db.user.hasMany(db.transfer, {
  foreignKey: "User_ID",
  as: "tranfers"
})
db.transfer.belongsTo(db.user, {
  foreignKey: "User_ID",
  as: "user"
})

//Define M:1 TRANSFER + MP_ID_In (MAIN_PROJECT)
db.mainproject.hasMany(db.transfer, {
  foreignKey: "MP_ID_In",
  as: "transfers_in"
})
db.transfer.belongsTo(db.mainproject, {
  foreignKey: "MP_ID_In",
  as: "MPtranfers_In"
})
//Define M:1 TRANSFER + MP_ID_Out (MAIN_PROJECT)
db.mainproject.hasMany(db.transfer, {
  foreignKey: "MP_ID_Out",
  as: "transfers_Out"
})
db.transfer.belongsTo(db.mainproject, {
  foreignKey: "MP_ID_Out",
  as: "MPtranfers_Out"
})

//Define 1:1 TRANSFER + SP_ID_In (SUB_PROJECT)
db.subproject.hasMany(db.transfer, {
  foreignKey: "SP_ID_In",
  as: "transfers_in"
})
db.transfer.belongsTo(db.subproject, {
  foreignKey: "SP_ID_In",
  as: "SPtranfers_In"
})
//Define 1:1 TRANSFER + SP_ID_Out (SUB_PROJECT)
db.subproject.hasMany(db.transfer, {
  foreignKey: "SP_ID_Out",
  as: "transfers_Out"
})
db.transfer.belongsTo(db.subproject, {
  foreignKey: "SP_ID_Out",
  as: "SPtranfers_Out"
})


module.exports = db;