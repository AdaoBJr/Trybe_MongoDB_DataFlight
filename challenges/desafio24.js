db.voos.findOne({
  $and: [
    { litrosCombustivel: { $lte: 600, $exists: true } },
    { $or: [
      { "empresa.nome": { $not: { $eq: "GOL" } } },
      { "empresa.nome": { $not: { $eq: "AZUL" } } },
    ] },
  ],
},
{
  _id: 0,
  vooId: 1,
  "empresa.nome": 1,
  litrosCombustivel: 1,
});
