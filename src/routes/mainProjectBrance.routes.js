module.exports = app => {
    const manageMPbrance = require("../controllers/mainproject.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    // router.post("/", manageMPcenter.create);
  
    // Retrieve all Tutorials
    router.get("/", manageMPbrance.findAll);
  
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", tutorials.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", tutorials.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", tutorials.delete);
  
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
  
    app.use('/api/mainprojectbrance', router);
  };