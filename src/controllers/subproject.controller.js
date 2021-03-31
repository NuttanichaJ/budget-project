const db = require("../models");
const Subproject = db.subproject;
const User = db.user;

// const Op = db.Sequelize.Op;

// Create and Save a new subproject
exports.create = (req, res) => {
  // Validate request
  if (!req.body.SP_Name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a subproject
  const subproject = {
    MP_ID: req.body.MP_ID,
    SP_Name: req.body.SP_Name,
    SP_Owner: req.body.SP_Owner,
    SP_Indicator: req.body.SP_Indicator,
    SP_Budget: req.body.SP_Budget,
    SP_Target_Value: req.body.SP_Target_Value,
    SP_Total_Amount: req.body.SP_Total_Amount,
    SP_Approve_Use: req.body.SP_Approve_Use,
    SP_Disburse: req.body.SP_Disburse,
    SP_Total_From_Priciple: req.body.SP_Total_From_Priciple,
    SP_Total_From_Disburse: req.body.SP_Total_From_Disburse,
    SP_Income: req.body.SP_Income,
    SP_Outcome: req.body.SP_Outcome,
    Problem: req.body.Problem,
    Annotation: req.body.Annotation,
    Performance_Result: req.body.Performance_Result,
    Detail_Result: req.body.Detail_Result,
    SP_Create_User_ID: req.body.SP_Create_User_ID,
  };

  // Save Tutorial in the database
  Subproject.create(subproject)
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
  
    Subproject.findAll(
      {
        include: ["transfers_in", "transfers_Out",
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
            err.message || "Some error occurred while retrieving SubProject."
        });
      });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Subproject.findByPk(id,
    {
      include: 
      ["transfers_in","transfers_Out",
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
        message: "Error retrieving SP_ID=" + id
      });
  });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const SP_ID = req.params.id;
  Subproject.update(req.body, {
    where: { SP_ID: SP_ID}
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

  Subproject.destroy({
    where: { SP_ID: SP_ID}
  })
  .catch(err => {
    res.status(500).send({
      message: "ไม่สามารถลบได้"
    });
  });
};

// exports.increment = (req, res) => {
//   const SP_ID = req.params.id;
//   Subproject.increment(('SP_Income', { by: 10, where: { SP_ID: SP_ID }}));
// }
// exports.decrement = (req, res) => {
//   const SP_ID = req.params.id;
//   Subproject.decrement(('SP_Outcome', { by: req.body.SP_Outcome, where: { SP_ID: SP_ID }}));
// }

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};