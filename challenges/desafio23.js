db.voos.find({ litrosCombustivel: { $lte: 1000 }, "empresa.nome": { $nin: ["GOL", "AZUL"] },
}, { _id: 0, vooId: 1, litrosCombustivel: 1 }).limit(1).pretty();
