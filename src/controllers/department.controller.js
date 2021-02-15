const db = require("../models");
const Department = db.Department;
// const Op = db.Sequelize.Op;

// Create and Save a new department
exports.create = (req, res) => {
  // Validate request
  if (!req.body.D_ID) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a department
  const department = {
    D_ID: req.body.D_ID,
    D_NAME: req.body.D_NAME,
  };

  // Save Tutorial in the database
  Department.create(department)
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
    const D_NAME = req.query.D_NAME;
    var condition = D_NAME ? { MP_NAME: { [Op.like]: `%${D_NAME}%` } } : null;
  
    Department.findAll({ where: condition })
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