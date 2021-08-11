db.voos.findOne(
  { 
    litrosCombustivel: { $not: { $gt: 600 }, $exists: 1 },
    "empresa.nome": { $not: { $in: ["GOL", "AZUL"] } },
  },
  { vooId: 1, _id: 0, litrosCombustivel: 1, "empresa.nome": 1 },
);
