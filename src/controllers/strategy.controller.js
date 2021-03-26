const db = require("../models");
const Strategy = db.strategy;
// const Op = db.Sequelize.Op;

// Create and Save a new Strategy
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Strategy_ID) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a StrategyStrategy
  const strategy = {
    Strategy_ID: req.body.Strategy_ID,
    Strategy_Desc: req.body.Strategy_Desc,
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
    const Strategy_Desc = req.query.Strategy_Desc;
    var condition = Strategy_Desc ? { Strategy_Desc: { [Op.like]: `%${Strategy_Desc}%` } } : null;
  
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
  const id = req.params.id;

  Strategy.findByPk(id)
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.status(500).send({
      message: "Eroror retrieving MP_ID=" + id
    });
  });
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