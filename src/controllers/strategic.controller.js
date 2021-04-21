const db = require("../models");
const Strategic = db.strategic;
// const Op = db.Sequelize.Op;

// Create and Save a new strategic
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Strategic_ID) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a strategic
  const strategic = {
    Strategic_ID: req.body.Strategic_ID,
    Strategic_Desc: req.body.Strategic_Desc,
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
    const Strategic_Desc = req.query.Strategic_Desc;
    var condition = Strategic_Desc ? { Strategic_Desc: { [Op.like]: `%${Strategic_Desc}%` } } : null;
  
    Strategic.findAll({ where: condition,
      include: 
      ["strategies",],
    })
    
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

  Strategic.findByPk({id,
    include:
    ["strategies",],
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
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};