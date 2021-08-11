db.voos.findOne({ $and: [
  { litrosCombustivel: { $lt: 600 } },
{ "empresa.name": { $nin: ["GOL", "AZUL"] } },
{ litrosCombustivel: { $exists: 1 } }] },
  { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 });