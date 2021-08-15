db.voos.findOne(
  { litrosCombustivel: { $exists: true, $lte: 600 }, "empresa.nome": { $nin: ["GOL", "AZUL"] } }, 
  { _id: false, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 },
);
