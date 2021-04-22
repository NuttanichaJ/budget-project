module.exports = app => {
    const Strategic = require("../controllers/strategic.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", Strategic.create);
  
    // Retrieve all Tutorials
    router.get("/", Strategic.findAll);
  
    // // Retrieve all published Tutorials
    // router.get("/published", Strategic.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", Strategic.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", Strategic.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", Strategic.delete);
  
    // // Delete all Tutorials
    // router.delete("/", Strategic.deleteAll);
  
    app.use('/api/strategic', router);
  };