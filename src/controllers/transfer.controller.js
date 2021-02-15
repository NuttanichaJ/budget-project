const db = require("../models");
const Transfer = db.Transfer;
// const Op = db.Sequelize.Op;

// Create and Save a new transfer
exports.create = (req, res) => {
  // Validate request
  if (!req.body.TRANSFER_ID) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a transfer
  const transfer = {
    MP_ID_IN: req.body.MP_ID_IN,
    SP_ID_IN: req.body.SP_ID_IN,
    MP_ID_OUT: req.body.MP_ID_OUT,
    SP_ID_OUT: req.body.SP_ID_OUT,
    AMOUNT: req.body.AMOUNT,
    TRANSFER_ID: req.body.TRANSFER_ID,
    USER_ID: req.body.USER_ID,
  };

  // Save Tutorial in the database
  Transfer.create(transfer)
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
    const TRANSFER_ID = req.query.TRANSFER_ID;
    var condition = TRANSFER_ID ? { TRANSFER_ID: { [Op.like]: `%${TRANSFER_ID}%` } } : null;
  
    Transfer.findAll({ where: condition })
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