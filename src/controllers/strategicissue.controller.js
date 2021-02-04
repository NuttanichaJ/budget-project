const db = require("../models");
const StrategicIssue = db.Strategic_Issue;
// const Op = db.Sequelize.Op;

// Create and Save a new strategicIssue
exports.create = (req, res) => {
  // Validate request
  if (!req.body.STRATEGIC_ISSUE_ID) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a strategicIssue
  const strategicIssue = {
    STRATEGIC_ISSUE_ID: req.body.STRATEGIC_ISSUE_ID,
    SI_DESC: req.body.SI_DESC,
  };

  // Save Tutorial in the database
  StrategicIssue.create(strategicIssue)
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
    const SI_DESC = req.query.SI_DESC;
    var condition = SI_DESC ? { SI_DESC: { [Op.like]: `%${SI_DESC}%` } } : null;
  
    StrategicIssue.findAll({ where: condition })
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