db.voos.find({
  $and: [
    { litrosCombustivel: { $lt: 600 } },
    { "empresa.nome": { $not: /GOL/ } },
    { "empresa.nome": { $not: /AZUL/ } },
    { litrosCombustivel: { $exists: true } },
  ],
},
  { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 }).limit(1);
