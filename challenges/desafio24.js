db.voos.findOne(
  {
    litrosCombustivel: { $lt: 600 },
    "empresa.nome": { $not: { $in: ["GOL", "AZUL"] } },
  },
  {
     _id: false,
     vooId: true,
     "empresa.nome": true,
     litrosCombustivel: true,
  },
);