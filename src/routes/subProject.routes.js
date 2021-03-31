module.exports = app => {
    const subproject = require("../controllers/subproject.controller");
  
    var router = require("express").Router();
  
    // Create a new SubProject
    router.post("/", subproject.create);
  
    // Retrieve all SubProject
    router.get("/", subproject.findAll);

    // router.get("/", subproject.decrement);
    // router.get("/", subproject.increment);
  
    // // Retrieve all published SubProject
    // router.get("/published", subproject.findAllPublished);
  
    // Retrieve a single SubProject with id
    router.get("/:id", subproject.findOne);
  
    // Update a SubProject with id
    router.put("/:id", subproject.update);
  
    // Delete a SubProject with id
    router.delete("/:id", subproject.delete);
  
    // // Delete all SubProject
    // router.delete("/", subproject.deleteAll);
  
    app.use('/api/subproject', router);
  };