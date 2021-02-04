const db = require("../models");
const Strategy = db.Strategy;
// const Op = db.Sequelize.Op;

// Create and Save a new Strategy
exports.create = (req, res) => {
  // Validate request
  if (!req.body.STRATEGY_ID) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a StrategyStrategy
  const strategy = {
    STRATEGY_ID: req.body.STRATEGY_ID,
    STRATEGY_DESC: req.body.STRATEGY_DESC,
  };

  // Save Tutorial in the database
  Strategy.create(strategy)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the tableData."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const STRATEGY_DESC = req.query.STRATEGY_DESC;
    var condition = STRATEGY_DESC ? { STRATEGY_DESC: { [Op.like]: `%${STRATEGY_DESC}%` } } : null;
  
    Strategy.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};