module.exports = app => {
    const History = require("../controllers/history.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", History.create);
  
    // Retrieve all Tutorials
    router.get("/", History.findAll);
  
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
  
    app.use('/api/history', router);
  };