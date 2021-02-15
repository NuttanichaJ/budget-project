const db = require("../models");
const MainProject = db.Main_Project;
// const Op = db.Sequelize.Op;

// Create and Save a new mainProject
exports.create = (req, res) => {
  // Validate request
  if (!req.body.MP_ID) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a mainProject
  const mainProject = {
    MP_ID: req.body.MP_ID,
    D_ID: req.body.D_ID,
    MP_NAME: req.body.MP_NAME,
    MP_OWNER: req.body.MP_OWNER,
    STRATEGIC_ISSUE_ID: req.body.STRATEGIC_ISSUE_ID,
    STRATEGIC_ID: req.body.STRATEGIC_ID,
    STRATEGY_ID: req.body.STRATEGY_ID,
    MP_TARGET_VALUE: req.body.MP_TARGET_VALUE,
    MP_BUDGET: req.body.MP_BUDGET,
    MP_TOTAL_AMOUNT: req.body.MP_TOTAL_AMOUNT,
    MP_APPROVE_USE: req.body.MP_APPROVE_USE,
    MP_DISBURSE: req.body.MP_DISBURSE,
    MP_TOTAL_FROM_PRINCIPLE: req.body.MP_TOTAL_FROM_PRINCIPLE,
    MP_TOTAL_FROM_DISBURSE: req.body.MP_TOTAL_FROM_DISBURSE,
    MP_INCOME: req.body.MP_INCOME,
    MP_OUTCOME: req.body.MP_OUTCOME,
  };

  // Save Tutorial in the database
  MainProject.create(mainProject)
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
    const MP_NAME = req.query.MP_NAME;
    var condition = MP_NAME ? { MP_NAME: { [Op.like]: `%${MP_NAME}%` } } : null;
  
    MainProject.findAll({ where: condition })
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