db.voos.findOne(
  { litrosCombustivel: { $lt: 600, $exists: true },
  "empresa.nome": { $nin: ["AZUL", "GOL"] },
  }, 
  { vooId: 1, litrosCombustivel: 1, "empresa.nome": 1, _id: 0 },
);