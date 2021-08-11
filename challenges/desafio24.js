db.voos.find({ $and: [{ "empresa.nome": { $ne: ["GOL", "AZUL"] } }, 
{ litrosCombustivel: { $lte: 600 } }] }, 
{ vooId: true, "empresa.nome": true, litrosCombustivel: true, _id: false }).limit(1);
