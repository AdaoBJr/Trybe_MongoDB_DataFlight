const FILTER = { $and: [{ "empresa.nome": { $eq: "AZUL" } },
    { litrosCombustivel: { $lt: 400 } }] };

db.voos.deleteMany(FILTER);
