db.voos.findOne({ $and: [{ litrosCombustivel: { $lte: 600 } }, 
  { litrosCombustivel: { $exists: 1 } }, { "empresa.nome": { $nin: ["GOL", "AZUL"] } }] }, 
  { vooId: 1, _id: 0, litrosCombustivel: 1, "empresa.nome": 1 });
