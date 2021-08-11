db.voos.deleteMany({ $and: 
[{ litrosCombustivel: { $lte: 400 } }, { "empresa.nome": "AZUL" }],
});
