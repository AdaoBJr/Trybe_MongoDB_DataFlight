db.voos.findOne(
  {
    $and: [
      { litrosCombustivel: { $lt: 600 } },
      {
        $or: [
          { "empresa.nome": { $ne: "GOL" } },
          { "empresa.nome": { $ne: "AZUL" } },
        ],
      },
      { litrosCombustivel: { $exists: true } },
    ],
  },
  {
    _id: false,
    vooId: true,
    "empresa.nome": true,
    litrosCombustivel: true,
  },
);
