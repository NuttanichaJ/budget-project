module.exports = app => {
    const mainproject = require("../controllers/mainproject.controller");
  
    var router = require("express").Router();
  
    // Create a new MainProject
    router.post("/", mainproject.create);
  
    // Retrieve all MainProject
    router.get("/", mainproject.findAll);

    // // Retrieve all published MainProject
    // router.get("/published", mainProject.findAllPublished);
  
    // Retrieve a single MainProject with id
    //router.get("/:id", mainProject.findById);
  
    // Update a MainProject with id
    router.put("/:id", mainproject.update);
  
    // Delete a MainProject with id
    router.delete("/:id", mainproject.delete);
  
    // // Retrieve all published MainProject
    // router.get("/published", mainProject.findAllPublished);
  
    // Retrieve a single MainProject with id
    router.get("/:id", mainproject.findOne);
  
    // // Delete all MainProject
    // router.delete("/", mainProject.deleteAll);
  
    app.use('/api/mainproject', router);
  };