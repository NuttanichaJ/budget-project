module.exports = app => {
    const User = require("../controllers/user.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", User.create);
  
    // Retrieve all Tutorials
    router.get("/", User.findAll);
  
    // // Retrieve all published Tutorials
    // router.get("/published", Strategic.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", User.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", User.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", User.delete);
  
    // // Delete all Tutorials
    // router.delete("/", Strategic.deleteAll);
  
    app.use('/api/user', router);
  };