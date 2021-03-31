const db = require("../models");
const Transfer = db.transfer;
const Subproject = db.subproject;
const Op = db.Sequelize.Op;

// Create and Save a new transfer
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Amount) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a transfer
  const transfer = {
    MP_ID_In: req.body.MP_ID_In,
    SP_ID_In: req.body.SP_ID_In,
    MP_ID_Out: req.body.MP_ID_Out,
    SP_ID_Out: req.body.SP_ID_Out,
    Amount: req.body.Amount,
    User_ID: req.body.User_ID,
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

// Retrieve all Transfer from the database.
exports.findAll = (req, res) => {

  Transfer.findAll({
    include: ["user", "MPtranfers_In", "MPtranfers_Out", "SPtranfers_In", "SPtranfers_Out"]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Transfer."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  //const Transfer_ID = req.query.Transfer_ID;
  const Transfer_ID = req.params.id;

  Transfer.findByPk(Transfer_ID, {
    include: ["user", "MPtranfers_In", "MPtranfers_Out", "SPtranfers_In", "SPtranfers_Out"]
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.status(500).send({
      message: "Eroror retrieving Transfer_ID=" + Transfer_ID
    });
  });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

  const Transfer_ID = req.params.id;

  Transfer.update(req.body, {
    where: {Transfer_ID: Transfer_ID}
  })
  .catch(err => {
    res.status(500).send({
      message: 'Error updating MainProject with TRANSFER_ID=' + Transfer_ID
    })
  })

  Subproject.increment(('SP_Income', { by: 10, where: { SP_ID: 21 }}));

  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const Transfer_ID = req.params.id;
  
  Transfer.destroy({
    where: { Transfer_ID: Transfer_ID }
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