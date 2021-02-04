const db = require("../models");
const User = db.User;
// const Op = db.Sequelize.Op;

// Create and Save a new user
exports.create = (req, res) => {
  // Validate request
  if (!req.body.USER_FNAME) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a User
  const user = {
    USER_ID: req.body.USER_ID,
    USER_FNAME: req.body.USER_FNAME,
    USER_LNAME: req.body.USER_LNAME,
    D_ID: req.body.D_ID,
    EMAIL: req.body.EMAIL,
    PERMISSION: req.body.PERMISSION,
  };

  // Save Tutorial in the database
  User.create(user)
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
    const USER_FNAME = req.query.USER_FNAME;
    var condition = USER_FNAME ? { USER_FNAME: { [Op.like]: `%${USER_FNAME}%` } } : null;
  
    User.findAll({ where: condition })
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