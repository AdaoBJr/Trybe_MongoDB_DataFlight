db.voos.count({ "empresa.nome": "AZUL", litrosCombustivel: { $lt: 400 } });
db.voos.deleteMany({ "empresa.nome": "AZUL", litrosCombustivel: { $lt: 400 } });
