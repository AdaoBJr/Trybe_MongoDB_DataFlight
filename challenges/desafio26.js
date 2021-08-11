const FILTER = { $and: [{ "empresa.nome": { $eq: "GOL" } },
    { "passageiros.pagos": { $gte: 5, $lte: 10 } }] };

db.voos.deleteMany(FILTER);
