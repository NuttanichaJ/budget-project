const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/config');
const db = {};

const sequelize = new Sequelize (
    config.db.database,
    config.db.user,
    config.db.password,
    confid.db.options,
)

fs.readSync(__dirname)
    .filter((file) => 
        file !== 'index.js'
    )

    .forfech((file) => {
        const model = sequlize.import(path.join(__dirname.file))
    });

    db.sequelize = sequelize
    db.sequelize = sequelize

    module.exports = db

