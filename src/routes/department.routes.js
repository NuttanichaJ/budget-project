module.exports = app => {
    const Department = require("../controllers/department.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", Department.create);
  
    // Retrieve all Tutorials
    router.get("/", Department.findAll);
  
    // // Retrieve all published Tutorials
    // router.get("/published", Department.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", Department.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", Department.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", Department.delete);
  
    // // Delete all Tutorials
    // router.delete("/", Department.deleteAll);
  
    app.use('/api/department', router);
  };