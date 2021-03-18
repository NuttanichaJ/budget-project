const db = require("../models");
const SubProject = db.Sub_Project;
const Op = db.Sequelize.Op;

// Create and Save a new subProject
exports.create = (req, res) => {
  // Validate request
  if (!req.body.SP_NAME) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a subProject
  const subProject = {
    MP_ID: req.body.MP_ID,
    SP_ID: req.body.SP_ID,
    SP_NAME: req.body.SP_NAME,
    SP_OWNER: req.body.SP_OWNER,
    SP_INDICATOR: req.body.SP_INDICATOR,
    SP_BUDGET: req.body.SP_BUDGET,
    SP_TARGET_VALUE: req.body.SP_TARGET_VALUE,
    SP_TOTAL_AMOUNT: req.body.SP_TOTAL_AMOUNT,
    SP_APPROVE_USE: req.body.SP_APPROVE_USE,
    SP_DISBURSE: req.body.SP_DISBURSE,
    SP_TOTAL_FROM_PRINCIPLE: req.body.SP_TOTAL_FROM_PRINCIPLE,
    SP_TOTAL_FROM_DISBURSE: req.body.SP_TOTAL_FROM_DISBURSE,
    SP_INCOME: req.body.SP_INCOME,
    SP_OUTCOME: req.body.SP_OUTCOME,
    PROBLEM: req.body.PROBLEM,
    ANNOTATION: req.body.ANNOTATION,
    PERFORMANCE_RESULT: req.body.PERFORMANCE_RESULT,
    DETAIL_RESULT: req.body.DETAIL_RESULT,
  };

  // Save Tutorial in the database
  SubProject.create(subProject)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the table."
      });
    });
};

// Retrieve all SubProject from the database.
exports.findAll = (req, res) => {
    const SP_NAME = req.query.SP_NAME;
    var condition = SP_NAME ? { SP_NAME: { [Op.like]: `%${SP_NAME}%` } } : null;
  
    SubProject.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving SubProject."
        });
      });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  console.log(id)

  SubProject.findAll({
    where: {
      MP_ID: id}
    })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving MP_ID=" + id
      });
  });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const SP_ID = req.query.SP_ID;

  SubProject.update(req.body, {
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
  const SP_ID = req.query.SP_ID;
  SubProject.destroy({
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