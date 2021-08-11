db.voos.findOne({ "empresa.nome": { $ne: "AZUL" }, litrosCombustivel: { $gt: 400 } },
 { _id: 0, vooId: 1 }).count();