db.voos.find(
  { litrosCombustivel: { $lt: 600, $exists: true }, 
    "empresa.nome": { $nin: ["GOL", "AZUL"] },
  },
  { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 },
).limit(1);
