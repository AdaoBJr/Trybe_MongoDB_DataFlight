db.voos.findOne(
  { $and:
    [
      { litrosCombustivel: 
        {
          $not: { $gt: 600 }, 
          $exists: true,
        },
      },
      { $nor: [
        { "empresa.nome": "AZUL" }, 
        { "empresa.nome": "GOL" }, 
      ] },
    ],
  },
  {
    _id: false,
    vooId: true,
    litrosCombustivel: true,
    "empresa.nome": true,
  },
);
