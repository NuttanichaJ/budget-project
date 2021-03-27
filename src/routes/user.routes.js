module.exports = app => {
    const User = require("../controllers/user.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", User.create);
  
    // Retrieve all Tutorials
    router.get("/", User.findAll);
  
    // // Retrieve all published Tutorials
    // router.get("/published", Strategic.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", Strategic.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", Strategic.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", Strategic.delete);
  
    // // Delete all Tutorials
    // router.delete("/", Strategic.deleteAll);
  
    app.use('/api/user', router);
  };