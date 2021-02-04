const db = require("../models");
const Management_MP = db.Management_MP;
// const Op = db.Sequelize.Op;

// Create and Save a new managementMP
exports.create = (req, res) => {
  // Validate request
  if (!req.body.MP_ID) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a managementMP
  const managementMP = {
    MP_ID: req.body.MP_ID,
    USER_ID: req.body.USER_ID,
    LAST_MANAGE_DATE: req.body.LAST_MANAGE_DATE,
  };

  // Save Tutorial in the database
  Management_MP.create(managementMP)
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
    const USER_ID = req.query.USER_ID;
    var condition = USER_ID ? { MP_NAME: { [Op.like]: `%${USER_ID}%` } } : null;
  
    Management_MP.findAll({ where: condition })
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