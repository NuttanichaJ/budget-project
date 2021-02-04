const db = require("../models");
const Strategic = db.Main_Project;
// const Op = db.Sequelize.Op;

// Create and Save a new strategic
exports.create = (req, res) => {
  // Validate request
  if (!req.body.STRATEGIC_ID) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a strategic
  const strategic = {
    STRATEGIC_ID: req.body.STRATEGIC_ID,
    STRATEGIC_DESC: req.body.STRATEGIC_DESC,
  };

  // Save Tutorial in the database
  Strategic.create(strategic)
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
    const STRATEGIC_DESC = req.query.MP_NAME;
    var condition = STRATEGIC_DESC ? { STRATEGIC_DESC: { [Op.like]: `%${STRATEGIC_DESC}%` } } : null;
  
    Strategic.findAll({ where: condition })
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