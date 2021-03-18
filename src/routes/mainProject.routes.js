module.exports = app => {
    const mainProject = require("../controllers/mainproject.controller");
  
    var router = require("express").Router();
  
    // Create a new MainProject
    router.post("/", mainProject.create);
  
    // Retrieve all MainProject
    router.get("/", mainProject.findAll);

    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single MainProject with id
    router.get("/:id", mainProject.findOne);
  
    // // Update a MainProject with id
    router.put("/:id", mainProject.update);
  
    // Delete a MainProject with id
    router.delete("/:id", mainProject.delete);
  
    // // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", tutorials.findOne);
  
    // // Delete all Tutorials
    // router.delete("/", tutorials.deleteAll);
  
    app.use('/api/mainproject', router);
  };