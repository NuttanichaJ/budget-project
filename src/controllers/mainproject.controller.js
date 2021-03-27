const db = require("../models");
const Mainproject = db.mainproject;
const User = db.user;
const Op = db.Sequelize.Op;

// Create and Save a new mainProject
exports.create = (req, res) => {
  // Validate request
  if (!req.body.MP_Name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a mainProject
  const mainproject = {
    MP_Name: req.body.MP_Name,
    MP_Owner: req.body.MP_Owner,
    MP_Indicator: req.body.MP_Indicator,
    Strategic_Issue_ID: req.body.Strategic_Issue_ID,
    Strategic_ID: req.body.Strategic_ID,
    Strategy_ID: req.body.Strategy_ID,
    MP_Target_Value: req.body.MP_Target_Value,
    MP_Budget: req.body.MP_Budget,
    MP_Total_Amount: req.body.MP_Total_Amount,
    MP_Approve_Use: req.body.MP_Approve_Use,
    MP_Disburse: req.body.MP_Disburse,
    MP_Total_From_Priciple: req.body.MP_Total_From_Priciple,
    MP_Total_From_Disburse: req.body.MP_Total_From_Disburse,
    MP_Income: req.body.MP_Income,
    MP_Outcome: req.body.MP_Outcome,
    Problem: req.body.Problem,
    Annotation: req.body.Annotation,
    Performance_Result: req.body.Performance_Result,
    Detail_Result: req.body.Detail_Result,
    D_ID: req.body.D_ID,
    MP_Create_User_ID: req.body.MP_Create_User_ID
  };

  // Save Main Project in the database
  Mainproject.create(mainproject)
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

// Retrieve all MainProject from the database.
exports.findAll = (req, res) => {
  Mainproject.findAll(
    {
      include: 
      ["subprojects",
        {
          model: User,
          as: "users",
          attributes: ["User_ID", "User_FName", "User_LName", "Email",],
          through: {
            attributes: [],
          }
        },
      ],
    })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving."
        });
      });
};

// Find a single Main Project with an id
exports.findOne = (req, res) => {
  // console.log(req.body.MP_ID)
  const id = req.params.id;

  Mainproject.findByPk(id,
    {
      include: 
      ["subprojects",
        {
          model: User,
          as: "users",
          attributes: ["User_ID", "User_FName", "User_LName", "Email",],
          through: {
            attributes: [],
          }
        },
      ],
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

// Update a MainProject by the id in the request
exports.update = (req, res) => {
  const MP_ID = req.params.id;

  Mainproject.update(req.body, {
    where: {MP_ID: MP_ID}
  })

  .catch(err => {
    res.status(500).send({
      message: 'Error updating MainProject with MP_ID=' + MP_ID
    })
  })

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const MP_ID = req.params.id;
  Mainproject.destroy({
    where: { MP_ID: MP_ID }
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