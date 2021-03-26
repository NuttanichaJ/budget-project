module.exports = app => {
    const Strategy = require("../controllers/strategy.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", Strategy.create);
  
    // Retrieve all Tutorials
    router.get("/", Strategy.findAll);
  
    // // Retrieve all published Tutorials
    // router.get("/published", Strategicissue.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", Strategicissue.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", Strategicissue.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", Strategicissue.delete);
  
    // // Delete all Tutorials
    // router.delete("/", Strategicissue.deleteAll);
  
    app.use('/api/strategy', router);
  };