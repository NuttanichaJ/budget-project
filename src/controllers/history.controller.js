const db = require("../models");
const History = db.History;
// const Op = db.Sequelize.Op;

// Create and Save a new history
exports.create = (req, res) => {
  // Validate request
  if (!req.body.HISTORY_ID) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a history
  const history = {
    HISTORY_ID: req.body.HISTORY_ID,
    DATE: req.body.DATE,
    EDITED_USER_ID: req.body.EDITED_USER_ID,
    EDITED_PROJECT_ID: req.body.EDITED_PROJECT_ID,
    MESSAGE: req.body.MESSAGE,
  };

  // Save Tutorial in the database
  History.create(history)
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
  
    History.findAll({ where: condition })
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