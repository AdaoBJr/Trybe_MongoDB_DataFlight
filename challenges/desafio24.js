db.voos.findOne({
  $and: [{
    litrosCombustivel: { $lte: 600, $exists: true },

  },
{
  "empresa.nome": { $nin: ["GOL", "AZUL"] },
}],
},
  {
    "empresa.nome": 1, litrosCombustivel: 1, vooId: 1, _id: 0,
  });
