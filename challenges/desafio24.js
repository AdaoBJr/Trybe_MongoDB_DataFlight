db.voos.findOne(
  { $and: [ 
      { litrosCombustivel: { $lt: 600 } },
      { $nor: [
          { "empresa.nome": { $eq: "GOL" } },
          { "empresa.nome": { $eq: "AZUL" } },
        ] },
      { litrosCombustivel: { $exists: true } },
    ],
  },
  { vooId: 1, litrosCombustivel: 1, "empresa.nome": 1, _id: 0 },
);
