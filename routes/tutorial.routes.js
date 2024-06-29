module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // Crear un nuevo Tutorial
    router.post("/", tutorials.create);
  
    // Obtener todos los Tutorials
    router.get("/", tutorials.findAll);
  
    // Obtener un Tutorial por ID
    router.get("/:id", tutorials.findOne);
  
    // Actualizar un Tutorial por ID
    router.put("/:id", tutorials.update);
  
    // Eliminar un Tutorial por ID
    router.delete("/:id", tutorials.delete);
  
    app.use('/api/tutorials', router);
  };
  