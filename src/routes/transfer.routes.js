module.exports = app => {
    const Transfer = require("../controllers/transfer.controller");
  
    var router = require("express").Router();
  
    // Create a new Transfer
    router.post("/", Transfer.create);
  
    // Retrieve all Transfers
    router.get("/", Transfer.findAll);
  
    // // Retrieve all published Transfer
    // router.get("/published", Transfer.findAllPublished);
  
    // Retrieve a single Transfer with id
    //router.get("/:id", Transfer.findOne);
  
    // Update a Transfer with id
    //router.put("/:id", Transfer.update);
  
    // Delete a Transfer with id
    //router.delete("/:id", Transfer.delete);
  
    // // Delete all Transfer
    // router.delete("/", Transfer.deleteAll);
  
    app.use('/api/transfer', router);
  };