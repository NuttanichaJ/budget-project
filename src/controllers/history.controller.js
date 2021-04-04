const db = require("../models");
const History = db.history;
// const Op = db.Sequelize.Op;

// Create and Save a new history
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.History_ID) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }

  // Create a history
  const history = {
    Message: req.body.Message,
    Edited_User_ID: req.body.Edited_User_ID,
    Edited_MP_ID: req.body.Edited_MP_ID,
    Edited_SP_ID: req.body.Edited_SP_ID,
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
  
    History.findAll(
      {
        include: ["user",],
      })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving HISTORY."
        });
      });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  History.findByPk(id, 
    {
      include: ["user"]
    })
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
  const History_ID = req.params.id;
  History.destroy({
    where: { History_ID: History_ID }
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