db.voos.findOne(
  { $and: [
      { litrosCombustivel: { $lt: 600 } }, 
      { $nor: [{ "empresa.nome": "GOL" }, { "empresa.nome": "AZUL" }] }, 
      { litrosCombustivel: { $exists: true } },
    ], 
  }, 
  { _id: false, vooId: true, "empresa.nome": true, litrosCombustivel: true },
);