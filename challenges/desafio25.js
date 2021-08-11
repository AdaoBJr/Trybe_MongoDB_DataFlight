db.voos.deleteMany({ $and: [{ "empresa.nome": "AZUL" }, { litrosCombustivel: { $lt: 400 } }] });

// use("dataFlights");
// db.voos.find( { $and: [ {"empresa.nome": 'AZUL' }, { "litrosCombustivel": { $lt: 400 } } ] } ).count({});

// use("dataFlights");
// db.voos.find({"empresa.nome": 'AZUL' } ).count({});

// use("dataFlights");
// db.voos.find({ $and: [{ "litrosCombustivel": { $lt: 400 } }, {"empresa.nome": 'AZUL' } ]  } ).count({});

// use("dataFlights");
// db.dropDatabase();

// db.voos.find({"litrosCombustivel": { $lt: 400 }  }, {"empresa.nome":1 } )
