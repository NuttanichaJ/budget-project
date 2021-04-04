const db = require("../models");
const User = db.user;
const Mainproject = db.mainproject;
const Subproject = db.subproject;

// const Op = db.Sequelize.Op;

// Create and Save a new user
exports.create = (req, res) => {
  // Validate request
  // if (!req.body.User_FName) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }

  // Create a User
  const user = {
    User_FName: req.body.User_FName,
    User_LName: req.body.User_LName,
    Email: req.body.Email,
    Permission: req.body.Permission,
    D_ID : req.body.D_ID,
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
    User.findAll({
      include: ['departments',
        {
          model: Mainproject,
          as: "managed_mainprojects",
          attributes: [
              "MP_ID", 
              "MP_Name", 
              "MP_Owner", 
              "MP_Indicator", 
              "MP_Budget", 
              "MP_Target_Value", 
              "MP_Total_Amount",
              "MP_Approve_Use",
              "MP_Disburse",
              "MP_Total_From_Priciple",
              "MP_Total_From_Disburse",
              "MP_Income",
              "MP_Outcome",
              "Problem",
              "Annotation",
              "Performance_Result",
              "Detail_Result",
            ],
          through: {
            attributes: [],
          }
        },
        {
          model: Subproject,
          as: "managed_subprojects",
          attributes: [
              "SP_ID", 
              "SP_Name",
              "SP_Owner", 
              "SP_Indicator", 
              "SP_Budget", 
              "SP_Target_Value", 
              "SP_Total_Amount",
              "SP_Approve_Use",
              "SP_Disburse",
              "SP_Total_From_Priciple",
              "SP_Total_From_Disburse",
              "SP_Income",
              "SP_Outcome",
              "Problem",
              "Annotation",
              "Performance_Result",
              "Detail_Result",
            ],
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
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
}; 

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id ,{
    include: [
      {
        model: Mainproject,
        as: "managed_mainprojects",
        attributes: [
            "MP_ID", 
            "MP_Name", 
            "MP_Owner", 
            "MP_Indicator", 
            "MP_Budget", 
            "MP_Target_Value", 
            "MP_Total_Amount",
            "MP_Approve_Use",
            "MP_Disburse",
            "MP_Total_From_Priciple",
            "MP_Total_From_Disburse",
            "MP_Income",
            "MP_Outcome",
            "Problem",
            "Annotation",
            "Performance_Result",
            "Detail_Result",
          ],
        through: {
          attributes: [],
        }
      },
      {
        model: Subproject,
        as: "managed_subprojects",
        attributes: [
            "SP_ID", 
            "SP_Name",
            "SP_Owner", 
            "SP_Indicator", 
            "SP_Budget", 
            "SP_Target_Value", 
            "SP_Total_Amount",
            "SP_Approve_Use",
            "SP_Disburse",
            "SP_Total_From_Priciple",
            "SP_Total_From_Disburse",
            "SP_Income",
            "SP_Outcome",
            "Problem",
            "Annotation",
            "Performance_Result",
            "Detail_Result",
          ],
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

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const User_ID = req.params.id;

  User.update(req.body, {
    where: { User_ID: User_ID }
  })
  .catch(err => {
    res.status(500).send({
      message: 'Error updating User=' + User_ID
    })
  })
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const User_ID = req.params.id;
  
  User.destroy({
    where: { User_ID: User_ID }
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
// exports.findAllPublished = (req, res) => {
  
// };

// exports.allAccess = (req, res) => {
//   res.status(200).send("Public Content.");
// };

// exports.userBoard = (req, res) => {
//   res.status(200).send("User Content.");
// };

// exports.adminBoard = (req, res) => {
//   res.status(200).send("Admin Content.");
// };

// exports.moderatorBoard = (req, res) => {
//   res.status(200).send("Moderator Content.");
// };