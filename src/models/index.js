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

db.Main_Project = require("./Main_Project.js")(sequelize, Sequelize);
db.Sub_Project = require("./subProject.js")(sequelize, Sequelize);
db.Department = require("./department")(sequelize, Sequelize);
db.History = require("./history")(sequelize, Sequelize);
db.Strategic_Issue = require("./strategic_issue")(sequelize, Sequelize);
db.Strategic = require("./strategic")(sequelize, Sequelize);
db.Strategy = require("./strategy")(sequelize, Sequelize);
db.Transfer = require("./transfer")(sequelize, Sequelize);
db.User = require("./user")(sequelize, Sequelize);
db.Management_MP = require("./managementMP")(sequelize, Sequelize);
db.Management_SP = require("./managementSP")(sequelize, Sequelize);


module.exports = db;