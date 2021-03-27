const db = require("../models");
const StrategicIssue = db.strategicissue;
// const Op = db.Sequelize.Op;

// Create and Save a new strategicIssue
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Strategic_Issue_ID) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a strategicIssue
  const strategicissue = {
    Strategic_Issue_ID: req.body.Strategic_Issue_ID,
    Strategic_Issue_Desc: req.body.Strategic_Issue_Desc,
  };

  // Save Tutorial in the database
  StrategicIssue.create(strategicissue)
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
    const Strategic_Issue_Desc = req.query.Strategic_Issue_Desc;
    var condition = Strategic_Issue_Desc ? { Strategic_Issue_Desc: { [Op.like]: `%${Strategic_Issue_Desc}%` } } : null;
  
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
  const id = req.params.id;

  StrategicIssue.findByPk(id)
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.status(500).send({
      message: "Eroror retrieving MP_ID=" + id
    });
  });
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