module.exports = app => {
    const Strategicissue = require("../controllers/strategicissue.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", Strategicissue.create);
  
    // Retrieve all Tutorials
    router.get("/", Strategicissue.findAll);
  
    // // Retrieve all published Tutorials
    // router.get("/published", Strategicissue.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", Strategicissue.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", Strategicissue.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", Strategicissue.delete);
  
    // // Delete all Tutorials
    // router.delete("/", Strategicissue.deleteAll);
  
    app.use('/api/strategicissue', router);
  };