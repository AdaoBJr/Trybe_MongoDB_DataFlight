db.voos.find({
  litrosCombustivel: {
    $exists: true,
    $not: {
      $gt: 600,
      
    },
  },
  "empresa.nome": { $not: { $in: ["GOL", "AZUL"] } },
}, {
  vooId: 1,
  "empresa.nome": 1,
  litrosCombustivel: 1,
  _id: 0,
}).limit(1);
