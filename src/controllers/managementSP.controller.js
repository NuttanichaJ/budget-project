const db = require("../models");
const Management_SP = db.Management_SP;
// const Op = db.Sequelize.Op;

// Create and Save a new mainProject
exports.create = (req, res) => {
  // Validate request
  if (!req.body.USER_ID) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Sub_Project
  const managementSP = {
    USER_ID: req.body.USER_ID,
    SP_ID: req.body.SP_ID,
    LAST_MANAGE_DATE: req.body.LAST_MANAGE_DATE,
  };

  // Save Sub_Project in the database
  Management_SP.create(managementSP)
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
  
    Management_SP.findAll({ where: condition })
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
  const SP_ID = req.params.id;

  Management_SP.update(req.body, {
    where: {SP_ID: SP_ID}
  })

  .catch(err => {
    res.status(500).send({
      message: 'Error updating MainProject with SP_ID=' + SP_ID
    })
  })
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const SP_ID = req.params.id;
  Management_SP.destroy({
    where: { SP_ID: SP_ID }
  })
  .catch(err => {
    res.status(500).send({
      message: "ไม่สามารถลบได้"
    });
  });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};