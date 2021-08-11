db.voos.find({ $nor: [{ litrosCombustivel: { $gt: 600 } },
  { "empresa.nome": { $in: ["GOL", "AZUL"] } },
  { litrosCombustivel: { $exists: false } }] },
  { _id: false, vooId: true, "empresa.nome": true, litrosCombustivel: true }).limit(1);