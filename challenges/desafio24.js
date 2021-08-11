db.voos.find({
  litrosCombustivel: {
    $exists: true,
    $not: { $gt: 600 }, 
  },
  "empresa.nome": { $nin: ["GOL", "AZUL"] },
}, {
  _id: false,
  vooId: true,
  litrosCombustivel: true,
  "empresa.nome": true,
}).limit(1);