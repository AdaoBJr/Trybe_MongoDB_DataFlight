db.voos.findOne(
  {
    $and: [
      { litrosCombustivel: { $exists: true } },
      { litrosCombustivel: { $not: { $gt: 600 } } },
      {
        $or: [
          { "empresa.nome": { $not: { $eq: "GOL" } } },
          { "empresa.nome": { $not: { $eq: "AZUL" } } },
        ],
      },
    ],
  },
  {
    _id: 0,
    vooId: 1,
    litrosCombustivel: 1,
    "empresa.nome": 1,
  },
);
